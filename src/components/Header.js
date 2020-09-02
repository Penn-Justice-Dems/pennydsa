import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../res/images/pjd_logo.png'
import downArrow from '../res/images/icons/down_arrow.png'
import twitterIcon from '../res/images/icons/twitter_icon.png'
import facebookIcon from '../res/images/icons/facebook_icon.png'
import instagramIcon from '../res/images/icons/instagram_icon.png'
import googleCalendarIcon from '../res/images/icons/google_calendar_icon.png'
import BlockBackground from './BlockBackground'

class Header extends Component {

    iconRow() {
        let icons = [
            { icon: twitterIcon, link: "https://twitter.com/pennjusticedems"},
            { icon: facebookIcon, link: "https://facebook.com" },
            { icon: instagramIcon, link: "https://facebook.com" },
            { icon: googleCalendarIcon, link: "https://facebook.com" }];
        return (
            <div className="header_icon_row">
                { icons.map(item => {
                    return <a href={item.link} target="_blank" rel="noopener noreferrer" key={item.icon}>
                        <img className="header_icon scale_effect_50" src={item.icon} alt={"Penn Justice Dems: "+item.icon}/>
                    </a>
                }) }
            </div>
        )
    }

    collapseIcon() {
        return <img src={downArrow} className="down-arrow-icon"/>
    }

    render() {
        return (
            <div className="header">
                <div className="block"></div>
                <div className="main">
                    <Navbar className="navbar" bg="none" expand="xl">
                        <Navbar.Brand href="/">
                            <img src={logo}  className="nav-logo d-inline-block align-top" alt="Penn Justice Dems Logo"/>
                            <h1 className="header_title">Penn Justice Democrats</h1>
                        </Navbar.Brand>
                        <Navbar.Toggle children={ this.collapseIcon() } aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse className="navbar-collapse">
                            <Nav className="ml-auto flex-column">
                                <div >
                                    <Nav.Link href="/" className="header-nav-link">Home</Nav.Link>
                                    <Nav.Link href="/about" className="header-nav-link">About</Nav.Link>
                                    <Nav.Link href="/issues" className="header-nav-link">Issues</Nav.Link>
                                    <Nav.Link href="/news" className="header-nav-link">News</Nav.Link>
                                    <Nav.Link href="/coalition" className="header-nav-link">Coalition</Nav.Link>
                                    <Nav.Link href="/calendar" className="header-nav-link">Calendar</Nav.Link>
                                    <Nav.Link href="/gallery" className="header-nav-link">Gallery</Nav.Link>
                                    <Nav.Link href="/contact" className="header-nav-link">Contact</Nav.Link>
                                    <Nav.Link href="/join" className="header-nav-link">Join</Nav.Link>
                                </div>
                                <div>
                                    { this.iconRow() }
                                </div>
                                
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        )
    }

    render2() {
        return (
            <div className="header">
                <div className="block"></div>
                <div className="main">
                    { this.iconRow() }
                    <div className="logo-container">
                        <img src={logo}  className="logo" alt="Penn Justice Dems Logo"/>
                    </div>
                    <div className="header_text">
                        <div className="header_title">
                            PENN JUSTICE DEMOCRATS
                        </div>
                        <div>
                            <Navbar className="header_navbar" expand="lg">
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse>
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/" className="header-nav-link">Home</Nav.Link>
                                        <Nav.Link href="/about" className="header-nav-link">About</Nav.Link>
                                        <Nav.Link href="/issues" className="header-nav-link">Issues</Nav.Link>
                                        <Nav.Link href="/news" className="header-nav-link">News</Nav.Link>
                                        <Nav.Link href="/coalition" className="header-nav-link">Coalition</Nav.Link>
                                        <Nav.Link href="/contact" className="header-nav-link">Contact Us</Nav.Link>
                                        <Nav.Link href="/calendar" className="header-nav-link">Calendar</Nav.Link>
                                        <Nav.Link href="/coalition" className="header-nav-link">Donate</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;
