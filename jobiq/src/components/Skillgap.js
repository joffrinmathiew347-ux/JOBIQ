import React from "react";
import "./Skillgap.css";

import {
    ArrowLeft,
    ArrowUpRight,
    CheckCircleFill
} from "react-bootstrap-icons";

function Skillgap({ setPage }) {

    const savedData = JSON.parse(
        localStorage.getItem("jobIQSkillGap")
    );

    const role = savedData?.role || "No Job Role Selected";
    const matchedSkills = savedData?.matchedSkills || [];
    const missingSkills = savedData?.missingSkills || [];
    const matchPercentage = savedData?.matchPercentage || 0;

    return (
        <div className="skill-gap-page">

           
            <header className="skill-gap-topbar">

                <div className="skill-gap-logo">
                    Job<span>IQ</span>
                </div>

                <button
                    className="back-button"
                    onClick={() => setPage("analysis")}
                    title="Back to Skill Analysis"
                >
                    <ArrowLeft />
                </button>

            </header>


            <main className="skill-gap-main">

                <div className="page-label">
                    SKILL ANALYSIS
                </div>

                <div className="skill-gap-heading">

                    <h1>
                        Your <span>Skill Gap</span>
                    </h1>

                    <p>
                        See which skills you already have and what you
                        need to develop for your target role.
                    </p>

                </div>

                <section className="skill-role-card">

                    <div className="skill-role-info">

                        <span className="small-label">
                            TARGET JOB ROLE
                        </span>

                        <h2>
                            {role}
                        </h2>

                        <p>
                            Your current skill readiness for this role.
                        </p>

                    </div>


                    <div className="readiness-info">

                        <div className="readiness-header">

                            <span>
                                Skill Readiness
                            </span>

                            <strong>
                                {matchPercentage}%
                            </strong>

                        </div>

                        <div className="readiness-bar">

                            <div
                                className="readiness-fill"
                                style={{
                                    width: `${matchPercentage}%`
                                }}
                            />

                        </div>

                        <span className="readiness-count">

                            {matchedSkills.length} of{" "}
                            {matchedSkills.length + missingSkills.length}{" "}
                            required skills matched

                        </span>

                    </div>

                </section>


                <section className="skills-section">

                    <div className="skills-column">

                        <div className="section-title">

                            <div>

                                <h2>
                                    Your Skills
                                </h2>

                                <p>
                                    Skills you already have
                                </p>

                            </div>

                            <span className="skill-count">
                                {matchedSkills.length}
                            </span>

                        </div>


                        <div className="skill-items">

                            {matchedSkills.length > 0 ? (

                                matchedSkills.map((skill) => (

                                    <div
                                        className="skill-item"
                                        key={skill}
                                    >

                                        <CheckCircleFill />

                                        <span>
                                            {skill}
                                        </span>

                                    </div>

                                ))

                            ) : (

                                <p className="empty-skills">
                                    No matched skills found.
                                </p>

                            )}

                        </div>

                    </div>


                    <div className="skills-column">

                        <div className="section-title">

                            <div>

                                <h2>
                                    Skills to Develop
                                </h2>

                                <p>
                                    Skills required for this role
                                </p>

                            </div>

                            <span className="skill-count missing-count">
                                {missingSkills.length}
                            </span>

                        </div>


                        <div className="skill-items">

                            {missingSkills.length > 0 ? (

                                missingSkills.map((skill) => (

                                    <div
                                        className="skill-item missing"
                                        key={skill}
                                    >

                                        <span className="missing-dot">
                                            +
                                        </span>

                                        <span>
                                            {skill}
                                        </span>

                                    </div>

                                ))

                            ) : (

                                <p className="empty-skills">
                                    No skill gaps found.
                                </p>

                            )}

                        </div>

                    </div>

                </section>


                <div className="skill-gap-actions">

                    <div className="action-text">

                        <strong>
                            Ready for the next step?
                        </strong>

                        <span>
                            Build a learning path based on your skill gap.
                        </span>

                    </div>

                    <button
                        className="roadmap-button"
                        onClick={() => setPage("roadmap")}
                    >

                        View Roadmap

                        <ArrowUpRight />

                    </button>

                </div>

            </main>

        </div>
    );
}

export default Skillgap;