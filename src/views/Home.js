import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import { Typography, Paper } from '@material-ui/core';
import { FormatQuote, Announcement } from '@material-ui/icons';

import HomeAnimation from './../components/HomeAnimation';

import Locations from '../sources/locations.jpg';
import Background from '../sources/saintjohnsbury.jpg';

var sliderStyle = {
    height: 655,
    maxHeight: 655,
    backgroundImage: `url(${Background})`,
    backgroundSize:'cover'
}

class Home extends Component {
    render() {
        return (
            <div className="Home bg-light">
                <Jumbotron fluid style={ sliderStyle }>
                    <HomeAnimation />
                </Jumbotron>
                <Container className="mt-3">
                    <Row>
                        <Col sm="12" >
                            <Announcement style={{ fontSize: 80 }} className="mx-auto w-100 text-info" />
                            <Typography variant="h6" align="center" className="mb-3" style={{ borderBottom: 1 }} align="center">
                                Our newest home is now open!
                            </Typography>
                            <Typography variant="subtitle2" align="center" className="mb-3" style={{ borderBottom: 1 }} align="center">
                                This home is for men and offers 6 beds in the heart of amazing Saint Johnsbury!
                            </Typography>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col sm="12" md={{ size: 6 }} className="mb-3">
                            <Typography variant="h4" className="mb-3" style={{ borderBottom: 1 }} align="center">
                                Our Mission
                            </Typography>
                            <Paper className="p-4" elevation={3}>
                            <FormatQuote style={{ fontSize: 185 }} className="mx-auto w-100 text-primary" /> 
                            <Typography className="px-1" variant="overline" align="center" gutterBottom>
                                "Our mission is to create a network of Recovery Homes (clean and sober 
                                living homes) to help people suffering from addiction, re-assimilate into 
                                society by supporting the transitions from addiction, to recovery, to 
                                independent living.""
                            </Typography>     
                            </Paper>              
                        </Col>
                        <Col sm="12" md={{ size: 6 }}>
                            <Typography variant="h4" className="mb-3" style={{ borderBottom: 1 }} align="center">
                                Our Locations
                            </Typography>        
                            <Paper className="p-4" elevation={3}>
                            <img className="rounded mx-auto d-block" src={Locations} style={{ maxHeight: 252 }}/>
    
                            <Typography align="left" variant="body1">VFOR has 
                                recovery residences in St. Albans, Essex Jct., Burlington, South 
                                Burlington, and St. Johnsbury, Vermont. And coming soon to Barre and 
                                Morrisville, Vermont!
                            </Typography>
                            </Paper>
                        </Col>  
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;