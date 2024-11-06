import React from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'


const Card = (props) =>  {

  return (
      <div className="Card" style={{ boxShadow: "2px 2px 2px " + props.color}}>
          <Link to={'/edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
          <Link to={'/crewmates/' + props.id} className="card-link">
          <h2 className='name' style={{ textShadow: "1px 1px 1px " + props.color}}>{props.name}</h2>
          <h3 className="attribute">{"Speed: " + props.speed}</h3>
          <img className='crewmate' src={'/' + props.color + '.webp'} alt={'Amomgus character color ' + props.color}/>
          <h3 className="attribute">{"Role: " + props.role}</h3>
          </Link>
      </div>
  );
};

export default Card;