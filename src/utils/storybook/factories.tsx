import React from "react";
import { withThemeContext } from "./decorators";
import type { ElementType } from "react";
import { StoryObj } from "@storybook/react";

export const createThemeModeVariants = (
  Component: ElementType,
  args?: React.ComponentProps<typeof Component>[] | number
) => {
  let normalizedArgs = [{}];
  if (typeof args === "number") {
    normalizedArgs = Array.from({ length: args }, () => ({}));
  } else if (args) {
    normalizedArgs = args;
  }

  type Story = StoryObj<React.ComponentProps<typeof Component>>;

  const components: Story[][] = [];
  for (const currentArgs of normalizedArgs) {
    const lightVariant: Story = {
      args: currentArgs,
      decorators: [withThemeContext(true)],
    };
    lightVariant.decorators = [withThemeContext(true)];

    const darkVariant: Story = {
      args: currentArgs,
      decorators: [withThemeContext(false)],
    };
    components.push([lightVariant, darkVariant]);
  }
  return components;
};
