import {createBrowserRouter} from "react-router-dom";

import ProductDetailPage from "../../ui/page/ProductDetailPage.tsx";
import Layout from "../../ui/Layout.tsx";
import ProductListingPage from "../../ui/page/ProductListingPage.tsx";
import TestComponent from "../../TestComponent.tsx";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>, // Use the layout component
    children: [
      {
        index: true, // This will be the default route
        element: <ProductListingPage />
      },
      {
        path: "product/:productId",
        element: <ProductDetailPage />
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