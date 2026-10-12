import "./Navbar.css";


function Navbar( {setPage}){
    return(
        <body>

            <div>
            
            <header className="container-fluid">
                <h1 className="Logo">Job<span>IQ</span></h1>
                <nav className="nav">
                    <a href ="#" >Home</a>
                    <a href ="#" onClick={() => setPage("features")}>Features</a>
                    <a href ="#" onClick={() => setPage("howitworks")}>How it Works</a>
                    <a href ="#"  onClick={() => setPage("Aboutus")}> About Us</a>
                </nav>
                
                <div className="Navbarbuttons">
                    <button className="loginbtn"  onClick={()=> setPage("login")}> Login</button>
                    <button className="GetStartedbtn" onClick={()=> setPage("login")}> Get Started</button>
                </div>
            </header>
            <section className="hero-section"
           style={{
        backgroundImage: "url('/Background.png')"
    }}>
            <div className="Hero" style={{
                position:"relative",
                top:"-50px"
            }}>

            <h1>
                Know Your Job Readiness
                <br/>
                Before Your Next Interview
            </h1>
            <p>
                Analyze your skills, discover your gaps, and get personalized
                roadmap to land your dreamjob.
            </p>
            
            <button className="checkjobbtn" style={{
                 position: "relative",
              top:"-10px"
            }}
            onClick={()=> setPage("analysis")}>
                Check My Job IQ

            </button>
           
       
        </div>
        
<div className="job-features-container">

    
    <div className="left-features">

        <div className="feature-card">
            <img src="/analysis.png" className="feature-icon" />
            <h3>Skill Analysis</h3>
            <p>Analyze your current<br />skills and strengths</p>
        </div>

        <div className="feature-card">
            <img src="/jobmatching.png" className="feature-icon" />
            <h3>Job Matching</h3>
            <p>Get matched with<br />best job opportunities</p>
        </div>

    </div>


    
    <div className="center-person">
        <img src="/person.png" className="center-image" />
    </div>



    <div className="right-features">

        <div className="feature-card">
            <img src="/skillgap.png" className="feature-icon" />
            <h3>Skill Gap</h3>
            <p>Discover your gaps<br />and improve</p>
        </div>

        <div className="feature-card">
            <img src="/roadmap.png" className="feature-icon" />
            <h3> Roadmap</h3>
            <p>Get a roadmap tailored<br />for your success</p>
        </div>

    </div>

</div>
        </section>
      

        </div>
        </body>

        
        
        
    )
}

export default Navbar;