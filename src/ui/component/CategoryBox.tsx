import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import Slider from "react-slick";
import {GetProductDto} from "../../type/Product.type.ts";
import {useEffect, useState} from "react";
import ProductCardSmall from "./ProductCardSmall.tsx";

type Props={
    productDtoList:GetProductDto[],
    handleNavigateToProductDetail:(pid:number)=>void,
    category:string,
}

export default function CategoryBox({productDtoList,handleNavigateToProductDetail,category}:Props) {
const renderTitle=()=>(category);
const [sliderSettings, setSliderSettings]=useState({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    swipeToSlide: true,
    waitForAnimate: false,
    autoplay:false,
    autoplaySpeed: 3000,
    responsive:[{
        breakpoint:1650,
        settings:{
            slidesToShow: 2,
        }},
        {
            breakpoint:900,
            settings:{
                vertical: true,
                verticalSwiping: true,
                slidesToShow: 3,
            }
        }]
}   );


useEffect(()=>{

},[])


const handleCatBoxOnMouseOver=()=>{
    console.log("Mouse Over - Starting autoplay");
    setSliderSettings((prevState)=>({
    ...prevState,
    autoplay:true
    }
    ))
    console.log(sliderSettings)

}

    const handleCatBoxOnMouseLeave=()=>{
        setSliderSettings((prevState)=>{
            return({
                ...prevState,
                autoplay:false
            })
        })

    }

return(
    <Box sx={{width:{xl: "64%", lg: "64%", md: "64%", sm: "90%", xs: "90%"}}} minWidth={300} bgcolor={'rgba(0, 0, 0, 0.6)'}
         paddingLeft={4} margin={4}
         alignSelf={"start"} flexDirection={"column"}
         borderLeft={"solid"} borderTop={"solid"} borderColor={"white"}
    onMouseOver={handleCatBoxOnMouseOver} onMouseLeave={handleCatBoxOnMouseLeave}>
        <Typography color={"white"} variant={"h3"}>{renderTitle()}</Typography>
        <Slider {...sliderSettings}>
            {productDtoList
                .filter((item)=>(item.category===(category)))
                .map((item) => (
                    <ProductCardSmall key={item.pid} productDto={item}
                                 onProductClick={()=>handleNavigateToProductDetail}/>))}
        </Slider>
    </Box>
)

};