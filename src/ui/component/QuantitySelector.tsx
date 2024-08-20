import {useEffect, useState} from 'react';
import {Box, Button, TextField} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function QuantitySelector() {
const [removeDisable,setRemoveDisable]=useState(true);
    const [addDisable,setAddDisable]=useState(false);
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => setQuantity((prev) => prev + 1);
    const handleDecrement = () => {setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    };
useEffect(()=>{
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
                onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                type="number"
                inputProps={{min: 1}}
                sx={{width: 80, textAlign: 'center', textJustify: "center"}}
            />
            <Button onClick={handleIncrement} variant={"contained"} disabled={addDisable}>
                <AddIcon/>
            </Button>
        </Box>
    );
}

export default QuantitySelector;