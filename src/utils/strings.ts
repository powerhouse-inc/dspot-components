import { ResourceType } from '../types'

export const getResourceLabel = (resourceType?: ResourceType): string => {
  switch (resourceType) {
    case ResourceType.AlignedDelegates:
      return 'Aligned Delegate'
    case ResourceType.CoreUnit:
      return 'Core Unit'
    case ResourceType.Delegates:
      return 'Delegate'
    default:
      return 'Ecosystem Actor'
  }
}

export const formatAddressForOutput = (
  address: string | undefined,
  startChars = 5,
  endChars = 5,
  divider = '..'
) => {
  if (!address) {
    return ''
  }
  return `${address.slice(0, startChars)}${divider}${address.slice(
    address.length - endChars,
    address.length
  )}`
}
