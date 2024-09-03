import {useEffect, useState} from "react";
import {GetProductDto} from "../../type/Product.type.ts";
import {getAllProduct} from "../../api/ProductApi.ts";
import Box from "@mui/material/Box";
import AllProductButton from "../component/AllProductButton.tsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoadingSpinner from "../component/LoadingSpinner.tsx";
import {useNavigate} from "react-router-dom";
import WhatsNewBox from "../component/WhatsNewBox.tsx";
import CategoryBox from "../component/CategoryBox.tsx";
import {useTheme} from "@mui/material";


export default function FrontPage() {
    const [productDtoList, setProductDtoList] = useState<GetProductDto[] | undefined>(undefined);
    const navigate = useNavigate();
const theme=useTheme();

    useEffect(() => {
        const fetchData = async () => {
            const responseData = await getAllProduct();
            setProductDtoList(responseData);
        }
        try {
            fetchData();
        } catch (err) {
            console.error(err);
        }

    }, [])

    const handleNavigateToProductDetail = (productId: number) => {
        navigate(`/product/${productId}`);
    };

    return (productDtoList
            ? <><Box sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                display: 'flex',
                alignItems: 'center',
                flexWrap:"wrap",
                justifyContent: 'space-evenly',
                width: "100%",
                minWidth:400
            }}>
                <WhatsNewBox productDtoList={productDtoList}
                             handleNavigateToProductDetail={handleNavigateToProductDetail}/>
                <AllProductButton/>
            </Box>
                {/*Men shoes*/}
                <Box sx={{
                    background: `url(/man.jpg)`,
                    backgroundPositionY: "0%",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'end',
                    width: "100%",
                    [theme.breakpoints.down("md")]:{
                        justifyContent: 'center',
                    }
                }}>
                    <CategoryBox productDtoList={productDtoList}
                                 handleNavigateToProductDetail={handleNavigateToProductDetail}
                                 category={"Men Running Shoes"}/>
                </Box>
                {/*Women shoes*/}
                <Box sx={{
                    background: `url(/woman.jpg)`,
                    backgroundPositionY: "40%",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'start',
                    width: "100%",
                    [theme.breakpoints.down("md")]:{
                        justifyContent: 'center',
                    }
                }}>
                    <CategoryBox productDtoList={productDtoList}
                                 handleNavigateToProductDetail={handleNavigateToProductDetail}
                                 category={"Women Running Shoes"}/>
                </Box>
                {/*Accessories*/}
                <Box sx={{
                    background: `url(/accessories.jpg)`,
                    backgroundPositionY: "20%",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'end',
                    width: "100%",
                    [theme.breakpoints.down("md")]:{
                        justifyContent: 'center',
                    }
                }}>
                    <CategoryBox productDtoList={productDtoList}
                                 handleNavigateToProductDetail={handleNavigateToProductDetail}
                                 category={"Accessories"}/>
                </Box>
                {/*Supplement*/}
                <Box sx={{
                    background: `url(/supplement.jpg)`,
                    backgroundPositionY: "20%",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'start',
                    width: "100%",
                    [theme.breakpoints.down("md")]:{
                        justifyContent: 'center',
                    }
                }}>
                    <CategoryBox productDtoList={productDtoList}
                                 handleNavigateToProductDetail={handleNavigateToProductDetail}
                                 category={"Supplement"}/>
                </Box>

            </>


            :
            <Box sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100%',
                width: "100%"
            }}>
                <LoadingSpinner/>
            </Box>
    )


        ;
}
