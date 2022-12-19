import GitHubCalender from "react-github-calendar"
import Card from 'react-github-stats-card/dist/Card';

function Github(){
    return (
        <div style={{backgroundColor:" #fadecd"}}>
    <div style={{margin:"auto",width:"60%"}}>
        <h1>GitHub Calendar</h1>
    <GitHubCalender username="Rsaikiran92"  />
    <p><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=rsaikiran92&" alt="rsaikiran92" /></p>
    </div> 
    </div>
)
}

export default Github