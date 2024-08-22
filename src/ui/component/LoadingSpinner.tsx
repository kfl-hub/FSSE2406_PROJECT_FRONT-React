import {CircularProgress} from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

export default function LoadingSpinner() {
    return(
        <Box sx={{ //Spinner container
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            display: 'flex',
            flexDirection: "row",
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            minWidth: '100%',
            pt: 4
        }}>
            <CircularProgress size={150}/>
        </Box>
)
};