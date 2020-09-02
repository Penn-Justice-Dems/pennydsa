import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import "./styles/app.scss";
import HomePage from './pages/HomePage';
import Header from './components/Header';
import NewsPage from './pages/NewsPage';
import IntroOverlay from './components/IntroOverlay';
import AboutPage from './pages/AboutPage';
import IssuesPage from './pages/IssuesPage';
import JoinPage from './pages/JoinPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import CalendarPage from './pages/CalendarPage';

class App extends Component {

    render() {
        
        return (
            <>
                <div id="page-top"></div>
                <BrowserRouter>
                    <Switch><Route exact path="/"><IntroOverlay/></Route></Switch>
                    <Header/>
                    <Switch>
                        <Route exact path="/news"> <NewsPage/> </Route>
                        <Route exact path="/about"> <AboutPage/> </Route>
                        <Route exact path="/issues"> <IssuesPage/> </Route>
                        <Route exact path="/join"> <JoinPage/> </Route>
                        <Route exact path="/gallery"> <GalleryPage/> </Route>
                        <Route exact path="/contact"> <ContactPage/> </Route>
                        <Route exact path="/calendar"> <CalendarPage/> </Route>
                        <Route path="/"> <HomePage/> </Route>
                    </Switch>
                </BrowserRouter>
            </>
        )
    }
}

export default App;
