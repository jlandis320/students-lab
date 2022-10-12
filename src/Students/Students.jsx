const Students = (props) => {
  console.log(props.students)
  return ( 
    <>
      <ul>
        {props.students.map(student => 
        <>
          <li> {student.name} : {student.bio} </li>
          {student.scores.map(score =>  
            <li>Scored {score.score} on {score.date} </li>)} 
        </>
        )}
      </ul>
    </>
  );
}
 
export default Students;