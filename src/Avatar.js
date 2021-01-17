import React from "react";
import 'tachyons';
import "./Abatar.css";
const Avatar=(props)=>{
  return(
    <div className="imgstyle ma3 grow bg-light-purple dib pa3">
      <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="avatar" />
      <h1>{props.name}</h1>
      <p>{props.work}</p>
      <button className="bg-red ">LOSE</button>
    </div>
  )

}
export default Avatar;