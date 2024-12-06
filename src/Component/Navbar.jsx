import img1 from '../IMG/search.png';
import img2 from '../IMG/mic.png';
import img3 from '../IMG/create.png';
import img4 from '../IMG/more.png';
import img5 from '../IMG/bell.png';
import img7 from '../IMG/Ellipse 1.png'




function Navbar() {

    return (
      <>
      <div id="navbar">
      <div id="nav1" style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <input type="text" placeholder="Search" style={{ backgroundColor: 'rgb(24, 24, 24)',fontSize: 'larger',width: '540px',height: '26px', paddingLeft: '10px'}} />
        </div>
        <div style={{width: '50px',backgroundColor: 'rgb(50, 50, 50)',height: '30px',display: 'flex',justifyContent: 'center',alignItems: 'center',}}>
          <img src={img1} alt="Search Icon" height="20px" width="19px" />
        </div>
        <div style={{display: 'flex',justifyContent: 'center',height: '30px',width: '40px',alignItems: 'center',}}>
          <img src={img2} alt="Mic Icon" height="25px" width="21px" />
        </div>
      </div>
      <div id="nav2" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        <div className="aa">
          <img src={img3} alt="Create Icon" height="120%" />
        </div>
        <div className="aa">
          <img src={img4} alt="More Icon" height="120%" />
        </div>
        <div className="aa">
          <img src={img5} alt="Bell Icon" height="120%" />
        </div>
        <div className="aa">
          <img src={img7} alt="Profile Icon" height="120%" />
        </div>
      </div>
    </div>
      </>
    )
  }
  
  export default Navbar