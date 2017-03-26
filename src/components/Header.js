import React, { Component } from 'react';
import * as bs from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="Header__nav">
                    <bs.Navbar inverse collapseOnSelect>
                        <bs.Navbar.Header>
                            <bs.Navbar.Brand>
                                <a href="#">Brandname</a>
                            </bs.Navbar.Brand>
                            <bs.Navbar.Toggle />
                        </bs.Navbar.Header>
                        <bs.Navbar.Collapse>
                            <bs.Nav pullRight>
                                {
                                    [1,2,3,4,5,6].map(item => <bs.NavItem eventKey={item} key={"menuItem" + item} href="#">Menu item {item}</bs.NavItem>)
                                }
                            </bs.Nav>
                        </bs.Navbar.Collapse>
                    </bs.Navbar>
                </div>
            </div>
        );
    }
}


