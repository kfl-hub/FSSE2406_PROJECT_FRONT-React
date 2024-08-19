import NavBar from "./component/NavBar.tsx";
import Box from "@mui/material/Box";
import ProductListingPage from "./component/ProductListingPage.tsx";
import BottomNav from "./component/BottomNav.tsx";

export default function FrontPage() {
    return (

            <Box sx={{
                display: "flex",
                flexDirection: "column",
                Height: '100vh', // Ensure the Box takes the full height of the viewport
                backgroundImage: 'url(/pexels-adam-dubec-745977-1595483.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
                <NavBar />
                    <ProductListingPage />
                <BottomNav /> {/* This will be pushed to the bottom */}
            </Box>

    );
}
