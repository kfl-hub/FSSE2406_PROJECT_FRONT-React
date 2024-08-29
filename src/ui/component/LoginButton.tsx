import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import Button from "@mui/material/Button";
import {useState} from "react";
import {Dialog, DialogContent} from "@mui/material";
import LoginPage from "../page/LoginPage.tsx";


export default function LoginButton() {
    const [open, setOpen] = useState(false);

    const handleOpenDialog = () => {
        setOpen(true);
    };

    const handleLoginSuccess = () => {
        setOpen(false);
    };

    return (
        <>
        <Button sx={{width: 200,bgcolor:"black"}}
                size={"large"}
                color="inherit"
                endIcon={<><FacebookIcon sx={{mr: 1}}/><GoogleIcon sx={{mr: 1}}/></>}
                onClick={handleOpenDialog}>
            Login
        </Button>
    <Dialog open={open} onClose={()=>setOpen(false)} maxWidth="sm" fullWidth>
        <DialogContent>
            <LoginPage onLoginSuccess={handleLoginSuccess} />
        </DialogContent>
    </Dialog>
    </>
    );
}