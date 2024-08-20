import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {createTheme, ThemeProvider} from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import {alpha, styled} from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function NavBar() {
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

    const Search = styled('div')(({theme}) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.25),
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
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 10, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.down('lg')]: {
                width: 'auto',
            },
        },
    }));
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
                        <Typography component="div" sx={{ml: 30, mr: 30, mb: -5, position: 'absolute'}}>
                            <img width={200} src={"/shopLogo.png"}/>
                        </Typography>
                        <Box sx={{
                            [navBarTheme.breakpoints.down('sm')]: {
                                mt: 16,
                            }, [navBarTheme.breakpoints.down('md')]: {
                                mt: 16,
                            },
                            backgroundColor: "black"
                        }}>
                            <Button sx={{width:200}} size={"large"} color="inherit" endIcon={<><FacebookIcon sx={{mr:1}} /><GoogleIcon sx={{mr:1}}/></>}>Login</Button>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
}