import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import Slider from "react-slick";
import ProductCard from "./ProductCard.tsx";
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
    <Box width={440} bgcolor={'rgba(0, 0, 0, 0.6)'} paddingLeft={4}
         marginTop={4} marginBottom={4}
         alignSelf={"start"} flexDirection={"column"}
         borderLeft={"solid"} borderTop={"solid"}
         borderColor={"white"} sx={{borderBottomRightRadius:30}}>
        <Typography color={"white"} variant={"h2"}>What's new</Typography>
        <Slider {...sliderSettingsFade}>
            {productDtoList
                .slice(-3)
                .map((item) => (
                    <ProductCard key={item.pid} productDto={item}
                                 onProductClick={()=>handleNavigateToProductDetail}/>))}
        </Slider>
    </Box>
)

};