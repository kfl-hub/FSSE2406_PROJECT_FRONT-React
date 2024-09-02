
import { Box, Typography } from '@mui/material';
import HomeButton from "../component/HomeButton.tsx";

const ErrorPage = () => {



    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                background: `url('/runner-3601960_1920.jpg'), radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                textAlign: 'center',
            }}
        >
            <Typography variant="h3" color="white" gutterBottom>
                Oops! Page Not Found
            </Typography>
            <Typography variant="h6" color="white" gutterBottom>
                The page you're looking for doesn't exist.
            </Typography>
<HomeButton/>
        </Box>
    );
};

export default ErrorPage;
