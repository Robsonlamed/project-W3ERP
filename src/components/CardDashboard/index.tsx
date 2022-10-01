import { ReactNode } from 'react'
import { ValorCardDashboard } from '../ValorCardDashboard'
import { CardDashboardStyle } from './styles'
import { TituloCard } from './title'

type CardDashboardProps = {
  radialBar?: ReactNode
  type: string
  status: string
  text?: string
  value: number
  percentage?: number
  backgroundColor: string
  backgroundCard: string
  color: string
  colorTitle: string
  width: string
  paddingBottom?: string
  boxShadow?: string
}

export function CardDashboard({
  radialBar,
  type,
  status,
  text,
  value,
  percentage,
  backgroundColor,
  backgroundCard,
  color,
  colorTitle,
  width,
  paddingBottom,
  boxShadow,
}: CardDashboardProps) {
  return (
    <CardDashboardStyle
      boxShadow={boxShadow}
      paddingBottom={paddingBottom}
      width={width}
      backgroundColor={backgroundCard}
    >
      <div>{radialBar}</div>
      <div>
        <TituloCard
          color={colorTitle}
          text={text}
          tipo={type}
          status={status}
        />
        <ValorCardDashboard
          color={color}
          backgroundColor={backgroundColor}
          total={value}
          porcentagem={percentage || 0}
        />
      </div>
    </CardDashboardStyle>
  )
}
