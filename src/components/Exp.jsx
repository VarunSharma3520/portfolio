
import React from 'react'
import Navbar from "./Navbar";


const Exp = () => {
    return (
        <div className='Exp'>
            <Navbar />
            <div className="exp-list container align-items-center">
                <div className="container my-7 d-flex align-items-center justify-content-evenly">
                    <div className="card " style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h2 className="card-title color-black">Study Point</h2>
                            <h6 className="text-center card-subtitle mb-2 text-muted">Part Time Teacher</h6>
                            <p className="text-center card-text">In study point I used to check copies of IIT aspirants and use to provide doubt support.</p>
                        </div>
                    </div>

                    <div className="card " style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h2 className="card-title color-black">Freelancer</h2>
                            <h6 className="text-center card-subtitle mb-2 text-muted">Web Devloper</h6>
                            <p className="text-center card-text">In This project I have developed a fully functional website for Devi Store (A Store in D.D. Mall, Gwalior).</p>
                        </div>
                    </div>

                    <div className="card " style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h2 className="card-title color-black">Echo Magzine</h2>
                            <h6 className="text-center card-subtitle mb-2 text-muted">Vice President</h6>
                            <p className="text-center card-text">I was head of technical team. In addtion to that, I use to bring sponsor Magzine.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Exp
