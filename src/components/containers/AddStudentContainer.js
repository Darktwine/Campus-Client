import { Component } from "react";
import { connect } from "react-redux";
import { addStudentThunk } from "../../store/thunks";
import { AddStudentView } from "../views";

class AddStudentContainer extends Component {
  constructor() {
    super();
    this.state = {
        firstName: "",
        lastName: "",
        email: "",
        gpa: 0,
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const student = {
      firstname: this.state.firstName,
      lastname: this.state.lastName,
      email: this.state.email,
      gpa: this.state.gpa,
    };

    let url = window.location.href;
    url = url.substring(0, url.lastIndexOf("/"));
    await this.props.addStudentThunk(student);
    window.location.href = url + "/students";
  }

  setFirstName = (newFirstName) => {
      this.setState({ firstName: newFirstName });
  };

  setLastName = (newLastName) => {
    this.setState({ lastName: newLastName });
  };

  setEmail = (newEmail) => {
      this.setState({ email: newEmail })
  };

  setGPA = (newGPA) => {
      this.setState({ gpa: newGPA })
  };

    render() {
      return (
        <AddStudentView
          handleSubmit={this.handleSubmit}
          setFirstName={this.setFirstName}
          setLastName={this.setLastName}
          setEmail={this.setEmail}
          setGPA={this.setGPA}
        />
      );
    }
  }
  
  // Map state to props;
  const mapState = (state) => {
    return {
      allStudents: state.allStudents,
    };
  };
  
  // Map dispatch to props;
  const mapDispatch = (dispatch) => {
    return {
      addStudentThunk: (student) => dispatch(addStudentThunk(student)),
    };
  };
  
  // Type check props;
  AddStudentContainer.propTypes = {

  };
  
  // Export our store-connected container by default;
  export default connect(mapState, mapDispatch)(AddStudentContainer);