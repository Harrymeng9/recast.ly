import searchYouTube from '../lib/searchYouTube.js';

var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" />
    <button className="btn hidden-sm-down" onClick={e => searchYouTube($('.form-control').val(), props.searchClickHandler)}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

Search.propTypes = {
  searchClickHandler: PropTypes.func.isRequired,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
