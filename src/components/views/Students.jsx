import { useEffect, useState } from 'react';
import { CardContainer } from '../UI/Card.jsx';
import './Students.scss';
import UserCard from '../entity/user/UserCard.jsx';

function Students (){
  // Initialisation -------------------------------------------
  const newStudent = {
    UserFirstname: "Hashim", 
    UserLastname: "ABDALLAH", 
    UserEmail: "K1083454@kingston.ac.uk", 
    UserRegistered: 0, 
    UserLevel: 4, 
    UserYearID: 1, 
    UserUsertypeID: 2, 
    UserImageURL: 
      "https://images.generated.photos/eL1-OlKDqGf1IaL_b2O8aSj7osDX_eFVHZEoJ0f3ZV0/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzYwNjc0LmpwZw.jpg", 
    UserUsertypeName: "Student", 
    UserYearName: "2022-23" ,
  };

  const loggedInuserGroup = 13;
  const apiURL = 'https://softwarehub.uk/unibase/api';
  // const apiURL = `http://localhost:5000/api`;
  const myGroupEndpoint = `${apiURL}/users/groups/${loggedInuserGroup}`;

  // State ----------------------------------------------------
  // when you use useState react will keep a track if that variable changes
  const [students, setStudents] = useState(null);
  
  const apiGet = async (endpoint) => {
  // trying to update the state with the response from the API
  const response = await fetch(endpoint); // waits till get the response from the API
  const result = await response.json(); // waits till completed converting that json into a javaScript object and put into results 
  setStudents(result); // updates the state
  }

  useEffect(()=> {apiGet(myGroupEndpoint)}, [myGroupEndpoint]); // useEffect is usefull to stop rendering endlesly

  // Handlers -------------------------------------------------
  const handleAdd = (student) => {
    student.UserID = Math.floor(10000 * Math.random());
    setStudents([...students, newStudent]);
    console.log(`Length of students: ${students.length}` );
  };

  // View -----------------------------------------------------  
    return(
      <>
        <h1>Students</h1>
        {
          !students
          ? ( <p>Loading records...</p> )
          : (
          <>
            <CardContainer>
            {
              students.map((user)=>
                  <UserCard user={user} key={user.UserEmail}/>
              )
            }
            </CardContainer>
            <button onClick={() => handleAdd(newStudent)}>Add student</button>
          </> )
        }
      </>
    );
}

export default Students;