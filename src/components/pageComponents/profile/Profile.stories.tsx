import { Meta, StoryObj } from '@storybook/react';
import Profile from './Profile';


// Define the type for component metadata
const meta: Meta<typeof Profile> = {
  title: "PageComponents/Profile",
  component: Profile,
  tags: ["autodocs"], // Enable automatic documentation generation
  parameters: {
    layout: "centered", // Center the component in the Canvas
  },
};

export default meta;

type Story = StoryObj<typeof Profile>;

// Define individual stories using the new syntax
export const ProfileStory: Story = {
  args: {
  }
};
