import React from 'react'

import { Box, Container, Typography } from '@material-ui/core'

import Upload from '../forms/Upload'

const Header = ({handleFile, file, size, onPress}) => {
    return (
        <div>
            <Container maxWidth="md" style={{paddingTop: 10,}}>
                <Box bgcolor="#eee" p={2} mt={5}>
                    <Typography variant="h5" color="textSecondary">
                        Tensor Snap
                    </Typography>
                </Box>

                <Box p={2} >
                    <Upload 
                        handleFile={handleFile}
                        file={file}
                        size={size}
                        onPress={onPress}
                    />
                </Box>
            </Container>
        </div>
    )
}

export default Header
