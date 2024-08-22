import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import React, {useContext, useEffect, useState} from "react";
import {CartItemDto} from "../../type/Cart.type.ts";
import {LoginUserContext} from "../../context/LoginUserContext.ts";
import {getCartItem} from "../../api/CartApi.ts";
import LoadingSpinner from "../component/LoadingSpinner.tsx";
import CartTableRow from "../component/CartTableRow.tsx";

export default function CartPage() {
    const [cartItemDtoList, setCartItemDtoList] = useState<CartItemDto[] | undefined>(undefined);
    const loginUser = useContext(LoginUserContext);


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
        : (
            <Box sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                display: 'flex',
                flexDirection: "column",
                alignItems: 'center',
                justifyContent: 'start',
                height: '100vh',
                width: "100%",
                pt: 4,
            }}>
                <Typography variant={"h3"}>Your Cart ({cartItemDtoList.length} items)</Typography>
                <TableContainer sx={{width: "90%", m: 8}}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{fontSize: "1.2rem"}}>Item</TableCell>
                                <TableCell sx={{fontSize: "1.2rem"}}>Price</TableCell>
                                <TableCell sx={{fontSize: "1.2rem"}} align={"center"}>Quantity</TableCell>
                                <TableCell sx={{fontSize: "1.2rem"}} align={"right"}>Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cartItemDtoList.map((item) => (
                                <CartTableRow key={item.cid} item={item}/>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        );
};