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

import MikeImg from '../../sources/mike.jpeg';


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
                        title="Mike Terrien"
                        subheader="Operations Team" 
                    />
                    <CardMedia 
                        className={classes.media}
                        image={MikeImg}
                        title="Mike Terrien"
                    />
                    <CardContent>
                        <Typography align="center" variant="subtitle1">
                            Mike is the house manager for the Essex and St. Albans VFOR houses. He was born and raised in Burlington, VT, and is an active member of the 12 step/recovery community. Mike has been clean and sober since November 11th 2008. 
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
                                Since becoming sober and finding a new lease on life he has been able to overcome obstacles that prevented him from living a happy, joyous, and free life. His goal is to be available to any VFOR members who are struggling with early sobriety and give them encouragement and positive solutions. Mike is passionate about the wilderness, also works as a local Vermont Fly Fishing Guide.  He enjoys playing soccer, hockey, and is a live music fanatic who travels around to see his favorite Vermont band as much as he can.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
        )
    }
}
export default withStyles(styles)(Mike);