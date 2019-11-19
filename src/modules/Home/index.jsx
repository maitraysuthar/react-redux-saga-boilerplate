import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render(){
        const user  = JSON.parse(localStorage.getItem('user'));
        return(
            <div className="container">
                <div className="row vh-100">
                    <div className="col-md-6 mx-auto my-auto">
                        <div className="jumbotron text-center">
                            <h1 className="display-4">Hello, {user.firstName} {user.lastName}!</h1>
                            <Link to="manage-book" className="btn btn-primary btn-lg" role="button">Lets start collecting the Books?</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;