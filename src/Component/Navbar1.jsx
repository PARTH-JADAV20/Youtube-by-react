import img1 from '../IMG/leftBottom.png'

function Navbar1() {

    return (
      <>
        <div id="navbar2">
        <div id="suggestion">
            <div className="sugg" style={{backgroundColor:"white",color:"#181818"}}>All</div>
            <div className="sugg">Coke Studio</div>
            <div className="sugg">UX</div>
            <div className="sugg">Case Study</div>
            <div className="sugg">Music</div>
            <div className="sugg">Bangla Lofi</div>
            <div className="sugg">Tour</div>
            <div className="sugg">Saintman</div>
            <div className="sugg">Tech</div>
            <div className="sugg">iphone 13</div>
            <div className="sugg">User Interface Design</div>
            <div className="sugg">Compuetr</div>
        </div>
        <div id="left"><img src={img1} alt=""/></div>
      </div>
      </>
    )
  }
  
  export default Navbar1