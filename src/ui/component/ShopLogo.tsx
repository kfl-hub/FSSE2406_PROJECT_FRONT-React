import Typography from "@mui/material/Typography";
import {useNavigate} from "react-router-dom";
import {Tooltip, useTheme} from "@mui/material";

type Props={
    size:number;
}
export default function ShopLogo({size}:Props) {
    const navigate = useNavigate();
    const handleNavigateToFront = () => {
        navigate("/")
    }
    const theme=useTheme();


    return(<Tooltip title="Home" placement={"right"}>
        <Typography onClick={handleNavigateToFront} component="div"
                    sx={{ml: '4%', mr: '4%', mb: -5,mt: -1, position: 'absolute',
                        [theme.breakpoints.down('xl')]: {
                            position: 'static',mb: -3
                        },}}>
        <img width={size} src={"/shopLogo.png"}/>
    </Typography>
    </Tooltip>);
};