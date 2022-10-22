import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';
import exampleVideoData from '../data/exampleVideoData.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {

  //https://codepen.io/zackspear/pen/PaGrEv
  $.get('https://app-hrsei-api.herokuapp.com/api/recastly/videos', {
    part: 'snippet',
    q: query,
    type: 'video',
    order: 'viewCount',
    // channelId: channelID,
    maxResults: 10,
    videoEmbeddable: true,
    relevanceLanguage: 'en',
    key: YOUTUBE_API_KEY
  },
  function (data) {
    callback(data);
  }
  );
};

export default searchYouTube;
