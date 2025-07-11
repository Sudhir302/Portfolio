import "../../style/About.css"

function About(){
    return(
        <div className="about-container" id="about">
            <div className="picture">
                <img src="/sudhir.png" alt="Profile" />
            </div>
            <div className="mydec">
                <div className="my-name">SUDHIR CHAUDHARY</div>
                <div className="position">
                    WEB DEVELOPER | FRONTEND | BACKEND | FULLSTACK
                </div>
            </div>
        </div>
    );
};


export default About;