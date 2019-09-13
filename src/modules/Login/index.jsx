import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './login.css';
import PropTypes from 'prop-types';
import { loginRequest }  from './actions';

class Login extends Component {

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Login</h1>
                        <Formik
                            initialValues={{ email: '', password:'' }}
                            onSubmit={this.props.onSubmitForm}
                            validationSchema={Yup.object().shape({
                                email: Yup.string()
                                .email()
                                .required('Required'),
                                password: Yup.string()
                                .required('Required').min(6),
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
                                        <button type="submit" className="btn btn-primary" disabled={!isValid}>Submit</button>
                                        <div className="form-group">
                                            Not registered yet? Register from <Link to="/register">here</Link>.
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

Login.propTypes = {
    onSubmitForm: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
    return {
      onSubmitForm: evt => {
        if (evt !== undefined && evt.preventDefault) evt.preventDefault();
        dispatch(loginRequest());
      },
    };
}

export default connect(
    null,
    mapDispatchToProps,
)(Login);