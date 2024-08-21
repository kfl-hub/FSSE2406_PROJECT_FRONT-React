import Button from "@mui/material/Button";
import React from "react";
import * as FirebaseAuthService from "../../authService/FIrebaseAuthService.ts";

export default function LogoutButton() {
    return(
    <Button onClick={() => FirebaseAuthService.handleSignOut()} variant={"contained"}>LOGOUT</Button>
    );
};