const Score = (props) => {
  return ( 
    <li>
      {props.score.score} on {props.score.date}
    </li>
  );
}
 
export default Score;