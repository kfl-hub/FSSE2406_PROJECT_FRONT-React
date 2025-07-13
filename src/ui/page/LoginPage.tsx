import React, {useContext, useState} from 'react';

import {Alert, Box, Button, CircularProgress, Container, Divider, TextField} from '@mui/material';
import * as FirebaseAuthService from '../../authService/FIrebaseAuthService.ts';
import {LoginUserContext} from "../../context/LoginUserContext.ts";
import {GoogleLoginButton} from "react-social-login-buttons";

type Props={
    onLoginSuccess:()=>void,
}


const LoginPage = ({onLoginSuccess}:Props) => {
    const [email, setEmail] = useState('user@user.com');
    const [password, setPassword] = useState('password');
    const [isLoginFailed, setIsLoginFailed] = useState(false);
    const loginUser = useContext(LoginUserContext);

    const handleSubmitEmailAndPassword = async (e: React.FormEvent) => {
        e.preventDefault(); //must: avoid reload
        const loginResult = await FirebaseAuthService.handleSignInWithEmailAndPassword(email, password);
        loginResult ? onLoginSuccess() : setIsLoginFailed(true)
    };

    const handleGoogleLogin=async ()=>{
        const loginResult= await FirebaseAuthService.handleSignInWithGoogle();
        if (loginResult) {
            onLoginSuccess();
        }else{
            setIsLoginFailed(true);
        }

    }
    return (
        <Container sx={{backgroundColor: "transparent"}} component="main" maxWidth="xs">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mb: 2,
                }}
            >
                <Box sx={{m: -4}}><img
                    src={"/welcome.avif"}
                    width={300} height={200}/>
                </Box>
                {isLoginFailed ? <Alert severity="error">Login Unsuccessful</Alert> : <></>}
                <Box
                    component="form"
                    onSubmit={handleSubmitEmailAndPassword}
                    sx={{mt: 1}}
                >
                    <TextField
                        label="Email"
                        variant="outlined"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        fullWidth
                        margin="normal"
                    />
                    <Button
                        sx={{mt: 2, color: 'white', backgroundColor: 'black'}} type="submit" variant="contained"
                        color={"primary"} fullWidth>
                        {loginUser === null ? "Login" : <CircularProgress/>}
                    </Button>
                </Box>
            </Box>
            <Divider variant={"middle"}>or</Divider>
            <GoogleLoginButton onClick={handleGoogleLogin}
                               style={{backgroundColor: 'black', color: 'white'}}
            onMouseEnter={()=>{}}/>
        </Container>
    );
};

export default LoginPage;
