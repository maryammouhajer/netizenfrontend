import React from 'react'
import './ClientCard.css'
import { FaStar } from "react-icons/fa";
import { Image } from 'react-bootstrap';
const ClientCard = (props) => {
  return (
    <div className=' col-4 pl-10 m-10'>
      <div className="card-body">

        <div className="">
          <Image src={props.image} alt="" className=' rounded img img-rounded img-fluid' width={80} height={80} />

        </div>
        <div className="">


          <h2 className="float-left mt-3 mt-md-4">{props.name} | {props.position}</h2>
          <div className="rating text-warning  text-start">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />


          </div>
        </div>


        <p className='card-text '>{props.description}</p>
      </div>
    </div>

  )
}

export default ClientCard