import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Typography, Paper } from '@material-ui/core';

import SaintAlbansLogo from './../../sources/saintAlbans.jpg';
import SaintAlbansDetails from './../../sources/saintAlbansDetails.png';

class Essex extends Component {
    render() {
        return (
            <div className="houses bg-light">
            <Container className="mt-3">
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }} >
                        <Typography variant="h5" align="left" gutterBottom>
                            Lake Street, Saint Albans, VT
                        </Typography>
                        <img className="w-100 rounded p-2" src={SaintAlbansLogo}/>
                    </Col>
                </Row>
                <Row>      
                    <Col sm="12" md={{ size: 6, offset: 3 }} >                 
                        <Typography className="px-5" variant="caption" align="center" gutterBottom>
                            Saint Albans, VT Home
                        </Typography>
                        <Typography variant="body2" gutterBottom>   
                            Lake Street is a four bedroom, two bathroom, home in a residential neighborhood. 
                            Two of the bedrooms are singles and two are doubles, for a total occupancy of six. 
                            This home is for men only.  Located in the southwestern corner of the town of St. 
                            Albans, our Lake St home offers close distance to everything that St. Albans has 
                            to offer within close proximity of St. Albans bay and Lake Champlain.
                        </Typography>
                        <img className="w-100 rounded p-2" src={SaintAlbansDetails}/>   
                    </Col>
                </Row>
            </Container>
        </div>
        );
    }
}

export default Essex;