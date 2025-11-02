import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';
import { Button } from '../primitives/button/Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: { control: 'select', options: ['solid', 'outline', 'ghost'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Solid_Large: Story = {
  args: {
    variant: 'solid',
    size: 'large',
    title: 'Button',
  },
};

export const Solid_Medium: Story = {
  args: {
    variant: 'solid',
    size: 'medium',
    title: 'Button',
  },
};

export const Solid_Small: Story = {
  args: {
    variant: 'solid',
    size: 'small',
    title: 'Button',
  },
};

export const Outline_Large: Story = {
  args: {
    variant: 'outline',
    size: 'large',
    title: 'Button',
  },
};

export const Outline_Medium: Story = {
  args: {
    variant: 'outline',
    size: 'medium',
    title: 'Button',
  },
};

export const Outline_Small: Story = {
  args: {
    variant: 'outline',
    size: 'small',
    title: 'Button',
  },
};

export const Ghost_Large: Story = {
  args: {
    variant: 'ghost',
    size: 'large',
    title: 'Button',
  },
};

export const Ghost_Medium: Story = {
  args: {
    variant: 'ghost',
    size: 'medium',
    title: 'Button',
  },
};

export const Ghost_Small: Story = {
  args: {
    variant: 'ghost',
    size: 'small',
    title: 'Button',
  },
};

export const Disabled_Solid: Story = {
  args: {
    variant: 'solid',
    size: 'large',
    title: 'Button',
    disabled: true,
  },
};

export const Disabled_Outline: Story = {
  args: {
    variant: 'outline',
    size: 'large',
    title: 'Button',
    disabled: true,
  },
};

export const Disabled_Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'large',
    title: 'Button',
    disabled: true,
  },
};
