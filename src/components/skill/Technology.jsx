import "../../style/Technology.css";

function Technology({tech, techName}){
    return(
        <div className="tech-container">
            { tech || <i className="fa-brands fa-html5"></i>}
            <strong>{techName || "HTML"}</strong>
        </div>
    );
}

export default Technology;