import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import './book.css';
import PropTypes from 'prop-types';
import { bookPageInit }  from './actions';
import FlashMessage from '../../components/FlashMessage/FlashMessage';

class Book extends Component {
    componentDidMount(){
        bookPageInit();
    }

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

Book.propTypes = {
    books: PropTypes.object
};

function mapStateToProps(state){
    return { books: state.books};
}

export default connect(
    mapStateToProps,
)(withRouter(Book));