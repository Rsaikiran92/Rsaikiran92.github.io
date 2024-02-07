import { AiFillLinkedin } from "react-icons/ai"
import {BsTelephoneFill} from "react-icons/bs"
import {  FaGithubSquare } from "react-icons/fa"
import { ImFolderDownload } from "react-icons/im"
import { MdEmail } from "react-icons/md"
import  Resume from  "../Resume/RSaiKiran_fp04_437.pdf"
import "./Contact.css"


function Contact(){
    return(
    <div id="contact" >
        <div className="container"style={{padding:"40px"}}>
            <h1 className="title">Contact Me</h1>
            <p><MdEmail/>saikiran92rk@gmail.com</p>
            <p><BsTelephoneFill/>+91-9110321756</p>
            <div className="icons">
                <a target={"_blank"} rel="noreferrer" href="https://github.com/Rsaikiran92"><FaGithubSquare/></a>
                <a target={"_blank"} rel="noreferrer" href="https://www.linkedin.com/in/r-sai-kiran-451a07232/"><AiFillLinkedin  /></a>
                {/*<a target={"_blank"} rel="noreferrer" href=""><AiFillTwitterSquare  /></a>*/}
            </div>
            <a  href={Resume} download rel="noreferrer" className="btn btn2" style={{color:"black"}}>
                <button style={{border:"none",color:"#76263f",fontWeight:"bold",backgroundColor:"white"}} onClick={()=>window.open("https://drive.google.com/file/d/1KUV3Cpq45lpe5Xpws9Zc8wfnvuTskGYo/view?usp=sharing")}>
                    <ImFolderDownload style={{marginBottom:"5px",marginRight:"5px"}}/>
                    Resume
                </button>
            </a>   
        </div>
    </div>  
    )
}

export default Contact