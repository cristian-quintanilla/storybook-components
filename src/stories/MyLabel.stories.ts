import { Meta, StoryObj } from '@storybook/react';

import { MyLabel } from '../components/MyLabel';

const meta = {
  title: 'UI/MyLabel',
  component: MyLabel,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: { control: 'select' },
    color: { control: 'select' },
    fontColor: { control: 'color' },
  }
} satisfies Meta <typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'Basic Label',
  }
}

export const AllCaps: Story = {
  args: {
    label: 'AllCaps Label',
    allCaps: true,
  }
}

export const Secondary: Story = {
  args: {
    label: 'Secondary Label',
    color: 'text-secondary',
  }
}

export const CustomColor: Story = {
  args: {
    label: 'CustomColor Label',
    fontColor: '#5517AC',
  }
}
