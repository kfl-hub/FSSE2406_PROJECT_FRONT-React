import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import AllOutIcon from '@mui/icons-material/AllOut';

export default function AllProductButton() {
    const navigate = useNavigate();
    const handleNavigateToProduct = () => {
        navigate("/product")
    }

    return (
        <Button color="primary" variant={"contained"}  sx={{mt: 2,width:500,height:100, fontSize: "2rem"}}
                onClick={handleNavigateToProduct}
        endIcon={<AllOutIcon style={{ fontSize: "3rem" }}/>}>
           All Products
        </Button>)

};