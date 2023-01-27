import React from 'react'
import './Support.css'
import { ImageCard , Container , Button} from '../../components/index'
function Support() {
    return (
        <>
        <Container>
        <ImageCard className='imagecard ' title='App Support'/>
        <ImageCard title="Netizen’s General Support" />
        <ImageCard title='Other Support' />
        
      </Container>
      <Button text='Post Your Project'/>
        </>
    )
}

export default Support