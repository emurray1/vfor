import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Typography, Paper } from '@material-ui/core';
import { FormatQuote } from '@material-ui/icons';

class Mission extends Component {
    render() {
        return (
            <div className="mission">
                <Container className="mt-3">
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <Typography variant="h3" className="mb-3" style={{ borderBottom: 1 }} align="center">
                                Our Mission
                            </Typography>
                            <Paper className="p-4 mb-3" elevation={3}>
                                <Typography className="text-info" variant="h6" gutterBottom>
                                    Vision
                                </Typography>   
                                <Typography className="pb-2" variant="body1" align="left" gutterBottom>
                                    Our vision is that every Vermonter struggling with addiction has ready access to a full spectrum of recovery supports and services.  VFOR envisions a future in which it will be able to connect addicts and alcoholics with services which shepherd them from detoxification, to inpatient treatment, to outpatient counseling, to sober living and employment, and ultimately, to stable sobriety and independent living as valued and productive members of their communities.  We envision that these services will be available to anyone who needs them, and that they will be available locally and without delay.
                                </Typography>
                            </Paper>     
                            <Paper className="p-4 mb-3" elevation={3}>
                                <Typography className="text-info" variant="h6" gutterBottom>
                                    Mission & Philosophy
                                </Typography>   
                                <Typography className="pb-2 border-bottom" variant="body1" align="left" gutterBottom>
                                    Our mission is to create a network of Recovery Homes to help people suffering from addiction re-assimilate into society by supporting the transitions from addiction, to recovery, to independent living.  A “Recovery Home” is many things.  Fundamentally, a Recovery Home is a residential property where the members of the home agree to maintain a drug and alcohol free environment.  Additionally, we strive to create a family-like atmosphere in our homes—one where our members are nurtured and energized by others who share common experiences, struggles, values, and goals.  Finally, we aim to structure our homes to provide varying degrees of supervision and autonomy, offering a variety of residences to meet the needs of individuals at varying stages of recovery.
                                </Typography>  
                                <Typography className="pb-2 border-bottom" variant="body1" align="left" gutterBottom>
                                    Our first and foremost goal is to provide safe, stable, drug and alcohol-free housing to recovering alcoholics and drug addicts.  We have found—in both our own experience and in the experience of countless others—that a substance-free home is vital to the success of individuals in early recovery.  This experience is backed by research.  A two year study conducted by researchers at DePaul University found that individuals who entered sober housing after substance abuse treatment discharge “had significantly lower substance use, significantly higher monthly income, and significantly lower incarceration rates” compared with individuals who left treatment to a “usual-care condition (i.e., outpatient treatment or self-help groups).”  American Journal of Public Health, Oct 2006; Vol. 96, pp1727–1729.  Recovering alcoholics and addicts who have access to sober housing not only become healthy, they become productive and valued citizens.
                                </Typography> 
                                <Typography className="pb-2 border-bottom" variant="body1" align="left" gutterBottom>
                                    Unfortunately, many people find that when they leave treatment they do not have a safe home to go to.  This is often because roommates and other friends are still active users, or because the addict/alcoholic has burned bridges with sober family and friends.  Regardless of the reason, the problem is the same—there is a tremendous need for sober housing.  VFOR’s mission is to help satisfy that need.
                                </Typography> 
                                <Typography className="pb-2 border-bottom" variant="body1" align="left" gutterBottom>
                                    While the primary purpose of our Recovery Homes is to provide a safe and clean living environment, they offer much more than that.  Our goal is to create a family environment in our homes, where the residents support one another in their recovery and cooperate to manage the household.  Thus, the house members themselves are largely responsible for creating and maintaining the culture of each home.  However, each of our Recovery Homes is managed by a VFOR staff member who helps select new members for the Home, moderates house meetings, enforces house policies, and generally mentors and supports all the house members in their transition to sobriety.  Our house managers are all themselves recovering alcoholics or addicts with multiple years of stable sobriety who have completed training in sober house management and/or recovery coaching.
                                </Typography> 
                                <Typography className="pb-2" variant="body1" align="left" gutterBottom>
                                    The house managers provide varying levels of oversight—and thus allow the members varying levels of independence—at the different Homes.  Recovery is a lifelong process of growth and development, and people require different levels of guidance and support at different stages of their recovery.  For example, we have found that individuals who are brand new to sobriety are more apt to thrive, and less apt to relapse, if they attend meetings regularly and abide by a curfew.  Thus, our Homes in Waterbury and South Burlington are designed for individuals new to recovery, and make such demands of its members.  On the other hand, we intend to create homes which are designed for individuals with more time in sobriety, and thus allows members more discretion in constructing their own program of recovery.  Our hope is that by sustaining and growing this model, VFOR will be able to provide an appropriate sober living environment to any person who desires one, regardless of their time and experience in sobriety.
                                </Typography>   
                            </Paper>              
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Mission;