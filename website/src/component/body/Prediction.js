import React from 'react'

import { Box, Select, MenuItem, InputLabel, Container} from '@material-ui/core'

import Classify from './Classify'

const Prediction = ({lang, handleLang, classify, spa_cla, fra_cla, engdef, spadef, fradef}) => {
    return (
        <div>
            <Box p={3} display="flex">
                <Container maxWidth="xs" disableGutters>
                    <InputLabel id="demo-simple-select-label">Language</InputLabel>
                    <br />
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={lang}
                        onChange={handleLang}
                        variant="filled"
                        fullWidth
                        defaultValue={0}
                    >
                        <MenuItem value={0}>English</MenuItem>
                        <MenuItem value={1}>Spanish</MenuItem>
                        <MenuItem value={2}>French</MenuItem>
                    </Select>
                </Container>
            </Box>

            <Container maxWidth="md">
                <Box mt={1} p={1}>
                    {/* <ListView /> */}
                    {lang === 0 && <Classify classify={classify} dict="Dictionary"/>}
                    {lang === 1 && <Classify classify={spa_cla} dict="Diccionario" />}
                    {lang === 2 && <Classify classify={fra_cla} dict="Dictionnaire" />}
                </Box>

            </Container>
        </div>
    )
}

export default Prediction
