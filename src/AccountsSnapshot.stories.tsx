import type { Meta } from '@storybook/react'
import { createThemeModeVariants } from './utils/storybook/factories'
import AccountsSnapshot, { AccountsSnapshotProps } from './AccountsSnapshot'
import { ResourceType } from './types'

const meta: Meta<typeof AccountsSnapshot> = {
  component: AccountsSnapshot,
  parameters: {
    chromatic: {
      viewports: [375, 834, 1194, 1280, 1440],
    },
  },
}
export default meta

const variantsArgs = [
  {
    resourceType: ResourceType.EcosystemActor,
    sinceDate: new Date('2023-06-06T00:00:00.000Z'),
    snapshotOwner: 'EXAMPLE Ecosystem Actor',
    // same snapshot data from the API:
    snapshot: {
      start: '2023-08-24T09:28:23.000Z',
      end: '2023-09-13T07:23:23.000Z',
      id: '18100',
      period: '2023/08',
      ownerType: 'EcosystemActor',
      ownerId: '60',
      snapshotAccount: [
        {
          upstreamAccountId: null,
          snapshotAccountBalance: [
            {
              initialBalance: -2247738.17,
              token: 'DAI',
              newBalance: -2254438.17,
              inflow: 0,
              outflow: -6700,
              includesOffChain: true,
              id: '287911',
            },
            {
              initialBalance: -2247738.17,
              token: 'DAI',
              newBalance: -2362667.15,
              inflow: 0,
              outflow: -114928.98,
              includesOffChain: false,
              id: '287912',
            },
          ],
          id: '149952',
          accountLabel: 'Root',
          accountType: 'group',
          accountAddress: null,
          groupAccountId: null,
          offChain: false,
          snapshotAccountTransaction: [],
        },
        {
          upstreamAccountId: null,
          snapshotAccountBalance: [
            {
              initialBalance: -2512945.6256392766,
              token: 'DAI',
              newBalance: -2795947.7556392765,
              inflow: 0,
              outflow: -283002.13,
              includesOffChain: true,
              id: '287906',
            },
            {
              initialBalance: -2512945.6256392766,
              token: 'DAI',
              newBalance: -2795947.7556392765,
              inflow: 0,
              outflow: -283002.13,
              includesOffChain: false,
              id: '287916',
            },
          ],
          id: '149950',
          accountLabel: 'Maker Protocol Wallet',
          accountType: 'singular',
          accountAddress: '0xbe8e3e3618f7474f8cb1d074a26affef007e98fb',
          groupAccountId: '149952',
          offChain: false,
          snapshotAccountTransaction: [
            {
              id: '148910',
              block: 17983667,
              timestamp: '2023-08-24T09:28:23.000Z',
              txHash:
                '0xbb54792f7f37ade7064b3f7ee7eb72fb964c0b83e290ae1c2072f951419cc59d',
              token: 'DAI',
              counterParty: '0x2dc0420a736d1f40893b9481d8968e4d7424bc0b',
              amount: -283002.1264357584,
              txLabel: 'Top-up',
              counterPartyName: 'TechOps Auditor Wallet',
            },
          ],
        },
        {
          upstreamAccountId: '149949',
          snapshotAccountBalance: [
            {
              initialBalance: 0,
              token: 'DAI',
              newBalance: 350071.01999999996,
              inflow: 465000.1,
              outflow: -114929.08,
              includesOffChain: true,
              id: '287904',
            },
            {
              initialBalance: 0,
              token: 'DAI',
              newBalance: 350071.01999999996,
              inflow: 465000.1,
              outflow: -114929.08,
              includesOffChain: false,
              id: '287918',
            },
          ],
          id: '149948',
          accountLabel: 'Techops Operational ',
          accountType: 'singular',
          accountAddress: '0x948777676ed54390889c219489927939d51a805a',
          groupAccountId: '149954',
          offChain: false,
          snapshotAccountTransaction: [
            {
              id: '148905',
              block: 18125872,
              timestamp: '2023-09-13T07:23:23.000Z',
              txHash:
                '0x2769d6ca397c4ceb7aa8fcb73845d46306a442b22796b41236621fbab20f3448',
              token: 'DAI',
              counterParty: '0x60594a405d53811d3bc4766596efd80fd545a270',
              amount: -6700,
              txLabel: 'External Transaction',
              counterPartyName: 'External Address',
            },
            {
              id: '148904',
              block: 18076792,
              timestamp: '2023-09-06T10:23:59.000Z',
              txHash:
                '0xd77fbca211032eedaebb600f3847d63b33732d10594f2288b690a8ff329cdd8a',
              token: 'DAI',
              counterParty: '0x3c267dfc8ba8f7359af0d8afc45b43731173236d',
              amount: -108228.98,
              txLabel: 'Top-up',
              counterPartyName: 'Accountable Payment Processor',
            },
            {
              id: '148903',
              block: 18012709,
              timestamp: '2023-08-28T11:00:11.000Z',
              txHash:
                '0xd1e834d08c6f8be45ca1549166795f966f56b151752965b6f1d0ce7006e1f12a',
              token: 'DAI',
              counterParty: '0x2dc0420a736d1f40893b9481d8968e4d7424bc0b',
              amount: 465000,
              txLabel: 'Top-up',
              counterPartyName: 'TechOps Auditor Wallet',
            },
            {
              id: '148902',
              block: 18011794,
              timestamp: '2023-08-28T07:56:47.000Z',
              txHash:
                '0x69a1213e6bc7c9cb07637b50009397da779efc97da414244cb6ef1127f01814a',
              token: 'DAI',
              counterParty: '0x2dc0420a736d1f40893b9481d8968e4d7424bc0b',
              amount: -0.1,
              txLabel: 'Return of Excess Funds',
              counterPartyName: 'TechOps Auditor Wallet',
            },
            {
              id: '148901',
              block: 17993174,
              timestamp: '2023-08-25T17:23:59.000Z',
              txHash:
                '0x4b336a6553e7c4c48c0c6005f915b24211fad81cc6fb4e2caba04a66a8bac0be',
              token: 'DAI',
              counterParty: '0x2dc0420a736d1f40893b9481d8968e4d7424bc0b',
              amount: 0.1,
              txLabel: 'Top-up',
              counterPartyName: 'TechOps Auditor Wallet',
            },
          ],
        },
        {
          upstreamAccountId: '149950',
          snapshotAccountBalance: [
            {
              initialBalance: 265207.4556392764,
              token: 'DAI',
              newBalance: 83209.58563927643,
              inflow: 283002.23,
              outflow: -465000.1,
              includesOffChain: true,
              id: '287905',
            },
            {
              initialBalance: 265207.4556392764,
              token: 'DAI',
              newBalance: 83209.58563927643,
              inflow: 283002.23,
              outflow: -465000.1,
              includesOffChain: false,
              id: '287917',
            },
          ],
          id: '149949',
          accountLabel: 'TechOps Auditor Wallet',
          accountType: 'singular',
          accountAddress: '0x2dc0420a736d1f40893b9481d8968e4d7424bc0b',
          groupAccountId: '149954',
          offChain: false,
          snapshotAccountTransaction: [
            {
              id: '148909',
              block: 18012709,
              timestamp: '2023-08-28T11:00:11.000Z',
              txHash:
                '0xd1e834d08c6f8be45ca1549166795f966f56b151752965b6f1d0ce7006e1f12a',
              token: 'DAI',
              counterParty: '0x948777676ed54390889c219489927939d51a805a',
              amount: -465000,
              txLabel: 'Top-up',
              counterPartyName: 'Techops Operational ',
            },
            {
              id: '148908',
              block: 18011794,
              timestamp: '2023-08-28T07:56:47.000Z',
              txHash:
                '0x69a1213e6bc7c9cb07637b50009397da779efc97da414244cb6ef1127f01814a',
              token: 'DAI',
              counterParty: '0x948777676ed54390889c219489927939d51a805a',
              amount: 0.1,
              txLabel: 'Return of Excess Funds',
              counterPartyName: 'Techops Operational ',
            },
            {
              id: '148907',
              block: 17993174,
              timestamp: '2023-08-25T17:23:59.000Z',
              txHash:
                '0x4b336a6553e7c4c48c0c6005f915b24211fad81cc6fb4e2caba04a66a8bac0be',
              token: 'DAI',
              counterParty: '0x948777676ed54390889c219489927939d51a805a',
              amount: -0.1,
              txLabel: 'Top-up',
              counterPartyName: 'Techops Operational ',
            },
            {
              id: '148906',
              block: 17983667,
              timestamp: '2023-08-24T09:28:23.000Z',
              txHash:
                '0xbb54792f7f37ade7064b3f7ee7eb72fb964c0b83e290ae1c2072f951419cc59d',
              token: 'DAI',
              counterParty: '0x0000000000000000000000000000000000000000',
              amount: 283002.1264357584,
              txLabel: 'Top-up',
              counterPartyName: 'Maker Protocol Wallet',
            },
          ],
        },
        {
          upstreamAccountId: '149948',
          snapshotAccountBalance: [
            {
              initialBalance: 0,
              token: 'DAI',
              newBalance: 108228.98,
              inflow: 108228.98,
              outflow: 0,
              includesOffChain: true,
              id: '287907',
            },
          ],
          id: '149951',
          accountLabel: 'Accountable Payment Processor',
          accountType: 'singular',
          accountAddress: '0x3c267dfc8ba8f7359af0d8afc45b43731173236d',
          groupAccountId: '149955',
          offChain: true,
          snapshotAccountTransaction: [
            {
              id: '148911',
              block: 18076792,
              timestamp: '2023-09-06T10:23:59.000Z',
              txHash:
                '0xd77fbca211032eedaebb600f3847d63b33732d10594f2288b690a8ff329cdd8a',
              token: 'DAI',
              counterParty: '0x948777676ed54390889c219489927939d51a805a',
              amount: 108228.98,
              txLabel: 'Top-up',
              counterPartyName: 'Techops Operational ',
            },
          ],
        },
        {
          upstreamAccountId: '149950',
          snapshotAccountBalance: [
            {
              initialBalance: 265207.4556392764,
              token: 'DAI',
              newBalance: 433280.60563927644,
              inflow: 283002.13,
              outflow: -114928.98,
              includesOffChain: true,
              id: '287908',
            },
            {
              initialBalance: 265207.4556392764,
              token: 'DAI',
              newBalance: 433280.60563927644,
              inflow: 283002.13,
              outflow: -114928.98,
              includesOffChain: false,
              id: '287915',
            },
          ],
          id: '149954',
          accountLabel: 'On-Chain Reserves',
          accountType: 'group',
          accountAddress: null,
          groupAccountId: '149953',
          offChain: false,
          snapshotAccountTransaction: [],
        },
        {
          upstreamAccountId: '149950',
          snapshotAccountBalance: [
            {
              initialBalance: 0,
              token: 'DAI',
              newBalance: 108228.98,
              inflow: 108228.98,
              outflow: 0,
              includesOffChain: true,
              id: '287909',
            },
            {
              initialBalance: 0,
              token: 'DAI',
              newBalance: 0,
              inflow: 0,
              outflow: 0,
              includesOffChain: false,
              id: '287914',
            },
          ],
          id: '149955',
          accountLabel: 'Off-Chain Reserves',
          accountType: 'group',
          accountAddress: null,
          groupAccountId: '149953',
          offChain: true,
          snapshotAccountTransaction: [],
        },
        {
          upstreamAccountId: '149950',
          snapshotAccountBalance: [
            {
              initialBalance: 265207.4556392764,
              token: 'DAI',
              newBalance: 541509.5856392764,
              inflow: 283002.13,
              outflow: -6700,
              includesOffChain: true,
              id: '287910',
            },
            {
              initialBalance: 265207.4556392764,
              token: 'DAI',
              newBalance: 433280.60563927644,
              inflow: 283002.13,
              outflow: -114928.98,
              includesOffChain: false,
              id: '287913',
            },
          ],
          id: '149953',
          accountLabel: 'Core Unit Reserves',
          accountType: 'group',
          accountAddress: null,
          groupAccountId: '149952',
          offChain: false,
          snapshotAccountTransaction: [],
        },
      ],
      actualsComparison: [
        {
          month: '2023/08',
          currency: 'DAI',
          reportedActuals: 181000000,
          netExpenses: {
            onChainOnly: {
              amount: 181001253,
              difference: 1.0000069226519337,
            },
            offChainIncluded: {
              amount: 181000100,
              difference: 1.000000552486188,
            },
          },
        },
        {
          month: '2023/07',
          currency: 'DAI',
          reportedActuals: 181000000,
          netExpenses: {
            onChainOnly: {
              amount: 181001253,
              difference: 1.0000069226519337,
            },
            offChainIncluded: {
              amount: 181000100,
              difference: 1.000000552486188,
            },
          },
        },
        {
          month: '2023/06',
          currency: 'DAI',
          reportedActuals: 181000000,
          netExpenses: {
            onChainOnly: {
              amount: 181001253,
              difference: 1.0000069226519337,
            },
            offChainIncluded: {
              amount: 181000100,
              difference: 1.000000552486188,
            },
          },
        },
      ],
    },
  },
]

const [[LightMode, DarkMode]] = createThemeModeVariants(
  AccountsSnapshot,
  variantsArgs
)

export { LightMode, DarkMode }
