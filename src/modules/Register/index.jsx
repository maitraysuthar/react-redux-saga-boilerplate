import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router'
import { Formik } from 'formik';
import * as Yup from 'yup';
import '../Login/login.css';
import PropTypes from 'prop-types';
import { registerRequest,registerPageInit }  from './actions';
import FlashMessage from '../../components/FlashMessage/FlashMessage';
import Spinner from '../../components/Spinner/Spinner';

class Register extends Component {
    componentDidUpdate(prevProps, prevState) {
        // reset form 
        if(Object.keys(this.props.user).length > 0){
            this.formik.resetForm();
        }   
    }
    render(){
        return(
            <div className="container">
                {this.props.requesting && <Spinner /> }
                <div className="row">
                    <div className="col-md-6 mx-auto">
                    {Object.keys(this.props.errors).length > 0 &&
                        <div>
                            <FlashMessage data={this.props.errors.data?this.props.errors.data:this.props.errors.message} alertClass="danger" />
                        </div>
                    }
                    {Object.keys(this.props.user).length > 0 &&
                        <div>
                            <FlashMessage data={this.props.user.message} alertClass="success" />
                        </div>
                    }
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <h1>Registration</h1>
                        <Formik
                            ref={(ref) => this.formik = ref}
                            initialValues={{ firstName: '',lastName: '', email: '', password:'', confirmPassword:'' }}
                            onSubmit={this.props.onSubmitForm}
                            validationSchema={Yup.object().shape({
                                firstName: Yup.string().matches(/^[a-zA-Z]+$/,'First name only allows alphabets.')
                                .required('First Name Required'),
                                lastName: Yup.string()
                                .required('Last Name Required'),
                                email: Yup.string()
                                .email()
                                .required('Email Required'),
                                password: Yup.string()
                                .required('Password Required').min(6),
                                confirmPassword: Yup.string()
                                .oneOf([Yup.ref('password'), null], "Passwords don't match")
                                .required('Confirm Password Required'),
                            })}
                            >
                            {props => {
                                const {
                                values,
                                touched,
                                errors,
                                isValid,
                                isSubmitting,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                } = props;
                                return (
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="firstName">First Name</label>
                                            <input type="text"
                                                id="firstName"
                                                value={values.firstName}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.firstName && touched.firstName ? 'form-control text-input error' : 'form-control text-input'
                                                } 
                                                placeholder="Enter First Name" 
                                            />
                                            {errors.firstName && touched.firstName && (
                                                <div className="input-feedback">{errors.firstName}</div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="lastName">Last Name</label>
                                            <input type="text"
                                                id="lastName"
                                                value={values.lastName}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.lastName && touched.lastName ? 'form-control text-input error' : 'form-control text-input'
                                                } 
                                                placeholder="Enter Last Name" 
                                            />
                                            {errors.lastName && touched.lastName && (
                                                <div className="input-feedback">{errors.lastName}</div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Email address</label>
                                            <input type="email"
                                                id="email"
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.email && touched.email ? 'form-control text-input error' : 'form-control text-input'
                                                } 
                                                placeholder="Enter email" 
                                            />
                                            {errors.email && touched.email && (
                                                <div className="input-feedback">{errors.email}</div>
                                            )}
                                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                        </div> 
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Password</label>
                                            <input type="password" 
                                                id="password"
                                                value={values.password}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.password && touched.password ? 'form-control text-input error' : 'form-control text-input'
                                                }
                                                placeholder="Password" 
                                            />
                                            {errors.password && touched.password && (
                                                <div className="input-feedback">{errors.password}</div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="confirmPassword">Confirm Password</label>
                                            <input type="password" 
                                                id="confirmPassword"
                                                value={values.confirmPassword}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.confirmPassword && touched.confirmPassword ? 'form-control text-input error' : 'form-control text-input'
                                                }
                                                placeholder="confirmPassword" 
                                            />
                                            {errors.confirmPassword && touched.confirmPassword && (
                                                <div className="input-feedback">{errors.confirmPassword}</div>
                                            )}
                                        </div>
                                        <button type="submit" className="btn btn-primary" onClick={handleSubmit} disabled={!isValid || isSubmitting}>Submit</button>
                                        <div className="form-group">
                                            Already registered? Login from <Link to="/login">here</Link>.
                                        </div>
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

Register.propTypes = {
    onSubmitForm: PropTypes.func,
    errors: PropTypes.object
};

function mapStateToProps(state){
    return { 
        errors: state.register.errors,
        user: state.register.user,
        requesting: state.register.requesting
    };
}

function mapDispatchToProps(dispatch) {
    return {
      onSubmitForm: (evt, actions) => {
        if (evt !== undefined && evt.preventDefault) evt.preventDefault();
        dispatch(registerRequest(evt));
        setTimeout(() => {
            actions.setSubmitting(false);
        }, 500);
      },
      onPageInit: dispatch(registerPageInit())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withRouter(Register));