import React from 'react'

import { defaultTheme, themeLocalStorageKey } from '../shared'

// Aplica el tema antes de pintar para evitar el parpadeo. Sin elección guardada, el sitio abre en
// modo claro (no sigue la preferencia del sistema operativo); el visitante lo cambia con el botón sol/luna.
export const InitTheme: React.FC = () => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
  (function () {
    var themeToSet = '${defaultTheme}'
    try {
      var preference = window.localStorage.getItem('${themeLocalStorageKey}')
      if (preference === 'light' || preference === 'dark') themeToSet = preference
    } catch (e) {}

    document.documentElement.setAttribute('data-theme', themeToSet)
  })();
  `,
      }}
      id="theme-script"
    />
  )
}
