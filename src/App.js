import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import LeftBar from './components/LeftBar';
import { Grid } from '@material-ui/core';
import Feed from './components/Feed';
import RightBar from './components/RightBar';
import Add from './components/Add';

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down('sm')]: { display: 'none' },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <LeftBar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <RightBar />
        </Grid>
      </Grid>
      <Add />
    </div>
  );
}

export default App;
