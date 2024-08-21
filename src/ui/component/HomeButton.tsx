import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import React from "react";
import {useNavigate} from "react-router-dom";


export default function HomeButton() {
    const navigate = useNavigate();
    const handleNavigateToFront = () => {
        navigate("/")
    }

    return (
        <Button variant={"contained"} sx={{mt: 2, fontSize: "1.2rem"}}
                onClick={handleNavigateToFront}>
            <HomeIcon fontSize={"large"}/>Home
        </Button>)

};