import Box from "@mui/material/Box";
import {Button, Fade, Grow, Typography} from "@mui/material";
import Slider from "react-slick";
import {GetProductDto} from "../../type/Product.type.ts";
import  {useEffect, useState} from "react";
import ProductCardSmall from "./ProductCardSmall.tsx";

import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import MinimizeIcon from '@mui/icons-material/Minimize';
import ProductCardList from "./ProductCardList.tsx";

type Props = {
  productDtoList: GetProductDto[],
  handleNavigateToProductDetail: (pid: number) => void,
  category: string,
}

export default function CategoryBox({productDtoList, handleNavigateToProductDetail, category}: Props) {
  const renderTitle = () => (category);
  const [sliderSettings] = useState({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    swipeToSlide: true,
    waitForAnimate: false,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      }
    },
      {
        breakpoint: 900,
        settings: {
          vertical: true,
          verticalSwiping: true,
          slidesToShow: 3,
        }
      }]
  });
  const [expandList, setExpandList] = useState(false);
  
  
  useEffect(() => {
  }, [])
  
  const renderProductCard = () => {
    return productDtoList
      .filter((item) => (item.category === (category)))
      .map((item) => (
        <ProductCardList key={item.pid} productDto={item} onProductClick={handleNavigateToProductDetail}/>
      ))
  };
  const renderAll = () => (
    <Box minWidth={"100%"}>
      <Box display={"flex"} flexDirection={"column"}
           justifyContent={"center"} justifyItems={"center"}
           alignItems={"center"} alignContent={"center"}
           bgcolor={'rgba(0, 0, 0, 0.6)'} >
        <Typography color={"white"} sx={{fontSize: '6vh', color: 'white'}}>
          {renderTitle()}</Typography>
        <Button variant={"contained"} onMouseOver={handleDisableExpand} onClick={handleDisableExpand}sx={{mb:2}}><MinimizeIcon/></Button>
      </Box>
      <Box sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'center',
        flexWrap: "wrap",
        minHeight: '100vh',
        width: "100%"
      }}>
        {renderProductCard()}
      </Box>
      <Box display={"flex"} flexDirection={"column"}
           justifyContent={"center"} justifyItems={"center"}
           alignItems={"center"} alignContent={"center"}
           bgcolor={'rgba(0, 0, 0, 0.6)'}>
        <Button variant={"contained"}
                onMouseOver={handleDisableExpand} onClick={handleDisableExpand}
                sx={{mt:2 ,mb:2}}><MinimizeIcon/></Button>
      </Box>
    </Box>
)
  
  const renderSliderVer=()=>(
    <Box sx={{width: {xl: "64%", lg: "64%", md: "64%", sm: "90%", xs: "90%"}}} minWidth={300}
         bgcolor={'rgba(0, 0, 0, 0.6)'}
         paddingLeft={4} margin={4}
         alignSelf={"start"} flexDirection={"column"}
         borderLeft={"solid"} borderTop={"solid"} borderColor={"white"}
    >
      <Typography color={"white"} sx={{fontSize: '4vh', color: 'white'}}>
        {renderTitle()}</Typography>
      <Box sx={{display:{xl: "flex", lg: "flex", md: "flex", sm: "none", xs: "none"}}}>
        <Button onMouseOver={handleTriggerExpand} variant={"contained"}
                onClick={handleTriggerExpand}>
          <DensitySmallIcon /></Button>
      </Box>
      <Slider {...sliderSettings}>
        {productDtoList
          .filter((item) => (item.category === (category)))
          .map((item) => (
            <ProductCardSmall key={item.pid} productDto={item}
                              onProductClick={() => handleNavigateToProductDetail}/>))}
      </Slider>
    </Box>
  )
  
  const handleTriggerExpand=()=>{
    setExpandList(true);
  }
  const handleDisableExpand=()=>{
    setExpandList(false);
  }
  
  return (!expandList?
      <Fade in={!expandList}>{renderSliderVer()}</Fade>
      :    <Grow in={expandList}>{renderAll()}</Grow>
  )
  
};