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
          <img src="data:image/jpeg;base64,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" alt=""></img>
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