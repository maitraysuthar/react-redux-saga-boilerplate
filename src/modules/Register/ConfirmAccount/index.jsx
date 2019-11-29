import React, {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router'
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import '../../Login/login.css';
import PropTypes from 'prop-types';
import { verifyOTPRequest,otpPageInit, clearConfirmData, resendOTPRequest }  from './actions';
import FlashMessage from '../../../components/FlashMessage/FlashMessage';
import { browserRedirect } from '../../../helpers/helpers';
import Spinner from '../../../components/Spinner/Spinner';

class ConfirmAccount extends Component {
    constructor(props){
        super(props);
        this.handleOTPResendBtn = this.handleOTPResendBtn.bind(this);
    }

    componentDidMount(){
        if(!this.props.email){
            browserRedirect('/');
        }
    }

    handleOTPResendBtn(){
        this.props.resendOTP(this.props.email);
    }

    componentWillUnmount(){
        this.props.clearConfirmDetails();
    }

    render(){
        return(
            <div className="container">
                {this.props.requesting && <Spinner /> }
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div>
                        {Object.keys(this.props.errors).length > 0 &&
                            <div>
                                <FlashMessage data={this.props.errors.data?this.props.errors.data:this.props.errors.message} alertClass="danger" />
                            </div>
                        }
                        </div>
                        <div>
                        {Object.keys(this.props.resend_success).length > 0 &&
                            <div>
                                <FlashMessage data={this.props.resend_success.data?this.props.resend_success.data:this.props.resend_success.message} alertClass="success" />
                            </div>
                        }
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mx-auto">
                <h1>Confirm Account</h1>
                        <Formik
                            initialValues={{ otp: '',email:this.props.email }}
                            onSubmit={this.props.onSubmitForm}
                            validationSchema={Yup.object().shape({
                                otp: Yup.string().matches(/^[0-9]+$/,'OTP only allows numeric.')
                                .required('OTP Required'),
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
                                            <label htmlFor="otp">OTP  for Email: {this.props.email}</label>
                                            <input type="text"
                                                id="otp"
                                                value={values.otp}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.otp && touched.otp ? 'form-control text-input error' : 'form-control text-input'
                                                } 
                                                placeholder="Enter OTP" 
                                            />
                                            {errors.otp && touched.otp && (
                                                <div className="input-feedback">{errors.otp}</div>
                                            )}
                                        </div>
                                        <Field type="hidden" name="email" id="email" /> 
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary" disabled={!isValid || isSubmitting}>Submit</button>
                                            <button type="button" className="btn btn-warning resend-btn" onClick={this.handleOTPResendBtn} disabled={isSubmitting}>Resend</button>
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

ConfirmAccount.propTypes = {
    onSubmitForm: PropTypes.func,
    errors: PropTypes.object
};

function mapStateToProps(state){
    return { 
        errors: state.register.otp_errors,
        email: state.register.confirm_email,
        resend_success: state.register.resend_success,
        requesting: state.register.requesting
    };
}

function mapDispatchToProps(dispatch) {
    return {
      onSubmitForm: (evt, actions) => {
        if (evt !== undefined && evt.preventDefault) evt.preventDefault();
        dispatch(verifyOTPRequest(evt));
        setTimeout(() => {
            actions.setSubmitting(false);
        }, 500);
      },
      onPageInit: dispatch(otpPageInit()),
      clearConfirmDetails: () => dispatch(clearConfirmData()),
      resendOTP: (email) => dispatch(resendOTPRequest(email))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withRouter(ConfirmAccount));