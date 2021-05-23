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

const EditCampusView = (props) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [image, setimage] = useState('');
  const [description, setdescription] = useState('');
  const classes = useStyles();

  if (!props.allCampuses.length) {
    return <div>
      <h1 class="centerheader">Edit Campus</h1>
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

  function submitcampus(e) {
    e.preventDefault();
    var paragraph = document.getElementById("invalid");
    paragraph.innerHTML = '';
    if (name.length === 0) {
        var paragraph = document.getElementById("invalid");
        var text = document.createTextNode("Invalid campus name");
        paragraph.appendChild(text);
        var linebreak = document.createElement("br");
        paragraph.appendChild(linebreak);
    }
    if (location.length === 0) {
        var paragraph = document.getElementById("invalid");
        var text = document.createTextNode("Invalid location");
        paragraph.appendChild(text);
        var linebreak = document.createElement('br');
        paragraph.appendChild(linebreak);
    }
    if (image.length === 0) {
        var paragraph = document.getElementById("invalid");
        var text = document.createTextNode("Invalid image");
        paragraph.appendChild(text);
        var linebreak = document.createElement('br');
        paragraph.appendChild(linebreak);
    }
    if (description.length === 0) {
        var paragraph = document.getElementById("invalid");
        var text = document.createTextNode("Invalid description");
        paragraph.appendChild(text);
    }
    
  }

  function handleChangeName(campusname) {
    let name = campusname.target.value;
    setName({ name });
  }
  function handleChangeLocation(locationname) {
    let location = locationname.target.value;
    setLocation({ location });
  }
  function handleChangeImage(img) {
    setimage({ email: img.target.value });
  }
  function handleChangeDescription(descrip) {
    setdescription({ description: descrip.target.value });
  }

  return (
    <div>
      <h1 class="centerheader">Edit Campus</h1>
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
            Campus Name:
            <input type="text" name="name" onChange={ handleChangeName }/>
        </label>
        <br />
        <label>
            Campus Location:
            <input type="text" name="location" onChange={ handleChangeLocation }/>
        </label>
        <br />
        <label>
            Campus Image URL:
            <input type="text" name="image" onChange={ handleChangeImage }/>
        </label>
        <br />
        <label>
            Campus Description:
            <textarea type="text" name="description" onChange={ handleChangeDescription }/>
        </label>
        <br />
        <Button variant="contained" color="primary" onClick={submitcampus}>Edit Campus</Button>
      </form>
      </div>
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
    allStudents: PropTypes.array.isRequired,
};

export default EditCampusView;