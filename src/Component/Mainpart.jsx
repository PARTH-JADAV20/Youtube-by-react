import React, { useState } from "react";
import img1 from '../IMG/verified.png';
import { MdExpandMore } from "react-icons/md";



function Mainpart({ videos, sectionName, nextPageToken, handleLoadMore, loading }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState(null);

  const handleThumbnailClick = (videoId) => {
    setCurrentVideoId(videoId);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setCurrentVideoId(null);
  };

  function getTimeDifference(publishedAt) {
    const publishedDate = new Date(publishedAt);
    const now = new Date();
    const difference = now - publishedDate;

    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`;
    if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`;
    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
  }

  const formatViewCount = (views) => {
    if (views >= 1_000_000_000) {
      return (views / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
    }
    if (views >= 1_000_000) {
      return (views / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (views >= 1_000) {
      return (views / 1_000).toFixed(1).replace(/\.0$/, '') + 'k';
    }
    return views.toString();
  };

  return (
    <>
      <h2 id='sectionname'><span>{sectionName.icon}</span>&nbsp;{sectionName.name} Results</h2>
      <div id="main">
      
        {videos.map((video) => (
          <div className="container" key={video.id.videoId}>
            <div className="thumb">
              <img
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
                className="thumbnail"
                onClick={() => handleThumbnailClick(video.id.videoId)}
              />
              <div className="vtitle">
                <div>
                  <img
                    src={video.channelThumbnail}
                    alt={video.snippet.channelTitle}
                    style={{ width: '30px', height: '30px', borderRadius: '50%' }}
                  />
                </div>
                <div id="videotitle">{video.snippet.title}</div>
              </div>
              <div className="cname">
                <div className="cname2">
                  {video.snippet.channelTitle}
                  {video.isVerified && (
                    <span style={{ marginLeft: '5px' }}>
                      <img src={img1} alt="" height="80%" />
                    </span>
                  )}
                </div>
              </div>
              <div className="views">
                <div>
                  {formatViewCount(parseInt(video.viewCount))} views • {getTimeDifference(video.snippet.publishedAt)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${currentVideoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button className="close-button" onClick={closePopup}>×</button>
          </div>
        </div>
      )}
      {loading ? (
        <div>Loading...</div>
      ) : (
        nextPageToken && (
          <button
            onClick={handleLoadMore}
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              backgroundColor: '#ff0000',
              color: '#ffffff',
              border: 'none',
              borderRadius: '50%',
              width: '60px',
              height: '60px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            More <MdExpandMore />
          </button>
        )
      )}
    </>
  );
}

export default Mainpart;
