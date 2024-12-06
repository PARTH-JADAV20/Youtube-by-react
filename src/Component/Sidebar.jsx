import img1 from '../IMG/hambarger.png';
import img2 from '../IMG/Youtube logo.png';
import img3 from '../IMG/home.png';
import img4 from '../IMG/explore.png';
import img5 from '../IMG/shorts.png';
import img6 from '../IMG/subscription.png';
import img7 from '../IMG/library.png';
import img8 from '../IMG/history.png';
import img9 from '../IMG/your_video.png';
import img10 from '../IMG/watch_later.png';
import img11 from '../IMG/liked.png';
import img12 from '../IMG/down_arrow.png';
import img13 from '../IMG/Ellipse 4 (5).png';
import img14 from '../IMG/Ellipse 4 (1).png';
import img15 from '../IMG/Ellipse 1 (2).png';
import img16 from '../IMG/Ellipse 1 (3).png';
import img17 from '../IMG/Ellipse 1 (4).png';
import img18 from '../IMG/Ellipse 1 (5).png';
import img19 from '../IMG/Ellipse 1 (6).png';

function Sidebar() {
  return (
    <>
      <div id="sidebar">
        <div style={{ height: 'fit-content', width: 'fit-content' }}>
          <div id="logobar">
            <div>
              <img src={img1} alt="" />
            </div>
            <div>
              <img src={img2} alt="" />
            </div>
          </div>
        </div>
        <div className="box1">
          <div className="opt1" style={{ backgroundColor: 'rgb(52, 52, 52)', paddingRight: '10%' }}>
            <div>
              <img src={img3} alt="" className="imgh" />
            </div>
            <div>
              <span style={{ fontSize: '95%' }}>Home</span>
            </div>
          </div>
          <div className="opt1">
            <div>
              <img src={img4} alt="" className="imgh" />
            </div>
            <div>
              <span style={{ fontSize: '95%' }}>Explore</span>
            </div>
          </div>
          <div className="opt1">
            <div>
              <img src={img5} alt="" className="imgh" />
            </div>
            <div>
              <span style={{ fontSize: '95%' }}>Shorts</span>
            </div>
          </div>
          <div className="opt1">
            <div>
              <img src={img6} alt="" className="imgh" />
            </div>
            <div>
              <span style={{ fontSize: '95%' }}>Subscriptions</span>
            </div>
          </div>
          <div id="btmbdr"></div>
        </div>
        <div className="box1">
          <div className="opt2">
            <div>
              <img src={img7} alt="" className="imgh" />
            </div>
            <div>
              <span style={{ fontSize: '95%' }}>Library</span>
            </div>
          </div>
          <div className="opt2">
            <div>
              <img src={img8} alt="" className="imgh" />
            </div>
            <div>
              <span style={{ fontSize: '95%' }}>History</span>
            </div>
          </div>
          <div className="opt2">
            <div>
              <img src={img9} alt="" className="imgh" />
            </div>
            <div>
              <span style={{ fontSize: '95%' }}>Your video</span>
            </div>
          </div>
          <div className="opt2">
            <div>
              <img src={img10} alt="" className="imgh" />
            </div>
            <div>
              <span style={{ fontSize: '95%' }}>Watch later</span>
            </div>
          </div>
          <div className="opt2">
            <div>
              <img src={img11} alt="" className="imgh" />
            </div>
            <div>
              <span style={{ fontSize: '95%' }}>Liked videos</span>
            </div>
          </div>
          <div className="opt2">
            <div>
              <img src={img12} alt="" className="imgh" />
            </div>
            <div>
              <span style={{ fontSize: '95%' }}>Show more</span>
            </div>
          </div>
          <div id="btmbdr"></div>
        </div>
        <div className="box1">
          <div>
            <div style={{ paddingLeft: '10%', paddingBottom: '2%', fontSize: '100%' }}>Subscriptions</div>
          </div>
          <div className="opt2">
            <div>
              <img src={img13} alt="" className="imgh" height="22px" />
            </div>
            <div>
              <span style={{ fontSize: '95%' }}>Nadir On The Go</span>
            </div>
          </div>
          <div className="opt2">
            <div>
              <img src={img14} alt="" className="imgh" height="22px" />
            </div>
            <div>
              <span style={{ fontSize: '95%' }}>Coke studio Bangla</span>
            </div>
          </div>
          <div className="opt2">
            <div>
              <img src={img15} alt="" className="imgh" />
            </div>
            <div>
              <span style={{ fontSize: '95%' }}>MKBHD</span>
            </div>
          </div>
          <div className="opt2">
            <div>
              <img src={img16} alt="" className="imgh" />
            </div>
            <div>
              <span style={{ fontSize: '95%' }}>Figma</span>
            </div>
          </div>
          <div className="opt2">
            <div>
              <img src={img17} alt="" className="imgh" />
            </div>
            <div>
              <span style={{ fontSize: '95%' }}>Atc Android ToTo C...</span>
            </div>
          </div>
          <div className="opt2">
            <div>
              <img src={img18} alt="" className="imgh" />
            </div>
            <div>
              <span style={{ fontSize: '95%' }}>Alux.com</span>
            </div>
          </div>
          <div className="opt2">
            <div>
              <img src={img19} alt="" className="imgh" />
            </div>
            <div>
              <span style={{ fontSize: '95%' }}>Alux.com</span>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Sidebar;
