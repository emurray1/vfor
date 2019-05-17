import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Typography, Paper } from '@material-ui/core';
import { FormatQuote } from '@material-ui/icons';

import howardCenterForm from '../sources/howardCenterForm.pdf';
import howardCenterForm2 from '../sources/howardCenterForm.pdf';

class Membership extends Component {
    render() {
        return (
            <div className="membership">
                <Container className="mt-3">
                    <Row>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Typography variant="h3" className="mb-3" align="center">
                                Membership Policies
                            </Typography>
                            <Typography variant="h6" className="mb-3" align="center">
                                VFOR Policy Snapshot (The first 30 days).
                            </Typography>
                            <Paper className="p-4 mb-3" elevation={3}>
                                <Typography className="text-primary" variant="h6" gutterBottom>
                                    Emergency Contact Procedure
                                </Typography>   
                                <Typography className="pb-2" variant="body1" align="left" gutterBottom>
                                    If there is an emergency that cannot wait until your house meeting (relapse, domestic incident, 911, the Police or any emergency service is called to any VFOR House) please contact a VFOR Representative immediately!  If a law enforcement officer shows up at a VFOR house, please contact a VFOR representative and give the officer the VFOR rep’s contact information
                                </Typography>
                                <Typography className="pb-2" variant="body1" align="left" gutterBottom>
                                    Phone Tree to be followed in chronological (numbered) order:
                                </Typography>
                                <ListGroup>
                                    <ListGroupItem>
                                        <Typography variant="body1" align="left" gutterBottom>
                                            1. House Mentor ______________________________(if they can’t be reached)
                                        </Typography>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <Typography variant="body1" align="left" gutterBottom>
                                            2. House Manager_____________________________(if they can’t be reached)
                                        </Typography>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <Typography variant="body1" align="left" gutterBottom>
                                            3. VFOR Phone________________________________(if they can’t be reached)
                                        </Typography>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <Typography variant="body1" align="left" gutterBottom>
                                            4. Operations Director__________________________(if they can’t be reached
                                        </Typography>
                                    </ListGroupItem>
                                </ListGroup> 
                                <Typography className="py-2" variant="body1" align="left" gutterBottom>
                                    If you have reached someone on this list, please follow what they say and do not continue to call people on this list. This procedure is for emergencies only.  Anything else can wait until the house meeting or until your house manager has responded.
                                </Typography>
                            </Paper>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <Typography variant="h6" className="mb-3" align="center">
                                VFOR Introduction Policy Snapshot
                            </Typography>   
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 6 }}>
                            <Paper className="p-4 mb-3" elevation={3}>
                                <Typography className="text-info" variant="h6" gutterBottom>
                                    House Meeting
                                </Typography>   
                                <Typography className="pb-2" variant="body1" align="left" gutterBottom>
                                    The House Meeting is mandatory throughout a member’s stay with VFOR.  If a member feels they need to miss a meeting, they can request the time off online <span component={Link} to="/houses/Burlington">here</span>
                                </Typography>  
                                <Typography className="pb-2" variant="body1" align="left" gutterBottom>
                                    Requests will be heard on a case by case basis.  Member’s stature in the house is important and will be factored into the decision (ex. not behind on dues or any corrective action).  A request does not guarantee approval.
                                </Typography> 
                                <Typography className="pb-2" variant="body1" align="left" gutterBottom>
                                    The House Meeting is vital to communication, communal understanding, and character building.
                                </Typography>
                            </Paper>
                            <Paper className="p-4 mb-3" elevation={3}>     
                                <Typography className="text-info" variant="h6" gutterBottom>
                                    First Recovery Meeting
                                </Typography>  
                                <Typography className="pb-2" variant="body1" align="left" gutterBottom>
                                    All members are required to attend a recovery meeting within twenty-four (24) hours of move-in.  The thirty-day (30) introduction period begins on the day of the first recovery meeting.  If a member does not attend a recovery meeting within the first twenty-four (24) hours, membership could be discontinued.
                                </Typography>
                            </Paper>    
                        </Col>
                        <Col sm="12" md={{ size: 6 }}>    
                            <Paper className="p-4 mb-3" elevation={3}>
                                <Typography className="text-info" variant="h6" gutterBottom>
                                    Recovery Meetings
                                </Typography>
                                <Typography className="pb-2" variant="body1" align="left" gutterBottom>
                                    <span className="font-weight-bold">For the first 30 days, members must attend a recovery meeting each day with personal documentation for each daily meeting.</span> Meetings must be on separate days (no doubling up).   Some recovery meetings might include, but are not limited to, 12 step meetings, IOP, church, meeting with a sponsor, counselor and/or recovery coach. All recovery meetings need to be at least one hour in length to meet this obligation and members need to be at the meeting from start to finish. For the first 30 days, the house meeting can count as a recovery meeting.
                                </Typography>     
                                <Typography className="pb-2 text-muted" variant="body1" align="left" gutterBottom>
                                    Recovery Meeting definition:  Any meeting related to recovery, where a group of people (2 or more in the case of sponsors, counselors, and or recovery coaches) gather for an hour minimum, led by a facilitator and discuss recovery related topics.
                                </Typography>
                                <Typography className="pb-2 font-weight-bold" variant="body1" align="left" gutterBottom>
                                    A recovery meeting is not a medical examination, elective, or a check-up on physical well-being.
                                </Typography>  
                                <Typography className="pb-2 font-weight-bold" variant="body1" align="left" gutterBottom>
                                    <span className="font-weight-bold">After the introduction period</span> all VFOR house members must attend a minimum of four (4) recovery related meetings each week and the house meeting does not count as a recovery related meeting.
                                </Typography>  
                            </Paper>              
                        </Col>
                    </Row>    
                    <Row>    
                        <Col sm="12" md={{ size: 6 }}>    
                                <Paper className="p-4 mb-3" elevation={3}>
                                <Typography className="text-info" variant="h6" gutterBottom>
                                    Recovery Mentor
                                </Typography>  
                                <Typography className="pb-2" variant="body1" align="left" gutterBottom>
                                    In the first 30 days, all members are expected to seek out and develop a relationship with a mentor figure. This may include, but is not limited to a counselor, a recovery coach, and/or a 12-step sponsor. If you have another idea for a mentor, have it approved by the House Manager before counting them as a mentor. <span className="font-weight-bold">You can only count using your mentor as a recovery meeting once per week.</span>  After the 30-day introduction period members are expected to keep relationships with a recovery mentor. If for some reason a member ends their relationship with the recovery mentor, members will need to inform the house manager. This member will then need to find a new recovery mentor.
                                </Typography>
                            </Paper>    
                        </Col>
                        <Col sm="12" md={{ size: 6 }}>    
                                <Paper className="p-4 mb-3" elevation={3}>
                                <Typography className="text-info" variant="h6" gutterBottom>
                                    Weekly Recovery Commitment
                                </Typography>  
                                <Typography className="pb-2" variant="body1" align="left" gutterBottom>
                                    In the first 30 days of membership, members are expected to seek out and maintain a weekly recovery commitment. This may include, but is not limited to an IOP group, group meeting with a counselor, church, volunteering at a recovery center and/or a 12-step home group. If you have another idea about a WRC, have it approved by the House Manager prior to counting it as your weekly commitment.  After the 30-day introduction period members are expected to keep a WRC. If for some reason a member decides to change a WRC, the member will need to inform the house manager. This member will then need to find a new WRC.
                                </Typography>
                            </Paper>    
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 6 }}>    
                                <Paper className="p-4 mb-3" elevation={3}>
                                <Typography className="text-info" variant="h6" gutterBottom>
                                    Work / Volunteering / Education
                                </Typography>  
                                <Typography className="pb-2" variant="body1" align="left" gutterBottom>
                                If a member does not have employment by the end of (2) two weeks they are expected to find volunteering or education. By the end of (2) two weeks, new members must provide documentation that work, volunteering and/or education has begun. <span className="font-weight-bold">Once one of these has been established, 20 hours are the minimum hours expected.  Please note that at any time VFOR may ask for documentation of your 20hrs.</span>   If you have any questions about what is acceptable for work/volunteering/education, consult the House Manager. No professional practice on VFOR property.
                                </Typography>
                            </Paper>    
                        </Col>                      
                        <Col sm="12" md={{ size: 6 }}>    
                            <Paper className="p-4 mb-3" elevation={3}>
                                <Typography className="text-info" variant="h6" gutterBottom>
                                    Overnight Guest, Outings, Curfew
                                </Typography>  
                                <Typography className="pb-2" variant="body1" align="left" gutterBottom>
                                    For the first 30 days a member cannot have a guest on VFOR property unless they are family or their Recovery Mentor. Each house member has a 10:30 pm curfew ongoing throughout their stay.  If under supervision, the most stringent rules apply. Guests or nights out are not allowed for the first 30 days.
                                </Typography>
                            </Paper>    
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <Typography variant="h6" className="mb-3" align="center">
                                VFOR Medication & Drug Testing Policy
                            </Typography>   
                        </Col>
                    </Row>
                    <Row>    
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Paper className="p-4 mb-3" elevation={3}>
                                <Typography className="text-info" variant="h6" gutterBottom>
                                   VFOR Medication Policy
                                </Typography> 
                                <Typography className="pb-2" variant="body2" align="left" gutterBottom>
                                    Members of Vermont Foundation of Recovery can be on medication that is prescribed by a doctor
                                </Typography>
                                <ListGroup>
                                    <ListGroupItem>
                                        <Typography className="font-weight-bold" variant="body1" align="left" gutterBottom>
                                            If the medication is a deemed abusive by VFOR. There can only be one-week prescriptions kept on the property at a time. The medication must be picked up weekly at a local pharmacy, clinic, or licensed provider and kept in a lock box. Prescriptions would need to be filled on the day of member’s house meeting, and the member is responsible for getting their med sheet signed by the pharmacist for each medication pick-up. Medication needs to be picked up in “blister packaging if available.  
                                        </Typography>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <Typography variant="body1" align="left" gutterBottom>
                                            If the medication that is being picked up is prescribed PRN, but the member does not take their dose, they may keep it on them. However, members are not allowed to have more than a week’s dose on them at any given time.
                                        </Typography>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <Typography variant="body1" align="left" gutterBottom>
                                            If you are on any type of medically assisted treatment, a Release of Information (ROI) form must be filled out before becoming a member and presented upon arrival to ensure that VFOR receives tests accordingly. If you are working with any type of lab, we need an ROI from them as well.
                                        </Typography>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <Typography variant="body1" align="left" gutterBottom>
                                            If the house feels that any medication is being abused, sold, or used in any other way than prescribed, membership agreement will be discontinued.
                                        </Typography>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <Typography variant="body1" align="left" gutterBottom>
                                            All members must sign consent forms/releases with a prescribing professional if on a controlled substance.
                                        </Typography>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <Typography className="font-weight-bold" variant="body1" align="left" gutterBottom>
                                            Disposing of medication needs to be done with a VFOR representative or then need a note from prescriber that the medication was disposed by them – no exceptions. Do not throw away or flush medication.  All changes in medication must be reported to House Manager or Vermont Foundation of Recovery Operations within 24 hours of any change. Failure to comply with these policies will result in a misuse of medication infraction and result in a CAC.
                                        </Typography>
                                    </ListGroupItem>
                                </ListGroup>
                                <Typography className="py-2" variant="body2" align="left" gutterBottom>
                                    Any medication the VFOR feels has a potential for abuse is subject to our Abusive Medication Policy.  Provided is our most up-to-date Abusive Medication list.  This list is not comprehensive and is subject to change at any time.  Also, please note that any medication identified as a controlled substance by the DEA is considered abusive even if you don’t see it listed here
                                </Typography>
                                <ListGroup>
                                    <ListGroupItem>
                                        <Typography variant="body1" align="left" gutterBottom>
                                            ALL Barbiturates
                                        </Typography>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <Typography variant="body1" align="left" gutterBottom>
                                            ALL Benzodiazepines
                                        </Typography>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <Typography variant="body1" align="left" gutterBottom>
                                            ALL Narcotics/Opioids
                                        </Typography>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <Typography variant="body1" align="left" gutterBottom>
                                            ALL Amphetamines
                                        </Typography>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <Typography variant="body1" align="left" gutterBottom>
                                            ALL MAR or Maintenance Medications
                                        </Typography>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <Typography variant="body1" align="left" gutterBottom>
                                            Sleep Medications:  Ambien, Sonata, Lunesta, Seroquel, Trazadone etc.
                                        </Typography>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <Typography variant="body1" align="left" gutterBottom>
                                            Non-Narcotic Pain Meds and others:  Tramadol, Neurotin/Gabapentin, Lyrica/Pregabalin, Clonidine, Burpoprion (Wellbutrin), Vivance, NyQuil, Flexeril.
                                        </Typography>
                                    </ListGroupItem>
                                </ListGroup>  
                                <Typography className="py-2" variant="body2" align="left" gutterBottom>
                                    Again, this is not a complete list and it’s subject to change.
                                </Typography>
                            </Paper>
                        </Col>
                    </Row>
                    <Row>    
                        <Col sm="12" md={{ size: 6 }}>    
                                <Paper className="p-4 mb-3" elevation={3}>
                                <Typography className="text-info" variant="h6" gutterBottom>
                                    Drug Testing and Smoking
                                </Typography>  
                                <Typography className="pb-2" variant="body1" align="left" gutterBottom>
                                    There are random drug and alcohol tests.  If the results are positive, members will be asked to leave immediately.
                                </Typography>
                                <ListGroup>
                                    <ListGroupItem>
                                        <Typography variant="body1" align="left" gutterBottom>
                                            The member will have 2 hours to take the urinalysis and one cup of water. If the member does not take the drug test within two hours, they may have to leave immediately; membership could be discontinued.
                                        </Typography>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <Typography variant="body1" align="left" gutterBottom>
                                            A Breathalyzer must be taken immediately, if refused it will be treated as a positive test.
                                        </Typography>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <Typography variant="body1" align="left" gutterBottom>
                                            If member would like to contest positive results they are responsible for any costs related to confirmation. If the member contests the positive results, the sample will be submitted for specific substance identification.
                                        </Typography>
                                        <ListGroup>
                                            <ListGroupItem>
                                                <Typography variant="body1" align="left" gutterBottom>
                                                    Confirmation can take up to three (3) business days.
                                                </Typography>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <Typography variant="body1" align="left" gutterBottom>
                                                    All members personal belongings may stay on the Vermont Foundation of Recovery property.
                                                </Typography>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <Typography variant="body1" align="left" gutterBottom>
                                                    The member must be escorted by a VFOR Representative to retrieve any personal belongings.
                                                </Typography>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <Typography variant="body1" align="left" gutterBottom>
                                                    If a house member refuses testing, this will count as a positive test and the member must leave immediately.
                                                </Typography>
                                            </ListGroupItem>
                                        </ListGroup> 
                                    </ListGroupItem>
                                </ListGroup>  
                            </Paper>    
                        </Col>
                        <Col sm="12" md={{ size: 6 }}>    
                                <Paper className="p-4 mb-3" elevation={3}>
                                <Typography className="text-info" variant="h6" gutterBottom>
                                    False Positives
                                </Typography>  
                                <Typography className="pb-2" variant="body1" align="left" gutterBottom>
                                    These medications and foods are KNOWN to cause false positives:  Albuterol (Inhaler), Kambucha, poppy seed bagels, poppy seed muffins, everything bagels with poppy seeds, any nasal spray, high caffeine content drinks (i.e. energy drinks), cooking with high alcohol content, ingesting foods with alcohol content, Nyquil, etc.
                                </Typography>
                                <Typography className="pb-2" variant="body1" align="left" gutterBottom>
                                    Our Medications Policy is very strict.  If you choose to ingest these foods or meds, do so at your own risk.  If you are subject to a false positive for one of these medications, you will need to leave the house and get it confirmed with our lab partner at your own expense. If any of these does cause a false positive, member will still be subjected to a behavioral contract and possibly have their membership discontinued.
                                </Typography>
                                <Typography className="pb-2 font-weight-bold" variant="body1" align="left" gutterBottom>
                                    If a member knows another member is using or has used/drank and doesn’t bring this information to the House Manager or Mentor, they can be at risk for having their membership discontinued. 
                                </Typography>
                            </Paper>    
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>   
                            <Typography className="pb-2 font-weight-bold" variant="subtitle1" align="left" gutterBottom>
                                This is the introduction snapshot of VFOR policies only. All members are accountable to following all VFOR policies, always.  If you would like an updated list of VFOR policies, please ask your house manager. THESE policies will need to be met to get off the introduction period. Failure to follow through with any of these policies in the first 30 days will lead to a continued introduction period until terms are met or membership could be discontinued.
                            </Typography>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <Typography variant="h6" className="mb-3" align="center">
                                Please continue to the Membership Agreement
                            </Typography>   
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Typography className="pb-2" variant="body1" align="center" gutterBottom>
                                <a className="text-info" href={howardCenterForm}>Clinic Form for Consent pg 1</a>
                            </Typography>    
                            <Typography className="pb-2" variant="body1" align="center" gutterBottom>
                                <a className="text-info" href={howardCenterForm2}>Clinic Form for Consent pg 2</a>
                            </Typography>                     
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Membership;