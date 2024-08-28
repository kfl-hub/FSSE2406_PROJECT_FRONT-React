import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { RouterProvider} from "react-router-dom";
import {router} from "./config/router/ReactRouterConfig.tsx";
import {createTheme, ThemeProvider} from "@mui/material";
import { useEffect, useState} from "react";
import {UserData} from "./type/User.type.ts";
import * as FirebaseAuthService from "./authService/FIrebaseAuthService.ts";
import {LoginUserContext} from "./context/LoginUserContext.ts";
import {CartQuantityProvider} from "./context/CartContext.tsx";
import FilterProvider from "./context/FilterContext.tsx";


const myTheme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            color: 'white',
            backgroundColor: 'black',
            '&:hover': {
              backgroundColor: '#333', // Optional: Darker shade for hover state
            },
          },
        },
      ],
    },
  },
});
function App() {
const [loginUser,setLoginUser]=useState<UserData|null|undefined>(undefined);


  useEffect(()=>{
    FirebaseAuthService.handleOnAuthStateChanged(setLoginUser);
  },[])


  return (
<ThemeProvider theme={myTheme}>
<LoginUserContext.Provider value={loginUser}>
  <FilterProvider>
  <CartQuantityProvider>
      <RouterProvider router={router}/>
  </CartQuantityProvider>
  </FilterProvider>
</LoginUserContext.Provider>
</ThemeProvider>
  )
}

export default App
