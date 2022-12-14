import styled from 'styled-components'

export const ContainerPagesStyle = styled.div<{
  marginLeft: string
  width: string
}>`
  display: flex;
  flex-direction: column;
  margin-left: ${({ marginLeft }) => `${marginLeft}`};
  width: ${({ width }) => `${width}`};
`
