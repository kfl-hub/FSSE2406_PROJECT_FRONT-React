import BillStepper from "../component/BillStepper.tsx";
import Typography from "@mui/material/Typography";
import HomeButton from "../component/HomeButton.tsx";
import {Box} from '@mui/material';
import {useParams} from "react-router-dom";
import {useContext, useEffect} from "react";
import {finishTransaction} from "../../api/TransactionApi.ts";
import {LoginUserContext} from "../../context/LoginUserContext.ts";
import {useCart} from "../../context/CartContext.tsx";


const ThankYouPage = () => {
  const {tid} = useParams<{ tid: number }>();
  const loginUser = useContext(LoginUserContext);
const {setCartQuantity}=useCart();
  
  useEffect(() => {
      const callFinish = async () => {
        const response = await finishTransaction(tid);
        if (response) {
          setCartQuantity(0);
        } else {
          console.error("finish trans api failed")
        }
      }
      if (loginUser){
        try{
          callFinish();
        }catch (err){
          console.error(err);
        }
      }
    }
    , [loginUser]);
  return (
    <Box sx={{
      background: `url(https://images.unsplash.com/photo-1539182972012-585804f77548?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
      backgroundPosition: "50% 80%",
      display: 'flex',
      flexDirection: "column",
      alignItems: 'center',
      alignContent: "center",
      justifyContent: 'start',
      height: "100%",
      minHeight: "100vh",
      width: "100%",
      pt: 0,
    }}>
      <Box
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          height: "100%",
          minHeight: "100vh",
          width: "100%",
          m: 0, pt: 4,
        }}
      >
        
        
        <Typography align={"center"} sx={{display: "flex", flexDirection: "column", alignItems: 'center',}}>
          <Box width={"50%"}>
            <BillStepper index={4}/>
          </Box>
          <img width={600} src={"/thank-you.png"}/>
          <HomeButton/>
        </Typography>
      </Box>
    </Box>
  );
};

export default ThankYouPage;
