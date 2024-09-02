import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {CircularProgress, createTheme, InputAdornment, TextField, ThemeProvider, Typography} from "@mui/material";
import {useContext} from "react";
import SearchIcon from '@mui/icons-material/Search';
import {LoginUserContext} from "../../context/LoginUserContext.ts";
import LoginButton from "./LoginButton.tsx";
import ShopLogo from "./ShopLogo.tsx";
import NavMenuWeb from "./NavMenuWeb.tsx";
import {useFilter} from "../../context/FilterContext.tsx";
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
    const {filterText, setFilterText} = useFilter();
    const navigate = useNavigate();
    const location = useLocation();

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        if (location.pathname !== '/product') {
            navigate('/product');
        }
        setFilterText(e.target.value);
    }


    const renderLoginUser = (): JSX.Element => {
        if (loginUser) {
            return <>
                <NavMenuWeb/>
            </>
        } else if (loginUser === null) {
            return (
                <LoginButton/>);
        } else {
            return (
                <CircularProgress sx={{backgroundColor: "transparent"}}/>
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
                                 justifyContent: 'space-around'
                                 ,
                                 [navBarTheme.breakpoints.down('md')]: {
                                     display: "flex",
                                     flexDirection: "column",
                                     alignContent: 'center',
                                     height: 280,
                                 },
                                 [navBarTheme.breakpoints.up('md')]: {
                                     display: "flex",
                                     flexDirection: "column",
                                     alignItems: 'space-around',
                                     height: 380,
                                 },
                                 [navBarTheme.breakpoints.up('lg')]: {
                                     display: "flex",
                                     flexDirection: "column",
                                     alignContent: 'space-around',
                                     height: 300,
                                 },
                                 [navBarTheme.breakpoints.up("xl")]: {
                                 height: 200,
                                     display: "flex",
                                     flexDirection: "row",
                                 justifyContent: 'space-around',
                             }
                             }}
                    >
                        <Typography bgcolor={'rgba(255, 255, 255, 0.3)'}
                        sx={{mt:2}}>
                            <TextField
                                variant="outlined"
                                value={filterText}
                                onChange={handleFilterChange}
                                placeholder="Product name..."
                                InputProps={{
                                    sx: {color: 'white', width: 440},
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon sx={{color: 'white'}}/>
                                        </InputAdornment>
                                    ),
                                }}
                            /></Typography>
                        <ShopLogo/>
                        <Box sx={{
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