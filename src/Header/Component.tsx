import { HeaderClient } from './Component.client'
import { CrisisBar } from '@/components/CrisisBar'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

export async function Header() {
  const [headerData, settings] = await Promise.all([
    getCachedGlobal('header', 1)(),
    getCachedGlobal('site-settings', 0)(),
  ])

  const mainPhone = settings?.phones?.[0]?.number

  return (
    <>
      {settings?.crisisEnabled && (
        <CrisisBar hours={settings.hours} phone={mainPhone} text={settings.crisisText} />
      )}
      <HeaderClient data={headerData} />
    </>
  )
}
