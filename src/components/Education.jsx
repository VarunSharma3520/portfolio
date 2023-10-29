import React from "react";
import Navbar from "./Navbar";

const Education = () => {
    return (
        <div className="Education">
            <Navbar />
            <div className="dropdown-list container my-7">
                <p ClassName="d-inline-flex gap-1">
                    <a ClassName="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
                    <button ClassName="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
                </p>
                <div ClassName="row">
                    <div ClassName="col">
                        <div ClassName="collapse multi-collapse" id="multiCollapseExample1">
                            <div ClassName="card card-body">
                                Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                            </div>
                        </div>
                    </div>
                    <div ClassName="col">
                        <div ClassName="collapse multi-collapse" id="multiCollapseExample2">
                            <div ClassName="card card-body">
                                Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
