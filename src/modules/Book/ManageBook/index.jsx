import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import '../book.css';
import FlashMessage from '../../../components/FlashMessage/FlashMessage';
import { bookAddPageInit, bookAddRequest, bookUpdateRequest }  from './actions';
import { bookDetailInit }  from '../actions';
import PropTypes from 'prop-types';

class ManageBook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: null,
            isEditing: false,
        }
    }

    componentDidMount(){
        const { match: { params: {id} } } = this.props;
        if(id){
            this.props.getBookDetail(id);
            this.setState({id:id, isEditing: true});
        }
    }

    static getDerivedStateFromProps(props, state) {
        const { match: { params: {id} } } = props;
        if(id !== null && Object.keys(props.selectedBook).length === 0){
            if(state.isEditing !== false){
                return {id: null, isEditing: false};
            }
        }else{
            if(state.isEditing !== true){
                return {id: id, isEditing: true};
            }
        }
        return null;
    }

    render(){
        let initialValues = {title:"",description:"",isbn:""};
        if(Object.keys(this.props.selectedBook).length > 0)
            initialValues = this.props.selectedBook;
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    {Object.keys(this.props.errors).length > 0 &&
                        <div>
                            <FlashMessage data={this.props.errors.data?this.props.errors.data:this.props.errors.message} alertClass="danger" />
                        </div>
                    }
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="display-4">{ this.state.isEditing?"Update":"Add"} Book <Link to="/book" className="btn btn-primary btn-sm">All Books</Link></h1>
                        <Formik
                            initialValues={initialValues}
                            enableReinitialize
                            onSubmit={this.props.onSubmitForm(this.state)}
                            validationSchema={Yup.object().shape({
                                title: Yup.string()
                                .required('Required'),
                                isbn: Yup.string()
                                .required('Required'),
                                description: Yup.string()
                                .required('Required'),
                            })}
                            >
                            {props => {
                                const {
                                values,
                                touched,
                                errors,
                                isValid,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                } = props;
                                return (
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="title">Book Title</label>
                                            <input type="text"
                                                id="title"
                                                value={values.title}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.title && touched.title ? 'form-control text-input error' : 'form-control text-input'
                                                } 
                                                placeholder="Enter title" 
                                            />
                                            {errors.title && touched.title && (
                                                <div className="input-feedback">{errors.title}</div>
                                            )}
                                        </div> 
                                        <div className="form-group">
                                            <label htmlFor="isbn">ISBN</label>
                                            <input type="text" 
                                                id="isbn"
                                                value={values.isbn}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.isbn && touched.isbn ? 'form-control text-input error' : 'form-control text-input'
                                                }
                                                placeholder="isbn" 
                                            />
                                            {errors.isbn && touched.isbn && (
                                                <div className="input-feedback">{errors.isbn}</div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="description">Book Description</label>
                                            <textarea 
                                                id="description"
                                                value={values.description}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.description && touched.description ? 'form-control text-input error' : 'form-control text-input'
                                                }
                                                placeholder="description" 
                                            />
                                            {errors.description && touched.description && (
                                                <div className="input-feedback">{errors.description}</div>
                                            )}
                                        </div>
                                        <button type="submit" className="btn btn-primary" disabled={!isValid}>{ this.state.id?"Update":"Add"}</button>
                                    </form>
                                );
                            }}
                        </Formik>
                    </div>
                </div>
            </div>
        );
    }
}

ManageBook.propTypes = {
    onSubmitForm: PropTypes.func,
    errors: PropTypes.object
};

function mapStateToProps(state){
    return { 
        errors: state.books.manage_book.errors,
        selectedBook: state.books.list_book.selectedBook
    };
}

function mapDispatchToProps(dispatch) {
    return {
      onSubmitForm: state => evt => {
        if (evt !== undefined && evt.preventDefault) evt.preventDefault();
        (state.isEditing) ? dispatch(bookUpdateRequest(evt,state.id)): dispatch(bookAddRequest(evt));
      },
      onPageInit: dispatch(bookAddPageInit()),
      getBookDetail: (id) => dispatch(bookDetailInit(id)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withRouter(ManageBook));