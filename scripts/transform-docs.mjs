import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import globby from 'fast-glob'

const docsDir = path.resolve('src/content/docs/main')
const versionFromEnv = process.env.DOCS_VERSION || 'main'

const premiumIndicators = [
  'groups-roles',
  'quotas',
  'process-logging',
  'template-permissions',
  'database-encryption',
  'workspace-proxies',
  'idp-sync',
  'organizations',
]

const audienceMap = {
  'admin': 'admin',
  'user-guides': 'developer',
  'install': 'infra',
  'tutorials': 'admin',
  'reference': 'developer',
}

const files = await globby(['**/*.md'], { cwd: docsDir, absolute: true })

for (const file of files) {
  const relativePath = path.relative(docsDir, file)
  const raw = fs.readFileSync(file, 'utf-8')
  const { data, content } = matter(raw)

  const lines = content.split('\n')

  // --- Title ---
  let title = data.title
  if (!title) {
    const match = content.match(/^#\s+(.+)/m)
    title = match?.[1]?.trim() || 'Untitled'
  }

  // --- Description ---
  let description = data.description
  if (!description) {
    const paraMatch = content.match(/\n([^#>\n].+)\n/)
    description = paraMatch?.[1]?.trim() || ''
  }

  // --- Feature Stage ---
  const lowerPath = relativePath.toLowerCase()
  let featureStage
  if (lowerPath.includes('beta')) featureStage = 'beta'
  else if (lowerPath.includes('early-access')) featureStage = 'early-access'

  // --- Tier ---
  let tier
  for (const key of premiumIndicators) {
    if (lowerPath.includes(key)) {
      tier = 'premium'
      break
    }
  }

  // --- Audience ---
  const folder = relativePath.split(path.sep)[0]
  const audience = audienceMap[folder] || 'all'

  // --- Clean .md links ---
  let fixedContent = lines.map(line => {
    return line.replace(/(\[.*?\])\(([^)]+)\.md(#.*?)?\)/g, (match, text, linkPath, anchor = '') => {
      return `${text}(${linkPath}${anchor})`
    })
  }).join('\n')

  // --- Image path macro ---
  fixedContent = fixedContent.replace(/!\[([^\]]*)\]\((?!http)(.*?)\)/g, (match, alt, imgPath) => {
    const normalized = imgPath.replace(/^\.?\/?/, '') // strip leading ./ or /
    return `![${alt}](%images/${normalized})`
  })

  // --- New frontmatter ---
  const newData = {
    title,
    description,
    version: versionFromEnv,
    audience,
    ...(featureStage && { featureStage }),
    ...(tier && { tier }),
  }

  const updated = matter.stringify(fixedContent, newData)

  // --- Rename to .mdx ---
  // const newFile = file.replace(/\.md$/, '.mdx')
  // fs.writeFileSync(newFile, updated)
  // fs.unlinkSync(file)
  fs.writeFileSync(file, updated) // just overwrite the original .md

  console.log(`✅ Transformed: ${relativePath}`)

}

