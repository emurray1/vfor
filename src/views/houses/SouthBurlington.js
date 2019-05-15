import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Typography, Paper } from '@material-ui/core';

import SouthBurlingtonLogo from './../../sources/southBurlington.jpg';
import SouthBurlingtonDetails from './../../sources/southBurlingtonDetails.png';

class SouthBurlington extends Component {
    render() {
        return (
            <div className="houses bg-light">
            <Container className="mt-3">
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }} >
                        <Typography variant="h5" align="left" gutterBottom>
                            Suburban Square, South Burlington, VT
                        </Typography>
                        <img className="w-100 rounded p-2" src={SouthBurlingtonLogo}/>
                    </Col>
                </Row>
                <Row>      
                    <Col sm="12" md={{ size: 6, offset: 3 }} >                 
                        <Typography className="px-5" variant="caption" align="center" gutterBottom>
                            South Burlington, VT Home
                        </Typography>
                        <Typography variant="body2" gutterBottom>   
                            Suburban Square is a four bedroom, two and half bathroom split level house that 
                            sits on 1/5 of an acre in a residential community. Two of the bedrooms are 
                            singles and two are doubles, for a total occupancy of six. This home is for 
                            women only. Suburban Square features a partially covered deck and back yard 
                            large enough for many fun, summertime activities.  This house is located just 
                            over a mile from I89 and less than three miles from downtown Burlington.  
                            Located in Vermont’s most populous county, Suburban Square offers access to over 
                            100 12 Step meetings every week, and a vibrant recovery community.
                        </Typography>
                        <img className="w-100 rounded p-2" src={SouthBurlingtonDetails}/>   
                    </Col>
                </Row>
            </Container>
        </div>
        );
    }
}

export default SouthBurlington;