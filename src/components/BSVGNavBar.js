import React from "react";
import { AppBar, Toolbar, Typography, Button, withStyles} from '@mui/material';

// Custom styles for the AppBar
const styles = theme => ({
    appBar: {
      backgroundColor: '#fff',
      color: '#000',
    },
    title: {
      flexGrow: 1,
      color: 'red', // Adjust the color to match the branding
    },
    navButton: {
      color: '#000',
      marginRight: theme.spacing(2),
      '&:hover': {
        backgroundColor: 'lightgray', // Adjust hover color as needed
      },
    },
    getQuoteButton: {
      backgroundColor: 'red', // Use the brand's red color
      color: '#fff',
      '&:hover': {
        backgroundColor: 'darkred', // Darken the red on hover
      },
    },
  });
  

class BSVGNavBar extends React.Component {
    render() {
        const { classes } = this.props;
    
        return (
          <AppBar position="static" elevation={0} className={classes.appBar}>
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Big Sky Venture Group
              </Typography>
              {/* Add Button components for each navigation item */}
              <Button className={classes.navButton}>About</Button>
              <Button className={classes.navButton}>Food Ingredients</Button>
              <Button className={classes.navButton}>Grains & Feed Ingredients</Button>
              <Button className={classes.navButton}>Energy</Button>
              <Button className={classes.navButton}>Growers & Suppliers</Button>
              <Button className={classes.navButton}>Assets</Button>
              <Button className={classes.navButton}>Brands</Button>
              <Button className={classes.navButton}>Contact Us</Button>
              {/* The Get Price button has a different style */}
              <Button variant="contained" className={classes.getQuoteButton}>
                Get Price
              </Button>
            </Toolbar>
          </AppBar>
        );
      }


}

export default withStyles(styles)(BSVGNavBar);