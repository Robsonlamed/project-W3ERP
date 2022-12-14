import styled from 'styled-components'
import { colors } from '../../theme'

export const TableClientPredictionStyle = styled.table`
  width: 100%;
  border-spacing: 0;
  border-radius: 10px;
  overflow: hidden;

  thead {
    font-size: 12px;
    color: ${colors.azul2};
    font-weight: 400;
    text-align: center;
  }

  tbody {
    font-size: 11px;
    color: ${colors.grey800};
    font-weight: 400;
    text-align: center;

    tr {
      td:nth-child(1) {
        text-align: left;
      }
    }
  }

  tr {
    th:nth-child(1) {
      text-align: left;
    }

    td,
    th {
      padding: 2px;
    }
  }
`

export const ContainerTableClientPredictionStyle = styled.div`
  padding: 10px;
  background-color: ${colors.grey100};
  border-radius: 10px;
`
