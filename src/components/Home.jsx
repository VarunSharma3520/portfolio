import React from 'react'
import {Typewriter} from "react-simple-typewriter";
import Navbar from "./Navbar.jsx";


const Home = () => {
  return (
    <div className=''>
      <Navbar />
      <h1 className='my-5 text-center'><b>I am <span><Typewriter
        words={['Varun Sharma','Front End Developer', 'Back End Developer', 'Data Analyst', 'Programming Enthusiast']}
        loop={0}
        cursor
        cursorStyle='|'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1500}/>
        </span></b>
      </h1>
      <div className="text-center">
        <img src="https://avatars.githubusercontent.com/u/110775856?v=4" className="rounded-circle container-fluid my-4" style={{ width: "18rem" }} alt="..." />
      </div>
      <p className="mt-3 mb-5 container text-center">I’m a full-stack developer with great experience and passion for coding and building plain interfaces. I have a manic love for great high-loaded projects. Plus, I’m an easy-going person and fit in any team. I work remotely and save your budget on my workplace. So, if you have a complicated task, you’ve found the <b>right person</b></p>
    </div>
  )
}

export default Home
