import type { Meta, StoryObj } from "@storybook/react";
import ProductList, {ProductListProps} from "./ProductList";
import { ProductProps } from "../product/Product";

const meta: Meta<typeof ProductList> = {
    title: "Library/ProductList",
    component: ProductList,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
};

export default meta;

type Story = StoryObj<typeof ProductList>;

const generateProductProps = (index: number): ProductProps => ({
    id: `product-${index}`,
    name: `Product ${index + 1}`,
    imgLogo: `https://picsum.photos/150`,
    imgs: [
        `https://picsum.photos/100`,
        `https://picsum.photos/100`,
        `https://picsum.photos/100`,
    ],
    description: `This is the description for Product ${index + 1}.`,
    price: (index + 1) * 10,
    tags: [`tag${index + 1}`, `tag${index + 2}`],
});

const generateProducts = (count: number): ProductListProps => {
    const products: ProductListProps = {productList: []}
    Array.from({ length: count }, (_, index) => (
        products.productList.push({
            ...generateProductProps(index),
            name: `Product ${index + 1}`,
            price: (index + 1) * 10,
        })
    ));
    return products;
};

export const ProductListWith3Items: Story = {
    args: {
        productList: generateProducts(3).productList,
    },
};

export const ProductListWith4Items: Story = {
    args: {
        productList: generateProducts(4).productList,
    },
};

export const ProductListWith7Items: Story = {
    args: {
        productList: generateProducts(7).productList,
    },
};

export const ProductListWith12Items: Story = {
    args: {
        productList: generateProducts(12).productList,
    },
};