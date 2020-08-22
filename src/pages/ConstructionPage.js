import React, { Component } from 'react'
import logo from '../res/images/pjd_logo.png';

export default class ConstructionPage extends Component {
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
