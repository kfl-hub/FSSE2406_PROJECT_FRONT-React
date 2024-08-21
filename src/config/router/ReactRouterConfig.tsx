import {createBrowserRouter} from "react-router-dom";

import ProductDetailPage from "../../ui/page/ProductDetailPage.tsx";
import Layout from "../../ui/Layout.tsx";
import ProductListingPage from "../../ui/page/ProductListingPage.tsx";
import TestComponent from "../../TestComponent.tsx";
import LoginPage from "../../ui/page/LoginPage.tsx";
import ErrorPage from "../../ui/page/ErrorPage.tsx";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>, // Use the layout component
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true, // This will be the default route
        element: <ProductListingPage />
      },
      {
        path: "product/:productId",
        element: <ProductDetailPage />
      },
      {
        path: "login",
        element: <LoginPage />
      },
      {
        path: "error",
        element: <ErrorPage />
      }
    ]
  }
  // {
  //   path: "/product/:productId/:userId",
  //   element: <ProductDetailPage/>
  // },

  // {
  //   path: "/shoppingcart",
  //   element: <ShoppingCartPage/>
  // },
  // {
  //   path: "/login",
  //   element: <LoginPage/>
  // },
  // {
  //   path: "/checkout/:transactionId",
  //   element: <CheckoutPage/>
  // },
  // {
  //   path: "/thankyou",
  //   element: <ThankYouPage/>
  // }
])