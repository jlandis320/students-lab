import Score from "../Score";

const Students = (props) => {
  console.log(props.students)
  return ( 
    <>
      <ul>
        {props.students.map(student => 
        <>
          <li> {student.name} : {student.bio} </li>
            <Score score={score}/>
          )} 
        </>
        )}
      </ul>
    </>
  );
}
 
export default Students;