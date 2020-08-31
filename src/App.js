import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import "./styles/app.scss";
import HomePage from './pages/HomePage';
import Header from './components/Header';
import NewsPage from './pages/NewsPage';
import IntroOverlay from './components/IntroOverlay';
import AboutPage from './pages/AboutPage';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch><Route exact path="/"><IntroOverlay/></Route></Switch>
                <Header/>
                <Switch>
                    <Route exact path="/news"> <NewsPage/> </Route>
                    <Route exact path="/about"> <AboutPage/> </Route>
                    <Route path="/"> <HomePage/> </Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
