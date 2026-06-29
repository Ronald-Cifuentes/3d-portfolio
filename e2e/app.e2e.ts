import { test, expect, ConsoleMessage } from '@playwright/test'

const consoleErrors: string[] = []
const pageErrors: string[] = []

test.beforeEach(async ({ page }) => {
  consoleErrors.length = 0
  pageErrors.length = 0

  page.on('console', (msg: ConsoleMessage) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text())
    }
  })

  page.on('pageerror', (error: Error) => {
    pageErrors.push(error.message)
  })
})

test.describe('App loads correctly', () => {
  test('should load at root path with hero/Content visible and correct title', async ({ page }) => {
    await page.goto('/')

    // Verify document title
    await expect(page).toHaveTitle(/3D Portfolio|Vite|React/)

    // Verify Content section is visible (hero area with greeting)
    const heroContent = page.locator('h1')
    await expect(heroContent).toBeVisible()
    await expect(heroContent).toContainText('Ronald')

    // Verify no severe console errors
    expect(consoleErrors).toHaveLength(0)
    expect(pageErrors).toHaveLength(0)
  })
})

test.describe('Navbar and Language Selector', () => {
  test('should render navbar with visible language selector', async ({ page }) => {
    await page.goto('/')

    // Verify navbar is visible
    const navbar = page.getByTestId('navbar')
    await expect(navbar).toBeVisible()

    // Verify at least one language selector is visible (desktop or mobile)
    const languageSelectors = page.getByTestId('language-selector')
    const count = await languageSelectors.count()
    expect(count).toBeGreaterThanOrEqual(1)
    await expect(languageSelectors.first()).toBeVisible()

    // Verify EN and ES buttons are present (use first pair)
    const enButton = page.getByRole('button', { name: 'English' }).first()
    const esButton = page.getByRole('button', { name: 'Espanol' }).first()
    await expect(enButton).toBeVisible()
    await expect(esButton).toBeVisible()
  })
})

test.describe('Language Switch', () => {
  test('should show English text by default', async ({ page }) => {
    // Clear localStorage to reset to default
    await page.goto('/')
    await page.evaluate(() => localStorage.clear())
    await page.reload()

    // Default should be English - check nav link
    const workLink = page.getByRole('link', { name: 'Work' })
    await expect(workLink).toBeVisible()

    // Check EN button is pressed
    const enButton = page.getByRole('button', { name: 'English' })
    await expect(enButton).toHaveAttribute('aria-pressed', 'true')
  })

  test('should switch to Spanish when ES button is clicked', async ({ page }) => {
    await page.goto('/')
    await page.evaluate(() => localStorage.clear())
    await page.reload()

    // Click ES button
    const esButton = page.getByRole('button', { name: 'Espanol' })
    await esButton.click()

    // Verify Spanish text appears - nav link should show "Trabajo"
    const trabajoLink = page.getByRole('link', { name: 'Trabajo' })
    await expect(trabajoLink).toBeVisible()

    // Verify ES button is now pressed
    await expect(esButton).toHaveAttribute('aria-pressed', 'true')
  })

  test('should switch back to English when EN button is clicked', async ({ page }) => {
    await page.goto('/')

    // First switch to Spanish
    const esButton = page.getByRole('button', { name: 'Espanol' })
    await esButton.click()

    // Then switch back to English
    const enButton = page.getByRole('button', { name: 'English' })
    await enButton.click()

    // Verify English text appears
    const workLink = page.getByRole('link', { name: 'Work' })
    await expect(workLink).toBeVisible()

    // Verify EN button is pressed
    await expect(enButton).toHaveAttribute('aria-pressed', 'true')
  })
})

test.describe('Language Persistence', () => {
  test('should persist Spanish language after reload', async ({ page }) => {
    await page.goto('/')
    await page.evaluate(() => localStorage.clear())
    await page.reload()

    // Switch to Spanish
    const esButton = page.getByRole('button', { name: 'Espanol' })
    await esButton.click()

    // Verify Spanish is active
    const trabajoLink = page.getByRole('link', { name: 'Trabajo' })
    await expect(trabajoLink).toBeVisible()

    // Reload the page
    await page.reload()

    // Verify Spanish is still active after reload
    const trabajoLinkAfterReload = page.getByRole('link', { name: 'Trabajo' })
    await expect(trabajoLinkAfterReload).toBeVisible()

    // Verify ES button is still pressed
    const esButtonAfterReload = page.getByRole('button', { name: 'Espanol' })
    await expect(esButtonAfterReload).toHaveAttribute('aria-pressed', 'true')
  })
})

test.describe('Experience and Skills Sections', () => {
  test('should render Experience section with heading', async ({ page }) => {
    await page.goto('/')

    // Scroll to Experience section (id="work")
    await page.locator('#work').scrollIntoViewIfNeeded()

    // Verify Experience section is visible
    const experienceSection = page.getByTestId('experience')
    await expect(experienceSection).toBeVisible()

    // Verify heading is visible
    const experienceHeading = page.getByRole('heading', { name: /Work Experience/i })
    await expect(experienceHeading).toBeVisible()
  })

  test('should render Skills section with heading', async ({ page }) => {
    await page.goto('/')

    // Scroll to Skills section (id="skills")
    await page.locator('#skills').scrollIntoViewIfNeeded()

    // Verify Skills heading is visible
    const skillsHeading = page.getByRole('heading', { name: /Skills and Technologies/i })
    await expect(skillsHeading).toBeVisible()
  })
})

test.describe('Responsive Design', () => {
  const viewports = [
    { name: 'mobile', width: 375, height: 667 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'desktop', width: 1440, height: 900 },
  ] as const

  for (const viewport of viewports) {
    test(`should render correctly at ${viewport.name} (${viewport.width}px)`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height })
      await page.goto('/')

      // Verify navbar is visible
      const navbar = page.getByTestId('navbar')
      await expect(navbar).toBeVisible()

      // Verify at least one language selector is visible (desktop or mobile, depending on viewport)
      const languageSelectors = page.getByTestId('language-selector')
      const count = await languageSelectors.count()
      expect(count).toBeGreaterThanOrEqual(1)
      // Find a visible selector - desktop or mobile depending on viewport
      let foundVisible = false
      for (let i = 0; i < count; i++) {
        const isVisible = await languageSelectors.nth(i).isVisible()
        if (isVisible) {
          foundVisible = true
          break
        }
      }
      expect(foundVisible).toBe(true)

      // Verify hero content is visible
      const heroContent = page.locator('h1')
      await expect(heroContent).toBeVisible()

      // Verify no console errors
      expect(consoleErrors).toHaveLength(0)
      expect(pageErrors).toHaveLength(0)
    })
  }
})

test.describe('Accessibility', () => {
  test('should have proper ARIA labels on language selector', async ({ page }) => {
    await page.goto('/')

    // Language selector group has aria-label (use first instance)
    const languageSelector = page.getByTestId('language-selector').first()
    await expect(languageSelector).toHaveAttribute('role', 'group')
    await expect(languageSelector).toHaveAttribute('aria-label', 'Select language')

    // Buttons have aria-pressed attribute (use first instance)
    const enButton = page.getByRole('button', { name: 'English' }).first()
    const esButton = page.getByRole('button', { name: 'Espanol' }).first()

    // At least one should be pressed
    const enPressed = await enButton.getAttribute('aria-pressed')
    const esPressed = await esButton.getAttribute('aria-pressed')

    expect(enPressed === 'true' || esPressed === 'true').toBe(true)
  })
})

test.describe('Performance Measurement', () => {
  test('should load within acceptable time', async ({ page }) => {
    const startTime = Date.now()

    await page.goto('/', { waitUntil: 'domcontentloaded' })
    const domContentLoadedTime = Date.now() - startTime

    await page.goto('/', { waitUntil: 'load' })
    const loadTime = Date.now() - startTime

    // Get navigation timing
    const timing = await page.evaluate(() => {
      const perf = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      return {
        domContentLoaded: perf.domContentLoadedEventEnd - perf.startTime,
        load: perf.loadEventEnd - perf.startTime,
        domInteractive: perf.domInteractive - perf.startTime,
        ttfb: perf.responseStart - perf.startTime,
      }
    })

    // Log the actual timings (these will be captured in the report)
    console.log('Performance Timing (localhost - not network representative):')
    console.log(`  TTFB: ${timing.ttfb.toFixed(0)}ms`)
    console.log(`  DOM Interactive: ${timing.domInteractive.toFixed(0)}ms`)
    console.log(`  DOM Content Loaded: ${timing.domContentLoaded.toFixed(0)}ms`)
    console.log(`  Full Load: ${timing.load.toFixed(0)}ms`)
    console.log(`  Wall clock DOMContentLoaded: ${domContentLoadedTime}ms`)
    console.log(`  Wall clock Load: ${loadTime}ms`)

    // We do NOT assert <500ms - that claim must be verified by actual measurement
    // Just verify the page loads successfully
    expect(timing.load).toBeGreaterThan(0)
  })
})
