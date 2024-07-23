import { useEffect, useState } from 'react';
import { CardContainer, Card } from '../UI/Card.jsx';
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
        {
        !modules
        ? (<p>Loading records...</p>)
          :
            (<>
            <CardContainer>
            {
              modules.map((module)=>{
                return(
                  <div className="moduleCard" key={module.ModuleCode}>
                    <Card>
                      <p>{module.ModuleCode}</p>
                      <p>{module.ModuleName}</p>
                      <img src={module.ModuleImageURL} />
                    </Card>
                  </div>
              )
              })
            }
            </CardContainer>
            <button onClick={() => handleAdd(newModule)}>Add module</button>
            </>)
        }
        </>
    );
}

export default Modules;