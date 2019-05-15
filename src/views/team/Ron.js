import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Typography, 
         Card, 
         CardMedia,
         CardContent, 
         CardHeader,
         CardActions,
         IconButton,
         withStyles,
         Collapse } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import RonImg from '../../sources/ron.jpeg';


const styles = theme => ({
    media: {
        height: 250,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },    
});

class Ron extends Component {    
    
    state = {
        expanded: false, 
        raised: false
    }

    toggleRaised = () => {
        this.setState((state) => ({raised: !state.raised}))
    }
        
    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };


    render() {
        const { classes } = this.props;
        return (
                <Card 
                    onMouseOver={this.toggleRaised}
                    onMouseOut={this.toggleRaised}
                    raised={this.state.raised}
                >
                    <CardHeader
                        title="Ron Stankevich"
                        subheader="Board of Directors" 
                    />
                    <CardMedia 
                        className={classes.media}
                        image={RonImg}
                        title="Ron Stankevich"
                    />
                    <CardContent>
                        <Typography align="center" variant="subtitle1">
                        Ron is the Community Relations Coordinator at Dominion Diagnostics.  He has two advanced degrees; Master of Science in Administration from St. Michael’s College, and a Master of Social Work from the University of Vermont.
                        </Typography>
                    </CardContent>
                    <CardActions  disableActionSpacing>
                        <IconButton
                            className={classnames(classes.expand, {
                                [classes.expandOpen]: this.state.expanded,
                            })}
                            onClick={this.handleExpandClick}
                            aria-expanded={this.state.expanded}
                            aria-label="Show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>      
                    </CardActions>
                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography variant="subtitle1" gutterBottom>                                  
                            He is also an Apprentice Addiction Professional.  In his role at Dominion, Ron is tasked with developing innovative vision, strategy and outreach programs that positively impact patients, providers and the broader continuum of care ecosystem.  He believes very strongly that an essential part of successful recovery is safe and supportive sober housing without delay after inpatient treatment and support.  Without this scaffolding, individuals may have no choice but to return to an environment which quite possibly might short circuit their journey of recovery.  He feels VFOR is an effective deterrent to relapse and a pathway to a healthy and happy life.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
        )
    }
}
export default withStyles(styles)(Ron);