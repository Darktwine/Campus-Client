import "./App.css";
import React from 'react';

//Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Components
import {
  HomePageContainer,
  CampusContainer,
  StudentContainer,
  AllCampusesContainer,
  AllStudentsContainer,
  AddStudentContainer,
  AddCampusContainer,
  EditCampusContainer
} from './components/containers';

// if you create separate components for adding/editing 
// a student or campus, make sure you add routes to those
// components here

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {apiResponse: ""};
  }

 callAPI(){
  fetch("/students")
  .then (res => this.setState ({apiResponse: res}));
}

componentWillMount(){
  this.callAPI();
}

render(){
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePageContainer} />
          <Route exact path="/campuses" component={AllCampusesContainer} />
          <Route exact path="/campus/:id" component={CampusContainer} />
          <Route exact path="/students" component={AllStudentsContainer} />
          <Route exact path="/student/:id" component={StudentContainer} />
          <Route exact path="/addstudent" component={AddStudentContainer} />
          <Route exact path="/addcampus" component={AddCampusContainer} />
          <Route exact path="/editcampus" component={EditCampusContainer} />
        </Switch> 
      </Router>       
    </div>
  );
}
}

export default App;