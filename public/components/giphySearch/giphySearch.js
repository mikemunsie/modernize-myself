const _ = require("lodash");
const React = require('react');
const ReactDOM = require('react-dom');
const request = require("superagent");
const Results = require("./results");

class GiphySearch extends React.Component {
  constructor({criteria}) {
    super();
    this.state = {
      criteria: criteria ? criteria : "",
      results: []
    }
    this.debouncedSearch = _.debounce(this.search, 400);
  }
  componentDidMount() {
    this.update()
  }
  search(criteria) {
    if (this.giphySearchCall) this.giphySearchCall.abort();
    this.giphySearchCall = request.get("http://api.giphy.com/v1/gifs/search?q=" + criteria + "&api_key=dc6zaTOxFJmzC&limit=5")
    .accept('json')
    .end((err, {body}) => {
      this.giphySearchCall = false;
      this.setState({
        results: body.data
      })
    })
  }
  update() {
    this.setState({
      criteria: this.refs.search.value
    });
    this.debouncedSearch(this.refs.search.value)
  }
  render(props) {
    return (
      <div className="giphySearch">
        <label htmlFor="criteria">Search: </label>
        <input id="criteria" type="text" onChange={this.update.bind(this)} ref="search" value={this.state.criteria} />
        <Results data={this.state.results} />
      </div>
    )
  }
}

module.exports = GiphySearch;