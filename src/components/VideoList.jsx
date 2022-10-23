import VideoListEntry from './VideoListEntry.js';

var VideoList = ({videos, videoClickHandler}) => (

  <div className="video-list">
    {videos.map((video) => {
      if (Object.keys(video).length !== 0) {
        return (
          <VideoListEntry key = {video.etag} video={video} videoClickHandler={videoClickHandler} />
        );
      }

    })}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
  // videoClickHandler: PropTypes.func.isRequired,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
