import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
    Dialog,
    DialogContent,
    Divider,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import {useContext, useEffect, useState} from "react";
import {CartItemDto} from "../../type/Cart.type.ts";
import {LoginUserContext} from "../../context/LoginUserContext.ts";
import {getCartItem} from "../../api/CartApi.ts";
import LoadingSpinner from "../component/LoadingSpinner.tsx";
import CartTableRow from "../component/CartTableRow.tsx";
import HomeButton from "../component/HomeButton.tsx";
import BillStepper from "../component/BillStepper.tsx";
import CheckoutButton from "../component/CheckoutButton.tsx";
import CreateTransactionPage from "../component/CreateTransactionPage.tsx";

export default function CartPage() {
    const [cartItemDtoList, setCartItemDtoList] = useState<CartItemDto[] | undefined>(undefined);
    const [transactionDialogOpen, setTransactionDialogOpen] = useState(false);
    const loginUser = useContext(LoginUserContext);


    const onDeleteItem = (cid: number) => {
        setCartItemDtoList((prevState) => (prevState?.filter((item) => (item.cid !== cid))))
        console.log("deleted")
    }

    const onUpdateItem = (updatedItem: CartItemDto) => {
        setCartItemDtoList((prevList) =>
            prevList?.map((prevItem) =>
                updatedItem.cid === prevItem.cid ? updatedItem : prevItem
            )
        )
    };

    const handleOpenTransationDialog = () => {
        setTransactionDialogOpen(true);
    };
    const handleCreateTransactionSuccess = () => {
        setTransactionDialogOpen(false);
    };


    const subtotal = cartItemDtoList ?
        cartItemDtoList!.reduce((acc, item) => acc + item.cartQuantity * item.price, 0) : 0;

    const tax = subtotal / 10;

    const grandTotal = subtotal;
    useEffect(() => {
        if (loginUser) {
            const fetchData = async () => {
                const responseData = await getCartItem();
                setCartItemDtoList(responseData);
            };
            fetchData();
        }

    }, [loginUser])

    return !cartItemDtoList
        ? <LoadingSpinner/>
        : (<Box sx={{
                background: `url(https://images.unsplash.com/photo-1539182972012-585804f77548?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                backgroundPosition: "50% 80%",
                display: 'flex',
                flexDirection: "column",
                alignItems: 'center',
                justifyContent: 'start',
                height: "100%",
                minHeight: "100vh",
                width: "100%",
                pt: 0,
            }}>
                <Box
                    sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        height: "100%",
                        minHeight: "100vh",
                        width: "100%",
                        m: 0, pt: 4,
                    }}
                >{cartItemDtoList.length <= 0 ?
                    <Typography align={"center"} sx={{display: "flex", flexDirection: "column", alignItems: 'center',}}>
                        <img width={600} src={"empty-cart.png"}/>
                        <HomeButton/>
                    </Typography>
                    : <><Typography align={"center"} variant={"h3"}>Your Cart
                        ({cartItemDtoList.length} items)</Typography>
                        <TableContainer sx={{width: "90%", height: "100%", m: 8}}>
                            <Table>
                                <TableHead sx={{backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>
                                    <TableRow>
                                        <TableCell width={"48%"}>Item</TableCell>
                                        <TableCell sx={{fontSize: "1.2rem"}}>Price</TableCell>
                                        <TableCell sx={{fontSize: "1.2rem"}} align={"center"}>Quantity</TableCell>
                                        <TableCell sx={{fontSize: "1.2rem"}} align={"right"}>Total</TableCell>
                                        <TableCell width={32}> </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {cartItemDtoList.map((item) => (
                                        <CartTableRow key={item.cid} item={item} onDeleteItem={onDeleteItem}
                                                      onUpdateItem={onUpdateItem}/>
                                    ))}
                                    <TableRow sx={{backgroundColor: 'rgba(255, 255, 255, 0.85)', p: 4}}>
                                        <TableCell> </TableCell>
                                        <TableCell> </TableCell>
                                        <TableCell colSpan={2}>
                                            <Box
                                                sx={{height:400, display: "flex", flexDirection: "column", alignContent: "center"}}>
                                                <Box height={56} display={"flex"} alignItems={"center"}
                                                     justifyContent={"space-between"}>
                                                    <Typography variant={"h6"}
                                                                fontWeight={"bold"}>Subtotal:</Typography>
                                                    <Typography variant={"h6"}>${subtotal.toFixed(1)}</Typography>
                                                </Box>
                                                <Divider variant="middle"/>
                                                <Box height={56} display={"flex"} alignItems={"center"}
                                                     justifyContent={"space-between"}>
                                                    <Typography variant={"h6"} fontWeight={"bold"}>Sales
                                                        Tax:</Typography>
                                                    <Typography sx={{textDecoration: 'line-through'}} variant={"h6"}>${tax.toFixed(1)}</Typography>
                                                </Box>
                                                <Divider variant="middle"/>
                                                <Box height={56} display={"flex"} alignItems={"center"}
                                                     justifyContent={"space-between"}>
                                                    <Typography variant={"h6"} fontWeight={"bold"}>Grand
                                                        total:</Typography>
                                                    <Typography variant={"h4"}>${grandTotal.toFixed(1)}</Typography>
                                                </Box>
                                                    <BillStepper index={0}/>
                                                <Box  height={72} display={"flex"} alignItems={"center"}
                                                     justifyContent={"end"} alignContent={"center"}>
                                                    <CheckoutButton handleCheckoutOnClick={handleOpenTransationDialog}/>
                                                    <Dialog open={transactionDialogOpen} onClose={() => setTransactionDialogOpen(false)} maxWidth="sm" fullWidth>
                                                        <DialogContent>
                                                            <CreateTransactionPage handleCreateTransactionSuccess={handleCreateTransactionSuccess}/>
                                                        </DialogContent>
                                                    </Dialog>
                                                </Box>
                                            </Box>

                                        </TableCell>
                                        <TableCell> </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer></>
                }
                </Box>
            </Box>

        );
};