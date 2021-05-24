import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import React from 'react';
import './header.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    fontType: 'bold',
    fontFamily: 'Courier, sans-serif', 
    fontSize: '35px', 
    color: '#CDDC39'
  },
  label: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '28px',
  },
  text: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '20px',
  },
  appBar:{
    backgroundColor: '#11153e',
    shadows: ['none'],
  },
  greeting:{
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: "50%",
    margin: "auto",
  },
  links:{
    textDecoration: 'none',
  }

}));

const EditCampusView = (props) => {
  const classes = useStyles();
  
  return (
    <div>
      <h1 class="centerheader">New student form</h1>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          {/* <Typography variant="h6" className={classes.title} color="inherit" >
            CRUD App
          </Typography> */}
          <Typography className={classes.title}>
            <Link className={classes.links} to={'/'} >
              <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
                Home
              </Button>
            </Link>
          </Typography>

          <Link className={classes.links} to={'/campuses'} >
            <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
              Campuses
            </Button>
          </Link>

          <Link className={classes.links} to={'/students'} >
            <Button variant="contained" color="primary">
              Students
            </Button>
          </Link>
        </Toolbar>
      </AppBar>

      <Grid container justify="center">
        <h1>Add a new student</h1>
      </Grid>
  
      <form className={classes.root} noValidate autoComplete="off" onSubmit={props.handleSubmit}>

        <Grid container justify="center">
          <TextField id="standard-basic" label="Student First Name" onInput={ e => props.setFirstName(e.target.value)}/>
        </Grid>

        <Grid container justify="center">
          <TextField id="standard-basic" label="Student Last Name" onInput={ e => props.setLastName(e.target.value)}/>
        </Grid>

        <Grid container justify="center">
          <TextField id="standard-basic" label="Student Email" onInput={ e => props.setEmail(e.target.value)}/>
        </Grid>

        <Grid container justify="center">
          <TextField id="standard-basic" label="Student GPA" onInput={ e => props.setGPA(e.target.value)}/>
        </Grid>

        <Grid container justify="center">
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </form>

    </div>
  );
};

EditCampusView.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    setFirstName: PropTypes.func.isRequired,
    setLastName: PropTypes.func.isRequired,
    setEmail: PropTypes.func.isRequired,
    setGPA: PropTypes.func.isRequired,
};

export default EditCampusView;