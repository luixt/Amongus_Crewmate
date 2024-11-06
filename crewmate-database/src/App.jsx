import './App.css';
import React from 'react';
import { useRoutes } from 'react-router-dom'
import ReadCrew from './pages/ReadCrew'
import CreateCrew from './pages/CreateCrew'
import EditCrew from './pages/EditCrew'
import CrewHome from './pages/CrewHome'
import CrewmateDetail from './pages/CrewmateDetail'
import { Link } from 'react-router-dom'


const App = () => {
  
  const crewmates = [
    
  ]
 

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<CrewHome />
    },
    {
      path: "/crew",
      element:<ReadCrew data={crewmates}/>
    },
    {
      path:"/edit/:id",
      element: <EditCrew data={crewmates} />
    },
    {
      path:"/crewmates/:id",
      element: <CrewmateDetail />
    },
    {
      path:"/new",
      element: <CreateCrew />
    }
  ]);

  return ( 

    <div className="App">

      <div className="header">
        <Link to="/"><button className="headerBtn"> Crewmate Factory 🏢  </button></Link>
        <Link to="/crew"><button className="headerBtn"> Explore The Crew 🔍  </button></Link>
        <Link to="/new"><button className="headerBtn"> Create Character 🔦 </button></Link>
      </div>
        {element}
    </div>

  );
}

export default App;
