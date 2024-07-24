import { useEffect, useState } from 'react';
import Actions from '../UI/Actions.jsx';
import { CardContainer } from '../UI/Card.jsx';
import ModuleCard from '../entity/module/ModuleCard.jsx';
import './Modules.scss';


function Modules() {
  // Initialisation -------------------------------------------
  const newModule = {
    ModuleName: "Programming Workshop",
    ModuleCode: "CI2234",
    ModuleLevel: 4,
    ModuleLeaderID: 1,
    ModuleImageURL: "https://images.freeimages.com/images/small-previews/9b8/electronic-components-2-1242738.jpg"
  };

  const loggedInUserGroup = 820;
  const apiURL = "https://softwarehub.uk/unibase/api";
  const myModulesEndpoint = `${apiURL}/modules/leader/${loggedInUserGroup}`


  // State ---------------------------------------------------- 
  const [modules, setModules] = useState(null);

  const apiGet = async (endpoint) => {
    const response = await fetch(endpoint);
    const result = await response.json();
    setModules(result)
  };

  useEffect(() => {apiGet(myModulesEndpoint)}, [myModulesEndpoint]);

  // Handlers -------------------------------------------------
  const handleAdd = (module) => {
    module.ModuleID = Math.floor(10000 * Math.random());
    setModules([...modules, newModule]);
    console.log(`Length of modules: ${modules.length}`);
  }
  // View -----------------------------------------------------  
    return(
        <>
        <h1>Modules</h1>
        <Actions.Tray>
          <Actions.Add showText buttonText="Add new module" onClick={handleAdd}/>
        </Actions.Tray>
        {
        !modules
        ? (<p>Loading records...</p>)
          : modules.length === 0 ? (<p>No records found...</p>) :
            (<>
            <CardContainer>
            {
              modules.map((module)=>
                <ModuleCard module={module} key={module.ModuleCode}/>
              )
            }
            </CardContainer>
            </>)
        }
        </>
    );
}

export default Modules;