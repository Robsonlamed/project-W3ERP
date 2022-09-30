import styled from 'styled-components'
import { colors } from '../../theme'

export const PaginacaoStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  align-items: center;
  width: 100%;
  font-size: 12px;
  font-weight: 400;
  color: ${colors.grey500};
`
export const PaginacaoStylePages = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  .active {
    background-color: ${colors.azul1};
    border-radius: 4px;
    padding: 2px 7px;
    color: ${colors.white};
    font-weight: 500;
    font-size: 13px;
  }

  button {
    margin: 0px 8px;
    background-color: ${colors.white};
    border: none;
  }
`

export const PaginacaoStylePaginas = styled.button`
  font-size: 12px;
  font-weight: 400;
  color: ${colors.grey500};
  margin: 0px 3px;
`
