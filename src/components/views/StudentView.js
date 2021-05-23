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

const StudentView = (props) => {
    console.log(props);
    const {student} = props;
    const classes = useStyles();
    //waiting for students array to be populated
    // if (campus.students === undefined){
    //   return <div>Loading...</div>
    // }
    if (student === undefined){
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
        <div className="columnleft">
              <img src="data:image/png;base64,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" alt=""></img>
              <div>{student.firstname}</div>
                </div>
              <div>
                <Link to={`/campus/${student.id}`}>
                  <h1>{student.name} {student.lastname} </h1>
                </Link>
              <p>{student.name} {student.lastname}</p>
              <div >
                <div className="columnleft buttonedit">
                <Link className={classes.links} to={'/'} >
                  <p>edit</p>
                </Link>
                </div>
                <div className="buttondelete">
                  <p>delete</p>
                </div>
              </div>
            </div>
            <br></br>
      <div className="addmarginleft">
          <br></br>
          <h1>Student </h1>
      </div>
    </div>
      );
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
      <br></br>
      <div className="columnleft">
        <img src="data:image/png;base64,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" alt=""></img>
        <div>{student.address}</div>
          </div>
          <div>
            <Link to={`/campus/${student.campusId}`}>
              <h1>{student.firstname} {student.lastname}</h1>
            </Link>
            <Link to={`/campus/${student.campusId}`}>
            <h2>{student.campus?.name}</h2>
            </Link>
            <h4>GPA: {student.gpa}</h4>
            <h4>Email: {student.email}</h4>

            <div >
              <div className="columnleft buttonedit">
              <Link className={classes.links} to={'/'} >
                <p>edit</p>
              </Link>
              </div>
              <div className="buttondelete">
                <p>delete</p>
              </div>
            </div>
          </div>
          <h1>This student is registered to a campus</h1>
              <div className="columncampuses" key={student.campusId}>
                <div className="columnleft">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/363/064/small/5_-_1_-_School.jpg" alt=""></img>
                  </div>
                  {student.campus?.name ?
                  // <h2>This student is not registered to a campus.</h2>
                  // :
                  <div>
                    <Link to={`/campus/${student.campusId}`}>
                      <h1>{student.campus?.name}</h1>
                    </Link>
                    {/* <h3>3 students</h3> */}
                    {/* <h3>{students.campus.students.length} students</h3> */}
                    <p>{student.campus?.description}</p>
                    <div className="contentbottom">
                      <div className="contentleft buttonedit">
                      <Link className={classes.links} to={'/'} >
                        <p>edit</p>
                      </Link>
                      </div>
                    </div>
                  </div>
                  :
                  <h2>This student is not registered to a campus.</h2>
                  }
            </div>
          <div className={classes.text}>
          <label for="students">Select a campus:</label>
          <div>
            <select name="students" id="students">
            {props.allCampuses.map((campus) => (
              <option value={campus.name}>{campus.name}</option>
            ))}
            </select>
          </div>
          <Button style={{marginLeft: 10}} variant="contained" color="primary">Add to Campus</Button>
        </div>
        <br></br>
      </div>
    );
  
  };
  

  
  export default StudentView;