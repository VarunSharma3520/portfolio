import React from 'react'
import Navbar from "./Navbar";


const Skill = () => {
  return (
    <div className='Skill'>
      <Navbar />
      <div ClassName="banner-card card my-5 pb-10 pt-3 container">
        <div ClassName="card-body ">
          <h1 ClassName="card-title card-white fs-1 text-center">Skills</h1>
        </div>
      </div>
      <div ClassName="cardy container">
        <div ClassName="row">
            <div ClassName="col-md-4">
                <div ClassName="card">
                <div className="icon"><ion-icon className='icon' size="large" name="code-slash-outline"></ion-icon></div>
                    <div ClassName="card-body">
                        <h5 ClassName="card-title card-black">Front-end Developer</h5>
                        <p ClassName="text-center card-text">I code things from scratch, and gracefully bring the ideas to life and to the bowser, paying maximal attention to your vision of the product.</p>
                        <ul ClassName="list-group">
                            <li ClassName="card-title list-group-item">Teachnology Stack:</li>
                            <li ClassName="text-center list-group-item">HTML, CSS, JavaScript</li>
                        </ul>
                        <ul ClassName="list-group mt-3">
                            <li ClassName="card-title list-group-item">Things I Do:</li>
                            <li ClassName="text-center list-group-item">UI & UX</li>
                            <li ClassName="text-center list-group-item">Web & Mobile</li>
                            <li ClassName="text-center list-group-item">Logos & Figma</li>
                            <li ClassName="text-center list-group-item">Icons & PhotoShop</li>
                            <li ClassName="text-center list-group-item">Material Design & Apple Design</li>
                        </ul>
                    </div>
                </div>
            </div>

          
            <div ClassName="col-md-4">
                <div ClassName="card">
                <div className="icon"><ion-icon className='icon' size="large" name="server-outline"></ion-icon></div>
                    <div ClassName="card-body">
                        <h5 ClassName="card-title card-black">Back-end Developer</h5>
                        <p ClassName="card-text text-center">Develop business logic and back-end system to support the product, create API, have vast experience with version control systems.</p>
                        <ul ClassName="list-group">
                            <li ClassName="card-title list-group-item">Languages:</li>
                            <li ClassName="text-center list-group-item">Python, C++, JavaScript</li>
                        </ul>
                        <ul ClassName="list-group mt-3">
                            <li ClassName="card-title list-group-item">My Tools:</li>
                            <li ClassName="text-center list-group-item">Digital Ocean & Netlify</li>
                            <li ClassName="text-center list-group-item">ReactJs & React Native</li>
                            <li ClassName="text-center list-group-item">MySql & Mongodb</li>
                            <li ClassName="text-center list-group-item">ExpressJs & NodeJs</li>
                            <li ClassName="text-center list-group-item">Postman & RapidApi</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div ClassName="col-md-4">
                <div ClassName="card">
                <div className="icon"><ion-icon size='large' name="analytics-outline"></ion-icon></div>
                    <div ClassName="card-body">
                        <h5 ClassName="card-title  card-black">Data Analyst</h5>
                        <p ClassName="card-text text-center">I examine, clean, and interprets data to extract valuable insights and inform decision-making, helping businesses and organizations make informed choices.</p>
                        <ul ClassName="list-group">
                            <li ClassName="card-title list-group-item">Technology Stack:</li>
                            <li ClassName="text-center list-group-item">Python & Excel</li>
                        </ul>
                        <ul ClassName="list-group mt-3">
                            <li ClassName="card-title list-group-item">My Tools:</li>
                            <li ClassName="text-center list-group-item">Numpy & Pandas</li>
                            <li ClassName="text-center list-group-item">Matplotlib & Seaborn</li>
                            <li ClassName="text-center list-group-item">Scikit Learn & Tensor Flow</li>
                            <li ClassName="text-center list-group-item">PowerBi & Excel Charts</li>
                            <li ClassName="text-center list-group-item">Codespaces & Gitpod Workspaces</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
};

export default Skill
