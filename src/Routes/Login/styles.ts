import styled from 'styled-components'
import { colors } from '../../theme'

export const LoginStyle = styled.div`
  display: flex;
  align-items: center;
`
export const ContentLogin = styled.div`
  display: block;
  margin: 0 auto;
`

export const ForgotPassword = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    color: ${colors.grey600};
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
  }
`
