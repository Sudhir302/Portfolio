import About from "./about/About";
import Education from "./education/Education";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Project from "./project/Project";
import Skills from "./skill/Skills";

import "../style/Dashboard.css"
import Contact from "./contact/Contact";
import StarBackground from "./StarBackground";


function Dashboard(){
    return(
        <div className="dashboard-container">
            <div className="batch-1">
                <Navbar />
                <About />
                <div className="able"><StarBackground /></div>
            </div>
            <div className="batch-2">
                <Education />
                <Skills />
                <Project />
                <Contact />
            </div>
            <div className="batch-3">
                <Footer />
            </div>
        </div>
    )
}

export default Dashboard;