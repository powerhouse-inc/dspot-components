import styled from '@emotion/styled'
import React from 'react'
import lightTheme from '../../styles/theme/light'
import CopyIcon from '../common/CopyIcon/CopyIcon'
import Identicon from '../common/Identicon/Identicon'
import { WithIsLight } from '../../utils/typesHelpers'
import { useThemeContext } from '../../context/ThemeContext'
import { formatAddressForOutput } from '../../utils/strings'

interface TransactionWalletInfoProps {
  name: string
  address: string
  className?: string
}

const TransactionWalletInfo: React.FC<TransactionWalletInfoProps> = ({
  name,
  address,
  ...props
}) => {
  const { isLight } = useThemeContext()

  return (
    <Container {...props}>
      <BlockiesContainer>
        <BlockieIdenticon address={address ?? name} />
      </BlockiesContainer>
      <InfoContainer>
        <NameContainer>
          <Name isLight={isLight}>{name}</Name>
        </NameContainer>
        <AddressContainer>
          <Address
            href={`https://etherscan.io/address/${address}`}
            target="_blank"
          >
            {formatAddressForOutput(address, 6, 4, '...')}
          </Address>
          <CopyIcon text={address ?? ''} defaultTooltip="Copy Address" />
        </AddressContainer>
      </InfoContainer>
    </Container>
  )
}

export default TransactionWalletInfo

const Container = styled.div({
  display: 'flex',

  [lightTheme.breakpoints.up('desktop_1194')]: {
    alignItems: 'center',
  },
})

const BlockiesContainer = styled.div({
  width: 'fit-content',
  height: 'fit-content',
  borderRadius: '50%',
  marginRight: 8,
  marginTop: 6,
  overflow: 'hidden',
  background: 'gray',

  [lightTheme.breakpoints.up('table_834')]: {
    marginTop: 0,
    marginRight: 16,
  },

  [lightTheme.breakpoints.up('desktop_1194')]: {
    marginRight: 15,
  },
})

const BlockieIdenticon = styled(Identicon)({
  width: 24,
  height: 24,
  minWidth: 24,

  [lightTheme.breakpoints.up('table_834')]: {
    width: 32,
    height: 32,
  },
})

const InfoContainer = styled.div({})

const NameContainer = styled.div({
  display: 'flex',
})

const Name = styled.div<WithIsLight>(({ isLight }) => ({
  fontWeight: 500,
  fontSize: 12,
  lineHeight: '15px',
  color: isLight ? '#231536' : '#D2D4EF',
  marginBottom: 4,

  [lightTheme.breakpoints.up('desktop_1194')]: {
    fontSize: 16,
    lineHeight: '22px',
  },
}))

const AddressContainer = styled.div({
  display: 'flex',
})

const Address = styled.a(() => ({
  fontSize: 12,
  lineHeight: '15px',
  color: '#447AFB',
  marginRight: 17,

  [lightTheme.breakpoints.up('table_834')]: {
    marginRight: 4,
  },

  [lightTheme.breakpoints.up('desktop_1194')]: {
    fontSize: 14,
    lineHeight: '17px',
  },
}))
