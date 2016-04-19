var React = require('react');
var ReactDOM = require('react-dom');
const GiphySearch = require("../components/giphySearch/giphySearch");

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <GiphySearch criteria="cats" />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('example')
)