
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';

export default function BottomNav() {

  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <BottomNavigation
        showLabels
      >
        <BottomNavigationAction onClick={scrollToTop} label="Top" icon={<VerticalAlignTopIcon />} />
        {/*<BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />*/}

      </BottomNavigation>
    </Box>
  );
}