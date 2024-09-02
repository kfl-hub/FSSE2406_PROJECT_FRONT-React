import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import Slider from "react-slick";
import ProductCard from "./ProductCard.tsx";
import {GetProductDto} from "../../type/Product.type.ts";

type Props={
    productDtoList:GetProductDto[],
    handleNavigateToProductDetail:(pid:number)=>void,
    category:string,
}
const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    swipeToSlide: true,
    waitForAnimate: false,
    responsive:[{
        breakpoint:1650,
        settings:{
            slidesToShow: 2,
        }},
        {
            breakpoint:1140,
            settings:{
                slidesToShow: 1,
            }
    }]
};
export default function CategoryBox({productDtoList,handleNavigateToProductDetail,category}:Props) {
const renderTitle=()=>(category);

return(
    <Box width={"64%"} minWidth={400} bgcolor={'rgba(0, 0, 0, 0.6)'}
         paddingLeft={4} margin={4}
         alignSelf={"start"} flexDirection={"column"}
         borderLeft={"solid"} borderTop={"solid"} borderColor={"white"}>
        <Typography color={"white"} variant={"h2"}>{renderTitle()}</Typography>
        <Slider {...sliderSettings}>
            {productDtoList
                .filter((item)=>(item.category===(category)))
                .map((item) => (
                    <ProductCard key={item.pid} productDto={item}
                                 onProductClick={()=>handleNavigateToProductDetail}/>))}
        </Slider>
    </Box>
)

};