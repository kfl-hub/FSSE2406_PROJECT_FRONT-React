import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import App from "../App.tsx";
import ProductListingPage from "../ui/page/FrontPage.tsx";
import Index from "../ui/page/FrontPage.tsx";
import ProductCard from "../ui/component/ProductCard.tsx";
import PrimarySearchAppBar from "../ui/component/DemoAppBar.tsx";
import NavBar from "../ui/component/NavBar.tsx";
import ProductInformPage from "../ui/page/ProductDetailPage.tsx";
import QuantitySelector from "../ui/component/QuantitySelector.tsx";
import ProductDetailPage from "../ui/page/ProductDetailPage.tsx";
import LoginPage from "../ui/page/LoginPage.tsx";
import CartPage from "../ui/page/CartPage.tsx";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree/>}>
      <ComponentPreview path="/App">
        <App/>
      </ComponentPreview>
      <ComponentPreview path="/ProductListingPage">
        <ProductListingPage/>
      </ComponentPreview>
        <ComponentPreview path="/Index">
            <Index/>
        </ComponentPreview>
        <ComponentPreview path="/ProductCard">
            <ProductCard/>
        </ComponentPreview>
        <ComponentPreview path="/PrimarySearchAppBar">
            <PrimarySearchAppBar/>
        </ComponentPreview>
        <ComponentPreview path="/NavBar">
            <NavBar/>
        </ComponentPreview>
        <ComponentPreview path="/ProductInformPage">
            <ProductInformPage/>
        </ComponentPreview>
        <ComponentPreview path="/QuantitySelector">
            <QuantitySelector/>
        </ComponentPreview>
        <ComponentPreview path="/ProductDetailPage">
            <ProductDetailPage/>
        </ComponentPreview>
        <ComponentPreview path="/LoginPage">
            <LoginPage/>
        </ComponentPreview>
        <ComponentPreview path="/CartPage">
            <CartPage/>
        </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;