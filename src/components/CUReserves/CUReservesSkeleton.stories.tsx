import { Meta } from "@storybook/react";
import { createThemeModeVariants } from "../../utils/storybook/factories";
import CUReservesSkeleton from "./CUReservesSkeleton";

const meta: Meta<typeof CUReservesSkeleton> = {
  component: CUReservesSkeleton,
  parameters: {
    chromatic: {
      viewports: [375, 834, 1194, 1280, 1440],
    },
  },
};
export default meta;

const variantsArgs = [{}];
const [[LightMode, DarkMode]] = createThemeModeVariants(
  CUReservesSkeleton,
  variantsArgs
);

export { LightMode, DarkMode };
// LightMode.parameters = {
//   figma: {
//     component: {
//       0: {
//         component: 'https://www.figma.com/file/pyaYEjcwF2b5uf9y0vIfIy/SES-Dashboard?type=design&node-id=21718:260508',
//         options: {
//           componentStyle: {
//             width: 343,
//           },
//           style: {
//             top: 0,
//             left: -40,
//           },
//         },
//       },
//       834: {
//         component: 'https://www.figma.com/file/pyaYEjcwF2b5uf9y0vIfIy/SES-Dashboard?type=design&node-id=21718:257215',
//         options: {
//           componentStyle: {
//             width: 770,
//           },
//           style: {
//             top: 0,
//             left: -40,
//           },
//         },
//       },
//       1194: {
//         component: 'https://www.figma.com/file/pyaYEjcwF2b5uf9y0vIfIy/SES-Dashboard?type=design&node-id=21718:253695',
//         options: {
//           componentStyle: {
//             width: 1130,
//           },
//           style: {
//             top: 0,
//             left: -40,
//           },
//         },
//       },
//       1280: {
//         component: 'https://www.figma.com/file/pyaYEjcwF2b5uf9y0vIfIy/SES-Dashboard?type=design&node-id=21716:254712',
//         options: {
//           componentStyle: {
//             width: 1184,
//           },
//           style: {
//             top: 0,
//             left: -40,
//           },
//         },
//       },
//       1440: {
//         component: 'https://www.figma.com/file/pyaYEjcwF2b5uf9y0vIfIy/SES-Dashboard?type=design&node-id=21688:249611',
//         options: {
//           componentStyle: {
//             width: 1312,
//           },
//           style: {
//             top: 0,
//             left: -40,
//           },
//         },
//       },
//     },
//   } as FigmaParams,
// };
