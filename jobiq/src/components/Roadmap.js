import React from "react";
import "./Roadmap.css";

function Roadmap({setPage}) {

    const savedData = JSON.parse(
        localStorage.getItem("jobIQSkillGap")
    );

    const role = savedData?.role || "No Job Role Selected";
    const missingSkills = savedData?.missingSkills || [];

    return (
        <div className="roadmap-page">

            <h1>
                Learning <span>Roadmap</span>
            </h1>

            <p>
                Build the skills you need for your target role.
            </p>

            <h2>{role}</h2>

            <div className="roadmap-skills">

                {missingSkills.map((skill, index) => (

                    <div className="roadmap-card" key={skill}>

                        <div className="roadmap-number">
                            {index + 1}
                        </div>

                        <div>
                            <h3>{skill}</h3>

                            <p>
                                Learn {skill} and build practical
                                knowledge for your target role.
                            </p>
                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Roadmap;