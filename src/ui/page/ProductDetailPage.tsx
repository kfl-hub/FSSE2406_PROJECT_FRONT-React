

import NavBar from "../component/NavBar.tsx";
import BottomNav from "../component/BottomNav.tsx";
import {Divider, FormControl, InputLabel, Link, Paper, Select} from "@mui/material";
import Typography from "@mui/material/Typography";
import QuantitySelector from "../component/QuantitySelector.tsx";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React, {useEffect, useState} from "react";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ShareIcon from "@mui/icons-material/Share";
import {useNavigate, useParams} from "react-router-dom";
import {getProductById} from "../../api/GetProductApi.tsx";
import {GetProductDto} from "../../type/Product.type.ts";
import MenuItem from "@mui/material/MenuItem";
import HomeButton from "../component/HomeButton.tsx";
import LoadingSpinner from "../component/LoadingSpinner.tsx";
import Box from "@mui/material/Box";

export default function ProductDetailPage() {

    console.log("DPage")
    const [productDto, setProductDto] = useState<GetProductDto | undefined>(undefined);
    const {productId} = useParams<{ productId: string }>();
    const navigate = useNavigate();
    let cartDisable = false;

    useEffect((): void => {
        const fetchData = async () => {
            // productId=Number(productId);
            console.log(typeof productId)
            console.log(productId)
            // const numericProductId = Number(productId);
            const responseData = await (getProductById(productId));
            setProductDto(responseData);
        }
        fetchData();
    }, [productId])

    const stockStatus = () => {
        if (productDto?.stock) {

            return <img width={50} src={"/inStock.png"}/>
        } else {
            cartDisable = true;
            return <img width={50} src={"/soldOut.png"}/>;
        }
    }

    const sizeList = () => {
        if (productDto?.category === "menShoes") {
            return(
                <Box
                display={"flex"}
                flexDirection={"column" }
                alignItems={"center"}
                width={300}>
                    <Typography sx={{fontWeight: '500', mt: 2}} variant="h6">Men Running Shoe</Typography>
                <FormControl variant="standard" sx={{ m: 2, minWidth: 160 }}>
                    <InputLabel id="demo-simple-select-standard-label">Select size</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={0}
                        //onChange={handleChange}
                        label="Size"
                    >
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9.5}>9.5</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                    </Select>
                </FormControl>
                    <Button
                        variant="text"
                        sx={{  color: 'gray', padding: '10px 20px', borderRadius: '8px', mt: 0 }}
                        href="https://images.template.net/112098/free-men-s-shoe-size-chart-edit-online.jpg"
                        target="_blank"
                        rel="noopener"
                    >
                        View Shoe Size Chart
                    </Button>
                </Box>);
        } else if (productDto?.category === "womenShoes") {
            return (
                <Box
                    display={"flex"}
                    flexDirection={"column" }
                    alignItems={"center"}
                    width={300}>
                    <Typography sx={{fontWeight: '500', mt: 2}} variant="h6">Women Running Shoe</Typography>
                    <FormControl variant="standard" sx={{ m: 2, minWidth: 160 }}>
                        <InputLabel id="w-shoe-size">Select size</InputLabel>
                        <Select
                            labelId="w-shoe-size"
                            id="w-shoe-size"
                            value={0}
                            //onChange={handleChange}
                            label="w-shoe-size"
                        >
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={8.5}>8.5</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                        </Select>
                    </FormControl>
                    <Button
                        variant="text"
                        sx={{  color: 'gray', padding: '10px 20px', borderRadius: '8px', mt: 0 }}
                        href="https://images.template.net/112082/women-s-uk-to-us-shoe-size-chart-edit-online.jpg"
                        target="_blank"
                        rel="noopener"
                    >
                        View Shoe Size Chart
                    </Button>
                </Box>);
        } else {
            return <></>;
        }
    }


    return productDto?(
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
                    alignItems: 'stretch',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    pt: 4
                }}>
                    <Box width={"50%"} sx={{ //left part
                        backgroundColor: 'transparent',
                        display: 'flex',
                        flexDirection: "column",
                        alignItems: 'center',
                        justifyContent: 'stretch',
                        minHeight: '100vh'
                    }}>
                        <Paper variant="outlined"
                               sx={{width: 700, backgroundColor: 'rgba(255, 255, 255, 0.85)'}}>
                            <img width="100%" src={productDto?.imageUrl}/>
                        </Paper>
                        <Paper variant="outlined"
                               sx={{width: 100, m: 2, backgroundColor: 'rgba(255, 255, 255, 0.85)'}}>
                            <img width="100%" src={productDto?.imageUrl}/>

                        </Paper>
                    </Box>
                    <Box width={"50%"} sx={{ //right part
                        backgroundColor: "transparent",
                        display: 'flex',
                        flexDirection: "column",
                        alignItems: 'center',
                        justifyContent: 'stretch',
                        minHeight: '100vh'
                    }}>
                        <Paper variant="outlined"
                               sx={{
                                   width: "90%",
                                   height: "90%",
                                   pl: 2,
                                   pr: 1,
                                   backgroundColor: 'rgba(255, 255, 255, 0.85)',
                               }}>
                            <Typography sx={{fontWeight: 'Light', mb: 3}} variant={"h2"}>{productDto?.name}</Typography>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: 'space-between',
                                color: "#454545",
                                mr: 12,
                                mb: 2
                            }}>
                                <Typography sx={{fontWeight: '500'}} variant={"h5"}>${productDto?.price}.0</Typography>
                                <Typography sx={{fontWeight: '500'}} variant={"h5"}>
                                    {stockStatus()}
                                </Typography>
                            </Box>

                            <Divider variant="middle"/>
                            <Box aria-label={"CartAndSizeBox"}
                                 display={"flex"}
                                 flexDirection={"row"}
                                 justifyItems={"start"}>

                                <Box aria-label={"CartBox"}
                                     sx={{
                                         display: 'flex',
                                         flexDirection: "column",
                                         justifyContent: "center",
                                         width: 220,
                                         mb: 2,
                                         mt: 2
                                     }}>
                                    <Typography sx={{fontWeight: '500', mb: 2}} variant={"h6"}>Qty</Typography>
                                    <QuantitySelector cartDisable={cartDisable}/>
                                    <Button sx={{mt: 2}} variant="contained" disabled={cartDisable}
                                            endIcon={<AddShoppingCartIcon/>}>
                                        Add to Cart
                                    </Button>
                                </Box >
                                <Box aria-label={"SizeBox"} width={"100%"}>
                                    {sizeList()}
                                </Box>
                            </Box>
                            <Typography variant={"subtitle1"} sx={{mt: 4, mb: 4, pr: 20, color: "#454545"}}>
                                {productDto?.description}
                            </Typography>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: "row",
                                justifyContent: 'space-between',
                                color: "#454545",
                                mr: 2,
                                mb: 2
                            }}>
                                <Box>
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
                                </Box>
                                <Button variant={"contained"} size={"large"} sx={{fontSize: "1.3rem"}}
                                        endIcon={<ShoppingCartCheckoutIcon/>}>Check out</Button>

                            </Box>
                            <Divider variant="middle"/>
                            <HomeButton/>
                        </Paper>
                    </Box>
                </Box>


                <BottomNav/> {/* This will be pushed to the bottom */}
            </Box>
        </Box>
    ):
        <LoadingSpinner/>;
};