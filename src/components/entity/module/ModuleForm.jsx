import { useState } from 'react';
import PropTypes from 'prop-types';
import Actions from '../../UI/Actions.jsx';
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
    // State ----------------------------------------------------
    const [module, setModule] = useState(initialModule);

    // Handlers -------------------------------------------------
    const handleChange = (event) => {
        const { name, value } = event.target;
        setModule({...module, [name]: value }); // overriding the field that change with the new value
        // so we create an object with all old values (remember that one of this values has changed)
        // and all the old values are being overrided with the ([name]: value) new values
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
                        value={module.ModuleName === null ? "" : module.ModuleName}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Module Code
                    <input 
                        type="text" 
                        name="ModuleCode" 
                        value={module.ModuleCode === null ? "" : module.ModuleCode}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Module Level
                    <select name="ModuleLevel" value={module.ModuleLevel} onChange={handleChange}>
                        <option value="0" disabled>None selected</option>
                        {
                            [3,4,5,6,7].map((level) => 
                                (<option key={level}>{level}</option>))
                        }
                    </select>
                </label>
            </div>

            <Actions.Tray>
                <Actions.Cancel showText buttonText="Cancel form" onClick={onCancel}/>
            </Actions.Tray>

        </div>
    );
};

ModuleForm.propTypes = {
    onCancel: PropTypes.func,
};

export default ModuleForm;