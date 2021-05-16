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



const AllCampusesView = (props) => {
  const classes = useStyles();
  if (!props.allCampuses.length) {
    return <div>
      <h1 class="centerheader">Campus Listing</h1>
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
      <div class="centerheader">
        <h1> There are no campuses registered in the database.</h1>
        <Link className={classes.links} to={'/'} >
            <Button variant="contained" color="primary">
              Add Campus
            </Button>
        </Link>
      </div>
    </div>;
  }

  return (
    <div>
      <h1 class="centerheader">Campus Listing</h1>
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
      <div className='row'>
        <div className="columnleft">
          <h1>All Campuses</h1>
        </div>
        <div className="columnright">
          <Link className={classes.links} to={'/'} >
              <Button variant="contained" color="primary">
                Add Campus
              </Button>
          </Link>
        </div>
      </div>
      <div>
        {props.allCampuses.map((campus) => (
          <div className="columncampuses" key={campus.id}>
            <div className="columnleft">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/000/363/064/small/5_-_1_-_School.jpg" alt=""></img>
            </div>
            <div>
              <Link to={`/campus/${campus.id}`}>
                <h1>{campus.name}</h1>
              </Link>
              <h3>3 students</h3>
              <p>{campus.description}</p>
              <div className="contentbottom">
                <div className="contentleft">
                <Link className={classes.links} to={'/'} >
                  <p>edit</p>
                </Link>
                </div>
                <div className="contentright">
                  <p>delete</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;