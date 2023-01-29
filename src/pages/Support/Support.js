import React from 'react'
import './Support.css'
import { ImageCard, Container, Button } from '../../components/index'
function Support() {
  return (
    <>

      <ImageCard className='imagecard ' title='App Support' />
      <ImageCard title="Netizen’s General Support" />
      <ImageCard title='Other Support' />


      <Button text='Post Your Project' />
      
    </>
  )
}

export default Support