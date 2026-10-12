import React from "react";
import "./Features.css";

import {
    BarChartFill,
    BriefcaseFill,
    PuzzleFill,
    MapFill,
    ArrowUpRight
} from "react-bootstrap-icons";


function Features({ setPage }) {

    return (

        <div className="features-page">

            <div className="features-content">


                <div className="features-intro">

                    <span className="features-label">
                        JOBIQ FEATURES
                    </span>

                    <h1>
                        Everything you need to
                        <br />
                        <span>move your career forward.</span>
                    </h1>

                    <p>
                        Understand your skills, discover suitable
                        opportunities, identify what you're missing,
                        and build a clear path toward your target career.
                    </p>

                </div>



                <div className="features-grid">



                    <div
                        className="feature-product-card"
                        onClick={() => setPage("analysis")}
                    >

                        <div className="feature-card-top">

                            <div className="feature-icon">
                                <BarChartFill />
                            </div>

                            <ArrowUpRight className="feature-arrow" />

                        </div>


                        <div className="feature-card-content">

                            <span className="feature-number">
                                01
                            </span>

                            <h2>
                                Skill Analysis
                            </h2>

                            <p>
                                Analyze your current skills and understand
                                how well they match the requirements of your
                                target job.
                            </p>

                        </div>


                        <div className="feature-mini-chart">

                            <div className="chart-header">

                                <span>
                                    Skill readiness
                                </span>

                                <strong>
                                    78%
                                </strong>

                            </div>


                            <div className="chart-progress">

                                <div
                                    className="chart-progress-fill"
                                    style={{ width: "78%" }}
                                ></div>

                            </div>


                            <div className="chart-bars">

                                <span style={{ height: "45%" }}></span>

                                <span style={{ height: "65%" }}></span>

                                <span style={{ height: "55%" }}></span>

                                <span style={{ height: "85%" }}></span>

                                <span style={{ height: "72%" }}></span>

                            </div>

                        </div>

                    </div>



                    <div
                        className="feature-product-card"
                        onClick={() => setPage("analysis")}
                    >

                        <div className="feature-card-top">

                            <div className="feature-icon">
                                <BriefcaseFill />
                            </div>

                            <ArrowUpRight className="feature-arrow" />

                        </div>


                        <div className="feature-card-content">

                            <span className="feature-number">
                                02
                            </span>

                            <h2>
                                Job Matching
                            </h2>

                            <p>
                                Discover job roles that match your skills,
                                experience, and career direction.
                            </p>

                        </div>



                        <div className="job-match-preview">

                            <div className="job-match-item">

                                <div className="job-match-info">

                                    <strong>
                                        Python Developer
                                    </strong>

                                    <small>
                                        Software Development
                                    </small>

                                </div>

                                <span>
                                    92%
                                </span>

                            </div>


                            <div className="job-match-item">

                                <div className="job-match-info">

                                    <strong>
                                        Full Stack Developer
                                    </strong>

                                    <small>
                                        Web Development
                                    </small>

                                </div>

                                <span>
                                    86%
                                </span>

                            </div>

                        </div>

                    </div>




                    <div
                        className="feature-product-card"
                        onClick={() => setPage("gap")}
                    >

                        <div className="feature-card-top">

                            <div className="feature-icon">
                                <PuzzleFill />
                            </div>

                            <ArrowUpRight className="feature-arrow" />

                        </div>


                        <div className="feature-card-content">

                            <span className="feature-number">
                                03
                            </span>

                            <h2>
                                Skill Gap
                            </h2>

                            <p>
                                Identify the skills you're missing and focus
                                on the areas that can improve your job readiness.
                            </p>

                        </div>


                        <div className="skill-gap-preview">


                            <div className="gap-item">

                                <div className="gap-title">

                                    <span>
                                        Python
                                    </span>

                                    <small>
                                        Strong
                                    </small>

                                </div>

                                <div className="gap-progress">

                                    <i
                                        style={{ width: "85%" }}
                                    ></i>

                                </div>

                            </div>


                            <div className="gap-item">

                                <div className="gap-title">

                                    <span>
                                        Django
                                    </span>

                                    <small>
                                        Improve
                                    </small>

                                </div>

                                <div className="gap-progress">

                                    <i
                                        style={{ width: "48%" }}
                                    ></i>

                                </div>

                            </div>


                            <div className="gap-item">

                                <div className="gap-title">

                                    <span>
                                        REST API
                                    </span>

                                    <small>
                                        Learning
                                    </small>

                                </div>

                                <div className="gap-progress">

                                    <i
                                        style={{ width: "32%" }}
                                    ></i>

                                </div>

                            </div>

                        </div>

                    </div>


                    <div
                        className="feature-product-card"
                        onClick={() => setPage("roadmap")}
                    >

                        <div className="feature-card-top">

                            <div className="feature-icon">
                                <MapFill />
                            </div>

                            <ArrowUpRight className="feature-arrow" />

                        </div>


                        <div className="feature-card-content">

                            <span className="feature-number">
                                04
                            </span>

                            <h2>
                                Career Roadmap
                            </h2>

                            <p>
                                Turn your skill gaps into a practical learning
                                plan with clear steps toward your target role.
                            </p>

                        </div>


                   

                        <div className="roadmap-preview">

                            <div className="roadmap-step">

                                <span className="roadmap-dot active">
                                    1
                                </span>

                                <div>
                                    <strong>
                                        Assess Skills
                                    </strong>

                                    <small>
                                        Completed
                                    </small>
                                </div>

                            </div>


                            <div className="roadmap-line"></div>


                            <div className="roadmap-step">

                                <span className="roadmap-dot">
                                    2
                                </span>

                                <div>
                                    <strong>
                                        Learn Missing Skills
                                    </strong>

                                    <small>
                                        In progress
                                    </small>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>



                <div className="features-bottom">

                    <div className="features-bottom-text">

                        <span>
                            ONE PLATFORM
                        </span>

                        <h2>
                            Your career journey,
                            <br />
                            in one place.
                        </h2>

                    </div>


                    <p>
                        JobIQ connects your skills, job opportunities,
                        learning gaps, and career roadmap into one simple
                        workflow.
                    </p>

                </div>



                <div className="features-home">

                    <button
                        onClick={() => setPage("home")}
                    >
                        ← Home
                    </button>

                </div>


            </div>

        </div>

    );
}


export default Features;