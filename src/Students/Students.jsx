const Students = (props) => {
  console.log(props.students)
  return ( 
    <>
      <ul>
        {props.students.map(student => 
        <>
          <li> {student.name} : {student.bio} </li>
          Scores:
          {student.scores.map(score =>  
            <li> {score.score} </li>)} 
        </>
        )}
      </ul>
    </>
  );
}
 
export default Students;