import Chart from 'react-apexcharts'
import { colors } from '../../theme'

type GraphicDashboardProps = {
  series: number
}

const GraphicDashboard: ApexCharts.ApexOptions = {
  fill: { colors: [colors.azul2] },
  grid: { padding: { top: -8, left: 0, right: 0, bottom: 0 } },
  chart: {
    width: 70,
    height: 70,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    radialBar: {
      hollow: { size: '45%' },
      track: { background: `${colors.azul5}` },
      dataLabels: {
        name: { show: false },
        value: {
          offsetY: 5,
          fontSize: '12px',
          color: colors.white,
          fontWeight: 'bold',
        },
      },
    },
  },
}

export function RadialBar({ series }: GraphicDashboardProps) {
  return (
    <Chart
      series={[series]}
      width={60}
      height={60}
      options={GraphicDashboard}
      type="radialBar"
    />
  )
}
