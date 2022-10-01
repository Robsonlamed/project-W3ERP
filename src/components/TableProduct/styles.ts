import styled from 'styled-components'
import { colors } from '../../theme'

export const TableProductStyle = styled.table`
  width: 100%;
  border-spacing: 0;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
  margin-top: 32px;

  thead {
    font-size: 11px;
    color: ${colors.azul4};
    font-weight: 400;
    text-align: center;
    background-color: ${colors.azul1};

    tr {
      th:nth-child(2) {
        text-align: left;
      }
    }

    tr {
      th:nth-child(5) {
        padding-right: 20px;
      }
    }

    tr {
      th:nth-child(6) {
        padding-right: 20px;
      }
    }
  }

  tbody {
    font-size: 11px;
    color: ${colors.grey900};
    background-color: ${colors.grey50};
    font-weight: 400;
    text-align: center;

    .arrow {
      padding-right: 16px;
    }

    .coluna3,
    .coluna1 {
      text-align: center;
    }

    .coluna2 {
      text-align: left;
    }
    .onClick {
      cursor: pointer;
    }
  }

  td,
  th {
    padding: 16px 0px 16px 20px;
    border-bottom: 8px solid white;
  }

  tbody > tr:nth-child(even),
  th > th:nth-child(even) {
    background-color: ${colors.grey100};
  }
`

export const ContainerTable = styled.div<{ width: string }>`
  width: ${({ width }) => `${width}`};
  background-color: ${colors.white};
  box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.1);
  padding: 32px 32px 32px 32px;
  border-radius: 24px;
  margin: 34px 0px;
`

export const ContainerStatus = styled.div`
  display: flex;
  justify-content: space-between;
`