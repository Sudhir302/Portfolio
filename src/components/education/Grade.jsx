import "../../style/Grade.css"

function Grade({course, school, gpa, icon, location}){
    return(
        <div className="grade">
            <div className="cap click">{icon || <i className="fa-solid fa-graduation-cap"></i>}</div>
            <div className="course letshad secondary"><strong>{course || "B.Tech in Information Science & Engineering"}</strong></div>
            <div className="university letshad secondary"><strong>{school || "JAIN(DEEMED-TO-BE UNIVERSITY), 2021-2025 AD"}</strong></div>
            <div className="gpa letshad secondary"><strong>{ gpa || "CGPA: 7.8"}</strong></div>
            <div className="location letshad secondary">{location || "BANGALORE, KARNATAKA, INDIA"}</div>
        </div>
    );
};

export default Grade;