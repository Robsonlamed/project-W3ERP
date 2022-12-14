import styled from 'styled-components'

export const TitleCardDashboardStyle = styled.div<{ color: string }>`
  font-weight: 400;
  font-size: 12px;
  color: ${({ color }) => `${color}`};
  margin-left: 5px;
  margin-top: 26px;
`
