import {CartItemDto} from "../../type/Cart.type.ts";
import {TableCell, TableRow} from "@mui/material";
import {useState} from "react";
import QuantitySelector from "./QuantitySelector.tsx";

type Props={
    key:number,
    item:CartItemDto,
}

export default function CartTableRow({key, item}: Props) {
    const [quantity, setQuantity] = useState<number>(1);
    const [sizeValue, setSizeValue] = useState<string | null>(null);

    const handleIncrement = () => {
        setQuantity((prev) => (prev + 1))
    }
    const handleDecrement = () => {
        setQuantity((prev) => (prev >= 1 ? prev - 1 : prev))
    }
    const handleQuantityChange = (value: string) => {
        setQuantity((Math.max(1, Number(value))))
    }


    return(
        <TableRow key={key}>
            <TableCell>{item.name  }</TableCell>
            <TableCell sx={{fontSize:"1rem",fontWeight:500}}>${item.price}.0</TableCell>
            <TableCell><QuantitySelector cartDisable={false} quantity={quantity} handleIncrement={handleIncrement} handleDecrement={handleDecrement} handleQuantityChange={handleQuantityChange}/></TableCell>
            <TableCell>{item.cartQuantity*item.price }</TableCell>

        </TableRow>
    )
};