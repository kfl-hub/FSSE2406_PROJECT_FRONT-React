import Typography from "@mui/material/Typography";
import React from "react";
import {useNavigate} from "react-router-dom";
import {Tooltip} from "@mui/material";

export default function ShopLogo() {
    const navigate = useNavigate();
    const handleNavigateToFront = () => {
        navigate("/")
    }


    return(<Tooltip title="Home" placement={"right"}>
        <Typography onClick={handleNavigateToFront} component="div" sx={{ml: 30, mr: 30, mb: -5, position: 'absolute'}}>
        <img width={200} src={"/shopLogo.png"}/>
    </Typography>
    </Tooltip>);
};