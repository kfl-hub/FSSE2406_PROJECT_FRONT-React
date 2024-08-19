import {createBrowserRouter} from "react-router-dom";
import FrontPage from "../../ui/page/FrontPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontPage/>
  },
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