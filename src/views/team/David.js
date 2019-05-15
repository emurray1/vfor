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

import DavidImg from '../../sources/david.jpg'


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

class David extends Component {    
    
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
                        title="David Riegel"
                        subheader="Leadership Team" 
                    />
                    <CardMedia 
                        className={classes.media}
                        image={DavidImg}
                        title="Andrew Gonyea"
                    />
                    <CardContent>
                        <Typography align="center" variant="subtitle1">
                         David is one of VFOR’s co-founders and currently serves as VFOR’s Executive Director.  David is a native of Waterbury and a graduate of Harwood Union High School.  
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
                                He is currently employed as a Supervisor with JetBlue Airways in Burlington.  David is also a person in recovery since January, 2007.  Since that time, David has been heavily involved in the recovery community.  He is often asked to speak at 12 Step meetings and conferences, and has conducted weekend seminars on 12 Step literature.  David became involved in sober housing in 2008, when he began renting his own home to other recovering alcoholics and addicts.  David realized that there is a great need for safe, transparent, well-managed, sober housing throughout Vermont, and hopes to make providing this service his life’s work.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
        )
    }
}
export default withStyles(styles)(David);