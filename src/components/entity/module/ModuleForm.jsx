import PropTypes from 'prop-types';
import Actions from '../../UI/Actions.jsx';
import './ModuleForm.scss';

function ModuleForm({onCancel}) {
    // Initialisation -------------------------------------------
    // State ----------------------------------------------------
    // Handlers -------------------------------------------------
    // View -----------------------------------------------------
    return(
        <div className="moduleForm">
            <p>This is the form.</p>
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