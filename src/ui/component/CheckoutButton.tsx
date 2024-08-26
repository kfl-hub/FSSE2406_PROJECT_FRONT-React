
import Button from "@mui/material/Button";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

type Props={
    handleCheckoutOnClick:()=>void;
}

export default function CheckoutButton({handleCheckoutOnClick}:Props) {
    return (
        <Button color="primary" variant={"contained"} sx={{mt: 2, fontSize: "1.5rem"}}
                onClick={handleCheckoutOnClick}
                endIcon={<ShoppingBasketIcon style={{ fontSize: 28 }} />}>
            Check out
        </Button>)

};