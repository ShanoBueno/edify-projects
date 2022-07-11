
import './App.css';
import Nav from './nav';
import About from './about';



function App() {
  return (
    <div style={{backgroundColor: 'black'}}>
    <div style={{ display: "flex", justifyContent:"center", alignItems:"center", height: "200px", background:"url('https://sm.mashable.com/mashable_pk/photo/default/tech_ntqz.jpg')"}}>
      <div style={{fontSize: "4em", border:"2px", borderColor:"solid", borderStyle:"solid", backgroundColor:"white" }}><div style={{ paddingRight:"10px", paddingLeft:"10px", fontFamily: "Andale Mono, monospace"}}>EDIFY PROJECTS</div>
      <div style={{ textAlign:"center", paddingRight:"10px", fontSize: ".5em", paddingLeft:"10px", fontFamily: "Andale Mono, monospace"}}>By Shane Messmer</div>
      
      </div>
    </div>
    <Nav/>
    <About/>
    </div>
  );
}

export default App;
