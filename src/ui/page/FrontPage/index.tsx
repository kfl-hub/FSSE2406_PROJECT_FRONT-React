import NavBar from "./component/NavBar.tsx";
import Box from "@mui/material/Box";
import ProductListingPage from "./component/ProductListingPage.tsx";
import BottomNav from "./component/BottomNav.tsx";


export default function FrontPage() {

  return (
    <>
      <Box sx={{
        flexDirection: "column",
        height: '100vh',
        backgroundImage: 'url(/pexels-adam-dubec-745977-1595483.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <NavBar/>
        <ProductListingPage/>
      </Box>

      <Box>
        <BottomNav/>
      </Box>
    </>

  )
};