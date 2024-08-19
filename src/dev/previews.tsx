import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import App from "../App.tsx";
import ProductListingPage from "../ui/page/FrontPage";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree/>}>
      <ComponentPreview path="/App">
        <App/>
      </ComponentPreview>
      <ComponentPreview path="/ProductListingPage">
        <ProductListingPage/>
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;