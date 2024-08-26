import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {CircularProgress, createTheme, ThemeProvider} from "@mui/material";
import React, {useContext} from "react";
import SearchIcon from '@mui/icons-material/Search';
import {alpha, styled} from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import {LoginUserContext} from "../../context/LoginUserContext.ts";
import LoginButton from "./LoginButton.tsx";
import ShopLogo from "./ShopLogo.tsx";
import LogoutButton from "./LogoutButton.tsx";
import NavMenuWeb from "./NavMenuWeb.tsx";


const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.6),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.45),
    },
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        width: '90%',
    },
    [theme.breakpoints.up('md')]: {
        width: '20%',
    },
    [theme.breakpoints.up('lg')]: {
        width: "auto%",
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'black',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.down('lg')]: {
            width: '100%',
        },
    },
}));
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
                                 }, [navBarTheme.breakpoints.down('md')]: {
                                     display: "flex",
                                     flexDirection: "column",
                                     height: 310,
                                     alignItems: ""
                                 }
                             }}
                    >
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon/>
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Product name…"
                                inputProps={{'aria-label': 'search'}}
                            />
                        </Search>
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