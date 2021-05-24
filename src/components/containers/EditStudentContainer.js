import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllCampusesThunk, fetchAllStudentsThunk, editStudentThunk } from "../../store/thunks";
import { EditStudentView } from "../views";

class EditStudentContainer extends Component {
    constructor() {
        super();
        this.state = {
            studentGPA: 0,
            studentFirstName: "",
            studentLastName: "",
            studentEmail: "",
            studentImageURL: "",
        };
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const student = {
            gpa: this.state.studentGPA,
            firstname: this.state.studentFirstName,
            lastname: this.state.campusAddress,
            imageUrl: this.state.studentImageURL,
            email: this.state.studentEmail,
        };

        // let url = window.location.href;
        // url = url.substring(0, url.lastIndexOf("/"));
        // let newCampus = await this.props.editCampusThunk(campus);
        // window.location.href = url + "/campus/" + newCampus.id;
        // window.location.href = "http://localhost:3000/campuses";

        let url = window.location.href;
        url = url.substring(0, url.lastIndexOf("/"));
        url = url.substring(0, url.lastIndexOf("/"));
        await this.props.editStudentThunk(student);
        window.location.href = url + "/students";
    };

    setstudentGPA = (value) => {
        this.setState({ studentGPA: value });
    };

    setstudentFirstName = (value) => {
        this.setState({ studentFirstName: value });
    };

    setstudentLastName = (value) => {
        this.setState({ studentLastName: value });
    };

    setstudentEmail = (value) => {
        this.setState({ studentEmail: value });
    };

    setstudentImageURL = (value) => {
        this.setState({ studentImageURL: value });
    };

    componentDidMount() {
        console.log(this.props);
        this.props.fetchAllStudents();
    }

    render() {
        return (
        <EditStudentView
            allCampuses={this.props.allCampuses}
            allStudents={this.props.allStudents}
            handleSubmit={this.handleSubmit}
            setstudentGPA={this.setstudentGPA}
            setstudentFirstName={this.setstudentFirstName}
            setstudentLastName={this.setstudentLastName}
            setstudentEmail={this.setstudentEmail}
            setstudentImageURL={this.setstudentImageURL}
        />
        );
    }
}

// Map state to props;
const mapState = (state) => {
    return {
        allCampuses: state.allCampuses,
        allStudents: state.allStudents,
    };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
    return {
        fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
        fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
        editStudentThunk: (student) => dispatch(editStudentThunk(student)),
    };
};

// Type check props;
EditStudentContainer.propTypes = {
    allCampuses: PropTypes.array.isRequired,
    allStudents: PropTypes.array.isRequired,
    fetchAllCampuses: PropTypes.func.isRequired,
    fetchAllStudents: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(EditStudentContainer);