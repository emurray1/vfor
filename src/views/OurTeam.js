import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Typography } from '@material-ui/core';

import Andrew from '../views/team/Andrew';
import David from '../views/team/David';
import Shannon from '../views/team/Shannon';
import Kyle from '../views/team/Kyle';
import Mike from '../views/team/Mike';
import Liam from '../views/team/Liam';
import Anne from '../views/team/Anne';
import Melissa from '../views/team/Melissa';
import Lisa from '../views/team/Lisa';
import Ron from '../views/team/Ron';

class OurTeam extends Component {
    render() {
        return (
            <div className="team">
                <Container className="mt-3">
                    <Row>
                        <Col sm="12" className="border-bottom">
                            <Typography variant="h4" className="mb-3 text-info" align="left">
                                    Leadership Team
                            </Typography>
                        </Col>
                    </Row>
                    <Row>    
                        <Col className="my-4" sm="12" md={{ size: 6 }}>      
                            <Andrew />
                        </Col>
                        <Col className="my-4" sm="12" md={{ size: 6 }}>      
                            <David />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" className="border-bottom">
                            <Typography variant="h4" className="mb-3 text-info" align="left">
                                    Operations Team
                            </Typography>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="my-4" sm="12" md={{ size: 6 }}>      
                            <Shannon />
                        </Col>
                        <Col className="my-4" sm="12" md={{ size: 6 }}>      
                            <Kyle />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="my-4" sm="12" md={{ size: 6 }}>      
                            <Mike />
                        </Col>
                        <Col className="my-4" sm="12" md={{ size: 6 }}>      
                            <Liam />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" className="border-bottom">
                            <Typography variant="h4" className="mb-3 text-info" align="left">
                                    Board of Directors
                            </Typography>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="my-4" sm="12" md={{ size: 6 }}>      
                            <Anne />
                        </Col>
                        <Col className="my-4" sm="12" md={{ size: 6 }}>      
                            <Melissa />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="my-4" sm="12" md={{ size: 6 }}>      
                            <Lisa />
                        </Col>
                        <Col className="my-4" sm="12" md={{ size: 6 }}>      
                            <Ron />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default OurTeam;