import React, {Component} from 'react';

class ViewBook extends Component {    
    constructor(props) {
        super(props);
        this.handleCloseClick = this.handleCloseClick.bind(this);
    }
    componentDidMount() {
        const { handleModalCloseClick } = this.props;
        const $ = window.$;
        console.log(this.modal);
        $(this.modal).on('hidden.bs.modal', handleModalCloseClick);
    }
    handleCloseClick() {
        const $ = window.$;
        const { handleModalCloseClick } = this.props;
        $(this.modal).modal('hide');
        handleModalCloseClick();
    }
    render() {
        return (
            <div class="modal fade" ref={modal => this.modal = modal} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Book : {this.props.selectedBook.title}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p><b>Book Title:</b> {this.props.selectedBook.title} </p>
                        <p><b>Book ISBN:</b> {this.props.selectedBook.isbn} </p>
                        <p><b>Book Description:</b> {this.props.selectedBook.description} </p>
                        <p><b>Stored time:</b> {this.props.selectedBook.createdAt} </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewBook;