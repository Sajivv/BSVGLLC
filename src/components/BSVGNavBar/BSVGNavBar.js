import React from 'react';
import { Button, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './BSVGNavBar.css'; // Assume you have a corresponding CSS file

function BSVGNavBar() {
  return (
    <div className="nav-bar">
      <div className="nav-section">
        <div className="logo-placeholder" style={{width: '40px', height: '40px', backgroundColor: '#FFFF'}} />
      </div>
      <div className="nav-section">
        <Button>About Us</Button>
        <Button>Grain Ingredients</Button>
        <Button>Feed Ingredients</Button>
        <Button>Transloading</Button>
        <Button>Contact Us</Button>
      </div>
      <div className="nav-section">
        <IconButton> <InstagramIcon /> </IconButton>
        <IconButton> <LinkedInIcon/> </IconButton>
      </div>
    </div>
  );
}

export default BSVGNavBar;
