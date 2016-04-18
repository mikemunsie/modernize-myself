var React = require('react');
var ReactDOM = require('react-dom');
const Results = require("./results");

class GiphySearch extends React.Component {
  constructor({criteria}) {
    super();
    this.state = {
      criteria: criteria ? criteria : "",
      results: []
    }
  }
  componentDidMount() {
    this.update()
  }
  update() {
    this.giphySearchCall = fetch("http://api.giphy.com/v1/gifs/search?q=" + this.refs.search.value + "&api_key=dc6zaTOxFJmzC&limit=5")
    .then((response) => response.json())
    .then((response) => {
      this.setState({
        results: response.data
      })
    })
    this.setState({
      criteria: this.refs.search.value
    })
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