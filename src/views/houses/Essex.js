import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Typography, Paper } from '@material-ui/core';

import EssexLogo from './../../sources/essex.jpg';
import EssexDetails from './../../sources/essexDetails.png';

class Essex extends Component {
    render() {
        return (
            <div className="houses bg-light">
            <Container className="mt-3">
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }} >
                        <Typography variant="h5" align="left" gutterBottom>
                            Lincoln Street, Essex, VT
                        </Typography>
                        <img className="w-100 rounded p-2" src={EssexLogo}/>
                    </Col>
                </Row>
                <Row>      
                    <Col sm="12" md={{ size: 6, offset: 3 }} >                 
                        <Typography className="px-5" variant="caption" align="center" gutterBottom>
                            Essex, VT Home
                        </Typography>
                        <Typography variant="body2" gutterBottom>   
                            Lincoln Street is a five bedroom, two bathroom, house in a residential 
                            neighborhood. There are three single rooms and one double. This home is for men 
                            only.  Located at the major hub of Essex Jct (Five Corners), Lincoln St. offers 
                            a very diverse home base for VFOR members looking to vault themselves into 
                            meaningful sobriety.
                        </Typography>
                        <img className="w-100 rounded p-2" src={EssexDetails}/>   
                    </Col>
                </Row>
            </Container>
        </div>
        );
    }
}

export default Essex;