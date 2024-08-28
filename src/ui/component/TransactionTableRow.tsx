import {CartItemDto} from "../../type/Cart.type.ts";
import {Alert, TableCell, TableRow} from "@mui/material";
import {useEffect, useState} from "react";
import QuantitySelector from "./QuantitySelector.tsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import {deleteCartItem, patchCartItem} from "../../api/CartApi.ts";
import ShoeSizeSelectorDemo from "./ShoeSizeSelectorDemo.tsx";
import {TransactionItem} from "../../type/Transaction.type.ts";

type Props = {
    item: TransactionItem,
}

export default function TransactionTableRow({ item}: Props) {

    return (
        <TableRow key={item.tpid} sx={{backgroundColor: 'rgba(255, 255, 255, 0.85)', p: 4}}>
            <TableCell><Box
                sx={{display: "flex", alignItems: "center"}}
            ><img width={150} src={item.product.imageUrl} alt={"Item-image"}/>
                <Box marginLeft={4}>
                    <Typography variant={"h4"}>{item.product.name}</Typography>
                    <Typography variant={"h6"}>Size: {item.size}</Typography>
                </Box>
            </Box></TableCell>
            <TableCell sx={{fontSize: "1rem", fontWeight: 500}}>${item.product.price}.0</TableCell>
            <TableCell align={"center"}><Box
                sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography variant={"h5"}>{item.quantity}</Typography>
            </Box>
                </TableCell>
            <TableCell sx={{fontSize: "1.1rem", fontWeight: 700}} align={"right"}
            >${item.subtotal}.0

            </TableCell>
            <TableCell></TableCell>
        </TableRow>
    )
};