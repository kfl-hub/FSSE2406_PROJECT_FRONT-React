import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';

export default function BottomNav() {
  const [value, setValue] = React.useState(0);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction onClick={scrollToTop} label="Top" icon={<VerticalAlignTopIcon />} />
        {/*<BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />*/}


      </BottomNavigation>
    </Box>
  );
}