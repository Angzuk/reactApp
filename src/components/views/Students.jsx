import { useState } from 'react';
import { CardContainer, Card } from '../UI/Card.jsx';
import './Students.scss';

function Students (){

  // Initialisation -------------------------------------------
  const newStudent = {
    UserFirstname: "Hashim", 
    UserLastname: "ABDALLAH", 
    UserEmail: "K1083353@kingston.ac.uk", 
    UserRegistered: 0, 
    UserLevel: 4, 
    UserYearID: 1, 
    UserUsertypeID: 2, 
    UserImageURL: 
      "https://images.generated.photos/eL1-OlKDqGf1IaL_b2O8aSj7osDX_eFVHZEoJ0f3ZV0/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzYwNjc0LmpwZw.jpg", 
    UserUsertypeName: "Student", 
    UserYearName: "2022-23" ,
  };

  // State ----------------------------------------------------
  // when you use useState react will keep a track if that variable changes
  const [students, setStudents] = useState(null);

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
              students.map((student)=>{
                return(
                  <div className="studentCard" key={student.UserEmail}>
                    <Card>
                      <p>{student.UserEmail.substring(0,8)}</p>
                      <p>{`${student.UserFirstname} ${student.UserLastname}`}</p>
                      <img 
                        src={student.UserImageURL} 
                        alt={student.UserEmail.substring(0,8)}
                      />
                    </Card>
                  </div>
              )
              })
            }
            </CardContainer>
            <button onClick={() => handleAdd(newStudent)}>Add student</button>
          </> )
        }
      </>
    );
}

export default Students;