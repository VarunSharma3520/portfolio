
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Skill from "./components/Skill";
import Education from "./components/Education";
import SocialLink from "./components/SocialLink";
import WorkExperience from "./components/WorkExperience";
import AboutMe from "./components/AboutMe";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
            <Route path="Skill" element={<Skill />} />
            <Route path="Education" element={<Education />} />
            <Route path="WorkExperience" element={<WorkExperience />} />
            <Route path="AboutMe" element={<AboutMe />} />
            <Route path="SocialLink" element={<SocialLink />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}


export default App;
