import React, { useState } from "react";
import "./Skillanalysis.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPython, FaReact } from "react-icons/fa";
import {  FaServer, FaLayerGroup } from "react-icons/fa";

import {
    FiSearch,
    FiBell,
    FiUser,
    FiChevronDown,
    FiHome,
    FiGrid,
    FiBarChart2,
    FiBriefcase,
    FiUserCheck,
    FiMapPin,
    FiClock,
    FiTarget,
    
    FiZap
} from "react-icons/fi";

import { Button, Form } from "react-bootstrap";

function Skillanalysis({setPage}) {

    const [jobRole, setJobRole] = useState("");
    const [location, setLocation] = useState("Any Location");
    const [experience, setExperience] = useState("Fresher");
    const [analyzed, setAnalyzed] = useState(false);
    const [matchPercentage, setMatchPercentage] = useState(0);
    const [missingSkills, setMissingSkills] = useState([]);
    const [matchedskillsCount, setMatchedSkillsCount] = useState(0);
    const [matchedSkillsList, setMatchedSkillsList] = useState([]);
    const [resume, setResume]=useState(null);
    
    


    const currentskills=[
        "Python",
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "SQL"
    ]

    const jobs = [
    {
        title: "Python Developer",
          icon: <FaPython />,
        requiredSkills: [
            "Python",
            "SQL",
            "Django",
            "REST API",
            "Git"
        ]
    },

    {
        title: "Full Stack Developer",
         icon: <FaLayerGroup />,
        requiredSkills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Node.js",
            "MongoDB",
            "Git"
        ]
    },

    {
        title: "Backend Developer",
         icon: <FaServer />,
        requiredSkills: [
            "Python",
            "Django",
            "REST API",
            "SQL",
            "MongoDB",
            "Git"
        ]
    },

    {
        title: "React Developer",
         icon: <FaReact />,
        requiredSkills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Git"
        ]
    }
];

  const handleAnalyze = () => {

    if (!resume) {
        alert("Please upload your resume first.");
        return;
    }

    const matchedSkills = [
        "Python",
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "SQL"
    ];

    const missing = [
        "Django",
        "REST API",
        "Git"
    ];

    const matchPercentage = Math.round(
        (matchedSkills.length /
            (matchedSkills.length + missing.length)) * 100
    );

    setMatchPercentage(matchPercentage);
    setMatchedSkillsList(matchedSkills);
    setMatchedSkillsCount(matchedSkills.length);
    setMissingSkills(missing);

    setAnalyzed(true);

    localStorage.setItem(
        "jobIQSkillGap",
        JSON.stringify({
            role: "Python Full Stack Developer",
            matchedSkills: matchedSkills,
            missingSkills: missing,
            matchPercentage: matchPercentage
        })
    );

    console.log("Matched Skills:", matchedSkills);
    console.log("Missing Skills:", missing);
};
const filteredJobs = jobs;
    
    return (

        <div className="job-analysis-page">

            

            <div className="top-navbar">

                <div className="navbar-logo">
                    Job<span>IQ</span>
                </div>

                <div className="top-search">

                    <FiSearch />

                    <input
                        type="text"
                        placeholder="Search jobs, skills, companies..."
                    />

                </div>

                <div className="navbar-right">

                    <div className="notification">
                        <FiBell />
                        <span className="notification-dot"></span>
                    </div>

                    <div className="profile">

                        <div className="profile-icon">
                            <FiUser />
                        </div>

                        <span>Joffrin Mathiew</span>

                        <FiChevronDown className="profile-arrow" />

                    </div>

                </div>

            </div>


            <div className="dashboard-layout">


              

                <div className="sidebar">

                    <div className="sidebar-menu">

                        <div className="menu-item"
                          onClick={() => setPage("home")}>
                            <FiHome />
                            <span>Home</span>
                        </div>

                        <div className="menu-item"
                         onClick={() => setPage("features")}>
                            <FiGrid />
                            <span>Features</span>
                        </div>

                        <div className="menu-item">
                            <FiBarChart2 />
                            <span>Skill Analysis</span>
                        </div>

                       

                        <div className="menu-item">
                            <FiUserCheck />
                            <span>My Profile</span>
                        </div>

                    </div>


<div className="sidebar-bottom">

     <FiTarget />

                        <h3>
                            Better Skills
                        </h3>

                        <h3>
                            Bigger Opportunities
                        </h3>

                        <p>
                            Analyze your skills,
                            find the right role,
                            and build your career.
                        </p>

                    </div>

                </div>



                <div className="job-content">



                    <div className="breadcrumb">

                        <span>Home</span>

                        <FiChevronDown />

                        <strong>Skill Analysis</strong>

                    </div>


   

                    <div className="page-header">

                        <div>

                            <h1>
                                Skill <span>Analysis</span>
                            </h1>

                            <p>
                                Analyze how your current skills match your
                                target job roles and discover opportunities
                                that fit your career goals.
                            </p>

                        </div>


                        <div className="header-icon">

                            <FiBriefcase />

                        </div>

                    </div>


                  

                    <div className="job-search-card">

                        <div className="search-field">

                            <label>
                                Upload Resume
                            </label>

                            <div className="field-box">

                                <FiSearch />

                                <input
                                    type="file"
                                    accept=".pdf,.doc,.docx"
            onChange={(e) =>
                setResume(e.target.files[0])
                                    }
                                    
                                />
                                 


                            </div>

                        </div>


                        <div className="search-field">

                            <label>
                                Location
                            </label>

                            <div className="field-box">

                                <FiMapPin />

                                <Form.Select
                                    value={location}
                                    onChange={(e) =>
                                        setLocation(e.target.value)
                                    }
                                >

                                    <option>
                                        Any Location
                                    </option>

                                    <option>
                                        Chennai
                                    </option>

                                    <option>
                                        Bangalore
                                    </option>

                                    <option>
                                        Hyderabad
                                    </option>
                                    <option>
                                        coimbatore
                                    </option><option>
                                        Nagercoil
                                    </option>
                                    <option>
                                        Trichy
                                    </option>

                                </Form.Select>

                            </div>

                        </div>


                        <div className="search-field">

                            <label>
                                Experience
                            </label>

                            <div className="field-box">

                                <FiClock />

                                <Form.Select
                                    value={experience}
                                    onChange={(e) =>
                                        setExperience(e.target.value)
                                    }
                                >

                                    <option>
                                        Fresher
                                    </option>

                                    <option>
                                        1 - 2 Years
                                    </option>

                                    <option>
                                        2 - 4 Years
                                    </option>

                                    <option>
                                        5+ Years
                                    </option>

                                </Form.Select>

                            </div>

                        </div>


                        <Button
                            className="analyze-button"
                            onClick={handleAnalyze}
                        >

                            <FiZap />

                            Analyze Skills

                        </Button>

                    </div>


                 

                    <div className="dashboard-grid">



                        <div className="dashboard-card match-card">

                            <div className="card-title">

                                <div>
                                    <h2>
                                        Your Job Match Score
                                    </h2>

                                    <p>
                                        Based on your current skills
                                    </p>
                                </div>

                                <FiTarget />

                            </div>


                            <div className="match-content">

                                <div className="progress-circle">

                                    <div className="circle-inner">

                                        <strong>
                      {matchPercentage}%
                                       </strong>

                                        <span>
                                            Match Score
                                        </span>

                                    </div>

                                </div>


                                <div className="match-info">

                                    <h3>
                                        {analyzed
                                            ? "Great progress!"
                                            : "You're on the right track!"
                                        }
                                    </h3>

                                    <p>
                                        Your current skills match
                                        several requirements for
                                        modern development roles.
                                    </p>


                                    <div className="score-row">

                                        <span>
                                            <i className="blue-dot"></i>
                                            Matched Skills
                                        </span>

                                        <strong>{matchPercentage}%</strong>
                                    </div>


                                    <div className="score-row">

                                        <span>
                                            <i className="purple-dot"></i>
                                            Missing Skills
                                        </span>

                                       <strong>{100 - matchPercentage}%</strong>

                                    </div>
                                    <div className="matched-skill-list">

    {matchedSkillsList.map((skill) => (
        <span key={skill}>
            {skill}
        </span>
    ))}

</div>
{analyzed && (
    <button
        className="skill-gap-button"
        onClick={() => setPage("gap")}
    >
        View Skill Gap
    </button>
)}

                                </div>

                            </div>

                        </div>



                        <div className="dashboard-card roles-card">

                            <div className="card-title">

                                <div>
                                    <h2>
                                        Top Job Roles For You
                                    </h2>

                                    <p>
                                        Roles matching your profile
                                    </p>
                                </div>

                                <FiBriefcase />

                            </div>


                            <div className="job-list">

                                {filteredJobs.length > 0 ? (

                                    filteredJobs.map((job) => (

                                        <div
                                            className="job-item"
                                            key={job.title}
                                        >

                                            <div className="job-icon">
                                                {job.icon}
                                            </div>

                                            <div className="job-info">

                                                <h3>
                                                    {job.title}
                                                </h3>

                                                <span>
                                                    {job.company}
                                                </span>

                                            </div>

                                            <div className="job-match">

                                                <strong>
                                                    {job.match}%
                                                </strong>

                                                <span
                                                    className={
                                                        job.level === "High"
                                                            ? "high"
                                                            : "medium"
                                                    }
                                                >
                                                    {job.level}
                                                </span>

                                            </div>

                                        </div>

                                    ))

                                ) : (

                                    <p className="no-results">
                                        No matching job roles found.
                                    </p>

                                )}

                            </div>

                        </div>


                        <div className="dashboard-card skills-card">

                            <div className="card-title">

                                <div>
                                    <h2>
                                        Skills Overview
                                    </h2>

                                    <p>
                                        Your current skill strength
                                    </p>
                                </div>

                                <FiBarChart2 />

                            </div>


                            <div className="skill-progress">

                                <div className="skill-label">
                                    <span>Python</span>
                                    <strong>85%</strong>
                                </div>

                                <div className="progress-line">
                                    <span style={{ width: "85%" }}></span>
                                </div>

                            </div>


                            <div className="skill-progress">

                                <div className="skill-label">
                                    <span>React</span>
                                    <strong>72%</strong>
                                </div>

                                <div className="progress-line">
                                    <span style={{ width: "72%" }}></span>
                                </div>

                            </div>


                            <div className="skill-progress">

                                <div className="skill-label">
                                    <span>JavaScript</span>
                                    <strong>78%</strong>
                                </div>

                                <div className="progress-line">
                                    <span style={{ width: "78%" }}></span>
                                </div>

                            </div>


                            <div className="skill-progress">

                                <div className="skill-label">
                                    <span>SQL</span>
                                    <strong>65%</strong>
                                </div>

                                <div className="progress-line">
                                    <span style={{ width: "65%" }}></span>
                                </div >
                                

                            </div>

                        </div>


                    </div>



                   

                </div>

            </div>
            <div>
                
            </div>
            


        </div>
       

    );
}

export default Skillanalysis ;