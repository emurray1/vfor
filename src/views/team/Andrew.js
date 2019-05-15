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

import AndrewImg from '../../sources/andrew.jpg'


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

class Andrew extends Component {    
    
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
                        title="Andrew Gonyea"
                        subheader="Leadership Team" 
                    />
                    <CardMedia 
                        className={classes.media}
                        image={AndrewImg}
                        title="Andrew Gonyea"
                    />
                    <CardContent>
                        <Typography align="center" variant="subtitle1">
                            Andrew is a native of Bellows Falls, a VFOR co-founder, and VFOR’s Director of Operations. He is also a person in recovery since May 24, 2003.
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
                                Andrew’s life has been shaped largely by his experience as an inmate with the Vermont Department of Corrections from 2005-2008. Andrew is the rare individual who was able to turn a period of incarceration into a truly positive, life-changing experience. While incarcerated, Andrew stayed sober, received an education, and through many months of soul-searching, determined that he would commit his life to providing people in recovery with safe and sober places to live. Since, his release in 2008, Andrew has done just that, managing sober houses throughout Northern Vermont. Andrew has received formal training in sober house operations, recovery coaching, Cognitive Self Change, and 16 Habits of Mind. His smiling face is seemingly omnipresent throughout the recovery community in Vermont and beyond, and his commitment to service is widely recognized and admired. VFOR is the manifestation of Andrew’s dreams, and he is excited to commit his life to developing a vibrant network of Recovery Homes.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
        )
    }
}
export default withStyles(styles)(Andrew);