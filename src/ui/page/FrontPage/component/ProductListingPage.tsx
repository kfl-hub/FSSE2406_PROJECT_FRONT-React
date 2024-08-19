import Box from "@mui/material/Box";
import ProductCard from "./ProductCard.tsx";
import {useEffect, useState} from "react";
import {ProductDto} from "../../../../type/Product.type.ts";
import {getAllProduct} from "../../../../api/GetProductApi.tsx";
import {CircularProgress} from "@mui/material";
import { LinearProgress } from '@mui/material';

export default function ProductListingPage() {
    const [productDtoList, setProductDtoList] = useState<ProductDto[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const responseData = await getAllProduct();
            setProductDtoList(responseData)
        }
        fetchData();
    }, [])

    const renderProductCard = () => {
        return productDtoList.map((item) => (
            <ProductCard key={item.pid} productDto={item}/>
        ))
    };

    return (
        <Box sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: "wrap",
            minHeight: '100vh'
        }}>
            {productDtoList.length > 0
                ? renderProductCard() :
                <CircularProgress size={100}/>}
        </Box>
    );
};