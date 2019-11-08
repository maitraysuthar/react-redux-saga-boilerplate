import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import './book.css';
import PropTypes from 'prop-types';
import { bookPageInit }  from './actions';
import FlashMessage from '../../components/FlashMessage/FlashMessage';

class Book extends Component {

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4">My Books</h1>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    books: PropTypes.object
};

function mapStateToProps(state){
    return { errors: state.login.errors};
}

export default connect(
    mapStateToProps,
)(withRouter(Book));