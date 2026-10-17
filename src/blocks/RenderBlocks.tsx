import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { CoursesGridBlock } from '@/blocks/CoursesGrid/Component'
import { CtaBannerBlock } from '@/blocks/CtaBanner/Component'
import { FaqBlock } from '@/blocks/Faq/Component'
import { FeatureListBlock } from '@/blocks/FeatureList/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { InfoCardsBlock } from '@/blocks/InfoCards/Component'
import { LocationsBlockComponent } from '@/blocks/Locations/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { MediaSplitBlock } from '@/blocks/MediaSplit/Component'
import { ProgramCardsBlock } from '@/blocks/ProgramCards/Component'
import { QuoteBlock } from '@/blocks/Quote/Component'
import { ServicesGridBlock } from '@/blocks/ServicesGrid/Component'
import { StatsBlock } from '@/blocks/Stats/Component'
import { StepsBlock } from '@/blocks/Steps/Component'
import { TeamGridBlock } from '@/blocks/TeamGrid/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  coursesGrid: CoursesGridBlock,
  cta: CallToActionBlock,
  ctaBanner: CtaBannerBlock,
  faq: FaqBlock,
  featureList: FeatureListBlock,
  formBlock: FormBlock,
  infoCards: InfoCardsBlock,
  locationsBlock: LocationsBlockComponent,
  mediaBlock: MediaBlock,
  mediaSplit: MediaSplitBlock,
  programCards: ProgramCardsBlock,
  quote: QuoteBlock,
  servicesGrid: ServicesGridBlock,
  stats: StatsBlock,
  steps: StepsBlock,
  teamGrid: TeamGridBlock,
}

// Bloques que dibujan su propia sección a todo el ancho (con fondo y padding propios)
const fullBleedBlocks = new Set<string>([
  'coursesGrid',
  'ctaBanner',
  'faq',
  'featureList',
  'infoCards',
  'locationsBlock',
  'mediaSplit',
  'programCards',
  'quote',
  'servicesGrid',
  'stats',
  'steps',
  'teamGrid',
])

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              if (fullBleedBlocks.has(blockType)) {
                // @ts-expect-error there may be some mismatch between the expected types here
                return <Block key={index} {...block} />
              }

              return (
                <div className="my-16" key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
