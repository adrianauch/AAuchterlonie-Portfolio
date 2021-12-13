import "../Header/previousworkheader.css"
import {BsLinkedin,BsGithub,BsFillFileEarmarkTextFill,BsFillEnvelopeFill} from 'react-icons/bs'


function previousWorkHeader () {

    return (
        <div className="header">
        <h1>Previous Work History </h1>
        <p> Want to Learn More? Please vist my LinkedIn or download my resume below.</p>
        <p>
            <a className="link1" href="https://www.linkedin.com/in/adrianauch/"><BsLinkedin/></a>
            <a className="link1" href="https://www.linkedin.com/in/adrianauch/"><BsFillFileEarmarkTextFill/></a>
        </p>
        

        </div>
    )
}

export default previousWorkHeader