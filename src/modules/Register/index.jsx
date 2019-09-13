import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router'
import { Formik } from 'formik';
import * as Yup from 'yup';
import '../Login/login.css';

class Register extends Component {
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Registration</h1>
                        <Formik
                            initialValues={{ firstName: '',lastName: '', email: '', password:'' }}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                                }, 500);
                            }}
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
                                            <label for="firstName">First Name</label>
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
                                            <label for="lastName">Last Name</label>
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
                                            <label for="exampleInputEmail1">Email address</label>
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
                                            <label for="exampleInputPassword1">Password</label>
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
                                            <label for="confirmPassword">Confirm Password</label>
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
                                        <button type="submit" className="btn btn-primary" disabled={!isValid || isSubmitting}>Submit</button>
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

export default withRouter(Register);