import React, { Component } from 'react'
import logo from './res/images/pjd_logo.png';
import "./css/main.css";


class App extends Component {

    constructor(props) {
        super(props);
        this.underConstruction = true;
    }

    render() {
        return (
            <div style={{textAlign: "center", margin: 50}}>
                <div>
                    <img src={logo} height="200"/>
                </div>
                <p className="title">
                    Coming Soon
                </p>
            </div>
        )
    }

}

export default App;
