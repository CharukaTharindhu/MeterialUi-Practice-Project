import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Fab,
  Tooltip,
  Container,
  TextField,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  Button,
  Snackbar,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: 10,
    right: 10,
  },
  container: {
    width: 500,
    height: 550,
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '100vq',
      height: '100vh',
    },
  },
  form: {
    padding: theme.spacing(1),
  },
  item: {
    marginTop: theme.spacing(3),
  },
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  button: {
    marginRight: 215,
    [theme.breakpoints.down('sm')]: {
      marginRight: 100,
    },
  },
}));

const statuses = [
  {
    value: 'Public',
    label: 'public',
  },
  {
    value: 'Private',
    label: 'private',
  },
  {
    value: 'Unlisted',
    label: 'unlisted',
  },
];

function Add() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openAlerts, setOpenAlerts] = useState(false);
  const [status, setStatus] = useState('Public');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const Alert = (props) => {
    return <MuiAlert elevation={6} variant='filled' {...props} />;
  };

  return (
    <>
      <Tooltip
        title='Add a new post'
        aria-label='add'
        onClick={() => setOpen(true)}
      >
        <Fab color='primary' className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>
          <form className={classes.form}>
            <div className={classes.item}>
              <TextField
                id='standard-basic'
                label='Title'
                size='small'
                style={{ width: '100%' }}
              ></TextField>
            </div>

            <div className={classes.item}>
              <TextField
                id='outlined-multiline-static'
                multiline
                rows={4}
                defaultValue='Tell your story...'
                variant='outlined'
                label='Description'
                size='small'
                style={{ width: '100%' }}
              ></TextField>
            </div>
            <div className={classes.item}>
              <TextField
                id='standard-select-currency'
                select
                label='Select'
                value={status}
                onChange={handleChange}
                helperText='Please select your status'
              >
                {statuses.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className={classes.item}>
              <FormLabel component='legend'>Who can comment?</FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value='Any one'
                  control={<Radio size='small' />}
                  label='Any one'
                />
                <FormControlLabel
                  value='Friends'
                  control={<Radio size='small' />}
                  label='Friends'
                />
                <FormControlLabel
                  value='No One'
                  control={<Radio size='small' />}
                  label='No One'
                />
                <FormControlLabel
                  value='Custom'
                  disabled
                  control={<Radio size='small' />}
                  label='Custom (Premium)'
                />
              </RadioGroup>
            </div>
            <div className={classes.item}>
              <Button
                variant='outlined'
                color='secondary'
                className={classes.button}
                startIcon={<DeleteIcon />}
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                variant='outlined'
                color='primary'
                startIcon={<SaveIcon />}
                onClick={() => setOpenAlerts(true)}
              >
                Create
              </Button>
            </div>
            <div className={classes.root}>
              <Snackbar
                open={openAlerts}
                autoHideDuration={2000}
                onClose={() => setOpenAlerts(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              >
                <Alert onClose={() => setOpenAlerts(false)} severity='success'>
                  This is a success message!
                </Alert>
              </Snackbar>
            </div>
          </form>
        </Container>
      </Modal>
    </>
  );
}

export default Add;
