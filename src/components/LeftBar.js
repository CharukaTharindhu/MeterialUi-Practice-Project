import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AppsIcon from '@material-ui/icons/Apps';
import CollectionsIcon from '@material-ui/icons/Collections';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import {
  Collections,
  Home,
  MarkunreadTwoTone,
  Person,
  Settings,
  VideocamSharp,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    color: 'white',
    position: 'sticky',
    top: 0,
    paddingTop: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up('sm')]: {
      backgroundColor: 'white',
      color: '#555',
      border: '1px solid #999',
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      fontSize: '18px',
    },
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(3),
      cursor: 'Pointer',
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

function LeftBar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Home Page</Typography>
      </div>
      <div className={classes.item}>
        <Person className={classes.icon} />
        <Typography className={classes.text}>Friends</Typography>
      </div>
      <div className={classes.item}>
        <FormatListBulletedIcon className={classes.icon} />
        <Typography className={classes.text}>List</Typography>
      </div>

      <div className={classes.item}>
        <CameraAltIcon className={classes.icon} />
        <Typography className={classes.text}>Camera</Typography>
      </div>

      <div className={classes.item}>
        <VideocamSharp className={classes.icon} />
        <Typography className={classes.text}>Videos</Typography>
      </div>

      <div className={classes.item}>
        <AppsIcon className={classes.icon} />
        <Typography className={classes.text}>Apps</Typography>
      </div>

      <div className={classes.item}>
        <CollectionsIcon className={classes.icon} />
        <Typography className={classes.text}>Collections</Typography>
      </div>

      <div className={classes.item}>
        <MarkunreadTwoTone className={classes.icon} />
        <Typography className={classes.text}>Market Place</Typography>
      </div>

      <div className={classes.item}>
        <Settings className={classes.icon} />
        <Typography className={classes.text}>Settings</Typography>
      </div>

      <div className={classes.item}>
        <ExitToAppIcon className={classes.icon} />
        <Typography className={classes.text}>Logout</Typography>
      </div>
    </Container>
  );
}

export default LeftBar;
