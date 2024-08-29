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
    slidesToScroll: 3,
    waitForAnimate: false,
};
export default function CategoryBox({productDtoList,handleNavigateToProductDetail,category}:Props) {
const renderTitle=()=>(category==="menShoes"
    ?"Men Running Shoes"
    :category==="womenShoes"
        ?"Women Running Shoes":
        category==="accessories"?
            "Accessories"
            :"Supplement");

return(
    <Box width={"64%"} bgcolor={'rgba(0, 0, 0, 0.6)'} paddingLeft={4} margin={4} alignSelf={"start"} flexDirection={"column"} borderLeft={"solid"} borderTop={"solid"} borderColor={"white"}>
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