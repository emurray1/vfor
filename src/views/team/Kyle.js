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

import KyleImg from '../../sources/kyle.jpg';


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

class Kyle extends Component {    
    
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
                        title="Kyle Wolfe"
                        subheader="Operations Team" 
                    />
                    <CardMedia 
                        className={classes.media}
                        image={KyleImg}
                        title="Kyle Wolfe"
                    />
                    <CardContent>
                        <Typography align="center" variant="subtitle1">
                            Kyle is a native of Williston and graduated from Champlain Valley Union High School in 2006. He has been clean since April 30, 2015 and works in a 12-step program.
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
                            His experience with the US district court of Vermont got him clean and has shaped his desire to help others in recovery. Kyle was first a VFOR Member for over a year before becoming a volunteer and then a House Manager. He is currently a college student enrolled in a Human Services degree program. In his free time Kyle enjoys hikes with his dog, listening to the Grateful Dead, playing golf, and spending time with his family.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
        )
    }
}
export default withStyles(styles)(Kyle);