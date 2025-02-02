import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import Slider from "react-slick";
import ProductCardSlider from "./ProductCardSlider.tsx";
import {GetProductDto} from "../../type/Product.type.ts";

type Props={
    productDtoList:GetProductDto[]
    handleNavigateToProductDetail:(pid:number)=>void;
}
const sliderSettingsFade = {
    dots: false,
    fade: true,
    infinite: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
};
export default function WhatsNewBox({productDtoList,handleNavigateToProductDetail}:Props) {
return(
    <Box maxWidth={"32%"} width={450} minWidth={380}
         bgcolor={'rgba(0, 0, 0, 0.6)'} paddingLeft={4}
         marginTop={4} marginBottom={4}
         alignSelf={"start"} flexDirection={"column"}
         borderLeft={"solid"} borderTop={"solid"}
         borderColor={"white"} sx={{borderBottomRightRadius:30}}>
        <Typography color={"white"} variant={"h2"}>New Arrival</Typography>
        <Slider {...sliderSettingsFade}>
            {productDtoList
                .slice(-3)
                .map((item) => (
                    <ProductCardSlider key={item.pid} productDto={item}
                                       onProductClick={()=>handleNavigateToProductDetail}/>))}
        </Slider>
    </Box>
)

};