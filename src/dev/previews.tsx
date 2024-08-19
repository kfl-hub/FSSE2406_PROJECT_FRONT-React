import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import App from "../App.tsx";
import ProductListingPage from "../ui/page/FrontPage";
import FrontPage from "../ui/page/FrontPage";
import ProductCard from "../ui/page/FrontPage/component/ProductCard.tsx";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree/>}>
      <ComponentPreview path="/App">
        <App/>
      </ComponentPreview>
      <ComponentPreview path="/ProductListingPage">
        <ProductListingPage/>
      </ComponentPreview>
        <ComponentPreview path="/FrontPage">
            <FrontPage/>
        </ComponentPreview>
        <ComponentPreview path="/ProductCard">
            <ProductCard/>
        </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;