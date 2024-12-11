import { useState, useEffect } from 'react';
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
import img13 from '../IMG/Ellipse 1.png';
import img14 from '../IMG/Ellipse 1 (1).png';
import img15 from '../IMG/Ellipse 1 (2).png';
import img16 from '../IMG/Ellipse 1 (3).png';
import img17 from '../IMG/Ellipse 1 (4).png';
import img18 from '../IMG/Ellipse 1 (5).png';
import img19 from '../IMG/Ellipse 1 (6).png';
import { FaFireAlt } from "react-icons/fa";
import { IoMusicalNotesSharp } from "react-icons/io5";
import { SiYoutubegaming } from "react-icons/si";

function Sidebar({ onTrendingClick, onHomeClick, onGamingClick, onMusicClick }) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleExploreClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleOutsideClick = (e) => {
    
    if (!e.target.closest("#explore-dropdown-container")) {
      setIsDropdownVisible(false);
    }
  };

  useEffect(() => {
    
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const data1 = [
    { img: img4, txt: "Explore", onClick: handleExploreClick },
    { img: img5, txt: "Shorts" },
    { img: img6, txt: "Subscriptions" },
  ];

  const data2 = [
    { img: img7, txt: "Library" },
    { img: img8, txt: "History" },
    { img: img9, txt: "Your video" },
    { img: img10, txt: "Watch later" },
    { img: img11, txt: "Liked videos" },
    { img: img12, txt: "Show more" },
  ];

  const data3 = [
    { img: img13, txt: "Nadir On The Go" },
    { img: img14, txt: "Coke studio Bangla" },
    { img: img15, txt: "MKBHD" },
    { img: img16, txt: "Figma" },
    { img: img17, txt: "Atc Android ToTo C..." },
    { img: img18, txt: "Alux.com" },
    { img: img19, txt: "xyz" },
  ];

  return (
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
        <div className="opt1" style={{ backgroundColor: 'rgb(52, 52, 52)', paddingRight: '10%' }} >
          <div onClick={onHomeClick}>
            <img src={img3} alt="" className="imgh" />
          </div>
          <div>
            <span style={{ fontSize: '95%' }} onClick={onHomeClick}>Home</span>
          </div>
        </div>

        {data1.map((i) => (
          <div
            className="opt1"
            style={{
              paddingRight: '10%',
              position: 'relative',
            }}
            key={i.txt}
            onClick={i.onClick}
          >
            <div>
              <img src={i.img} alt="" className="imgh" />
            </div>
            <div>
              <span style={{ fontSize: '95%' }}>{i.txt}</span>
            </div>

            
            {i.txt === "Explore" && isDropdownVisible && (
              <div
                id="explore-dropdown-container"
                className="dropdown"
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  backgroundColor: 'rgb(40, 40, 40)',
                  borderRadius: '5px',
                  padding: '5px 0',
                  width: '200px',
                  zIndex: '10',
                }}
              >
                <div className="dropdown-item" onClick={onTrendingClick}><FaFireAlt /> &nbsp; Trending</div>
                <div className="dropdown-item" onClick={onMusicClick}><IoMusicalNotesSharp /> &nbsp; Music</div>
                <div className="dropdown-item" onClick={onGamingClick}><SiYoutubegaming /> &nbsp; Gaming</div>
              </div>
            )}
          </div>
        ))}
        <div id="btmbdr"></div>
      </div>

      <div className="box1">
        {data2.map((i) => (
          <div className="opt2" key={i.txt}>
            <div>
              <img src={i.img} alt="" className="imgh" />
            </div>
            <div>
              <span style={{ fontSize: '95%' }}>{i.txt}</span>
            </div>
          </div>
        ))}
        <div id="btmbdr"></div>
      </div>

      <div className="box1">
        <div>
          <div style={{ paddingLeft: '10%', paddingBottom: '2%', fontSize: '100%' }}>Subscriptions</div>
        </div>
        {data3.map((i) => (
          <div className="opt2" key={i.txt}>
            <div>
              <img src={i.img} alt="" className="imgh" />
            </div>
            <div>
              <span style={{ fontSize: '95%' }}>{i.txt}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
