import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './EditCrew.css';
import { supabase } from '../client';


const EditCrew = ({data}) => {

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

    const {id} = useParams();
    const [crewmate, setCrewmate] = useState({id: null, name: "", speed: 0.0, color: "", role: ""});

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
                <label >Name</label> <br />
                <input type="text" id="name" name="name" value={crewmate.name} onChange={handleChange} /><br />
                <br/>

                <label >Speed</label><br />
                <input type="number" id="speed" name="speed" value={crewmate.speed} onChange={handleChange} /><br />
                <br/>

                <label>Color</label><br />
                <div>
                    <li>
                    <input type="radio" id="red" name="color" value="red" onChange={handleChange} />
                    Red
                    </li>
                    <li>
                    <input type="radio" id="blue" name="color" value="blue" onChange={handleChange} />
                    Blue
                    </li>
                    <li>
                    <input type="radio" id="green" name="color" value="green" onChange={handleChange} />
                    Green
                    </li>
                    <li>
                    <input type="radio" id="yellow" name="color" value="yellow" onChange={handleChange} />
                    Yellow
                    </li>
                </div>
                <br/>

                <label>Role</label><br />
                <div>
                    <li>
                    <input type="radio" id="impostor" name="role" value="Impostor" onChange={handleChange} />
                    Impostor
                    </li>

                    <li>
                    <input type="radio" id="crewmate" name="role" value="Crewmate" onChange={handleChange} />
                    Crewmate
                    </li>

                    <li>
                    <input type="radio" id="ghost" name="role" value="Ghost" onChange={handleChange} />
                    Ghost
                    </li>
                </div>
                <br/>

                <input type="submit" value="Submit" onClick={updateCrew}/>
                <button className="deleteButton" onClick={deleteCrew}>Delete</button>
            </form>
        </div>
    )
}

export default EditCrew;