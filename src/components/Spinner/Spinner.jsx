import React, { Component } from 'react';
import './spinner.css';

class Spinner extends Component {
    render(){
        return (
            <div className="loader-wrapper">
                <div className="spinner">
                </div>
            </div>
        );
    }
}

export default Spinner;