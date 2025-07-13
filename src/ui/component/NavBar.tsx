import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { CircularProgress, InputAdornment, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { LoginUserContext } from "../../context/LoginUserContext.ts";
import LoginButton from "./LoginButton.tsx";
import ShopLogo from "./ShopLogo.tsx";
import NavMenuWeb from "./NavMenuWeb.tsx";
import { useFilter } from "../../context/FilterContext.tsx";
import { useLocation, useNavigate } from "react-router-dom";
import NavBarScrollController from "./NavBarScrollController.tsx";



export default function NavBar() {
    const loginUser = useContext(LoginUserContext);
    const { filterText, setFilterText } = useFilter();
    const navigate = useNavigate();
    const location = useLocation();
    let logoSize = 150;



    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        if (location.pathname !== '/product') {
            navigate('/product');
        }
        setFilterText(e.target.value);
    }


    const renderLoginUser = (): JSX.Element => {
        if (loginUser) {
            return <>
                <NavMenuWeb />
            </>
        } else if (loginUser === null) {
            return (
                <LoginButton />);
        } else {
            return (
                <CircularProgress sx={{ backgroundColor: "transparent" }} />
            )
        }
    }

    return (
        <Box sx={{ minWidth: 1100, width: '100%', position: 'fixed', zIndex: 1100, }}>
            <AppBar sx={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.85) 5%, rgba(0,0,0,0) 100%),url('/runner-3601960_1920.jpg')`, }}>
                <NavBarScrollController>
                    <Toolbar
                        variant={"regular"}
                        sx={{
                            height: 250,
                            justifyContent: 'space-around',
                        }}
                    >
                            <Typography bgcolor={'rgba(255, 255, 255, 0.3)'} sx={{ mt: 2 }}>
                                <TextField
                                    variant="outlined"
                                    value={filterText}
                                    onChange={handleFilterChange}
                                    placeholder="Product name..."
                                    InputProps={{
                                        sx: { color: 'black', width: 384 },
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon sx={{ color: 'black' }} />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Typography>
                            <ShopLogo size={logoSize} />
                            <Box sx={{ backgroundColor: "transparent" }}>
                                {renderLoginUser()}
                            </Box>
                            
                    </Toolbar>

                </NavBarScrollController>

            </AppBar>

        </Box>

    );
}