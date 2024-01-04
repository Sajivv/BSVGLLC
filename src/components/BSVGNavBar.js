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
          <Button sx={{ color: '#000', mr: 2, '&:hover': { backgroundColor: 'lightgray' } }}>
            About
          </Button>
          <Button sx={{ color: '#000', mr: 2, '&:hover': { backgroundColor: 'lightgray' } }}>
            Food Ingredients
          </Button>
          <Button sx={{ color: '#000', mr: 2, '&:hover': { backgroundColor: 'lightgray' } }}>
            Grains & Feed Ingredients
          </Button>
          <Button sx={{ color: '#000', mr: 2, '&:hover': { backgroundColor: 'lightgray' } }}>
            Energy
          </Button>
          <Button sx={{ color: '#000', mr: 2, '&:hover': { backgroundColor: 'lightgray' } }}>
            Growers & Suppliers
          </Button>
          <Button sx={{ color: '#000', mr: 2, '&:hover': { backgroundColor: 'lightgray' } }}>
            Assets
          </Button>
          <Button sx={{ color: '#000', mr: 2, '&:hover': { backgroundColor: 'lightgray' } }}>
            Brands
          </Button>
          <Button sx={{ color: '#000', mr: 2, '&:hover': { backgroundColor: 'lightgray' } }}>
            Contact Us
          </Button>
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
