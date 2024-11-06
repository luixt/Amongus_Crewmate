import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './EditCrew.css';
import { supabase } from '../client';


const EditCrew = ({data}) => {

    const {id} = useParams();
    const [crewmate, setCrewmate] = useState({id: null, name: "", speed: 0.0, color: "", role: ""});

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

    const deleteCrew = async (event) => {
        event.preventDefault();

        await supabase
            .from('Crew')
            .delete()
            .eq('id', id);

        window.location = "/";
    }

    const updateCrew = async (event) => {
        event.preventDefault();

        await supabase
            .from('Crew')
            .update({ name: crewmate.name, speed: crewmate.speed, color: crewmate.color, role: crewmate.role})
            .eq('id', id);

        window.location = "/";
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCrewmate( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    return (
        <div>

            <form>
                <label >Name</label>
                <input type="text" id="name" name="name" value={crewmate.name} onChange={handleChange} /><br />
                <br/>

                <label >Speed</label>
                <input type="number" id="speed" name="speed" value={crewmate.speed} onChange={handleChange} /><br />
                <br/>

                <label>Color</label>
                <div>
                    {["red", "blue", "green", "yellow"].map((color) => (
                        <li key={color}>
                            <input
                                type="radio"
                                id={color}
                                name="color"
                                value={color}
                                checked={crewmate.color === color}
                                onChange={handleChange}
                            />
                            {color.charAt(0).toUpperCase() + color.slice(1)}
                        </li>
                    ))}
                </div>
                <div>
                    {["purple", "brown", "orange", "white"].map((color) => (
                        <li key={color}>
                            <input
                                type="radio"
                                id={color}
                                name="color"
                                value={color}
                                checked={crewmate.color === color}
                                onChange={handleChange}
                            />
                            {color.charAt(0).toUpperCase() + color.slice(1)}
                        </li>
                    ))}
                </div>

                <br/>

                <label>Role</label>
                <div>
                    {["Impostor", "Crewmate", "Ghost"].map((role) => (
                        <li key={role}>
                            <input
                                type="radio"
                                id={role.toLowerCase()}
                                name="role"
                                value={role}
                                checked={crewmate.role === role}
                                onChange={handleChange}
                            />
                            {role}
                        </li>
                    ))}
                </div>
                <br/>

                <input type="submit" value="Submit" onClick={updateCrew}/>
                <button className="deleteButton" onClick={deleteCrew}>Delete</button>
            </form>
        </div>
    )
}

export default EditCrew;