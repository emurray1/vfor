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

import MelissaImg from '../../sources/melissa.jpg';


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

class Melissa extends Component {    
    
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
                        title="Melissa Riegel-Garrett"
                        subheader="Board of Directors" 
                    />
                    <CardMedia 
                        className={classes.media}
                        image={MelissaImg}
                        title="Melissa Riegel-Garrett"
                    />
                    <CardContent>
                        <Typography align="center" variant="subtitle1">
                            Melissa is a native of Waterbury, VFOR’s Past President of the Board, and a 1992 graduate of the University of Vermont with a B.S. in Education and Early Childhood Development. 
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
                                She has also received a M.S. in Education and Early Childhood Leadership from Bank Street College of Education in New York, NY.  Melissa has been the Executive Director of the Vermont Association for the Education of Young Children since 2006, and she teaches regularly at both Champlain College and the Community College of Vermont.  Melissa’s passion for sober housing—and for the recovery community generally—stems from the effect she has seen it have on her brother, David.  As Melissa puts it, the positive effects of sober housing and peer support of the recovery community, “gave me my brother back.”  Melissa is involved in VFOR with the hope that she may help give other families the gift of their loved ones becoming healthy.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
        )
    }
}
export default withStyles(styles)(Melissa);