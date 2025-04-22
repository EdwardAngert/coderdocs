import path from 'node:path'
import fs from 'node:fs'
import fse from 'fs-extra'

const sourceDir = path.resolve('coder/docs')
const destDir = path.resolve('src/content/docs/main')

console.log('Copying from:', sourceDir)
console.log('Copying to:', destDir)

// Ensure target directory exists
fse.ensureDirSync(destDir)

// Custom filter to allow directories and only .md files
const filter = (src) => {
  const stat = fs.statSync(src)
  if (stat.isDirectory()) return true
  return src.endsWith('.md')
}

fse.copySync(sourceDir, destDir, { filter })

console.log('✅ Docs synced to src/content/docs/main')

