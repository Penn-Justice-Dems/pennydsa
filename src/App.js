import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import "./css/main.css";
import ConstructionPage from './pages/ConstructionPage';

class App extends Component {
    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route path="/"><ConstructionPage /></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
