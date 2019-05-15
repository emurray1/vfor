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

import AnneImg from '../../sources/anne.jpg';


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

class Mike extends Component {    
    
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
                        title="Anne Latullipe"
                        subheader="Board of Directors" 
                    />
                    <CardMedia 
                        className={classes.media}
                        image={AnneImg}
                        title="Anne Latullipe"
                    />
                    <CardContent>
                        <Typography align="center" variant="subtitle1">
                        Anne was raised in Chittenden County and moved to Central Vermont 22 years ago. She currently resides in Duxbury, with her husband, her two teenage sons, and dog, Brady. She has numerous years of working and volunteering in the non-profit world. 
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
                            She recognizes the need for sober housing to support people who are striving to better their lives through recovery. Anne and her whole family have been affected by the ravages of alcoholism and addiction. She herself is a person in recovery, since February 1997. Anne has worked as Executive Director for The Children’s Room in Waterbury, for the past 11 years, and currently serves on the Central Vermont Building Bright Futures Council steering committee, is President of The Harwood Booster Club, and Town Auditor. Currently a student at Northern Vermont University, she intends to achieve her Bachelor’s Degree in 2019. Anne currently serves as VFOR’s Board President
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
        )
    }
}
export default withStyles(styles)(Mike);