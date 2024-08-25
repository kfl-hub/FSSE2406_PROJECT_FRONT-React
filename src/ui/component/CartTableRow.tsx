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
  key: number,
  item: CartItemDto,
  onDeleteItem: (cid: number) => void,
  onUpdateItem:(cid:number,quantity:number,size:string)=>void,
}

export default function CartTableRow({key, item, onDeleteItem,onUpdateItem}: Props) {
  const [quantity, setQuantity] = useState<number>(1);
  const [sizeValue, setSizeValue] = useState<string>('');

  useEffect(() => {
    setQuantity(item.cartQuantity)
    setSizeValue(item.size);
  }, []);

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
  }
  const handleDeleteOnClick = async () => {
    if (await deleteCartItem(item.cid)) {
      onDeleteItem(item.cid);
    }
  }

  const handleUpdateItem = async () => {
    if (await patchCartItem(item.cid, item.cartQuantity, item.size)) {
      onUpdateItem(item.cid,item.cartQuantity,item.size);
    }
  }


  return (
    <TableRow key={key} sx={{backgroundColor: 'rgba(255, 255, 255, 0.85)', p: 4}} onMouseLeave={handleUpdateItem}>
      <TableCell><Box
        sx={{display: "flex", alignItems: "center"}}
      ><img width={150} src={item.imageUrl} alt={"Item-image"}/>
        <Box marginLeft={4}>
          <Typography variant={"h4"}>{item.name}</Typography>
          <ShoeSizeSelectorDemo category={item.category} value={sizeValue}
                                handleOnSizeValueChange={handleOnSizeValueChange}/>
        </Box>
      </Box></TableCell>
      <TableCell sx={{fontSize: "1rem", fontWeight: 500}}>${item.price}.0</TableCell>
      <TableCell align={"center"}><Box
        sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><QuantitySelector
        cartDisable={false} quantity={quantity}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleQuantityChange={handleQuantityChange}/></Box></TableCell>
      <TableCell sx={{fontSize: "1.1rem", fontWeight: 700}} align={"right"}
      >${item.cartQuantity * item.price}.0

      </TableCell>
      <TableCell><IconButton color={"inherit"} sx={{'&:hover': {color: "red"}}}
                             onClick={handleDeleteOnClick}><DeleteIcon/></IconButton></TableCell>
    </TableRow>
  )
};