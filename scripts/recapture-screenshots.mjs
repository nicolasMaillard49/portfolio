import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_DIR = resolve(__dirname, '..', 'public', 'projets')

const targets = [
  { id: 'anthonyfrides', url: 'https://www.anthonyfrides.fr/', scrollY: 0, postWait: 8000 },
  { id: 'purewebagency', url: 'https://purewebagency.com', scrollY: 0, postWait: 6000 },
]

const DESKTOP = { width: 1440, height: 900 }
const MOBILE = { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true }
const UA_DESKTOP =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
const UA_MOBILE =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'

async function captureOne(browser, target) {
  for (const variant of ['desktop', 'mobile']) {
    const viewport = variant === 'desktop' ? DESKTOP : MOBILE
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      deviceScaleFactor: viewport.deviceScaleFactor ?? 1,
      isMobile: viewport.isMobile ?? false,
      hasTouch: viewport.hasTouch ?? false,
      userAgent: viewport.isMobile ? UA_MOBILE : UA_DESKTOP,
      locale: 'fr-FR',
    })
    const page = await context.newPage()
    try {
      await page.goto(target.url, { waitUntil: 'load', timeout: 60000 })
    } catch (e) {
      console.warn(`  goto warning: ${e.message}`)
    }
    await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {})
    if (target.scrollY) await page.evaluate((y) => window.scrollTo(0, y), target.scrollY)
    await page.waitForTimeout(target.postWait ?? 3000)
    await page.evaluate(async () => {
      const imgs = Array.from(document.images)
      await Promise.all(
        imgs.map((img) => (img.complete ? Promise.resolve() : new Promise((r) => (img.onload = img.onerror = r)))),
      )
    })
    await page.waitForTimeout(800)
    const file = resolve(OUT_DIR, `${target.id}-${variant}.png`)
    await page.screenshot({ path: file, fullPage: false })
    console.log(`saved ${file}`)
    await context.close()
  }
}

await mkdir(OUT_DIR, { recursive: true })
const browser = await chromium.launch()
try {
  for (const t of targets) {
    console.log(`> ${t.id} (${t.url})`)
    await captureOne(browser, t).catch((e) => console.error(`  failed: ${e.message}`))
    await new Promise((r) => setTimeout(r, 4000))
  }
} finally {
  await browser.close()
}
