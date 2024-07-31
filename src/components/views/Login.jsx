import {useAuth} from '../auth/useAuth.jsx';
import Action from '../UI/Actions.jsx';

function Login(){
    // Initialisation -------------------------------------------
    const {login} = useAuth;

    const student = {
        UserFirstname: "Hashim", 
        UserLastname: "ABDALLAH", 
        UserEmail: "K1083454@kingston.ac.uk", 
        UserRegistered: 0, 
        UserLevel: 4, 
        UserYearID: 1, 
        UserUsertypeID: 2, 
        UserImageURL: "https://images.generated.photos/eL1-OlKDqGf1IaL_b2O8aSj7osDX_eFVHZEoJ0f3ZV0/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzYwNjc0LmpwZw.jpg", 
        UserUsertypeName: "Student", 
        UserYearName: "2022-23" ,
    };

    const staff = {
        UserID: 820,
        UserFirstname: "Graeme",
        UserLastname: "Jones",
        UserEmail: "ku06696@kingston.ac.uk",
        UserRegistered: 1, 
        UserLevel: 0, 
        UserYearID: null, 
        UserUsertypeID: 1, 
        UserImageURL: "https://generated.photos/face/neutral-white-adult-male-with-short-brown-hair-and-brown-eyes--5e6858dd6d3b380006e73353", 
        UserUsertypeName: "Staff", 
        UserYearName: null ,
    };

    // State ----------------------------------------------------
    // Handlers -------------------------------------------------
    const handleStudent = () => {
        login(student);
    };

    const handleStaff = ()=> {
        login(staff)
    };
    // View -----------------------------------------------------
    return (
        <Action.Tray>
            <Action.Add showText buttonText='Login as student' onClick={handleStudent} />
            <Action.Add showText buttonText='Login as staff' onClick={handleStaff} />
        </Action.Tray>
    );
}

export default Login;