import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk, fetchAllCampusesThunk, fetchCampusThunk  } from "../../store/thunks";

import { StudentView } from "../views";

class StudentContainer extends Component {
  componentDidMount() {
    //getting campus ID from url
    this.props.fetchStudent(this.props.match.params.id);
    this.props.fetchAllCampuses();
  }

  render() {
    return (
      <StudentView 
        student={this.props.student}
        campus={this.props.campus}
        allCampuses={this.props.allCampuses}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    student: state.student,
    allCampuses: state.allCampuses,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
  };
};

export default connect(mapState, mapDispatch)(StudentContainer);