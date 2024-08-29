import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import {useNavigate} from "react-router-dom";


export default function HomeButton() {
    const navigate = useNavigate();
    const handleNavigateToFront = () => {
        navigate("/")
    }

    return (
        <Button color="primary" variant={"contained"} sx={{mt: 2, fontSize: "1rem"}}
                onClick={handleNavigateToFront}
        endIcon={<HomeIcon fontSize={"inherit"}/>}>
           Go to Home
        </Button>)

};