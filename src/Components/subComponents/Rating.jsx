import React from "react";

function Rating(props) {
  const n = Math.round(props.rating) ;
  const p = 5 - n;

  return (
    <div>
      {Array.from(Array(n)).map((e,i) => (
        <i className={props.class1}></i>
      ))}
      {Array.from(Array(p)).map(() => (
        <i className={props.class2}> </i>
      ))}
    </div>
  );
}

export default Rating;
