import React from 'react'

import AddIcon from "@material-ui/icons/Add";
import { Fab, Typography, Button} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((them) => ({
    root: {
        // backgroundColor: "red",
        margin: "20px",
        display: "flex",
        flexDirection: "column"
    },
    info: {
        letterSpacing: 1,
    }
}))

function FileInfo({name, size, onPress}){
    const classes = useStyles()
    return (
        <div>
            <Typography variant="body2" component="p">
                <b className={classes.info}>File Name:</b> {name}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
                <b className={classes.info}>File Size:</b> {size}
            </Typography>

            <Button 
                variant="outlined" 
                color="secondary" style={{marginTop: "15px"}}
                onClick={onPress}
            >
                Analysis
            </Button>
        </div>
    )
}

const Upload = ({handleFile, file, size, onPress}) => {
    const classes = useStyles()

    console.log(file)

    return (
        <div className={classes.root}>
            <label htmlFor="upload-file">
                <input 
                    style={{display: "none"}}
                    id="upload-file"
                    name="upload-file"
                    type="file"
                    onChange={handleFile}
                />
                <Fab
                    color="primary"
                    size="small"
                    component="span"
                    aria-label="add"
                    variant="extended"
                >
                    <AddIcon /> Upload Image  
                </Fab>
            </label>

            <br />
            {(file == null || file === undefined) && size === 0 ? null : <FileInfo onPress={onPress} name={file} size={size + " MB"}/>}
        </div>
    )
}

export default Upload
