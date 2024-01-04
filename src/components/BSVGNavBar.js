import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

class BSVGNavBar extends Component {

  render() {
    return (
      <AppBar position="static" elevation={0} sx={{ backgroundColor: '#fff', color: '#000' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: 'red' }}>
            Big Sky Venture Group
          </Typography>
          {/* Add Button components for each navigation item */}
          <Button>About</Button>
          <Button>Food Ingredients</Button>
          <Button>Grains & Feed Ingredients</Button>
          <Button>Energy</Button>
          <Button>Growers & Suppliers</Button>
          <Button>Assets</Button>
          <Button>Brands</Button>
          <Button>Contact Us</Button>
          {/* The Get Price button has a different style */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'red',
              color: '#fff',
              '&:hover': { backgroundColor: 'darkred' },
            }}
          >
            Get Price
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default BSVGNavBar;
