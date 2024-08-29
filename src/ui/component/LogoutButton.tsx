import Button from "@mui/material/Button";
import * as FirebaseAuthService from "../../authService/FIrebaseAuthService.ts";
import LogoutIcon from '@mui/icons-material/Logout';
import {useNavigate} from "react-router-dom";

export default function LogoutButton() {
    const navigate = useNavigate();
    const handleLogoutOnclick = async () => {
        await FirebaseAuthService.handleSignOut();
        navigate("/");
    }
    return (
        <Button onClick={handleLogoutOnclick}
                sx={{
                    bgcolor: "transparent",
                    '&:hover': {backgroundColor: '#333',}
                }}
                variant={"contained"} endIcon={<LogoutIcon/>}
        >
            LOGOUT
        </Button>
    );
};