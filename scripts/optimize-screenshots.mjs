import sharp from 'sharp'
import { readdir, stat, unlink } from 'node:fs/promises'
import { resolve, dirname, basename, extname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIR = resolve(__dirname, '..', 'public', 'projets')

const files = (await readdir(DIR)).filter((f) => f.toLowerCase().endsWith('.png'))

let totalBefore = 0
let totalAfter = 0

for (const file of files) {
  const inputPath = join(DIR, file)
  const outName = basename(file, extname(file)) + '.webp'
  const outputPath = join(DIR, outName)
  const before = (await stat(inputPath)).size
  totalBefore += before

  const isDesktop = file.includes('-desktop')
  const targetWidth = isDesktop ? 1600 : 800

  await sharp(inputPath)
    .resize({ width: targetWidth, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(outputPath)

  const after = (await stat(outputPath)).size
  totalAfter += after
  const ratio = ((1 - after / before) * 100).toFixed(0)
  console.log(`${file.padEnd(35)} ${(before / 1024).toFixed(0).padStart(6)} KB → ${(after / 1024).toFixed(0).padStart(5)} KB  (-${ratio}%)`)

  await unlink(inputPath)
}

const ratio = ((1 - totalAfter / totalBefore) * 100).toFixed(0)
console.log(`\nTOTAL: ${(totalBefore / 1024 / 1024).toFixed(2)} MB → ${(totalAfter / 1024 / 1024).toFixed(2)} MB  (-${ratio}%)`)
