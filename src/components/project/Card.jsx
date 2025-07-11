import "../../style/Card.css"

function Card(){
    return(
        <div className="card-container">
            <div className="cards">
                <div className="type">
                    Weather App
                </div>
                <div className="desc letshad">A fully responsive and user-friendly web application that provides real-time weather information for any city in India. Built using the OpenWeatherMap API, it allows users to quickly search and view accurate temperature, humidity, and weather conditions with a clean and intuitive interface.</div>
                <div className="tech-used letshad">
                    Technologies: React, API, Vanilla CSS, Axios
                </div>
                <div className="role letshad">
                    TYPE: FRONTEND
                </div>
                <div className="link">
                    <a href="https://weatherly-umber.vercel.app" target="_blank" className="submit">Live Demo<i className="fa-solid fa-up-right-from-square" ></i></a>
                    <a href="https://github.com/Sudhir302/Weatherly.git" target="_blank" className="search">GitHub<i className="fa-solid fa-up-right-from-square"></i></a>
                </div>
            </div>
            <div className="cards">
                <div className="type">
                    Social Media App
                </div>
                <div className="desc letshad"> A Fullstack web based social media application inspired by meta Facebook. Built with React, Node.js, Express, and MongoDB, it features authentication, real-time updates, and a sleek, responsive UI. Allows users to create profiles, share posts, interact with others, and explore content. </div>
                <div className="tech-used letshad">
                    Technologies: React, CSS, express, node, mongoose, cloudinary, JWT, Cookies, multer
                </div>
                <div className="role letshad">
                    TYPE: FULL STACK
                </div>
                <div className="link">
                    <a href="https://solvara.vercel.app" target="_blank" className="submit">Live Demo<i className="fa-solid fa-up-right-from-square" ></i></a>
                    <a href="https://github.com/Sudhir302/Solvara.git" target="_blank" className="search">GitHub<i className="fa-solid fa-up-right-from-square"></i></a>
                </div>
            </div>
            <div className="cards">
                <div className="type">
                    Travel App
                </div>
                <div className="desc letshad">A modern travel website built using Next.js and TypeScript. It features a beautiful UI with responsive design, interactive components, and seamless user experience. The website showcases various travel destinations, camping spots, and travel guides with an engaging user interface.</div>
                <div className="tech-used letshad">
                    Technologies: Next.js, TypeScript, Tailwind CSS
                </div>
                <div className="role letshad">
                    TYPE: FRONTEND
                </div>
                <div className="link">
                    <a href="https://wandernest-ten.vercel.app" target="_blank" className="submit">Live Demo<i className="fa-solid fa-up-right-from-square" ></i></a>
                    <a href="https://github.com/Sudhir302/Wandernest.git" target="_blank" className="search">GitHub<i className="fa-solid fa-up-right-from-square"></i></a>
                </div>
            </div>
            <div className="cards">
                <div className="type">
                    Chatapp
                </div>
                <div className="desc letshad"> A sleek, responsive web application designed for managing and showcasing affiliate products. It allows users to browse a curated selection of items and seamlessly navigate to external platforms like Amazon or Flipkart via dedicated product links</div>
                <div className="tech-used letshad">
                    Technologies: Node.js, Express.js, React.js, MongoDB, JWT, Cloudinary, cookies, CSS
                </div>
                <div className="role letshad">
                    TYPE: FULL STACK
                </div>
                <div className="link">
                    <a href="https://affiliate-client-git-main-sudhir-chaudharys-projects.vercel.app/" target="_blank" className="submit">Live Demo<i className="fa-solid fa-up-right-from-square" ></i></a>
                    <a href="https://github.com/Sudhir302/affiliate_client.git" target="_blank" className="search">GitHub<i className="fa-solid fa-up-right-from-square"></i></a>
                </div>
            </div>

        </div>
    );
};

export default Card;