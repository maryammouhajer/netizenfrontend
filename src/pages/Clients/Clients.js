import React from 'react'
import './Clients.css'
import profile0 from '../../assets/images/profile0.png'
import { ClientCard, Container, Button } from '../../components/index'
function Clients() {
  return (
    <>
      <Container>

        <ClientCard
          image={profile0}
          name='Name'
          position='Position'
          description="diam nonummy nibh euismod tincidunt ut laoreet dolore ma diam nonummy nibh euismod tincidunt ut laoreet dolore ma
          "
        />

        <ClientCard
          image={profile0}
          name='Name'
          position='Position'
          description="diam nonummy nibh euismod tincidunt ut laoreet dolore ma diam nonummy nibh euismod tincidunt ut laoreet dolore ma
          "
        />
        <ClientCard
          image={profile0}
          name='Name'
          position='Position'
          description="diam nonummy nibh euismod tincidunt ut laoreet dolore ma diam nonummy nibh euismod tincidunt ut laoreet dolore ma
          "
        />
        <ClientCard
          image={profile0}
          name='Name'
          position='Position'
          description="diam nonummy nibh euismod tincidunt ut laoreet dolore ma diam nonummy nibh euismod tincidunt ut laoreet dolore ma
          "
        />
        <ClientCard
          image={profile0}
          name='Name'
          position='Position'
          description="diam nonummy nibh euismod tincidunt ut laoreet dolore ma diam nonummy nibh euismod tincidunt ut laoreet dolore ma
          "
        />
        <ClientCard
          image={profile0}
          name='Name'
          position='Position'
          description="diam nonummy nibh euismod tincidunt ut laoreet dolore ma diam nonummy nibh euismod tincidunt ut laoreet dolore ma
          "
        />

      </Container>
      <Button text='Post Your Project' />
    </>
  )
}

export default Clients