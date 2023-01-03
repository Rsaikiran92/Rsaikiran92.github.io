import GitHubCalender from "react-github-calendar"
import "./Github.css"

function Github(){
    return (
        <div style={{backgroundColor:" #fadecd"}}>
    <div  style={{margin:"auto",width:"100%",padding:"40px"}}>
        <h2 className="githubheading">GitHub Calendar</h2>
    <GitHubCalender username="Rsaikiran92" style={{marginBottom:"30px",width:"100%" ,margin:"auto"}} />
    </div> 
    <img
    
    src="https://github-readme-stats.vercel.app/api?username=Rsaikiran92&show_icons=true&hide=&count_private=true&title_color=10b981&text_color=000000&icon_color=ef4444&bg_color=ffffff&hide_border=true&show_icons=true"
    alt="Rsaikiran92 GitHub stats" />
    <img align="center"  src="https://github-readme-streak-stats.herokuapp.com/?user=Rsaikiran92&"  alt="rsaikiran92" />
    </div>
)
}

export default Github