import Grade from "./Grade";

import "../../style/Education.css"

function Education(){
    return(
        <div className="education-container" id="education">
            <div className="heading accent">EDUCATION</div>
            <div className="grade-container">
                <Grade />
                <Grade icon= "+2" course= "+2 in PCM" school= "TILOTTAMA SECONDARY SCHOOL, 2018-2020 AD" gpa= "CGPA: 7" location= "SHANKAR NAGAR, TILOTTAMA-2 RUPANDEHI, NEPAL" />
                <Grade icon="10" course="Secondary Education Examination" school="SAYAPATRI ENGILIH SECONDARY SCHOOL, 2018 AD " location="RAMGRAM-01, PARASI, NAWALPARASI, NEPAL" gpa="CGPA: 8"/>
            </div>
        </div>
    );
};

export default Education;