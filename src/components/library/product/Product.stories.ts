import type { Meta, StoryObj } from "@storybook/react";
import Product from "./Product";

const meta: Meta<typeof Product> = {
    title: "Library/Product",
    component: Product,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
};

export default meta;

type Story = StoryObj<typeof Product>;

const productImages = [
    "https://picsum.photos/200",
    "https://picsum.photos/201",
    "https://picsum.photos/202",
];

export const DefaultProduct: Story = {
    args: {
        name: "Sample Product",
        imgLogo: "https://picsum.photos/150",
        imgs: productImages,
        description: "This is a sample product description.",
        price: 99.99,
        tags: ["New", "Sale", "Popular"],
    },
};

export const ProductWithDiscount: Story = {
    args: {
        name: "Discounted Product",
        imgLogo: "https://picsum.photos/150",
        imgs: productImages,
        description: "This product is currently on discount.",
        price: 49.99,
        tags: ["Discount", "Limited Time"],
    },
};

export const ProductWithMultipleTags: Story = {
    args: {
        name: "Multi-Tag Product",
        imgLogo: "https://picsum.photos/150",
        imgs: productImages,
        description: "This product has multiple tags.",
        price: 79.99,
        tags: ["New", "Featured", "Bestseller", "Limited Edition"],
    },
};