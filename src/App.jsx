import {Routes, BrowserRouter, Route} from "react-router-dom"

import Dashboard from "./components/Dashboard";

// -------------importing styles-------------------------

import "./style/Animation.css";
import "./style/Button.css";
import "./style/Card.css";
import "./style/Shadow.css";
import "./style/Text.css";



function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;