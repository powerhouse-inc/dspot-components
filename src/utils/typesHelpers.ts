import { SnapshotAccount } from '../types'

export const isSnapshotAccount = (
  snapshotAccount: SnapshotAccount | unknown
): snapshotAccount is SnapshotAccount => {
  const account = snapshotAccount as SnapshotAccount
  if (
    account?.accountLabel ||
    account?.accountType ||
    account?.snapshotAccountBalance
  ) {
    return true
  }
  return false
}

export type WithIsLight = {
  isLight: boolean
}

export type PopoverPaperType = {
  background: string
  border: string
  boxShadow: string
  borderRadius: string
}
