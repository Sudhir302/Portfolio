import Technology from "./Technology";

import "../../style/Skill.css"

function Skills(){
    return(
        <div className="skill-container" id="skill">
            <div className="heading accent">SKILLS</div>
            <div className="skills">
                <div className="skill-belt">
                    {/* <div className="original"> */}
                        <Technology tech={<i className="fa-brands fa-html5"></i>} techName= "HTML" />
                        <Technology tech={<i className="fa-brands fa-css3-alt"></i>} techName= "CSS" />
                        <Technology tech={<i className="fa-brands fa-js"></i>} techName= "JavaScript" />
                        <Technology tech={<i className="devicon-mongodb-plain"></i>} techName= "MongoDB" />
                        <Technology tech={<i className="devicon-nodejs-plain"></i>} techName= "node.js" />
                        <Technology tech={<i className="devicon-express-original"></i>} techName= "express.js" />
                        <Technology tech={<i className="devicon-react-original"></i>} techName= "React" />
                        <Technology tech={<i className="devicon-axios-plain"></i>} techName= "Axios" />
                        <Technology tech={<i className="devicon-socketio-original"></i>} techName= "Socket.io" />
                        <Technology tech={<i className="devicon-mongoose-original"></i>} techName= "mongoose" />
                        <Technology tech={<i className="devicon-cplusplus-plain"></i>} techName="C++" />
                        <Technology tech={<i className="devicon-nodemon-plain"></i>} techName="nodemon" />
                    {/* </div>
                    <div classNameName="duplicate"> */}
                        <Technology tech={<i className="fa-brands fa-html5"></i>} techName= "HTML" />
                        <Technology tech={<i className="fa-brands fa-css3-alt"></i>} techName= "CSS" />
                        <Technology tech={<i className="fa-brands fa-js"></i>} techName= "JavaScript" />
                        <Technology tech={<i className="devicon-mongodb-plain"></i>} techName= "MongoDB" />
                        <Technology tech={<i className="devicon-nodejs-plain"></i>} techName= "node.js" />
                        <Technology tech={<i className="devicon-express-original"></i>} techName= "express.js" />
                        <Technology tech={<i className="devicon-react-original"></i>} techName= "React" />
                        <Technology tech={<i className="devicon-axios-plain"></i>} techName= "Axios" />
                        <Technology tech={<i className="devicon-socketio-original"></i>} techName= "Socket.io" />
                        <Technology tech={<i className="devicon-mongoose-original"></i>} techName= "mongoose" />
                        <Technology tech={<i className="devicon-cplusplus-plain"></i>} techName="C++" />
                        <Technology tech={<i className="devicon-nodemon-plain"></i>} techName="nodemon" />
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}


export default Skills;