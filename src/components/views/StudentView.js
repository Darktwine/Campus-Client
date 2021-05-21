import PropTypes from "prop-types";
import { Link } from "react-router-dom";
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

const StudentView = (props) => {
    let {student} = props;
    console.log(student);
    

    const classes = useStyles();
    //waiting for students array to be populated
    // if (campus.students === undefined){
    //   return <div>Loading...</div>
    // }
    return (
      <div>
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
      
        <h1>{student.firstname} {student.lastname}</h1>
        <Link to={`/campus/${student.campusId}`}>
          <h2>{student.campus?.name}</h2>
        </Link>
        <h4>GPA: {student.gpa}</h4>
        <h4>Email: {student.email}</h4>
      </div>
    );
  
  };
  
  export default StudentView;