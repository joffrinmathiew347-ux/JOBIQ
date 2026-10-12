import React from "react";
import "./Aboutus.css";

function About({ setPage }) {
    return (
        <div className="about-page">

            <h1 className="about-logo">
                Job<span>IQ</span>
            </h1>

           
            <section className="about-intro">

                <p className="about-label">
                    ABOUT JOBIQ
                </p>

                <h2>
                    A simple way to understand
                    <br />
                    your career readiness.
                </h2>

                <p className="about-description">
                    JobIQ helps students understand their current skills,
                    identify areas they need to improve, and plan what to
                    learn before applying for their next job.
                </p>

            </section>


           
            <section className="about-content">

         
                <div className="about-box">

                    <h3>Why JobIQ?</h3>

                    <p>
                        Finding a job isn't only about having a degree.
                        Knowing which skills to improve can make the
                        preparation process much easier.
                    </p>

                    <p>
                        JobIQ was created to help students understand
                        where they currently stand and what they can
                        work on next.
                    </p>

                </div>


                
                <div className="about-box">

                    <h3>What We Do</h3>

                    <div className="about-feature">
                        <span>01</span>
                        <div>
                            <h4>Skill Analysis</h4>
                            <p>Understand your current skills.</p>
                        </div>
                    </div>

                    <div className="about-feature">
                        <span>02</span>
                        <div>
                            <h4>Job Matching</h4>
                            <p>See how your skills match a role.</p>
                        </div>
                    </div>

                    <div className="about-feature">
                        <span>03</span>
                        <div>
                            <h4>Skill Gap</h4>
                            <p>Find the areas you need to improve.</p>
                        </div>
                    </div>

                    <div className="about-feature">
                        <span>04</span>
                        <div>
                            <h4>Career Roadmap</h4>
                            <p>Plan what to learn next.</p>
                        </div>
                    </div>

                </div>

            </section>


            
            <section className="about-goal">

                <p className="about-label">
                    OUR GOAL
                </p>

                <h3>
                    Help students move from
                    <br />
                    "What should I learn?"
                    <br />
                    to
                    <span> "I'm ready to apply."</span>
                </h3>

            </section>


            
            <div className="about-home">

                <button onClick={() => setPage("home")}>
                    ← Home
                </button>

            </div>

        </div>
    );
}

export default About;