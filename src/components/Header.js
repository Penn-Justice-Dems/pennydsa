import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../res/images/pjd_logo.png'
import downArrow from '../res/images/icons/down_arrow.png'
import twitterIcon from '../res/images/icons/twitter_icon.png'
import facebookIcon from '../res/images/icons/facebook_icon.png'
import instagramIcon from '../res/images/icons/instagram_icon.png'
import googleCalendarIcon from '../res/images/icons/google_calendar_icon.png'

class Header extends Component {

    iconRow() {
        let icons = [
            { icon: twitterIcon, link: "https://twitter.com/pennjusticedems"},
            { icon: facebookIcon, link: "https://www.facebook.com/pennjusticedems/" },
            { icon: instagramIcon, link: "https://www.instagram.com/pennjusticedems/" },
            { icon: googleCalendarIcon, link: "https://calendar.google.com/calendar?cid=cGVubmp1c3RpY2VkZW1zQGdtYWlsLmNvbQ" }];
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
        return <img src={downArrow} className="down-arrow-icon" alt="Down Arrow Icon"/>
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
}

export default Header;
