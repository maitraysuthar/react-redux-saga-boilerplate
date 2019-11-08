import React, {Component} from 'react';

class Home extends Component {
    render(){
        const user  = JSON.parse(localStorage.getItem('user'));
        return(
            <div className="container">
                <div className="row vh-100">
                    <div className="col-md-6 mx-auto my-auto">
                        <div class="jumbotron text-center">
                            <h1 class="display-4">Hello, {user.firstName} {user.lastName}!</h1>
                            <a class="btn btn-primary btn-lg" href="#" role="button">Can we start collecting Books?</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;