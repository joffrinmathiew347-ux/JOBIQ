import React from "react";
import "./Howitworks.css";

import {
    FileEarmarkTextFill,
    BarChartFill,
    PuzzleFill,
    MapFill,
    ArrowRight,
    ArrowRightShort
} from "react-bootstrap-icons";

function HowItWorks({ setPage }) {

    return (
        <div className="how-it-works-page">

           
            <div className="how-heading">

                <span>HOW JOBIQ WORKS</span>

                <h1>
                    From Your Skills
                    <br />
                    To Your Career Goal
                </h1>

                <p>
                    Understand where you are, discover what you need,
                    and follow a clear path toward your target role.
                </p>

            </div>



            <div className="how-steps">

            

                <div className="how-step">

                    <span className="step-number">
                        01
                    </span>

                    <div className="step-icon">
                        <FileEarmarkTextFill />
                    </div>

                    <h2>
                        Upload Resume
                    </h2>

                    <p>
                        Upload your resume and tell JobIQ
                        which role you're aiming for.
                    </p>

                </div>


               

                <div className="step-arrow">
                    <ArrowRight />
                </div>


              

                <div className="how-step">

                    <span className="step-number">
                        02
                    </span>

                    <div className="step-icon">
                        <BarChartFill />
                    </div>

                    <h2>
                        Analyze Skills
                    </h2>

                    <p>
                        See how your current skills match
                        the requirements of your target role.
                    </p>

                </div>


                

                <div className="step-arrow">
                    <ArrowRight />
                </div>


             

                <div className="how-step">

                    <span className="step-number">
                        03
                    </span>

                    <div className="step-icon">
                        <PuzzleFill />
                    </div>

                    <h2>
                        Find Your Skill Gap
                    </h2>

                    <p>
                        Identify the skills you're missing
                        and understand what to improve.
                    </p>

                </div>


                

                <div className="step-arrow">
                    <ArrowRight />
                </div>


               

                <div className="how-step">

                    <span className="step-number">
                        04
                    </span>

                    <div className="step-icon">
                        <MapFill />
                    </div>

                    <h2>
                        Build Your Roadmap
                    </h2>

                    <p>
                        Follow a practical learning path
                        toward your career goal.
                    </p>

                </div>

            </div>


        

            <div className="how-cta">

                <h2>
                    Ready to find your next step?
                </h2>

                <p>
                    Start with your current skills and let JobIQ
                    show you where to go next.
                </p>

                <button
                    onClick={() => setPage("home")}
                >
                    Home

                    <ArrowRightShort />
                </button>

            </div>

        </div>
    );
}

export default HowItWorks;