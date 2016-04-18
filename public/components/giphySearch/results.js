var React = require('react');
var ReactDOM = require('react-dom');

const Result = (props) => {
  return (
    <div className="result">
      <img src={props.image.images.original.url} />
    </div>
  )
}

class Results extends React.Component {
  constructor({criteria}) {
    super();
  }
  render() {
    let results = this.props.data.length > 0 ?
      this.props.data.map((image, index) =>
        <Result key={index} image={image} />
      ) :
        <div>No results found :/</div>

    return (
      <div className="results">
        {results}
      </div>
    )
  }
}

module.exports = Results;