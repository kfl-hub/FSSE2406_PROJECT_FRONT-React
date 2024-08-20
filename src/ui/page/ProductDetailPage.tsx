import Box from "@mui/material/Box";
import NavBar from "../component/NavBar.tsx";
import BottomNav from "../component/BottomNav.tsx";
import {Divider, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import QuantitySelector from "../component/QuantitySelector.tsx";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import * as React from "react";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ShareIcon from "@mui/icons-material/Share";
import {useNavigate} from "react-router-dom";

export default function ProductDetailPage() {
    const [expanded, setExpanded] = React.useState(false);

    const navigate = useNavigate();

    const handleNavigateToFront = () => {
        navigate("/")
    }

    return (
        <Box sx={{ //background box
            Height: '100vh', // Ensure the Box takes the full height of the viewport
            backgroundColor: "black"
        }}>
            <Box sx={{ //outer container
                display: "flex",
                flexDirection: "column",
                Height: '100vh', // Ensure the Box takes the full height of the viewport
                backgroundImage: 'url(/runner-3601960_1920.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'start',
                backgroundRepeat: 'no-repeat',

            }}>
                <NavBar/>


                <Box sx={{ //inner container
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    flexDirection: "row",
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                }}>
                    <Box width={"50%"} sx={{ //left part
                        m: 4,
                        backgroundColor: 'transparent',
                        display: 'flex',
                        flexDirection: "column",
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '100vh'
                    }}>
                        <Paper variant="outlined"
                               sx={{width: 700}}>
                            <img width="100%" src="public/vite.svg"/>
                        </Paper>
                        <Paper variant="outlined"
                               sx={{width: 100, m: 2}}>
                            <img width="100%" src="public/vite.svg"/>

                        </Paper>
                    </Box>
                    <Box width={"50%"} sx={{ //right part
                        backgroundColor: "transparent",
                        display: 'flex',
                        flexDirection: "column",
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '100vh'
                    }}>
                        <Paper variant="outlined"
                               sx={{width: "90%", height: "90%", pl: 2, backgroundColor: 'rgba(255, 255, 255, 0.85)',}}>
                            <Typography sx={{fontWeight: 'Light', mb: 3}} variant={"h1"}>Product name</Typography>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: "row",
                                justifyContent: 'space-between',
                                color: "#454545",
                                mr: 12,
                                mb: 2
                            }}>
                                <Typography sx={{fontWeight: '500'}} variant={"h4"}>$Price</Typography>
                                <Typography sx={{fontWeight: '500'}} variant={"h4"}>IN STOCK</Typography>
                            </Box>

                            <Divider variant="middle"/>
                            <Typography sx={{fontWeight: '500'}} variant={"h6"}>Qty</Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    width: 220,
                                    mb: 2
                                }}>
                                <QuantitySelector/>
                                <Button sx={{mt: 2}} variant="contained" endIcon={<AddShoppingCartIcon/>}>
                                    Add to Cart
                                </Button>
                            </Box>
                            <Typography variant={"subtitle1"} sx={{pr: 20, color: "#454545"}}>
                                Description: This combination ensures that the TextField restricts user input to a
                                minimum value of 1, helping to maintain valid input data.
                            </Typography>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: "row",
                                justifyContent: 'space-between',
                                color: "#454545",
                                mr: 2,
                                mb: 2
                            }}>
                                <IconButton sx={{borderRadius: 10}}>
                                    <FavoriteIcon/>
                                    <Typography variant="button" sx={{fontSize: '0.75rem', mt: 0.5}}>
                                        Add to favorites
                                    </Typography>
                                </IconButton>
                                <IconButton sx={{borderRadius: 10}}>
                                    <ShareIcon/>
                                    <Typography variant="button" sx={{fontSize: '0.75rem', mt: 0.5}}>
                                        Share
                                    </Typography>
                                </IconButton>
                                <Button variant={"contained"} color={"success"} size={"large"} sx={{fontSize: "1rem"}}
                                        endIcon={<ShoppingCartCheckoutIcon/>}>Check out!</Button>
                            </Box>
                            <Divider variant="middle"/>
                            <Button sx={{fontSize: "2rem"}} onClick={handleNavigateToFront}> Back to home </Button>

                        </Paper>
                    </Box>
                </Box>


                <BottomNav/> {/* This will be pushed to the bottom */}
            </Box>
        </Box>
    )
};