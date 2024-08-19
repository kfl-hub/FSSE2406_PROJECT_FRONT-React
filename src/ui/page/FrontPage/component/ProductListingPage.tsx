import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProductCard from "./ProductCard.tsx";

export default function ProductListingPage() {
return(
  <Box sx={{
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap:"wrap"
  }}>
  <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
  </Box>
)
};