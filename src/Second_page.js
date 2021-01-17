import React from "react";
import "./Abatar.css";
import Avatar from "./Avatar.js";
<link href="/your-path-to-fontawesome/css/fontawesome.css" rel="stylesheet" />;


 const Second_page=(props)=>{
  const ArrayList=[
    {
      id:1,
      name:'vinod',
      work:'web developer'
    },
    {
      id:2,
      name:'Kanika',
      work:'software developer'
    },
    
    {
      id:3,
      name:'Malin',
      work:'python developer'
    },
    {
      id:4,
      name:'Mukesh',
      work:'java developer'
    },
    {
      id:5,
      name:'Malin',
      work:'python developer'
    },
  ];
  const ArrayList1=[
   
    {
      id:1,
      name:'David',
      work:'python developer'
    },
    {
      id:2,
      name:'Decosta',
      work:'Reactjs developer'
    },
    {
      id:3,
      name:'Jonson',
      work:'C++ developer'
    },
    {
      id:4,
      name:'Joy',
      work:'java developer'
    },
  ]

  const ArrayListValue=ArrayList.map((ab,i)=>{
   return  < Avatar id={ArrayList[i].id} 
           name={ArrayList[i].name}
           work={ArrayList[i].work}/>
  })
  const ArrayListValue1=ArrayList1.map((ab,i)=>{
    return  < Avatar id={ArrayList[i].id} 
            name={ArrayList[i].name}
            work={ArrayList[i].work}/>
   })
  return (
    <div className="Second_page">
      {ArrayListValue}
      <br/><br/> <hr width="20%" />
      <button style={{
        width:'5%',
      fontSize:'30px', borderRadius : '75px',marginLeft:'45%'}}>2</button>
       <hr width="20%" /> <br/>
      {ArrayListValue1}
    </div>
  );
}

export default Second_page;