import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import React, { useEffect } from 'react';
import { useParams } from "react-router";
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
  let { id } = useParams();

  useEffect(() => {
    props.setCampusId(id);
  }, [])

  
  return (
    <div>
      <h1 class="centerheader">Edit Campus Form</h1>
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
        <h1>Edit the Campus</h1>
      </Grid>
  
      <form className={classes.root} noValidate autoComplete="off" onSubmit={props.handleSubmit}>

        <Grid container justify="center">
          <TextField id="standard-basic" label="Campus Name" onInput={ e => props.setCampusName(e.target.value)}/>
        </Grid>

        <Grid container justify="center">
          <TextField id="standard-basic" label="Campus Address" onInput={ e => props.setCampusAddress(e.target.value)}/>
        </Grid>

        <Grid container justify="center">
          <TextField id="standard-basic" label="Campus Description" onInput={ e => props.setCampusDescription(e.target.value)}/>
        </Grid>

        <Grid container justify="center">
          <TextField id="standard-basic" label="Campus Image URL" onInput={ e => props.setCampusImageUrl(e.target.value)}/>
        </Grid>

        <Grid container justify="center">
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </form>

 
      <div className={classes.text} id="invalid"> </div>
      <h2 className={classes.subheading}>Students on Campus</h2>
      <div className={classes.text}>
        <label for="students">Select a student:</label>
        <div>
          <select name="students" id="students">
          {props.allStudents.map((student) => (
            <option value={student.firstname}>{student.firstname} {student.lastname} </option>
          ))}
          </select>
        </div>
        <Button style={{marginLeft: 10}} variant="contained" color="primary">Add to Campus</Button>
      </div>
    </div>
  );
};

EditCampusView.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    setCampusName: PropTypes.func.isRequired,
    setCampusAddress: PropTypes.func.isRequired,
    setCampusDescription: PropTypes.func.isRequired,
    setCampusImageUrl: PropTypes.func.isRequired,
};

export default EditCampusView;