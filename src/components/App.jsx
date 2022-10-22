import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';
// import React, { useState } from 'react';

const { useState, useEffect } = React;

var App = () => {

  const [allVideos, setAllVideos] = useState([{}]);
  const [currentVideo, setCurrentVideo] = useState(exampleVideoData[0]);
  // Initial value set up and only run one time
  useEffect(() => {
    searchYouTube('cat', (data) => {
      setAllVideos(data);
      setCurrentVideo(data[0]);
    });
  }, []);

  // After click "Search" for a new input, currentVideo will be the first element of allVideos
  // Will pass it to videoPlayer
  useEffect(()=>{
    setCurrentVideo(allVideos[0]);
  }, allVideos);

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em><Search searchClickHandler = {setAllVideos}/></h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><h5><em>videoPlayer</em> <VideoPlayer video={currentVideo} /></h5></div>
        </div>
        <div className="col-md-5">
          <div><h5><em>videoList</em> <VideoList videos={allVideos} videoClickHandler={setCurrentVideo} /></h5></div>
        </div>
      </div>
    </div>
  );
};


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
