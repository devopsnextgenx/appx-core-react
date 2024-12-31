import type { Meta, StoryObj } from "@storybook/react";
import Products from "./Products";
import {ProductProps} from "../../library/product/Product";

const meta: Meta<typeof Products> = {
    title: "PageComponents/Products",
    component: Products,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;

type Story = StoryObj<typeof Products>;

export const DefaultProducts: Story = {};