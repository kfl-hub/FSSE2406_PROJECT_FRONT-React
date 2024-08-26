import Button from "@mui/material/Button";
import * as FirebaseAuthService from "../../authService/FIrebaseAuthService.ts";
import LogoutIcon from '@mui/icons-material/Logout';
export default function LogoutButton() {
    return(
    <Button onClick={() => FirebaseAuthService.handleSignOut()}
            sx={{bgcolor:"transparent",
                '&:hover': {backgroundColor: '#333',}}}
            variant={"contained"} endIcon={<LogoutIcon/>}
    >
        LOGOUT
    </Button>
    );
};