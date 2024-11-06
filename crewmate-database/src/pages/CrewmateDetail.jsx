import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import './CrewmateDetail.css';

const CrewmateDetail = () => {
  const { id } = useParams();  // Get the crewmate ID from the URL
  const [crewmate, setCrewmate] = useState(null);

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data, error } = await supabase
        .from('Crew')
        .select()
        .eq('id', id)  // Query for the specific crewmate by ID
        .single();  // Fetch one crewmate

      if (error) {
        console.error('Error fetching crewmate:', error);
      } else {
        setCrewmate(data);
      }
    };

    fetchCrewmate();
  }, [id]);

  const forColor = (color) => {
    if (color === 'red' || color === 'orange' || color === 'yellow') {
      return `${color.charAt(0).toUpperCase() + color.slice(1)} is a vibrant color! You might meet other crewmates with charisma!`;
    } else if (color === 'green' || color === 'purple' || color === 'brown' || color === 'blue') {
      return `Hmmm... I wouldn't trust a crewmate with color ${color}.`;
    } else {
      return "With such color you MUST be a ghost!";
    }
  };

  return (
    <div >
      {crewmate ? (
        <div className="CrewmateDetail" style={{boxShadow: "1px 1px 1px " + crewmate.color}}>
          <h2 style={{ textShadow: "2px 2px 2px " + crewmate.color}}>{crewmate.name}</h2>
          <h3>{"Speed: " + crewmate.speed}</h3>
          <h3>{"Role: " + crewmate.role}</h3>
          <img className='crewmate' src={'/' + crewmate.color + '.webp'} alt={'Amomgus character color ' + crewmate.color}/>
          <h3 style={{color: crewmate.color, textShadow: "2px -1px 2px black"}}>{forColor(crewmate.color)}</h3> {/* Correct function call here */}
        </div>
      ) : (
        <p>Loading crewmate details...</p>
      )}
    </div>
  );
};

export default CrewmateDetail;
