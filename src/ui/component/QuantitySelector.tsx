import {useEffect, useState} from 'react';
import {Box, Button, TextField} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from "@mui/material/IconButton";

type Props={
    cartDisable:boolean,
    quantity:number,
    handleIncrement:()=>void,
    handleDecrement:()=>void,
    handleQuantityChange:(value:string)=>void
}

function QuantitySelector({cartDisable,quantity,handleDecrement,handleIncrement,handleQuantityChange}:Props) {
const [removeDisable,setRemoveDisable]=useState(true);

useEffect(():void=>{
    (quantity<=1)?
        setRemoveDisable(true):
        setRemoveDisable(false)
},[quantity])
    return (
        <Box
            border={2}
            borderRadius={2}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent:"center",
                gap: 0,
                width: 128,
            }}
        >
            <IconButton sx={{fontSize:20}} color={"inherit"} onClick={handleDecrement} disabled={removeDisable}>
                <RemoveIcon fontSize={"inherit"}/>
            </IconButton>
            <TextField
                value={quantity}
                variant={"outlined"}
                onChange={(e) => (handleQuantityChange(e.target.value))}
                inputProps={{min: 1,style: { textAlign: 'center' }}}
                sx={{borderLeft:2,borderRight:2,"& fieldset": { border: 'none' }}}
            />
            <IconButton sx={{fontSize:20}} color={"inherit"} onClick={handleIncrement}  disabled={cartDisable}>
                <AddIcon fontSize={"inherit"}/>
            </IconButton>
        </Box>
    );
}

export default QuantitySelector;