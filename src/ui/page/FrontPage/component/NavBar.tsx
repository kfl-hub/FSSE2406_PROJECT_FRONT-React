import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {createTheme, ThemeProvider} from "@mui/material";

export default function NavBar() {
  const navBarTheme=createTheme({
    components:{
      MuiAppBar:{
        styleOverrides:{
          root:{
            background: 'linear-gradient(180deg, rgba(0,0,0,0.85) 5%, rgba(0,0,0,0) 100%)',
          }
        }
      }
    }
  })
  return (
    <ThemeProvider theme={navBarTheme}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar variant={"regular"} sx={{ justifyContent: 'space-between' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{mb:-5}} component="div" >
            <img width={200} src={"/shopLogo.png"}/>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}