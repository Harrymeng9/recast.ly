import searchYouTube from '../lib/searchYouTube.js';

var Search = ({searchClickHandler}) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" />
    <button className="btn hidden-sm-down" onClick={e => searchYouTube($('.form-control').val(), searchClickHandler)}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);


// If in line 3, we put var Search = (props) => (
// Then need add below and also in line 6, will be props.searchClickHandler
// Search.propTypes = {
//   searchClickHandler: PropTypes.func.isRequired,
// };

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
