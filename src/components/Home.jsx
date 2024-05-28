import React, { useEffect, useRef } from "react";
import pdf from "../pdf/resume.pdf";
import coder from './data/coder.json';
import Typed from 'typed.js'



function Home() {
  const typedRef = useRef(null)
  useEffect(() => {
    const options ={
      strings:["Welcome to my profile","My name is  Nimisha Sharma","I'm an Android Developer(Kotlin)","Frontend Developer(React JS)"],
      typedSpeed:50,
      backSpeed:50,
      loop:true
      
    }
    const typed = new Typed(typedRef.current ,options)
  
    return () => {
      typed.destroy()
    }
  }, [])
  
  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="zoom-in-up" data-aos-duration="1000">
          <h1 ref={typedRef}>
       
            
          </h1>
          <a
            href={pdf}
            download="MyResume.pdf "
            className="btn btn-outline-light my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="right" data-aos="zoom-in-left" data-aos-duration="1000">
          <div className="img">
            <img src={`/assets/${coder.imgSrc}`} alt="Image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
