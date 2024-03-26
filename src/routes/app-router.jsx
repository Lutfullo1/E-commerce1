import { nanoid } from "@reduxjs/toolkit";
import { Home } from "../pages/home/home";
import { Category } from "../pages/category/category";
import { ProductDetail } from "../pages/product-detail/product-detail";

export default [
  {
    component: <Home />,
    id: nanoid(),
  },
  {
    component: <Category />,
    path: "category/:slug",
    id: nanoid(),
  },
  {
    component: <ProductDetail />,
    path: "product/:slug/:id",
    id: nanoid(),
  },
];
