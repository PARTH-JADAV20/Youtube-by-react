import React, { useState, useEffect } from 'react';
import Mainpart from './Component/Mainpart.jsx';
import Navbar from './Component/Navbar.jsx';
import Navbar1 from './Component/Navbar1.jsx';
import Sidebar from './Component/Sidebar.jsx';
import LoadingScreen from './Component/LoadingScreen.jsx'; 
import './style.css';
import { MdHomeFilled } from "react-icons/md";
import { FaFireAlt } from "react-icons/fa";
import { IoMusicalNotesSharp } from "react-icons/io5";
import { SiYoutubegaming } from "react-icons/si";
import { IoSearchCircleOutline } from "react-icons/io5";



function App() {
  const [query, setQuery] = useState('');
  const [videos, setVideos] = useState([]);
  const [maxResults, setMaxResults] = useState(20);
  const [nextPageToken, setNextPageToken] = useState(null); 
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [currentFetch, setCurrentFetch] = useState('home');
  const [sectionName, setSectionName] = useState({ icon: <MdHomeFilled />, name: 'Home' });
  // const API_KEY = "AIzaSyD5Sk9COGpgwNC_kzieCMbbAmeLTcm9BQc";
  // const API_KEY = "AIzaSyB4FxQvMClJgQaJY5KzViAjflaUr88CfMU";
  // const API_KEY = "AIzaSyBqHTQ0EcF01LmquuEtbGp5XyzUtj_NlkM"
  // const API_KEY = "AIzaSyAP7nZ2H2S09N69q1-YLRGwFudmkpl42pc";
  const API_KEY = "AIzaSyCQGPdeGjcvZ39HVVL_ZVH1ULXBhVF2lj8";

  const fetchVideoDetails = async (items) => {
    return await Promise.all(
      items.map(async (video) => {
        const videoId = video.id.videoId || video.id;
        const channelId = video.snippet.channelId;

        const videoUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`;
        const videoResponse = await fetch(videoUrl);
        const videoData = await videoResponse.json();
        const videoStats = videoData.items[0]?.statistics || {};
        const publishedAt = videoData.items[0]?.snippet.publishedAt;

        const channelUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${channelId}&key=${API_KEY}`;
        const channelResponse = await fetch(channelUrl);
        const channelData = await channelResponse.json();

        const channelThumbnail = channelData.items[0]?.snippet.thumbnails.default.url || '';
        const isVerified = channelData.items[0]?.statistics?.hiddenSubscriberCount === false;

        return {
          ...video,
          viewCount: videoStats.viewCount || 0,
          publishedAt,
          channelThumbnail,
          isVerified,
        };
      })
    );
  };

  const fetchVideos = async (loadMore = false) => {
    if (loading || loadingMore) return;
    if (loadMore) {
      setLoadingMore(true);
    } else {
      setLoading(true);
    }
    setSectionName({ icon: <IoSearchCircleOutline />, name: 'Search' });
    
    const searchQuery = query.trim(); // Get the current query from state
    const baseUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${searchQuery}&regionCode=IN&type=video`;
    const url = `${baseUrl}${loadMore && nextPageToken ? `&pageToken=${nextPageToken}` : ''}&key=${API_KEY}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.error) {
        console.error("Error from YouTube API:", data.error.message);
      } else {
        const videoDetails = await fetchVideoDetails(data.items);
        setVideos((prevVideos) => (loadMore ? [...prevVideos, ...videoDetails] : videoDetails));
        setNextPageToken(data.nextPageToken || null);
      }
    } catch (error) {
      console.error("Error fetching videos:", error);
    } finally {
      if (loadMore) setLoadingMore(false);
      else setLoading(false);
    }
  };
  

  const fetchHomeVideos = async (loadMore = false) => {
  if (loading || loadingMore) return;
  if (loadMore) setLoadingMore(true);
  else setLoading(true);
  setSectionName({ icon: <MdHomeFilled />, name: 'Home' });

  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=technology&regionCode=IN&type=video${
    loadMore && nextPageToken ? `&pageToken=${nextPageToken}` : ''
  }&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      console.error("Error from YouTube API:", data.error.message);
    } else {
      const videoDetails = await fetchVideoDetails(data.items);
      setVideos((prevVideos) => (loadMore ? [...prevVideos, ...videoDetails] : videoDetails));
      setNextPageToken(data.nextPageToken || null);
    }
  } catch (error) {
    console.error("Error fetching videos:", error);
  } finally {
    if (loadMore) setLoadingMore(false);
    else setLoading(false);
  }
};

const fetchTrendingVideos = async (loadMore = false) => {
  if (loading || loadingMore) return;
  if (loadMore) setLoadingMore(true);
  else setLoading(true);
  setSectionName({ icon: <FaFireAlt />, name: 'Trending' });

  const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=IN&maxResults=${maxResults}${
    loadMore && nextPageToken ? `&pageToken=${nextPageToken}` : ''
  }&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      console.error("Error from YouTube API:", data.error.message);
    } else {
      const videoDetails = await fetchVideoDetails(data.items);
      setVideos((prevVideos) => (loadMore ? [...prevVideos, ...videoDetails] : videoDetails));
      setNextPageToken(data.nextPageToken || null);
    }
  } catch (error) {
    console.error("Error fetching videos:", error);
  } finally {
    if (loadMore) setLoadingMore(false);
    else setLoading(false);
  }
};

const fetchGamingVideos = async (loadMore = false) => {
  if (loading || loadingMore) return;
  if (loadMore) setLoadingMore(true);
  else setLoading(true);
  setSectionName({ icon: <SiYoutubegaming />, name: 'Gaming' });

  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=gaming&regionCode=IN&type=video${
    loadMore && nextPageToken ? `&pageToken=${nextPageToken}` : ''
  }&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      console.error("Error from YouTube API:", data.error.message);
    } else {
      const videoDetails = await fetchVideoDetails(data.items);
      setVideos((prevVideos) => (loadMore ? [...prevVideos, ...videoDetails] : videoDetails));
      setNextPageToken(data.nextPageToken || null);
    }
  } catch (error) {
    console.error("Error fetching videos:", error);
  } finally {
    if (loadMore) setLoadingMore(false);
    else setLoading(false);
  }
};

const fetchMusicVideos = async (loadMore = false) => {
  if (loading || loadingMore) return;
  if (loadMore) setLoadingMore(true);
  else setLoading(true);
  setSectionName({ icon: <IoMusicalNotesSharp />, name: 'Music' });

  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=music&regionCode=IN&type=video${
    loadMore && nextPageToken ? `&pageToken=${nextPageToken}` : ''
  }&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      console.error("Error from YouTube API:", data.error.message);
    } else {
      const videoDetails = await fetchVideoDetails(data.items);
      setVideos((prevVideos) => (loadMore ? [...prevVideos, ...videoDetails] : videoDetails));
      setNextPageToken(data.nextPageToken || null);
    }
  } catch (error) {
    console.error("Error fetching videos:", error);
  } finally {
    if (loadMore) setLoadingMore(false);
    else setLoading(false);
  }
};

  const handleLoadMore = () => {
    if (nextPageToken) {
      switch (currentFetch) {
        case 'home':
          fetchHomeVideos(true);
          break;
        case 'trending':
          fetchTrendingVideos(true);
          break;
        case 'gaming':
          fetchGamingVideos(true);
          break;
        case 'music':
          fetchMusicVideos(true);
          break;
        default:
          break;
      }
    }
  };

  const handleSectionSwitch = (section) => {
    setVideos([]);
    setNextPageToken(null); 
    setLoading(false);
  
    switch (section) {
      case 'home':
        fetchHomeVideos();
        setCurrentFetch('home');
        break;
      case 'trending':
        fetchTrendingVideos();
        setCurrentFetch('trending');
        break;
      case 'gaming':
        fetchGamingVideos();
        setCurrentFetch('gaming');
        break;
      case 'music':
        fetchMusicVideos();
        setCurrentFetch('music');
        break;
      case 'Search':
        fetchVideos(false);
        setCurrentFetch('search');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    fetchHomeVideos();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Sidebar
        onTrendingClick={() => handleSectionSwitch('trending')}
        onHomeClick={() => handleSectionSwitch('home')}
        onGamingClick={() => handleSectionSwitch('gaming')}
        onMusicClick={() => handleSectionSwitch('music')}
      />
      <Navbar query={query} setQuery={setQuery} fetchVideos={() => fetchVideos(false)} />
      <Navbar1 />
      <Mainpart videos={videos} sectionName={sectionName} nextPageToken={nextPageToken} handleLoadMore={handleLoadMore} loading={loading}  />
    </>
  );
}

export default App;
