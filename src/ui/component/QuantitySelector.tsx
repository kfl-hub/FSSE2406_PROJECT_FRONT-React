import {useEffect, useState} from 'react';
import {Box, Button, TextField} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

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
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                width: 220,
            }}
        >
            <Button onClick={handleDecrement} variant={"contained"} disabled={removeDisable}>
                <RemoveIcon/>
            </Button>
            <TextField
                value={quantity}
                variant={"standard"}
                onChange={(e) => (handleQuantityChange(e.target.value))}
                inputProps={{min: 1,style: { textAlign: 'center' }}}
                sx={{width: 50}}
            />
            <Button onClick={handleIncrement} variant={"contained"} disabled={cartDisable}>
                <AddIcon/>
            </Button>
        </Box>
    );
}

export default QuantitySelector;