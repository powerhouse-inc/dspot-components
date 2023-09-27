# DSpot Components for Powerhouse

Component libraries reused across multiple Powerhouse projects.

## Install

```bash
yarn add dspot-powerhouse-components @emotion/react @emotion/styled @mui/material
```

**Important:** `@emotion/react @emotion/styled @mui/material` are required as peer dependencies as well as `react` and `react-dom`

## ThemeProvider

In order to show the components styles correctly, them should be wrapped in a `ThemeProvider`

```tsx
import { ThemeProvider } from 'dspot-powerhouse-components';

<ThemeProvider isLight={/* theme mode: true: light, false: dark */}>
    {* ... *}
</ThemeProvider>
```

## `AccountsSnapshot` Component

This [example](https://github.com/YasielCabrera/ses-snapshots-usage-testing/tree/main) shows how the Account Snapshots component can be used.

```tsx
import { AccountsSnapshot } from 'dspot-powerhouse-components';

<AccountsSnapshot
    snapshot={/* data from API */}
    snapshotOwner={/* owner string */}
    sinceDate={/* date where the snapshot data started */}
    resourceType={/* CoreUnit, EcosystemActor, Delegates, ... */}
/>
```

## `AccountsSnapshotSkeleton` Component

No props required

```tsx
import { AccountsSnapshotSkeleton } from 'dspot-powerhouse-components';

<AccountsSnapshotSkeleton />
```
