
import { Header } from '../../section/index'
import mission from '../../assets/images/mission.png'
import vision from '../../assets/images/vision.png'
import values from '../../assets/images/values.png'
import { Card, Container, Button } from '../../components/index'
export default function About() {
  return (
    <>


      <Container>
        <div className='primary   row col-12'>
          <div className=' text-center col-4'>
            <Card
              heading='Mission'
              image={mission}
              soustitle='Support the strategy of job creation by incentivizing youth to provide digital services fundamentally to create a contextual platform.'

            />
          </div>
          <div className='text-center col-4'>
            <Card
              heading='Vision'
              image={vision}
              soustitle=
              'Revitalize the Lebanese economy by job creation and disseminating digital services.'

            />
          </div>
          <div className='primary text-center col-4'>
            <Card

              image={values}
              heading=' Values'
              soustitle='
        · Accountability
        · Affordability
        · Authenticity
        · Commitment
        · Integrity
        · Transparency
        · Flexibility
        · Empowerment
        · Professionalism
        · Sustainability'
            />
          </div>
        </div>
      </Container>
      <Button text='Post Your Project' />
    </>
  )
}