import { ReactNode } from 'react'
import { ChevronRight } from '../../assets/icons/ChevronRight'
import { UserClient } from '../../assets/icons/UserClient'
import {
  CardClientStyle,
  ContainerCardClient,
  IconChevronClient,
} from './styles'
import { colors } from '../../theme'
import { TableClientPrediction } from '../TableClientPredition'
import { TitleWithIcon } from '../TitleWithIcon'
import { LinkMenu } from '../ItensMenu/styles'

type CardPredicaoProps = {
  id: number
  name: string
  tableTitle: string[]
  table: ReactNode
}

export function CardPrediction({
  id,
  name,
  table,
  tableTitle,
}: CardPredicaoProps) {
  return (
    <LinkMenu
      marginLeft="0px"
      color={colors.grey900}
      to={`/informacoesclientes/${id}`}
    >
      <ContainerCardClient>
        <CardClientStyle>
          <TitleWithIcon
            marginLeft="10px"
            fontSize="12px"
            icon={<UserClient />}
            title={name}
            color={colors.grey900}
            background={colors.grey200}
            borderRadius="100px"
            marginBottom="20px"
          />
          <IconChevronClient>
            <ChevronRight />
          </IconChevronClient>
        </CardClientStyle>
        <TableClientPrediction headers={tableTitle}>
          {table}
        </TableClientPrediction>
      </ContainerCardClient>
    </LinkMenu>
  )
}
