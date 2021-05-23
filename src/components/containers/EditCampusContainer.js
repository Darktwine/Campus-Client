import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllCampusesThunk, fetchAllStudentsThunk, editCampusThunk } from "../../store/thunks";
import { EditCampusView } from "../views";

class EditCampusContainer extends Component {
    componentDidMount() {
        console.log(this.props);
        this.props.fetchAllCampuses();
    }

    render() {
        return (
        <EditCampusView
            allCampuses={this.props.allCampuses}
            allStudents={this.props.allStudents}
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