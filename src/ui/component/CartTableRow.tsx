import {CartItemDto} from "../../type/Cart.type.ts";
import {TableCell, TableRow} from "@mui/material";
import {useEffect, useState} from "react";
import QuantitySelector from "./QuantitySelector.tsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import {deleteCartItem, patchCartItem} from "../../api/CartApi.ts";
import ShoeSizeSelectorDemo from "./ShoeSizeSelectorDemo.tsx";

type Props = {
    item: CartItemDto,
    onDeleteItem: (cid: number) => void,
    onUpdateItem: (responseItem:CartItemDto) => void,
}

export default function CartTableRow({ item, onDeleteItem, onUpdateItem}: Props) {
    const [quantity, setQuantity] = useState<number>(1);
    const [sizeValue, setSizeValue] = useState<string>('');

    useEffect(() => {
        setQuantity(item.cartQuantity)
        setSizeValue(item.size!);
    }, []);

    useEffect(() => {

        const updateItem = async () => {
            if (quantity !== item.cartQuantity || sizeValue !== item.size) {
                await handleUpdateItem();
            }
        };
        if (sizeValue !== '') {
            updateItem();
        }

    }, [quantity, sizeValue]);

    const handleIncrement = () => {
        setQuantity((prev) => (prev + 1))
    }
    const handleDecrement = () => {
        setQuantity((prev) => (prev >= 1 ? prev - 1 : prev))
    }
    const handleQuantityChange = (value: string) => {
        setQuantity((Math.max(1, Number(value))))
    }
    const handleOnSizeValueChange = (sizeValue: string) => {
        setSizeValue(sizeValue);
        console.log("size changed")
    }
    const handleDeleteOnClick = async () => {
        if (await deleteCartItem(item.cid)) {
            onDeleteItem(item.cid);
        }
    }

    const handleUpdateItem = async () => {
        const responseItem = await patchCartItem(item.cid, quantity, sizeValue);
        if (responseItem) {
            onUpdateItem(responseItem);
        }
    }

    return (
        <TableRow key={item.cid} sx={{backgroundColor: 'rgba(255, 255, 255, 0.85)', p: 4}}>
            <TableCell><Box
                sx={{display: "flex", alignItems: "center"}}
            ><img width={150} src={item.imageUrl} alt={"Item-image"}/>
                <Box marginLeft={4}>
                    <Typography variant={"h4"}>{item.name}</Typography>
                    {item.category.includes("Shoe") &&
                    <ShoeSizeSelectorDemo category={item.category} value={sizeValue}
                                          handleOnSizeValueChange={handleOnSizeValueChange}/>}
                </Box>
            </Box></TableCell>
            <TableCell sx={{fontSize: "1rem", fontWeight: 500}}>${item.price}.0</TableCell>
            <TableCell align={"center"}><Box
                sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <QuantitySelector
                cartDisable={false} quantity={quantity}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                handleQuantityChange={handleQuantityChange}
                handleUpdateItem={handleUpdateItem}/></Box></TableCell>
            <TableCell sx={{fontSize: "1.1rem", fontWeight: 700}} align={"right"}
            >${quantity * item.price}.0

            </TableCell>
            <TableCell><IconButton color={"inherit"} sx={{'&:hover': {color: "red"}}}
                                   onClick={handleDeleteOnClick}><DeleteIcon/></IconButton></TableCell>
        </TableRow>
    )
};