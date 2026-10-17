import { ImageResponse } from 'next/og'

// Imagen para compartir (Open Graph) por defecto, generada con los colores de marca.
// Se usa cuando una página no tiene imagen SEO propia.
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0b2f4e',
          color: '#f4f1ea',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between',
          padding: '80px',
          width: '100%',
        }}
      >
        <div style={{ alignItems: 'center', display: 'flex', gap: '24px' }}>
          <div
            style={{
              background: '#f5b72e',
              borderRadius: '9999px',
              display: 'flex',
              height: '72px',
              width: '72px',
            }}
          />
          <div style={{ display: 'flex', fontSize: 40, fontWeight: 700 }}>Proyecto Equilibrio</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'flex', fontSize: 76, fontWeight: 800, lineHeight: 1.1 }}>
            Recuperar el equilibrio es posible
          </div>
          <div style={{ color: '#f5b72e', display: 'flex', fontSize: 34 }}>
            Tratamiento ambulatorio de adicciones · Costa Rica
          </div>
        </div>
      </div>
    ),
    { height: 630, width: 1200 },
  )
}
