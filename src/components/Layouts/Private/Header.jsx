import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {    
    render() {
        const user  = JSON.parse(localStorage.getItem('user'));
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">[Company-Name]</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">My Books</a>
                        </li>
                    </ul>
                    <div className="dropdown">
                        <a className="navbar-text dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {user.firstName} {user.lastName}
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            {/*<a className="dropdown-item" href="#">Profile</a>*/}
                            <Link to="/logout" className="dropdown-item">Logout</Link>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;