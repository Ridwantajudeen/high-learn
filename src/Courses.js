
import ai from "./images/ai.png"
import code from './images/code.png'
import cyber from './images/cyber.png'
import data from './images/data.png'
import ui from './images/ui.png'
import video from './images/video.png'
function Courses(){
    return(
        <div className="courses">
            <ul>
               <h1 className="course"> Find the perfect course for you</h1>
               <div class="dropdown"><li class="dropbtn"><img src={code} alt="" className="course-icon"/><h3 className='course-name'>Programming</h3></li>
               <div class="dropdown-content">
                    <p id="menuu">HTML AND CSS</p>
                    <p id="menuu">JAVASCRIPT</p>
                    <p id="menuu">PYTHON</p>
                </div></div>
                <li><img src={ai} alt="" className="course-icon"/> <h3 className='course-name'>Artificial Intelligence</h3></li>
                <li><img src={cyber} alt="" className="course-icon"/><h3 className='course-name'>Cyber Security</h3></li>
                <li><img src={data} alt="" className="course-icon"/><h3 className='course-name'>Data Science</h3></li>
                <li ><img src={video} alt="" className="course-icon"/><h3 className='course-name'>Video Editing</h3></li>
                <div class="dropdown"><li class="dropbtn"><img src={ui} alt="" className="course-icon"/><h3 className='course-name'>UI/UX</h3></li>
                <div class="dropdown-content">
                    <h1 id="menuu">HOME</h1>
                    <h1 id="menuu">LOCATION</h1>
                    <h1 id="menuu">ABOUT</h1>
                </div></div>
               

            </ul>
        </div>
    )
}
export default Courses;