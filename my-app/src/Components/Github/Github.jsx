import GitHubCalender from "react-github-calendar"
import "./Github.css"

function Github(){
    return (
        <div style={{backgroundColor:" #fadecd"}}>
    <div  style={{margin:"auto",width:"100%",padding:"40px"}}>
        <h2 className="githubheading">GitHub Calendar</h2>
    <GitHubCalender username="Rsaikiran92" style={{marginBottom:"30px",width:"100%" ,margin:"auto"}} />
    </div> 
    </div>
)
}

export default Github