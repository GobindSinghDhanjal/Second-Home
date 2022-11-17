import React from "react";

function Rating(props) {
  const n = Math.round(props.rating) ;
  const p = 5 - n;

  return (
    <div>
      {Array.from(Array(n)).map((e,i) => (
        <i key={i} className={props.class1}></i>
      ))}
      {Array.from(Array(p)).map((e,j) => (
        <i key={j} className={props.class2}> </i>
      ))}
    </div>
  );
}

export default Rating;
