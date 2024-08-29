
import ProductCard from "../component/ProductCard.tsx";
import {useEffect, useState} from "react";
import {GetProductDto} from "../../type/Product.type.ts";
import {getAllProduct} from "../../api/ProductApi.ts";
import LoadingSpinner from "../component/LoadingSpinner.tsx";
import {useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";
import {getCartQuantity} from "../../api/CartApi.ts";
import {useFilter} from "../../context/FilterContext.tsx";

export default function ProductListingPage() {
const [filteredList,setFilteredList] = useState<GetProductDto[]|undefined>(undefined);
    const [productDtoList, setProductDtoList] = useState<GetProductDto[]|undefined>(undefined);
    const {filterText} =useFilter();
    const navigate = useNavigate();
    


    useEffect(() => {
        const fetchData = async () => {
          await getCartQuantity();
            const responseData = await getAllProduct();
            if (responseData){
              if (filterText){
              setFilteredList(responseData.filter((item:GetProductDto)=>(item.name.toLowerCase().includes(filterText.toLowerCase()))));}
              setProductDtoList(responseData);
            }
        }
        try {
          fetchData();
        }catch (err){
          console.error(err);
        }

    }, [])
  
  
  useEffect(() => {
    if(productDtoList){
    setFilteredList(productDtoList?.filter((item)=>(item.name.toLowerCase().includes(filterText.toLowerCase()))));}

  }, [filterText]);
  
  const handleNavigateToProductDetail = (productId:number) => {
    navigate(`/product/${productId}`);
  };
    
    const renderProductCard = () => {
      if (filteredList === undefined ){
        return productDtoList?.map((item) => (
            <ProductCard key={item.pid} productDto={item} onProductClick={handleNavigateToProductDetail}/>
        ))}else{
        return filteredList.map((item) => (
          <ProductCard key={item.pid} productDto={item} onProductClick={handleNavigateToProductDetail}/>
        ))}
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