import { test, expect } from '@playwright/test'

test.describe('Frontend', () => {
  test('can load homepage', async ({ page }) => {
    await page.goto('http://localhost:3000')
    await expect(page).toHaveTitle(/Proyecto Equilibrio/)
    const heading = page.locator('h1').first()
    await expect(heading).toHaveText('Recuperar el equilibrio es posible')
  })

  test('main menu links to the new sections', async ({ page }) => {
    await page.goto('http://localhost:3000')
    const nav = page.getByRole('navigation', { name: 'Principal' })
    await expect(nav.getByRole('link', { name: 'Proyecto Equilibrio' })).toBeVisible()
    await expect(nav.getByRole('link', { name: 'Instituto Equilibrio' })).toBeVisible()
  })
})
