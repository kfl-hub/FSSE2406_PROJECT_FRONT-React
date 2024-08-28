import {useContext, useEffect} from "react";
import {LoginUserContext} from "../../context/LoginUserContext.ts";
import Box from "@mui/material/Box";
import LogoutButton from "./LogoutButton.tsx";
import {Avatar, Divider, Typography} from "@mui/material";
import CartButton from "./CartButton.tsx";
import {getCartQuantity} from "../../api/CartApi.ts";
import {useCart} from "../../context/CartContext.tsx";


export default function NavMenuWeb() {
    const loginUser = useContext(LoginUserContext);
    const {cartQuantity,setCartQuantity} = useCart();

    useEffect(() => {
        if (loginUser) {
            const fetchData = async () => {
                const response: number | undefined = await getCartQuantity();
                setCartQuantity(response);
            };
            fetchData();
        }
    }, [cartQuantity]);


    return (<Box width={450} height={56}
                 sx={{
                     backgroundColor: '#111111', borderTopLeftRadius: 70, borderBottomLeftRadius: 70,
                     display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'
                 }}>
            <Avatar sx={{backgroundColor: "orange", ml: -4}} children={`${loginUser!.email.split('@')[0][0]}`}/>
            <Box flexDirection={"column"}>
                <Typography sx={{ml: -1}} variant={"body2"}>Welcome back!</Typography>
                <Typography>
                    {loginUser!.email}</Typography>
            </Box>
            <Divider sx={{bgcolor: "white"}} variant={"middle"} orientation="vertical" flexItem/>
            <Box><CartButton cartQuantity={cartQuantity ? cartQuantity : 0}/></Box>
            <Divider sx={{bgcolor: "white"}} variant={"middle"} orientation="vertical" flexItem/>
            <Box><LogoutButton/></Box>

        </Box>


    )
};