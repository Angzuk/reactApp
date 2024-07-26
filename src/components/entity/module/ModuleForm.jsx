import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Actions from '../../UI/Actions';
import './ModuleForm.scss';

const initialModule = {
    ModuleName: null,
    ModuleCode: null,
    ModuleLevel: 0,
    ModuleYearID: null,
    ModuleLeaderID: null,
    ModuleImageURL: "https://images.freeimages.com/images/small-previews/9b8/electronic-components-2-1242738.jpg",
}

function ModuleForm({onCancel}) {
    // Initialisation -------------------------------------------
    const conformance = {
        html2js: {
            // converting html values from the form into javaScript objects
            ModuleName: (value) => (value === '' ? null : value), // if empty string return null if no return value
            ModuleCode: (value) => (value === '' ? null : value),
            ModuleLevel: (value) => parseInt(value), // integer
            ModuleYearID: (value) => (value === 0 ? null : parseInt(value)), // this is the approach for the key
            ModuleLeaderID: (value) => (value === 0 ? null : parseInt(value)),
            ModuleImageURL: (value) => (value === '' ? null : value),
        },
        js2html: {
            // converting javaScript values from the form into html objects
            ModuleName: (value) => (value === null ? "" : value),
            ModuleCode: (value) => (value === null ? "" : value),
            ModuleLevel: (value) => value,
            ModuleYearID: (value) => (value === null ? 0 : value), 
            ModuleLeaderID: (value) => (value === null ? 0 : value),
            ModuleImageURL: (value) => (value === null ? "" : value),
        }
    };

    const apiURL = "https://softwarehub.uk/unibase/api";
    const yearsEndpoint = `${apiURL}/years`;
    const staffEndpoint = `${apiURL}/users/staff`;

    const postModuleEndpoint = `${apiURL}/modules`;

    // State ----------------------------------------------------
    const [module, setModule] = useState(initialModule);
    const [years, setYears] = useState(null);
    const [staff, setStaff] = useState(null);
    

    const apiGet = async (endpoint, setState) => {
        const response = await fetch(endpoint);
        const result = await response.json();
        setState(result)
      };

    const apiPost = async (endpoint, record) => {
        // Build request object
        const request = {
            method: 'POST',
            body: JSON.stringify(record),
            headers: {'Content-type' : 'application/json'},
        };
        // Call the fetch
        const response = await fetch(endpoint, request);
        const result = await response.json();
        return response.status >= 200 && response.status < 300
        ? { isSuccess: true }
        : { isSuccess: false, message: result.message };
    };
    
    useEffect(() => {apiGet(yearsEndpoint, setYears)}, [yearsEndpoint]);
    useEffect(() => {apiGet(staffEndpoint, setStaff)}, [staffEndpoint]);


    // Handlers -------------------------------------------------
    const handleChange = (event) => {
        const { name, value } = event.target;
        setModule({...module, [name]: conformance.html2js[name](value) }); // overriding the field that change with the new value
        // so we create an object with all old values (remember that one of this values has changed)
        // and all the old values are being overrided with the ([name]: value) new values
    };

    const handleSubmit = async() => {
        console.log(`Module=[${JSON.stringify(module)}]`);

        const result = await apiPost(postModuleEndpoint, module);
        result.isSuccess
            ? console.log ('Insert successful')
            : console.log(`Insert NOT successful ${result.message}`) ;
    };

    // View -----------------------------------------------------
    return(
        <div className="moduleForm">
            <div className="FormTray">
                <label>
                    Module Name
                    <input 
                        type="text" 
                        name="ModuleName" 
                        value={conformance.js2html["ModuleName"](module.ModuleName)} // converting javaScript into HTML form 
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Module Code
                    <input 
                        type="text" 
                        name="ModuleCode" 
                        value={conformance.js2html["ModuleCode"](module.ModuleCode)}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Module Level
                    <select 
                    name="ModuleLevel" 
                    value={conformance.js2html["ModuleLevel"](module.ModuleLevel)} 
                    onChange={handleChange}
                    >
                        <option value="0" disabled>None selected</option>
                        {
                            [3,4,5,6,7].map((level) => 
                                (<option key={level}>{level}</option>))
                        }
                    </select>
                </label>

                <label>
                    Module Year
                    { !years ? (
                        <p>Loading records... </p> ) :
                        <select 
                            name="ModuleYearID" // this is exactly as its being stored in the database
                            value={conformance.js2html["ModuleYearID"](module.ModuleLevel)} 
                            onChange={handleChange}
                            >
                                <option value="0">None selected</option>
                                {
                                    years.map((year) => // so we are mapping through the array from the database 
                                        (<option key={year.YearID} value={year.YearID}>
                                            {year.YearName}
                                        </option>
                                    ))
                                }
                        </select>
                    }
                </label>

                <label>
                    Module Leader
                    { !staff ? (
                        <p>Loading records... </p> ) :
                        <select 
                            name="ModuleLeaderID" // this is exactly as its being stored in the database
                            value={conformance.js2html["ModuleLeaderID"](module.ModuleLeaderID)} 
                            onChange={handleChange}
                            >
                                <option value="0">None selected</option>
                                {
                                    staff.map((member) => // so we are mapping through the array from the database 
                                        (<option key={member.UserID} value={member.UserID}>
                                            {`${member.UserFirstname} ${member.UserFirstname}`}
                                        </option>
                                    ))
                                }
                        </select>
                    }
                </label>

                <label>
                    Module Image
                    <input 
                        type="text" 
                        name="ModuleImageURL" 
                        value={conformance.js2html["ModuleImageURL"](module.ModuleImageURL)} // converting javaScript into HTML form 
                        onChange={handleChange}
                    />
                </label>
            </div>

            <Actions.Tray>
                <Actions.Submit showText onClick={handleSubmit}/>
                <Actions.Cancel showText buttonText="Cancel form" onClick={onCancel}/>
            </Actions.Tray>

        </div>
    );
}

ModuleForm.propTypes = {
    onCancel: PropTypes.func,
};

export default ModuleForm;