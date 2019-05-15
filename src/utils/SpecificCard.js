import React, { Component } from 'react';
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

import Headshot from '../sources/headshot.jpg';

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

class SpecificCard extends Component {    
    
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
                    title="My Story"
                    subheader="Who I am, what I've done" 
                />
                <CardMedia 
                    className={classes.media}
                    image={Headshot}
                    title="Eric, Mason, and Jess"
                />
            <CardContent>
            <Typography align="center" variant="h6">Our newest home is now open!</Typography>
                            <Typography align="center" variant="subtitle1">This home is for men and offers 6 beds 
                                in the heart of amazing Saint Johnsbury!
                            </Typography>
                            <div className="text-center">
                                <Button variant="contained" className="mt-3 bg-primary text-light">Apply Now!</Button>
                            </div>
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
                    I have seen my baby boy grow, learn, and love. I have watching my wife overcome challenges 
                    with a level of grace that I can only hope to achieve. I have done my best to appreciate those 
                    moments in life that are quiet and still.  Every experience and individual has left a profound 
                    mark on my life, I am thankful for each and every one.
                </Typography>
                </CardContent>
            </Collapse>
            </Card>
        )
    }
}
export default withStyles(styles)(SpecificCard);