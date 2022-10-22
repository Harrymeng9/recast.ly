import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';
// import React, { useState } from 'react';

const { useState } = React;

// var youtubeData;
// searchYouTube('cats', (data, youtubeData) => {

//   youtubeData = data;
//   console.log('youtubeDataInner', youtubeData);
// });

// console.log('youtubeData', youtubeData);

var App = () => {


  var youtubeData;
  searchYouTube('cats', (data) => {

    youtubeData = data;
    console.log('youtubeDataInner', youtubeData);
  });

  console.log('youtubeData', youtubeData);

  //useEffect
  // call searchYouTube


  const [allVideos, setAllVideos] = useState([]);
  // const [allVideos, setAllVideos] = useState(exampleVideoData);
  const [currentVideo, setCurrentVideo] = useState(youtubeData[0]);
  // const [currentVideo, setCurrentVideo] = useState(exampleVideoData[0]);

  // var youtubeData;
  // searchYouTube('cats', (data) => {

  //   youtubeData = data;
  //   console.log('youtubeDataInner', youtubeData);
  // });

  // console.log('youtubeData', youtubeData);


  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em><Search /></h5></div>
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
