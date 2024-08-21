
import ProductCard from "../component/ProductCard.tsx";
import {useEffect, useState} from "react";
import {GetProductDto} from "../../type/Product.type.ts";
import {getAllProduct} from "../../api/GetProductApi.tsx";
import LoadingSpinner from "../component/LoadingSpinner.tsx";
import {useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";

export default function ProductListingPage() {

    console.log("ListPage")
    const [productDtoList, setProductDtoList] = useState<GetProductDto[]|undefined>(undefined);
    const navigate = useNavigate();
    const handleNavigateToProductDetail = (productId:number) => {
        navigate(`/product/${productId}`); // Navigate to the specific product detail page
    };

    useEffect(() => {
        const fetchData = async () => {
            const responseData = await getAllProduct();
            setProductDtoList(responseData)
        }
        console.log("ListPage2")
        fetchData();
    }, [])

    const renderProductCard = () => {
        return productDtoList?.map((item) => (
            <ProductCard key={item.pid} productDto={item} onProductClick={handleNavigateToProductDetail}/>
        ))
    };

    return (
        <Box sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: "wrap",
            minHeight: '100vh',
            width:"100%"
        }}>
            {productDtoList
                ? renderProductCard() :
                <LoadingSpinner/>}
        </Box>
    );
};