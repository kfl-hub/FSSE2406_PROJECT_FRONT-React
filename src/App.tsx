import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { RouterProvider} from "react-router-dom";
import {router} from "./config/router/ReactRouterConfig.tsx";
import {createTheme, ThemeProvider} from "@mui/material";
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
console.log("Run App")
  return (
<ThemeProvider theme={myTheme}>
      <RouterProvider router={router}/>
</ThemeProvider>
  )
}

export default App
