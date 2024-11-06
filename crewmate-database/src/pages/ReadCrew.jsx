import React, { useState, useEffect } from 'react';
import Card from '../components/Card.jsx';
import { supabase } from '../client.jsx';
import './ReadCrew.css';


const ReadCrew = (props) => {

    const [crewmates, setCrewmates] = useState([]);

    useEffect(() => {

        const fetchCrew = async () => {
            const {data} = await supabase
                .from('Crew')
                .select()
                .order('created_at', { ascending: true })

                // set state of posts
                setCrewmates(data);
        }

        fetchCrew();
    }, [props]);
    
    return (
        <div className="ReadPosts">
            {
                crewmates && crewmates.length > 0 ?
                crewmates.map((member) => 
                   <Card key={member.id} id={member.id} name={member.name} color={member.color} speed={member.speed} role={member.role}/>
                ) : <h2>No Members Yet 😞</h2>
            }
        </div>  
    )
}

export default ReadCrew;