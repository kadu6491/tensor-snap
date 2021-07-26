import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { CardContent, IconButton, CardActions, Collapse, Typography, Divider} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "#eee",
      borderRadius: 5,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
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
  }));
  

const ListView = ({title, dict, def}) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={classes.root}>
            <CardActions disableSpacing>
                <Typography variant="h6" style={{paddingLeft: 5}}>
                    {title}
                </Typography>

                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Divider />
                <CardContent>
                    <Typography variant="body1">{dict}</Typography>
                        <br />
                        {JSON.stringify(def)}
                    {/* <Typography 
                        variant="body2" 
                        color="textSecondary" 
                        component="li"
                        style={{paddingLeft: 20,}}
                    >
                        Dictionary
                    </Typography> */}
                </CardContent>
            </Collapse>
        </div>
    )
}

export default ListView
