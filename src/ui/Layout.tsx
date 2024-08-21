import Box from "@mui/material/Box";
import {Outlet} from "react-router-dom";
import NavBar from "./component/NavBar.tsx";
import BottomNav from "./component/BottomNav.tsx";

export default function Layout() {
    console.log("Run Layout")
    return (
        <Box>
            <Box sx={{

                background: `url('/runner-3601960_1920.jpg'),radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                flexDirection: 'column',
                height: '100vh', // Ensure the Box takes the full height of the viewport
            }}>
                <NavBar />
                <Box sx={{ flex: 1 }}>
                    <Outlet />
                </Box>
                <BottomNav />
            </Box>
        </Box>
    );
}

