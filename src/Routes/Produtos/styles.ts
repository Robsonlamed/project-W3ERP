import styled from 'styled-components'
import { colors } from '../../theme'

export const ContainerProductStyle = styled.div`
  margin-top: 110px;
`

export const Status = styled.div<{ backgroundColor: string; color: string }>`
  background-color: ${({ backgroundColor }) => `${backgroundColor}`};
  width: 80px;
  height: 30px;
  border-radius: 6px;
  padding-top: 6px;
  color: ${({ color }) => `${color}`};
  margin: 0 auto;
  font-weight: 500;
`

export const SubScreenProductStyle = styled.span`
  width: 800px;
`
export const SubTelaProdutoButton = styled.button`
  background-color: ${colors.grey100};
  border: none;
  cursor: pointer;
`
