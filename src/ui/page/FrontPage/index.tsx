import NavBar from "../../component/NavBar.tsx";
import Box from "@mui/material/Box";
import ProductListingPage from "../ProductListingPage.tsx";
import BottomNav from "../../component/BottomNav.tsx";
import {useNavigate} from "react-router-dom";

export default function FrontPage() {
    const navigate = useNavigate();

    const handleNavigateToProductDetail=()=>{
        navigate("/PD")
    }



    return (
    <Box sx={{
        Height: '100vh', // Ensure the Box takes the full height of the viewport
        backgroundColor:"black"
    }}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                Height: '100vh', // Ensure the Box takes the full height of the viewport
                backgroundImage: 'url(/runner-3601960_1920.jpg)',
                backgroundSize: 'static',
                backgroundPosition: 'start',
                backgroundRepeat: 'no-repeat',
            }}>
                <NavBar />
                    <ProductListingPage />
                <BottomNav /> {/* This will be pushed to the bottom */}
            </Box>
        </Box >

    );
}
