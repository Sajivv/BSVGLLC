import { AppBar, Toolbar, Button, Container } from '@mui/material';
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function BSVGNavBar() {

  return (
    <AppBar style={{ minHeight: '50px' }}>
        <Toolbar style={{display: 'flex', justifyContent:'space-between'}}>
          <div>
            <div style={{width: '40px', height: '40px', backgroundColor: '#FFFF' }}/>
          </div>
          <div>
            <Button>About Us</Button>
            <Button>Grain Ingredients</Button>
            <Button>Feed Ingredients</Button>
            <Button>Transloading</Button>
            <Button>Contact Us</Button>
          </div>
          <div>
          <InstagramIcon />
          <LinkedInIcon/>
          </div>
        </Toolbar>
    </AppBar>

  )
}

export default BSVGNavBar;