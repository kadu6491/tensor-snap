import { Box } from '@material-ui/core'
import React from 'react'
import ListView from '../forms/ListView'

const Classify = ({classify, dict, def}) => {

    return (
        <div>
            {classify !== undefined && classify.map((item, id) => (
                <Box mt={1} p={1} key={id}>
                    <ListView title={item} dict={dict}/>
                </Box>
            ))}
        </div>
    )
}

export default Classify
