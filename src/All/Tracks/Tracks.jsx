import "./Tracks.css";
import icon1 from "../../img/fist.png";
import icon2 from "../../img/innovation.png";
import icon3 from "../../img/mental-health.png";
import icon4 from "../../img/save-the-world.png";

export const Tracks = () => {   
    return(
    <div className="Tracks"> 
            <h1>Tracks</h1>
            <div className="track">
                <a href=""><img src ={icon1} className="icon"/>
                  <p>HealthTech</p>
                </a>
                <a href=""><img src ={icon2} className="icon"/>
                  <p>EdTech</p>
                </a>
                <a href=""><img src ={icon3} className="icon"/>
                  <p>Sustainable Development (Open Innovation)</p>
                </a>
                <a href=""><img src ={icon4} className="icon"/>
                  <p>FinTech</p>
                </a>
            </div>
    </div>)
}