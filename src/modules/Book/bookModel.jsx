import React, {Component} from 'react';

class BookModel extends Component {    
    constructor(props) {
        super(props);
        this.handleCloseClick = this.handleCloseClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }
    componentDidMount() {
        const { handleModalCloseClick } = this.props;
        const $ = window.$;
        $(this.modal).on('hidden.bs.modal', handleModalCloseClick);
    }
    handleCloseClick() {
        const $ = window.$;
        const { handleModalCloseClick } = this.props;
        $(this.modal).modal('hide');
        handleModalCloseClick();
    }

    handleDeleteClick(id) {
        const $ = window.$;
        $(this.modal).modal('hide');
        const { handleDeleteClick } = this.props;
        handleDeleteClick(id);
    }

    showModelBody() {
        const { isForDelete } = this.props;
        if(!isForDelete) {
            return (
                <div>
                    <p><b>Book Title:</b> {this.props.selectedBook.title} </p>
                    <p><b>Book ISBN:</b> {this.props.selectedBook.isbn} </p>
                    <p><b>Book Description:</b> {this.props.selectedBook.description} </p>
                    <p><b>Stored time:</b> {this.props.selectedBook.createdAt} </p>
                </div>
            );
        }else{
            return (
                <div>
                    <p>Are you sure to Delete Book: <b>{this.props.selectedBook.title}</b> ?</p>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="modal fade" ref={modal => this.modal = modal} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Book : {this.props.selectedBook.title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {this.showModelBody()}
                    </div>
                    <div className="modal-footer">
                        {this.props.isForDelete &&
                            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => this.handleDeleteClick(this.props.selectedBook.id)}>Delete</button>
                        }
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookModel;