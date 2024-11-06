import React, { useState } from 'react';
import './CreateCrew.css';
import { supabase } from '../client';


const CreateCrew = () => {

    const createCrew = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('Crew')
          .insert({name: crewmate.name, speed: crewmate.speed, color: crewmate.color, role: crewmate.role})
          .select();
      
        window.location = "/";
    }

    const [crewmate, setCrewmate] = useState({name: "", speed: 0.0, color: "", role: ""});

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
                <div>
                    <li>
                    <input type="radio" id="purple" name="color" value="purple" onChange={handleChange} />
                    Purple
                    </li>
                    <li>
                    <input type="radio" id="brown" name="color" value="brown" onChange={handleChange} />
                    Brown
                    </li>
                    <li>
                    <input type="radio" id="orange" name="color" value="orange" onChange={handleChange} />
                    Orange
                    </li>
                    <li>
                    <input type="radio" id="white" name="color" value="white" onChange={handleChange} />
                    White
                    </li>
                </div>

                <br/>

                <label>Role</label>
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

                <input type="submit" value="Submit" onClick={createCrew} />
            </form>
        </div>
    )
}

export default CreateCrew;