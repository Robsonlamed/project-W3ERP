import { CalendarioDashboard } from '../../components/CalendarioDashboard'
import { CardDashboard } from '../../components/CardDashboard'
import {
  ContainerCardsDashboard,
  ContainerdDashboardStyle,
  DashboardStyle,
} from '../../components/CardDashboard/styles'
import { RadialBar } from '../../components/GraficoDashbord'
import { colors } from '../../theme'
import { ContainerTituloDashboard } from './styles'

export function DashBoard() {
  return (
    <ContainerdDashboardStyle>
      <DashboardStyle>
        <ContainerTituloDashboard>
          <h1>Dashboard</h1>
          <CalendarioDashboard data="Esse mês" />
        </ContainerTituloDashboard>
        <ContainerCardsDashboard>
          <CardDashboard
            colorTitle={colors.white}
            radialBar={<RadialBar series={95} />}
            tipo="produtos"
            status="em alta"
            valor={114}
            porcentagem="81%"
            backgroundColor="#00c247"
            backgroundCard={colors.azul3}
            color={colors.white}
          />
          <CardDashboard
            colorTitle={colors.white}
            radialBar={<RadialBar series={50} />}
            tipo="produtos"
            status="em alta"
            valor={60}
            porcentagem="-27%"
            backgroundColor="#FF3333"
            backgroundCard={colors.azul3}
            color={colors.white}
          />
          <CardDashboard
            colorTitle={colors.white}
            radialBar={<RadialBar series={70} />}
            tipo="produtos"
            status="em alta"
            valor={504}
            porcentagem="14%"
            backgroundColor="#00c247"
            backgroundCard={colors.azul3}
            color={colors.white}
          />
          <CardDashboard
            colorTitle={colors.white}
            radialBar={<RadialBar series={10} />}
            tipo="produtos"
            status="em alta"
            valor={112}
            porcentagem="-21%"
            backgroundColor="#FF3333"
            backgroundCard={colors.azul3}
            color={colors.white}
          />
        </ContainerCardsDashboard>
      </DashboardStyle>
    </ContainerdDashboardStyle>
  )
}
