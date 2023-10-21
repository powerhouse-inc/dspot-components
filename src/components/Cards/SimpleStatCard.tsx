import styled from '@emotion/styled'
import { useMediaQuery } from '@mui/material'
import { DateTime } from 'luxon'
import React from 'react'
import DefaultCountUp from '../DefaultCountUp/DefaultCountUp'
import EqualSign from '../SVG/Equals'
import OutlinedCard from './OutlinedCard'
import { WithIsLight } from '../../utils/typesHelpers'
import { usLocalizedNumber } from '../../utils/humanization'
import { useThemeContext } from '../../context/ThemeContext'
import lightTheme from '../../styles/theme/light'

interface SimpleStatCardProps {
  date?: string
  value?: number
  caption: string
  hasEqualSign?: boolean
  isReserves?: boolean
  dynamicChanges?: boolean
}

const SimpleStatCard: React.FC<SimpleStatCardProps> = ({
  date,
  value,
  caption,
  hasEqualSign = false,
  isReserves = false,
  dynamicChanges = false,
}) => {
  const { isLight } = useThemeContext()
  const isTablet = useMediaQuery(lightTheme.breakpoints.down('desktop_1194'))

  return (
    <Card>
      <Date isLight={isLight} align={hasEqualSign ? 'right' : 'left'}>
        {date ? DateTime.fromISO(date).toFormat('d MMM y') : 'N/A'}
      </Date>

      <ContentWrapper>
        {hasEqualSign && (
          <EqualSignContainer>
            <EqualSign width={isTablet ? 16 : 24} height={isTablet ? 10 : 15} />
          </EqualSignContainer>
        )}
        <Wrapper>
          <Value isLight={isLight}>
            {value !== undefined ? (
              <>
                {dynamicChanges ? (
                  <DefaultCountUp
                    end={Math.round(value)}
                    formattingFn={usLocalizedNumber}
                  />
                ) : (
                  usLocalizedNumber(Math.round(value))
                )}
                <div>DAI</div>
              </>
            ) : (
              'N/A'
            )}
          </Value>
          <Caption
            isLight={isLight}
            position={hasEqualSign ? 'right' : 'left'}
            isReserves={isReserves}
          >
            {caption}
          </Caption>
        </Wrapper>
      </ContentWrapper>
    </Card>
  )
}

export default SimpleStatCard

const Card = styled(OutlinedCard)({
  padding: '7px 15px 15px',

  [lightTheme.breakpoints.up('table_834')]: {
    padding: '15px 11px 15px 15px',
    minWidth: 182,
  },

  [lightTheme.breakpoints.up('desktop_1194')]: {
    padding: '24px 10.5px 23px 15px',
  },

  [lightTheme.breakpoints.up('desktop_1280')]: {
    padding: '24px 23px 23px',
  },

  [lightTheme.breakpoints.up('desktop_1440')]: {
    padding: '24px 31px 23px',
  },
})

const Date = styled.div<WithIsLight & { align: 'right' | 'left' }>(
  ({ isLight, align }) => ({
    color: isLight ? '#708390' : '#708390',
    fontWeight: 600,
    fontSize: 11,
    lineHeight: '13px',
    textTransform: 'uppercase',
    textAlign: align,

    [lightTheme.breakpoints.up('table_834')]: {
      fontSize: 12,
      lineHeight: '15px',
      letterSpacing: 1,
      textAlign: 'left',
    },
  })
)

const ContentWrapper = styled.div({
  display: 'flex',
  marginTop: 15,

  [lightTheme.breakpoints.up('table_834')]: {
    marginTop: 25,
  },

  [lightTheme.breakpoints.up('desktop_1194')]: {
    marginTop: 33,
  },
})

const EqualSignContainer = styled.div({
  marginTop: -3,
  marginRight: 6,

  [lightTheme.breakpoints.up('table_834')]: {
    marginRight: 'auto',
    marginTop: 0,
  },

  [lightTheme.breakpoints.up('desktop_1194')]: {
    marginRight: 16,
    marginTop: 7,
  },
})

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
})

const Value = styled.div<WithIsLight>(({ isLight }) => ({
  display: 'flex',
  alignItems: 'baseline',
  fontWeight: 700,
  fontSize: 16,
  lineHeight: '19px',
  letterSpacing: 0.3,
  color: isLight ? '#231536' : '#EDEFFF',
  fontFeatureSettings: "'tnum' on, 'lnum' on",

  [lightTheme.breakpoints.up('table_834')]: {
    fontWeight: 600,
    fontSize: 20,
    lineHeight: '24px',
    letterSpacing: 0.4,
    fontFeatureSettings: 'normal',
  },

  [lightTheme.breakpoints.up('desktop_1194')]: {
    fontWeight: 500,
    fontSize: 30,
    lineHeight: '36px',
  },

  '& > div': {
    marginLeft: 4,
    fontWeight: 700,
    fontSize: 12,
    lineHeight: '15px',
    letterSpacing: 0.3,
    fontFeatureSettings: "'tnum' on, 'lnum' on",
    color: isLight ? '#9FAFB9' : '#708390',

    [lightTheme.breakpoints.up('table_834')]: {
      fontSize: 16,
      lineHeight: '19px',
    },

    [lightTheme.breakpoints.up('desktop_1194')]: {
      fontSize: 16,
    },
  },
}))

const Caption = styled.div<
  WithIsLight & { position: 'left' | 'right'; isReserves: boolean }
>(({ isLight, position, isReserves }) => ({
  fontSize: 11,
  lineHeight: '13px',
  color: isLight ? '#708390' : '#708390',
  marginTop: 4,
  ...(isReserves && {
    marginLeft: -13,
  }),

  [lightTheme.breakpoints.up('table_834')]: {
    marginTop: 8,
    textAlign: position,
    ...(position === 'right' && { marginRight: 2 }),
  },

  [lightTheme.breakpoints.up('desktop_1194')]: {
    fontSize: 16,
    lineHeight: '22px',
    textAlign: 'left',

    ...(isReserves && {
      marginLeft: 0,
      marginRight: -5,
    }),
  },
}))
