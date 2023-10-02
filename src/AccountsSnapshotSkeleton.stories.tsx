import type { Meta } from "@storybook/react";
import { createThemeModeVariants } from "./utils/storybook/factories";
import AccountsSnapshotSkeleton from "./AccountsSnapshotSkeleton";

const meta: Meta<typeof AccountsSnapshotSkeleton> = {
  component: AccountsSnapshotSkeleton,
  parameters: {
    chromatic: {
      viewports: [375, 834, 1194, 1280, 1440],
    },
  },
};
export default meta;

const variantsArgs = [{}];

const [[LightMode, DarkMode]] = createThemeModeVariants(
  AccountsSnapshotSkeleton,
  variantsArgs
);

export { LightMode, DarkMode };
