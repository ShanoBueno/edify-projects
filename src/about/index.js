import React from 'react';
import fulldashboard from './imgs/fulldashboard.png'
import menubuttons from './imgs/menubuttons.png'
import pathstable from './imgs/pathstable.png'
import pathlibrary from './imgs/pathlibrary.png'
import learnercard from './imgs/learnercard.png'




const About=()=>{
    return(<div style={{backgroundColor:"black", textAlign:"center", width:"100%",justifyContent:"center"}}>
     
        <div style={{lineHeight:"1.8",color:"white", width:"70%", paddingLeft:"15%", paddingBottom:"15px", fontSize:"20px"}} >
            Welcome to my front-end software engineering portfolio, showcasing several projects I've completed with my time at Edify. Edify is a Software as a Service, tech start-up, that allows companies and organizations to create onboarding "Paths" for new hires, delivered through Slack. While my role has been diverse in terms of assignments, I have listed the front-end projects I am most proud of below. While you are more than encouraged to sign up for a free account at Edify.com, I have created a gallery that showcases the major front-end contributions to save you the trouble. If you'd like to see more projects, my resume, or contact infomation please follow the links above.

        </div>
        <div style={{width:"100%", display: "flex", justifyContent:"center", alignItems:"center", flexDirection:"column", paddingBottom:"20px"}}>
        <div style={{backgroundColor:"midnightblue", width:"700px"}}>
            <h2 style={{color:"white"}}>Full Dashboard</h2>
            <div style={{display:"flex", justifyContent:"space-evenly", color:"white", paddingBottom:"10px", borderTop:"solid", borderBottom:"solid", borderBottomColor:"blue", borderWidth:"2px", borderColor:"blue", paddingTop:"10px"}}>
                <div style={{border:"solid", borderWidth:"2px",borderColor:"coral", borderRadius:"5px", backgroundColor:"coral"}}><text>React</text></div>
                <div style={{border:"solid", borderWidth:"2px",borderColor:"mediumturquoise", borderRadius:"5px", backgroundColor:"mediumturquoise"}}><text>TypeScript</text></div>
                <div style={{border:"solid", borderWidth:"2px",borderColor:"lime", borderRadius:"5px", backgroundColor:"lime"}}><text>Tailwind</text></div>
            </div>

        <img src={fulldashboard} alt="logo" style={{paddingTop:"10px", width:"95%"}}/>
        <p style={{ color:"white", textAlign:"start", padding:"4%",  borderTop:"solid", borderBottom:"solid", borderColor:"blue", borderWidth:"2px"}}>From an empty page that said "Under Construction", I created all major components of the user dashboard, bringing the provided wireframe design to life. </p>

        </div>
        <div style={{backgroundColor:"midnightblue", width:"700px", marginTop:"20px"}}>
            <h2 style={{color:"white", borderBottom:"solid", borderWidth:"2px", borderColor:"blue", paddingBottom:"20px"}}>Menu Buttons</h2>

        <img src={menubuttons} alt="logo" style={{paddingTop:"10px", width:"95%"}}/>
        <p style={{ color:"white", textAlign:"start", padding:"4%",  borderTop:"solid", borderBottom:"solid", borderColor:"blue", borderWidth:"2px"}}>Button menu with custom icons and hover effects that open modals or sends the user to external links.</p>

        </div>
        <div style={{backgroundColor:"midnightblue", width:"700px", marginTop:"20px"}}>
            <h2 style={{color:"white", borderBottom:"solid", borderWidth:"2px", borderColor:"blue", paddingBottom:"20px"}}>Path Table</h2>

        <img src={pathstable} alt="logo" style={{paddingTop:"10px", width:"95%"}}/>
        <p style={{ color:"white", textAlign:"start", padding:"4%",  borderTop:"solid", borderBottom:"solid", borderColor:"blue", borderWidth:"2px"}}>Sortable table for recently used paths. Each path name is clickable taking the user to the individual path page. The dropdown menu provides addition options.</p>

        </div>
        <div style={{backgroundColor:"midnightblue", width:"700px", marginTop:"20px"}}>
            <h2 style={{color:"white", borderBottom:"solid", borderWidth:"2px", borderColor:"blue", paddingBottom:"20px"}}>Path Library</h2>

        <img src={pathlibrary} alt="logo" style={{paddingTop:"10px", width:"95%"}}/>
        <p style={{ color:"white", textAlign:"start", padding:"4%",  borderTop:"solid", borderBottom:"solid", borderColor:"blue", borderWidth:"2px"}}>Table libraries created from the TanStack React library with custom styling. The path library table is sortable, and has a search filter, with drop-down menu options. I used the same table component to create table libraries for Learners, Assets, and SME's.</p>

        </div>
        <div style={{backgroundColor:"midnightblue", width:"700px", marginTop:"20px"}}>
            <h2 style={{color:"white", borderBottom:"solid", borderWidth:"2px", borderColor:"blue", paddingBottom:"20px"}}>Learner Card</h2>

        <img src={learnercard} alt="logo" style={{paddingTop:"10px", width:"95%"}}/>
        <p style={{ color:"white", textAlign:"start", padding:"4%",  borderTop:"solid", borderBottom:"solid", borderColor:"blue", borderWidth:"2px"}}>Learner Card with functional progress bar, to track learners and give an overview of their information.</p>

        </div>
        </div>
        
      

    </div>)
}

export default About; 