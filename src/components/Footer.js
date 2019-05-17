import React from 'react';
import { Nav, 
         NavItem,
         NavLink,
         Container,
         Row,
         Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

import Form from '../forms/Form';


export default class siteFooter extends React.Component {

    render() {
        return (   
            <div style={{ minHeight: 500 }} className="footer bg-secondary">
                <Container>
                    <Row>
                        <Col sm="12" md={{ size: 4 }}>
                            <Typography className="text-info mt-3" variant="h5" align="center" gutterBottom>
                                Say Hello
                            </Typography>
                            <Form />
                        </Col>
                        <Col sm="12" md={{ size: 4 }}>
                            <Typography className="text-info mt-3" variant="h5" align="center" gutterBottom>
                                Thank you
                            </Typography>
                            <Typography variant="body1">  </Typography>
                        </Col>
                        <Col sm="12" md={{ size: 4 }}>
                        <Typography className="text-info mt-3" variant="h5" align="center" gutterBottom>
                                Quick Links
                            </Typography>
                        <Nav vertical align="center">
                                <NavItem>
                                    <NavLink>
                                        <Typography variant="h6" component={Link} to="/Home">Home</Typography>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <Typography variant="h6" component={Link} to="/About">About</Typography>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <Typography variant="h6" component={Link} to="/Work">Work</Typography>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}