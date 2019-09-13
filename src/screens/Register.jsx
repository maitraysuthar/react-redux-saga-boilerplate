import React,{PureComponent} from 'react';

class Register extends PureComponent {
    render(){
        return (
            <div className="container">
                <form className="form-horizontal" role="form" method="POST">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <h2>Register New User</h2>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 field-label-responsive">
                            <label for="name">Name</label>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                    <input type="text" name="name" className="form-control" id="name"
                                        placeholder="John Doe" required autofocus />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-control-feedback">
                                    <span className="text-danger align-middle">
                                    </span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 field-label-responsive">
                            <label for="email">E-Mail Address</label>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                    <div className="input-group-addon" style={ {width: "2.6rem"} }><i className="fa fa-at"></i></div>
                                    <input type="text" name="email" className="form-control" id="email"
                                        placeholder="you@example.com" required autofocus />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-control-feedback">
                                    <span className="text-danger align-middle">
                                    </span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 field-label-responsive">
                            <label for="password">Password</label>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group has-danger">
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                    <div className="input-group-addon" style={ {width: "2.6rem"} }><i className="fa fa-key"></i></div>
                                    <input type="password" name="password" className="form-control" id="password"
                                        placeholder="Password" required />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-control-feedback">
                                    <span className="text-danger align-middle">
                                        <i className="fa fa-close"> Example Error Message</i>
                                    </span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 field-label-responsive">
                            <label for="password">Confirm Password</label>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                    <div className="input-group-addon" style={ {width: "2.6rem"} }>
                                        <i className="fa fa-repeat"></i>
                                    </div>
                                    <input type="password" name="password-confirmation" className="form-control"
                                        id="password-confirm" placeholder="Password" required />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <button type="submit" className="btn btn-success"><i className="fa fa-user-plus"></i> Register</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register;