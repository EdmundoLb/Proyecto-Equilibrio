import React from 'react'

const defaultLabels = {
  plural: 'artículos',
  singular: 'artículo',
}

export const PageRange: React.FC<{
  className?: string
  collectionLabels?: {
    plural?: string
    singular?: string
  }
  currentPage?: number
  limit?: number
  totalDocs?: number
}> = (props) => {
  const { className, collectionLabels, currentPage, limit, totalDocs } = props

  if (!totalDocs) return null

  let indexStart = (currentPage ? currentPage - 1 : 1) * (limit || 1) + 1
  if (indexStart > totalDocs) indexStart = 0

  let indexEnd = (currentPage || 1) * (limit || 1)
  if (indexEnd > totalDocs) indexEnd = totalDocs

  const { plural, singular } = { ...defaultLabels, ...collectionLabels }

  return (
    <p className={[className, 'font-semibold text-muted-foreground'].filter(Boolean).join(' ')}>
      {`Mostrando ${indexStart}${indexStart > 0 && indexEnd > indexStart ? `–${indexEnd}` : ''} de ${totalDocs} ${
        totalDocs > 1 ? plural : singular
      }`}
    </p>
  )
}
