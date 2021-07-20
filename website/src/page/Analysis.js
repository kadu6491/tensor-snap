import React, {useState} from 'react'

import Header from '../component/header/Header'
import Progress from '../component/progress/Progress'

import api from '../api'
import Prediction from '../component/body/Prediction'
import { Container } from '@material-ui/core'

const Analysis = () => {
    const [file, setFile] = useState()
    const [size, setSize] = useState(0)
    const [fullFile, setFullFile] = useState()
    const [loading, setloading] = useState(true)
    const [ready, setReady] = useState(false)

    const handleFile = (e) => {
        if(e.target.files[0] === undefined || e.target.files[0] == null)
        {
            setFile("No file selected")
        }
        else {
            var sizeInMB = (e.target.files[0].size / (1024*1024)).toFixed(2);
            setFile(e.target.files[0].name)
            setFullFile(e.target.files[0])
            setSize(sizeInMB)
        }
    }

    const onPress = () => {
        setReady(true)
        setloading(true)
        const datas = new FormData()
        datas.append('file', fullFile)

        api.post('/api/site/img/', datas).then(resp => {
            console.log(resp.data)
            setloading(false)
        })
    }

    return (
        <div>
            <Header 
                file={file}
                size={size}
                handleFile={handleFile}
                onPress={onPress}
            />

            {ready && <Container maxWidth="md" >
                        {loading ? <Progress msg="Analyzing......." /> : <Prediction />}
                     </Container>
            }
        </div>
    )
}

export default Analysis
