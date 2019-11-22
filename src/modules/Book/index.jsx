import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import './book.css';
import PropTypes from 'prop-types';
import { bookPageInit,bookDetailInit,bookDetailClose,bookDeleteInit,releaseStateData }  from './actions';
import FlashMessage from '../../components/FlashMessage/FlashMessage';
import ViewBookModel from './bookModel';

class Book extends Component {
    constructor(props) {
        super(props);
        this.handleModalShowClick = this.handleModalShowClick.bind(this);
        this.handleModalCloseClick = this.handleModalCloseClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.state = {
            isForDelete:false
        }
    }

    handleModalShowClick (isForDelete) {
        return event => {
            this.props.getBookDetail(event.currentTarget.dataset.id);
            if(isForDelete){
                this.setState({
                    isForDelete: true
                })
            }
        }
    }

    handleDeleteClick (id) {
        this.props.deleteBookRequest(id);
    }
    
    handleModalCloseClick() {
        this.props.detailModalClose();
        this.setState({
            isForDelete: false
        })
    }

    componentDidMount(){
        this.props.getBooks();
    }

    componentWillUnmount() {
        this.props.releaseData();
    }

    renderBooks(handleModalShow){
        if(this.props.books.length === 0){
            return <tr><td colSpan="4">No books!</td></tr>;
        }else{
            return this.props.books.map(function(data, id) {
                return (
                    <tr key={id}>
                        <th scope="row">{id + 1}</th>
                        <td>{data.title}</td>
                        <td>{data.isbn}</td>
                        <td style={{"padding":"5px"}}>
                            <button type="button" 
                                className="btn btn-outline-info mr-3" 
                                data-id={data._id} data-toggle="modal" 
                                data-target="#exampleModal" 
                                onClick={handleModalShow(false)}>View</button>
                            <Link to={"/manage-book/" + data._id} className="btn btn-outline-warning mr-3">Update</Link>
                            <button type="button" 
                                className="btn btn-outline-danger" 
                                data-id={data._id} data-toggle="modal" 
                                data-target="#exampleModal" 
                                onClick={handleModalShow(true)}>Delete</button>
                        </td>
                    </tr>
                );
            });
        }
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    {Object.keys(this.props.errors).length > 0 &&
                        <div>
                            <FlashMessage data={this.props.errors.data?this.props.errors.data:this.props.errors.message} alertClass="danger" />
                        </div>
                    }
                    {Object.keys(this.props.selectedBookError).length > 0 &&
                        <div>
                            <FlashMessage data={this.props.selectedBookError.data?this.props.selectedBookError.data:this.props.selectedBookError.message} alertClass="danger" />
                        </div>
                    }
                    {Object.keys(this.props.deleteBook).length > 0 &&
                        <div>
                            <FlashMessage data={this.props.deleteBook.data?this.props.deleteBook.data:this.props.deleteBook.message} alertClass="success" />
                        </div>
                    }
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4">My Books <Link to="manage-book" className="btn btn-primary btn-sm">Add Book</Link></h1>
                        <table className="table">
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
                <ViewBookModel handleModalCloseClick={this.handleModalCloseClick} handleDeleteClick={this.handleDeleteClick} selectedBook={this.props.selectedBook} isForDelete={this.state.isForDelete} />
            </div>
        );
    }
}

Book.propTypes = {
    books: PropTypes.array
};

function mapStateToProps(state){
    return { 
        books: state.books.list_book.books,
        selectedBook: state.books.list_book.selectedBook,
        errors: state.books.list_book.errors,
        selectedBookError: state.books.list_book.selectedBookError,
        deleteBook: state.books.list_book.deleteBook
    };
}

function mapDispatchToProps(dispatch){
    return {
        getBooks: () => dispatch(bookPageInit()),
        getBookDetail: (id) => dispatch(bookDetailInit(id)),
        detailModalClose: () => dispatch(bookDetailClose()),
        deleteBookRequest: (id) => dispatch(bookDeleteInit(id)),
        releaseData: () => dispatch(releaseStateData()),
    }; 
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withRouter(Book));