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

import LisaImg from '../../sources/lisa.jpg';


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

class Lisa extends Component {    
    
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
                        title="Lisa Mugford"
                        subheader="Board of Directors" 
                    />
                    <CardMedia 
                        className={classes.media}
                        image={LisaImg}
                        title="Lisa Mugford"
                    />
                    <CardContent>
                        <Typography align="center" variant="subtitle1">
                            Lisa was raised in Barre VT and graduated from Spaulding High School in 1983. She also attended and graduated from Champlain College. Lisa has owned and operated a successful business in Stowe VT for 25 years. 
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
                                She has been clean and sober since 2007 and dedicates a lot of time to 12 Step service. From 2013-2017 she worked as operations manager at North Central Vermont Recovery Ctr. During this period Lisa worked directly with folks in or seeking recovery from drugs and alcohol on a daily basis. Hobbies include baking, fishing, hiking, and especially spending time with family! Lisa is serving as the Secretary of VFOR’s Board of Directors.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
        )
    }
}
export default withStyles(styles)(Lisa);