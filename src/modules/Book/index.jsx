import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import './book.css';
import PropTypes from 'prop-types';
import { bookPageInit,bookDetailInit,bookDetailClose }  from './actions';
import FlashMessage from '../../components/FlashMessage/FlashMessage';
import ViewBookModel from './ViewBook';

class Book extends Component {
    constructor(props) {
        super(props);
        this.handleModalShowClick = this.handleModalShowClick.bind(this);
        this.handleModalCloseClick = this.handleModalCloseClick.bind(this);
        this.state = {
            showModal: false,
        }
    }

    handleModalShowClick(e) {
        this.props.getBookDetail(e.currentTarget.dataset.id);
        this.setState({
          showModal: true
        })
    }
    
    handleModalCloseClick() {
        this.props.detailModalClose();
        this.setState({
          showModal: false
        })
    }

    componentDidMount(){
        this.props.getBooks();
    }

    renderBooks(handleModalShow){
        if(this.props.books.books.length === 0){
            return <tr><td colSpan="4">No books!</td></tr>;
        }else{
            return this.props.books.books.map(function(data, id) {
                return (
                    <tr key={id}>
                        <th scope="row">{id + 1}</th>
                        <td>{data.title}</td>
                        <td>{data.isbn}</td>
                        <td style={{"padding":"5px"}}>
                            <button type="button" class="btn btn-outline-info mr-3" data-id={data._id} data-toggle="modal" data-target="#exampleModal" onClick={handleModalShow}>View</button>
                            <button type="button" class="btn btn-outline-warning mr-3">Update</button>
                            <button type="button" class="btn btn-outline-danger">Delete</button>
                        </td>
                    </tr>
                );
            });
        }
    }

    render(){
        console.log(this.state)
        const { showModal } = this.state;
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4">My Books</h1>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">ISBN</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderBooks(this.handleModalShowClick)}
                            </tbody>
                        </table>
                    </div>
                </div>
                <ViewBookModel handleModalCloseClick={this.handleModalCloseClick} selectedBook={this.props.books.selectedBook} />
            </div>
        );
    }
}

Book.propTypes = {
    books: PropTypes.object
};

function mapStateToProps(state){
    return { 
        books: state.books,
        selectedBook: state.selectedBook
    };
}

function mapDispatchToProps(dispatch){
    return {
        getBooks: () => dispatch(bookPageInit()),
        getBookDetail: (id) => dispatch(bookDetailInit(id)),
        detailModalClose: () => dispatch(bookDetailClose())
    }; 
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withRouter(Book));