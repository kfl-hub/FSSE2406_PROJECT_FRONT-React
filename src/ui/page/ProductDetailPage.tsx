import {Alert, Dialog, DialogContent, Divider, Paper, Snackbar, Tooltip} from "@mui/material";
import Typography from "@mui/material/Typography";
import QuantitySelector from "../component/QuantitySelector.tsx";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {useContext, useEffect, useState} from "react";
import ShoppingCartCheckOutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ShareIcon from "@mui/icons-material/Share";
import {useNavigate, useParams} from "react-router-dom";
import {getProductById} from "../../api/ProductApi.ts";
import {GetProductDto} from "../../type/Product.type.ts";
import HomeButton from "../component/HomeButton.tsx";
import LoadingSpinner from "../component/LoadingSpinner.tsx";
import Box from "@mui/material/Box";
import {LoginUserContext} from "../../context/LoginUserContext.ts";
import LoginPage from "./LoginPage.tsx";
import {putCartItem} from "../../api/CartApi.ts";
import ShoeSizeSelectorDemo from "../component/ShoeSizeSelectorDemo.tsx";
import {useCart} from "../../context/CartContext.tsx";

export default function ProductDetailPage() {
    const [productDto, setProductDto] = useState<GetProductDto | undefined>(undefined);
    const [quantity, setQuantity] = useState<number>(1);
    const [sizeValue, setSizeValue] = useState<string>('');
    const [loginDialogOpen, setLoginDialogOpen] = useState(false);
    const [addCartSnackOpen, setAddCartSnackOpen] = useState(false);
    const [sizeAlertSnackOpen, setSizeAlertOPen] = useState(false);
    const {productId} = useParams<{ productId: string }>();
    const loginUser = useContext(LoginUserContext);
    const {setCartQuantity} = useCart();
    const [addedQuantity, setAddedQuantity] = useState<number>(0);


    const navigate = useNavigate();
    let cartDisable = false;

    useEffect((): void => {
        const fetchData = async () => {
            try {
                const responseData = await (getProductById(Number(productId)));
                setProductDto(responseData);

            } catch (err) {
                console.error(err)
                navigate("error")
            }
        }

        fetchData();
    }, [quantity])

    const handleIncrement = () => {
        if (quantity < productDto!.stock!) {
            setQuantity((prev) => (prev + 1))
        }
    }
    const handleDecrement = () => {
        setQuantity((prev) => (prev >= 1 ? prev - 1 : prev))
    }
    const handleQuantityOnChange = (value: string) => {
        const newValue = Math.min(productDto!.stock!, Number(value));

        if (newValue <= 0) {
            setQuantity(1);
        } else {
            setQuantity(newValue);
        }
    }

    const handleOnSizeValueChange = (sizeValue: string) => {
        setSizeValue(sizeValue);
    }
    const handleOpenLoginDialog = () => {
        setLoginDialogOpen(true);
    };
    const handleLoginSuccess = () => {
        setLoginDialogOpen(false);
    };
    const handleAddToCartOnClick = async () => {
        if (!loginUser) {
            handleOpenLoginDialog()
            return;
        }
        if (productDto?.category.includes("Shoe") && !sizeValue) {
            setSizeAlertOPen(true);
        } else {
            await handleAddToCartApi()
        }
    }


    const handleGoToCartOnClick = () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        !loginUser
            ? handleOpenLoginDialog()
            : handleNavigateToCartPage()
    }
    const handleNavigateToCartPage = () => {
        navigate("/cart")
    }
    const handleAddToCartApi = async () => {
        if (await putCartItem(productDto!.pid, quantity, sizeValue)) {
            setAddedQuantity(quantity);
            setAddCartSnackOpen(true);
            setQuantity(1);
            setCartQuantity((prev) => !prev || prev === 0 ? 1 : prev + 1);
        }
    }

    const stockStatus = () => {
        if (productDto?.stock) {
            return <Tooltip title={"Stock remaining: " + productDto.stock}>
                <img width={50}
                     src={"/inStock.png"} alt={"in-stock"}/></Tooltip>
        } else {
            cartDisable = true;
            return <img width={50} src={"/soldOut.png"} alt={"sold-out"}/>;
        }
    }

    const sizeList = () => {
        if (productDto?.category === "Men Running Shoes") {

            return (
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    width={300}>
                    <ShoeSizeSelectorDemo category={productDto.category} value={sizeValue}
                                          handleOnSizeValueChange={handleOnSizeValueChange}/>
                    <Button
                        variant="text"
                        sx={{color: 'gray', padding: '10px 20px', borderRadius: '8px', mt: 0}}
                        href="https://images.template.net/112098/free-men-s-shoe-size-chart-edit-online.jpg"
                        target="_blank"
                        rel="noopener"
                    >
                        View Shoe Size Chart
                    </Button>
                </Box>);
        } else if (productDto?.category === "Women Running Shoes") {
            return (
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    width={300}>
                    <ShoeSizeSelectorDemo category={productDto.category} value={sizeValue}
                                          handleOnSizeValueChange={handleOnSizeValueChange}/>
                    <Button
                        variant="text"
                        sx={{color: 'gray', padding: '10px 20px', borderRadius: '8px', mt: 0}}
                        href="https://images.template.net/112098/free-men-s-shoe-size-chart-edit-online.jpg"
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


    return productDto ? (

            <Box sx={{ //outer container
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                display: 'flex',
                flexDirection: "row",
                alignItems: 'stretch',
                justifyContent: 'center',
                height: '100vh',
                width: "100%",
                pt: 4
            }}>
                <Dialog open={loginDialogOpen} onClose={() => setLoginDialogOpen(false)} maxWidth="sm" fullWidth>
                    <DialogContent>
                        <LoginPage onLoginSuccess={handleLoginSuccess}/>
                    </DialogContent>
                </Dialog>
                <Snackbar open={addCartSnackOpen} autoHideDuration={10000}
                          onClose={() => setAddCartSnackOpen(false)}
                          anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
                    <Alert
                        severity="success"
                        variant="filled"
                        sx={{width: '100%'}}
                    >{productDto.name + " quantity: " + addedQuantity + " is added to cart."}
                    </Alert>
                </Snackbar>
                <Snackbar open={sizeAlertSnackOpen} autoHideDuration={3000}
                          onClose={() => setSizeAlertOPen(false)}
                          anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
                    <Alert
                        severity="error"
                        variant="filled"
                        sx={{width: '100%'}}
                    >Please select size.
                    </Alert>
                </Snackbar>
                <Box width={"50%"} sx={{ //left part
                    backgroundColor: 'transparent',
                    display: 'flex',
                    flexDirection: "column",
                    alignItems: 'center',
                    justifyContent: 'stretch',
                    minHeight: '100vh'
                }}>
                    <Paper variant="outlined"
                           sx={{width: "70%", backgroundColor: 'rgba(255, 255, 255, 0.85)'}}>
                        <img width="100%" src={productDto?.imageUrl} alt={"product-image"}/>
                    </Paper>
                    <Paper variant="outlined"
                           sx={{width: "12%", m: 2, backgroundColor: 'rgba(255, 255, 255, 0.85)'}}>
                        <img width="100%" src={productDto?.imageUrl} alt={"product-image-small"}/>

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
                        <Typography sx={{fontWeight: 'Light', mb: 1}} variant={"h2"}>{productDto?.name}</Typography>
                        <Typography sx={{fontWeight: 'Light'}} variant={"subtitle1"}>{productDto?.category}</Typography>
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
                                     justifyItems: "center",
                                     alignItems: "start",
                                     width: 220,
                                     mb: 2,
                                     mt: 2
                                 }}>
                                <Typography sx={{fontWeight: '500', mb: 2}} variant={"h6"}>Qty</Typography>

                                <QuantitySelector cartDisable={cartDisable}
                                                  quantity={quantity}
                                                  handleIncrement={handleIncrement}
                                                  handleDecrement={handleDecrement}
                                                  handleQuantityChange={handleQuantityOnChange}/>


                            </Box>

                            <Box aria-label={"SizeBox"} width={"100%"}>
                                {sizeList()}
                            </Box>
                        </Box>
                        <Button onClick={handleAddToCartOnClick} sx={{width: "64%", mt: 2, fontSize: "1rem"}}
                                variant="contained"
                                disabled={cartDisable}
                                endIcon={<AddShoppingCartIcon/>}>
                            Add to Cart
                        </Button>
                        <Typography variant={"subtitle1"} sx={{mt: 4, mb: 4, pr: 20, color: "#454545"}}>
                            {productDto?.description}
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: "row",
                            justifyContent: 'space-between',
                            color: "#454545",
                            mr: 12,
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

                            <Button onClick={handleGoToCartOnClick} variant={"contained"} size={"large"}
                                    sx={{fontSize: "1.3rem"}}
                                    endIcon={<ShoppingCartCheckOutIcon/>}>
                                Go to Cart
                            </Button>

                        </Box>
                        <Divider variant="middle"/>
                        <HomeButton/>
                    </Paper>
                </Box>
            </Box>
        ) :
        <LoadingSpinner/>
        ;
};