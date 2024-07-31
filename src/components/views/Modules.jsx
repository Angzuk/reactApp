import { useEffect, useState } from 'react';
import { useAuth } from '../auth/useAuth.jsx';
import Actions from '../UI/Actions.jsx';
import ModuleForm from '../entity/module/ModuleForm.jsx';
import { CardContainer } from '../UI/Card.jsx';
import ModuleCard from '../entity/module/ModuleCard.jsx';
import './Modules.scss';


function Modules() {
  // Initialisation -------------------------------------------

  const {loggedInUser} = useAuth();

  //const loggedInUserGroup = 820;
  const apiURL = "https://softwarehub.uk/unibase/api";
  const myModulesEndpoint = `${apiURL}/modules/leader/${loggedInUser.UserID}`


  // State ---------------------------------------------------- 
  const [modules, setModules] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const apiGet = async (endpoint) => {
    const response = await fetch(endpoint);
    const result = await response.json();
    setModules(result)
  };

  useEffect(() => {apiGet(myModulesEndpoint)}, [myModulesEndpoint]);

  // Handlers -------------------------------------------------
  const handleAdd = () => setShowForm(true);
  const handleCancel = () => setShowForm(false);
  const handleSuccess = async () => {
    handleCancel();
    await apiGet(myModulesEndpoint);
  };

  // View -----------------------------------------------------  
    return(
        <>
        <h1>Modules</h1>
        <Actions.Tray>
          { !showForm && <Actions.Add showText buttonText="Add new module" onClick={handleAdd}/>}
        </Actions.Tray>

        { showForm && < ModuleForm onCancel={handleCancel}  onSuccess={handleSuccess}/> }
        {
        !modules
        ? (<p>Loading records...</p>)
          : modules.length === 0 ? (<p>No records found...</p>) :
            (<>
            <CardContainer>
            {
              modules.map((module)=>
                <ModuleCard module={module} key={module.ModuleID}/>
              )
            }
            </CardContainer>
            </>)
        }
        </>
    );
}

export default Modules;