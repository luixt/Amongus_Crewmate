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

  return (
    <div className="CrewmateDetail">
      {crewmate ? (
        <div>
          <h2>{crewmate.name}</h2>
          <h3>Speed: {crewmate.speed}</h3>
          <h3>Color: {crewmate.color}</h3>
          <h3>Role: {crewmate.role}</h3>
        </div>
      ) : (
        <p>Loading crewmate details...</p>
      )}
    </div>
  );
};

export default CrewmateDetail;
