import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import './header.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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

const AddStudentView = (props) => {
  const [firstname, setFirst] = useState('');
  const [lastname, setLast] = useState('');
  const [email, setemail] = useState('');
  const [gpa, setgpa] = useState(0);
  const classes = useStyles();
  if (!props.allStudents.length) {
    return <div>
      <h1 class="centerheader">Student Listing</h1>
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
    </div>;
  }

  function submitstudent(e) {
    e.preventDefault();
    var paragraph = document.getElementById("invalid");
    paragraph.innerHTML = '';
    if (firstname.length == 0) {
        var paragraph = document.getElementById("invalid");
        var text = document.createTextNode("Invalid first name");
        paragraph.appendChild(text);
        var linebreak = document.createElement("br");
        paragraph.appendChild(linebreak);
    }
    if (lastname.length == 0) {
        var paragraph = document.getElementById("invalid");
        var text = document.createTextNode("Invalid last name");
        paragraph.appendChild(text);
        var linebreak = document.createElement('br');
        paragraph.appendChild(linebreak);
    }
    if (email.length == 0) {
        var paragraph = document.getElementById("invalid");
        var text = document.createTextNode("Invalid email");
        paragraph.appendChild(text);
        var linebreak = document.createElement('br');
        paragraph.appendChild(linebreak);
    }
    if (gpa == 0) {
        var paragraph = document.getElementById("invalid");
        var text = document.createTextNode("Invalid GPA");
        paragraph.appendChild(text);
    }
    
  }

  function handleChangeFirstName(name) {
    let fname = name.target.value;
    setFirst({ fname });
  }
  function handleChangeLastName(name) {
    let lname = name.target.value;
    setLast({ lname });
  }
  function handleChangeEmail(name) {
    setemail({ email: name.target.value });
  }
  function handleChangeGPA(name) {
    setgpa({ gpa: name.target.value });
  }

  return (
    <div>
      <h1 class="centerheader">Student Listing</h1>
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
      <div className={classes.label}>
      <form>
        <label>
            Student First Name:
            <input type="text" name="firstname" onChange={ handleChangeFirstName }/>
        </label>
        <br />
        <label>
            Student Last Name:
            <input type="text" name="lastname" onChange={ handleChangeLastName }/>
        </label>
        <br />
        <label>
            Student Email:
            <input type="text" name="email" onChange={ handleChangeEmail }/>
        </label>
        <br />
        <label>
            GPA:
            <input type="number" name="gpa" onChange={ handleChangeGPA }/>
        </label>
        <br />
        <Button variant="contained" color="primary" onClick={submitstudent}>Add Student</Button>
      </form>
      </div>
      <div className={classes.text} id="invalid"> </div>
    </div>
  );
};

AddStudentView.propTypes = {
    allStudents: PropTypes.array.isRequired,
};

export default AddStudentView;