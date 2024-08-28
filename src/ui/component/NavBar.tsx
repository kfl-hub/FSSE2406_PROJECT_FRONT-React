import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {CircularProgress, createTheme, InputAdornment, TextField, ThemeProvider, Typography} from "@mui/material";
import React, {useContext} from "react";
import SearchIcon from '@mui/icons-material/Search';
import {LoginUserContext} from "../../context/LoginUserContext.ts";
import LoginButton from "./LoginButton.tsx";
import ShopLogo from "./ShopLogo.tsx";
import NavMenuWeb from "./NavMenuWeb.tsx";
import {FilterContext, useFilter} from "../../context/FilterContext.tsx";
import {useLocation, useNavigate} from "react-router-dom";

const navBarTheme = createTheme({
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.85) 5%, rgba(0,0,0,0) 100%)',
                }
            }
        }
    }
})

export default function NavBar() {
    const loginUser = useContext(LoginUserContext);
    const {filterText,setFilterText} =useFilter();
  const navigate = useNavigate();
  const location = useLocation();

    const handleFilterChange=(e)=>{
      if (location.pathname !== '/') {
        navigate('/');}
      setFilterText(e.target.value);
    }
    
    
    const renderLoginUser = (): JSX.Element => {
        if (loginUser) {
            return <>
                <NavMenuWeb/>
                </>
        } else if(loginUser===null) {
            return (
                <LoginButton/>);
        }else {
            return (
                <CircularProgress sx={{backgroundColor:"transparent"}}/>
            )
        }
    }

    return (
        <ThemeProvider theme={navBarTheme}>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar variant={"regular"}
                             sx={{
                                 height: 200,
                                 justifyContent: 'space-around',
                                 [navBarTheme.breakpoints.up('md')]: {
                                     justifyContent: 'space-around',
                                 }, [navBarTheme.breakpoints.down('xl')]: {
                                     display: "flex",
                                     flexDirection: "column",
                                 justifyContent: 'space-around',
                                     height: 320,
                                     alignItems: ""
                                 }
                             }}
                    >
                        <Typography bgcolor={'rgba(255, 255, 255, 0.3)'}>
                          <TextField
                          bgcolor="white"
                          variant="outlined"
                          value={filterText}
                          onChange={handleFilterChange}
                          placeholder="Product name..."
                          InputProps={{
                            sx: { color: 'white' ,width:440},
                              startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon sx={{ color: 'white' }}/>
                                </InputAdornment>
                              ),
                          }}
                        /></Typography>
                        <ShopLogo/>
                        <Box sx={{
                            [navBarTheme.breakpoints.down('sm')]: {
                                mt: 16,
                            }, [navBarTheme.breakpoints.down('md')]: {
                                mt: 16,
                            },
                            backgroundColor: "transparent"
                        }}>
                            {renderLoginUser()}
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
}