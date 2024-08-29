import {createBrowserRouter} from "react-router-dom";

import ProductDetailPage from "../../ui/page/ProductDetailPage.tsx";
import Layout from "../../ui/Layout.tsx";
import ProductListingPage from "../../ui/page/ProductListingPage.tsx";
import ErrorPage from "../../ui/page/ErrorPage.tsx";
import CartPage from "../../ui/page/CartPage.tsx";
import ThankYouPage from "../../ui/page/ThankYouPage.tsx";
import TransactionPage from "../../ui/page/TransactionPage.tsx";
import FrontPage from "../../ui/page/FrontPage.tsx";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>, // Use the layout component
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true, // This will be the default route
        element: <FrontPage />
      },
      {
        path: "product/:productId",
        element: <ProductDetailPage />
      },
      {
        path: "/error",
        element: <ErrorPage />
      },
      {
        path: "/cart",
        element: <CartPage/>
      },
      {
        path: "/thankyou/:tid",
        element: <ThankYouPage/>
      },
      {
        path: "/transaction/:tid",
        element: <TransactionPage/>
      },
      {
        path: "/product",
        element: <ProductListingPage/>
      },
    ]
  }
])