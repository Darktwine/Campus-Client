import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllCampusesThunk, fetchAllStudentsThunk, editCampusThunk } from "../../store/thunks";
import { EditCampusView } from "../views";

class EditCampusContainer extends Component {
    constructor() {
        super();
        this.state = {
            campusName: "",
            campusAddress: "",
            campusImageURL: "",
            campusDescription: "",
        };
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const campus = {
            name: this.state.campusName,
            address: this.state.campusAddress,
            imageUrl: this.state.campusImageURL,
            description: this.state.campusDescription,
        };

        // let url = window.location.href;
        // url = url.substring(0, url.lastIndexOf("/"));
        // let newCampus = await this.props.editCampusThunk(campus);
        // window.location.href = url + "/campus/" + newCampus.id;
        window.location.href = "http://localhost:3000/campuses";
    };

    setCampusName = (newCampusName) => {
        this.setState({ campusName: newCampusName });
    };

    setCampusAddress = (newCampusAddress) => {
        this.setState({ campusAddress: newCampusAddress });
    };

    setCampusDescription = (newCampusDescription) => {
        this.setState({ campusDescription: newCampusDescription });
    };

    setCampusImageUrl = (newCampusImageUrl) => {
        this.setState({ campusImageURL: newCampusImageUrl });
    };

    componentDidMount() {
        console.log(this.props);
        this.props.fetchAllCampuses();
    }

    render() {
        return (
        <EditCampusView
            allCampuses={this.props.allCampuses}
            handleSubmit={this.handleSubmit}
            setCampusName={this.setCampusName}
            setCampusAddress={this.setCampusAddress}
            setCampusDescription={this.setCampusDescription}
            setCampusImageUrl={this.setCampusImageUrl}
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
        editCampusThunk: (campus) => dispatch(editCampusThunk(campus)),
    };
};

// Type check props;
EditCampusContainer.propTypes = {
    allCampuses: PropTypes.array.isRequired,
    fetchAllCampuses: PropTypes.func.isRequired,
    allStudents: PropTypes.array.isRequired,
    fetchAllStudents: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(EditCampusContainer);