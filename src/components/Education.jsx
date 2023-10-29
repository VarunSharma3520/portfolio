import React from "react";
import Navbar from "./Navbar";

const Education = () => {
    const resume = () =>{
        console.log('resume clicked')
    }
    return (
        <div className="Education">
            <Navbar />
            <div className="education-body my-7 container">
                <div className="card text-center ">
                    <div className="card-header border-0">
                        <b><h3 className="card-tittle">Education</h3></b>
                    </div>
                    <div className="card-body mx-3">
                        <h4 className="card-title color-black text-start">Seconary Education:-</h4>
                        <p className="card-text color-black text-start ms-5">Percentage: 82.8%</p>
                        <p className="card-text color-black text-start ms-5">School: S.T. Paul's School, Morar, Gwalior</p>
                        <p className="card-text color-black text-start ms-5">Medium: English</p>
                        <p className="card-text color-black text-start ms-5">Board: CBSE</p>
                        <h4 className="card-title color-black text-start">Higher Seconary Education:-</h4>
                        <p className="card-text color-black text-start ms-5">Percentage: 80.2%</p>
                        <p className="card-text color-black text-start ms-5">School: S.T. Paul's School, Morar, Gwalior</p>
                        <p className="card-text color-black text-start ms-5">Medium: English</p>
                        <p className="card-text color-black text-start ms-5">Board: CBSE</p>
                        <h4 className="card-title color-black text-start">Professional Education:-</h4>
                        <p className="card-text color-black text-start ms-5">CGPA: 8.18</p>
                        <p className="card-text color-black text-start ms-5">Institute: Madhav Institute of Technology and Science, Gwalior</p>
                        <p className="card-text color-black text-start ms-5">University: Rajiv Gandhi Technological University, Bhopal</p>
                        <button onClick={resume} className="btn btn-light d-flex justify-content-end border">Download Resume</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
