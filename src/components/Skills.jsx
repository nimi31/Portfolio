import React from 'react';
import skills from './data/skills.json'

const Skills = () => {
  return (
    <>
      <div className="container skills my-3" id='skills'>
    <h1>Skills</h1>
    <div  className='items'>
    {
       skills.map((data)=>{
        return(
          <>
         
            <div className="item" key={data.id} data-aos="flip-right" data-aos-duration="1000">
            <img src={`/assets/${data.imageSrc}`} alt="Image" />
            <h3>{data.title}</h3>
            </div>
          
          </>
        
        )
      })
    }
      
      </div>
    
      </div>
    </>
  );
}

export default Skills;
