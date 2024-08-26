import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {useNavigate} from "react-router-dom";
import Badge from "@mui/material/Badge";

type Props = {
  cartQuantity:number
}

export default function CartButton({cartQuantity}:Props) {
  const navigate = useNavigate();
  
  return(
    <Badge badgeContent={cartQuantity} color={"error"}>
    <Button onClick={() => navigate("/cart")}
            sx={{bgcolor:"transparent",
              '&:hover': {backgroundColor: '#333',}}}
            variant={"contained"} endIcon={<ShoppingCartIcon/>}
    >
      Cart
    </Button>
    </Badge>
  );
};