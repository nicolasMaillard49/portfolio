import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_DIR = resolve(__dirname, '..', 'public', 'projets')

const targets = [
  { id: 'trailflow-boutique', url: 'https://trailflow.boutique' },
  { id: 'purewebagency', url: 'https://purewebagency.com' },
  { id: 'anthonyfrides', url: 'https://www.anthonyfrides.fr/' },
  { id: 'larencontre', url: 'https://restaurantlarencontre.com/' },
  { id: 'pawly', url: 'https://pawly.shopping' },
  { id: 'clipbag', url: 'https://clipbag.shop' },
]

const DESKTOP = { width: 1440, height: 900 }
const MOBILE = { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true }

async function captureOne(browser, target) {
  for (const variant of ['desktop', 'mobile']) {
    const viewport = variant === 'desktop' ? DESKTOP : MOBILE
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      deviceScaleFactor: viewport.deviceScaleFactor ?? 1,
      isMobile: viewport.isMobile ?? false,
      hasTouch: viewport.hasTouch ?? false,
      userAgent: viewport.isMobile
        ? 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
        : undefined,
    })
    const page = await context.newPage()
    try {
      await page.goto(target.url, { waitUntil: 'networkidle', timeout: 45000 })
    } catch {
      await page.waitForLoadState('domcontentloaded').catch(() => {})
    }
    await page.waitForTimeout(1500)
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
  }
} finally {
  await browser.close()
}
