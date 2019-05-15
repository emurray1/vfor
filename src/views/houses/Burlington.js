import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Typography, Paper } from '@material-ui/core';

import BurlingtonLogo from './../../sources/burlington.jpg';
import BurlingtonDetails from './../../sources/burlingtonDetails.png';

class Burlington extends Component {
    render() {
        return (
            <div className="houses bg-light">
            <Container className="mt-3">
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }} >
                        <Typography variant="h5" align="left" gutterBottom>
                            Lyman Avenue, Burlington, VT
                        </Typography>
                        <img className="w-100 rounded p-2" src={BurlingtonLogo}/>
                    </Col>
                </Row>
                <Row>      
                    <Col sm="12" md={{ size: 6, offset: 3 }} >                 
                        <Typography className="px-5" variant="caption" align="center" gutterBottom>
                            Burlington, VT Home
                        </Typography>
                        <Typography variant="bod2" gutterBottom>   
                            Lyman Ave. is a four bedroom, two bathroom-home.  Two of the bedrooms are singles 
                            and two are doubles, for a total occupancy of six. This home is for men only.  It 
                            features a spacious living area, and a roomy kitchen area with a deck connecting to 
                            a back yard area.  This home is located in the beautiful south end of Burlington in 
                            a quaint, and quiet neighborhood.  Lyman Ave. is minutes away from Oakledge Park and 
                            is in walking distance to Downtown Burlington, where the hub of our recovery network 
                            lives and thrives.
                        </Typography>
                        <img className="w-100 rounded p-2" src={BurlingtonDetails}/>   
                    </Col>
                </Row>
            </Container>
        </div>
        );
    }
}

export default Burlington;