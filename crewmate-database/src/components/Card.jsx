import React from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'


const Card = (props) =>  {

  return (
      <div className="Card">
          <Link to={'/crewmates/' + props.id} className="card-link">
          <h2>{props.name}</h2>
          <h3 className="author">{"Speed: " + props.speed}</h3>
          <h3 className="author">{"Role: " + props.role}</h3>
          <h3 className="author">{"Color: " + props.color}</h3>
          </Link>

          <Link to={'/edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>

      </div>
  );
};

export default Card;