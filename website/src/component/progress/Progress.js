import React from 'react'

import { withStyles, makeStyles } from '@material-ui/core/styles';
import {LinearProgress, Typography} from '@material-ui/core';

const useStyles = makeStyles((them) => ({
  info: {
      letterSpacing: 1.5,
  }
}))

const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 11,
      borderRadius: 5,
      width: "100%"
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
    },
  }))(LinearProgress);

  
const Progress = ({msg, variant, value}) => {
  const classes = useStyles()

    return (
        <div>
            <BorderLinearProgress variant={variant} value={value}/>
            <br />

            <Typography variant="body1" component="p" className={classes.info}>
                {msg}
            </Typography>

            <br /> <br />
        </div>
    )
}

export default Progress