import React from 'react'
import './Home.css';
import { Header } from '../../section/index'
import { Card, Container, Button } from '../../components/index'
import creative from '../../assets/images/creative.png'
import innovative from '../../assets/images/innovative.png'
import qualitative from '../../assets/images/qualitative.png'
function Home() {
  return (
    <>

      <Container>
        <div className='row col-12'>
          <div className='primary-color text-center col-4'>
            <Card image={creative}
              title='Creative'
              soustitle='"Design creates culture. Culture shapes qualitative. qualitative determine the future."'
              signature='Robert L. Peters'
            />
          </div>
          <div className='secondary-color col-4'>
            <Card image={innovative}
              title='Innovative'
              soustitle='“There are 360 degrees, so why stick to one?”'
              signature='ZAHA HADID'
            />
          </div>
          <div className='thirty-color col-4'>
            <Card image={qualitative}
              title='Qualitative'
              soustitle='“Design is not just what it looks like
        and feels like. Design is how it works.”'
              signature='STEVE JOBS'
            />
          </div>

        </div>

        <Button text='Post Your Project' />
      </Container>
    </>
  )
}

export default Home