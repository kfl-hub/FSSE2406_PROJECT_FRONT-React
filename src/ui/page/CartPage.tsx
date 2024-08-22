import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import React from "react";
import QuantitySelector from "../component/QuantitySelector.tsx";

export default function CartPage() {
    return (
        <Box sx={{ //inner container
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            display: 'flex',
            flexDirection: "column",
            alignItems: 'center',
            justifyContent: 'start',
            height: '100vh',
            width: "100%",
            pt: 4
        }}>
            <Typography variant={"h3"}>Your Cart (### items)</Typography>
            <TableContainer sx={{width: "90%", m:8}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{fontSize:"1.2rem"}}>Item</TableCell>
                            <TableCell sx={{fontSize:"1.2rem"}}>Price</TableCell>
                            <TableCell sx={{fontSize:"1.2rem"}} align={"center"}>Quantity</TableCell>
                            <TableCell sx={{fontSize:"1.2rem"}} align={"right"}>Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Item1</TableCell>
                            <TableCell>price1</TableCell>
                            <TableCell>qty1</TableCell>
                            <TableCell>total1</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Item1</TableCell>
                            <TableCell>price1</TableCell>
                            <TableCell>qty1</TableCell>
                            <TableCell>total1</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

        </Box>
    );
};