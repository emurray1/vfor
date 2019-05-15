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

import LiamImg from '../../sources/liam.jpg';


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

class Liam extends Component {    
    
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
                        title="Liam Reynolds"
                        subheader="Operations Team" 
                    />
                    <CardMedia 
                        className={classes.media}
                        image={LiamImg}
                        title="Liam Reynolds"
                    />
                    <CardContent>
                        <Typography align="center" variant="subtitle1">
                            Liam manages VFOR’s Data, Marketing & Communications. He is a native Vermonter and has been sober since February 13th, 2011. At 23 he began a career in Law Enforcement, but left the field after 6 and a half years to pursue a new life in recovery.
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
                                At 23 he began a career in Law Enforcement, but left the field after 6 and a half years to pursue a new life in recovery.  Since then he was a stay-at-home parent for a number of years and toured the back roads of Lamoille County as a driver for Meals-On-Wheels before becoming a Volunteer and then Recovery Coach Program Manager at a Recovery Center.  He has gone back to school to pursue his Masters degree, and believes that by the time he’s 107 he may have it completed.  He lives with his two sons and two rescued pitbulls, tries to mountain bike as often as possible to counteract the amount of Ben & Jerry’s he consumes, and volunteers on a Restorative Panel at a Restorative Justice Center.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
        )
    }
}
export default withStyles(styles)(Liam);