import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllCampusesThunk } from "../../store/thunks";
import { AddCampusView } from "../views";

class AddCampusContainer extends Component {
    componentDidMount() {
        console.log(this.props);
        this.props.fetchAllCampuses();
    }

    render() {
        return (
        <AddCampusView
            allCampuses={this.props.allCampuses}
        />
        );
    }
}

// Map state to props;
const mapState = (state) => {
    return {
        allCampuses: state.allCampuses,
    };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
    return {
        fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
    };
};

// Type check props;
AddCampusContainer.propTypes = {
    allCampuses: PropTypes.array.isRequired,
    fetchAllCampuses: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AddCampusContainer);