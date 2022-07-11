import React from 'react';

const Nav = () =>{
    return(
    <div>
    
        <ul style={{listStyle:"None", display:"flex", justifyContent:"space-evenly", alignItems:"center", borderTop:"2px", borderBottom:"2px", borderBottomStyle:"solid", borderTopStyle:"solid", height:"40px", color:"white"}}>
            <li>
                <a href="https://www.linkedin.com/in/shane-messmer-2bbb54b8/" style={{textDecoration:"none", color:"white"}}>LINKEDIN</a>
            </li>
            <li>
               <a href="https://docs.google.com/document/d/1b2or9FbEXDczGBEAp14z5qOWrrApwJ89/edit?usp=sharing&ouid=111885417226690669503&rtpof=true&sd=true"style={{textDecoration:"none", color:"white"}}>RESUME</a> 
            </li>
            <li>
               <a href="https://github.com/shanobueno"style={{textDecoration:"none", color:"white"}}>GITHUB</a>
            </li>
            <li>
               <a href="https://shanobueno.github.io/shanes-portfolio/"style={{textDecoration:"none", color:"white"}}>OTHER PROJECTS</a>
            </li>

        </ul>
    </div>)

}

export default Nav; 