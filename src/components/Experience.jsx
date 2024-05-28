import React from 'react';
import experience from './data/experience.json'

function Experience() {
  return (
    <>
     <div className="container ex " id='experience' >
      <h1>Experience</h1>
      {
        experience.map((data)=>{
          return(
            <>
            <div key={data.id} className='ex-items text-center my-5' data-aos="zoom-out-down" data-aos-duration="1000">
              <div className="left">
              <img src={`/assets/${data.imageSrc}`} alt="Image" />
              </div>
              <div className="right">
                <h2>{data.organisation}</h2>
                <h3><span style={{color :'white'}}>{data.role}</span></h3>
                <h4><span style={{color:'lightblue'}}>{data.startDate}{" "}{data.endDate}</span>{"      "}{data.location}</h4>
                <h5>{data.experiences}</h5>
              
              </div>
            </div>
            </>
          )
        })
      }
     </div>
    </>
  );
}

export default Experience;
