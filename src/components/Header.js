import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

import Logo from '../sources/vforlogo.jpg';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
    }
    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }
    render() {
        return (   
            <Navbar light expand="md" className="border-bottom shadow">
                <NavbarBrand className="w-25">
                    <img src={Logo} style={{ minWidth: 210, maxWidth: 300 }} className="w-50"/>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} className="mt-2"/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink>
                                <Typography variant="subtitle1" component={Link} to="/Home">Home</Typography>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav>
                                <Typography variant="subtitle1">Houses</Typography>
                            </DropdownToggle>
                            <DropdownMenu left>
                                <DropdownItem>
                                    <Typography variant="subtitle1" component={Link} to="/houses/Burlington">Burlington</Typography>
                                </DropdownItem>
                                <DropdownItem>
                                    <Typography variant="subtitle1" component={Link} to="/houses/Essex">Essex</Typography>
                                </DropdownItem>
                                <DropdownItem>
                                    <Typography variant="subtitle1" component={Link} to="/houses/SaintAlbans">Saint Albans</Typography>
                                </DropdownItem>
                                <DropdownItem>
                                    <Typography variant="subtitle1" component={Link} to="/houses/SouthBurlington">South Burlington</Typography>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>    
                        </NavItem>
                        <NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav>
                                <Typography variant="subtitle1">Apply</Typography>
                            </DropdownToggle>
                            <DropdownMenu left>
                                <DropdownItem>
                                    <Typography variant="subtitle1" component={Link} to="/Application">Application</Typography>
                                </DropdownItem>
                                <DropdownItem>
                                    <Typography variant="subtitle1" component={Link} to="/Membership">Membership Policies</Typography>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>    
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Typography variant="subtitle1" component={Link} to="/Mission">Our Mission</Typography>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Typography variant="subtitle1" component={Link} to="/OurTeam">Our Team</Typography>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Typography variant="subtitle1" component={Link} to="/GetInvolved">Get Involved</Typography>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Typography variant="subtitle1" component={Link} to="/Contact">Contact Us</Typography>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>                 
            </Navbar>
        );
    }
}