var React = require('react');
var ReactDOM = require('react-dom');

class Slider extends React.Component {
  render() {
    return (
      <input type="range" min="0" max="255" onChange={this.props.update} />
    )
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      red: 0,
      green: 0,
      blue: 0
    }
    this.update = this.update.bind(this)
  }
  update(e) {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red).value,
      green: ReactDOM.findDOMNode(this.refs.green).value,
      blue: ReactDOM.findDOMNode(this.refs.blue).value
    })
  }
  render() {
    let txt = this.props.txt
    let cat = this.props.cat
    return (
      <div>
        <h1>{this.state.red}, {this.state.green}, {this.state.blue}</h1>
        <hr/>
        <Slider ref="red" update={this.update} />
        <Slider ref="green" update={this.update} />
        <Slider ref="blue" update={this.update} />
      </div>
    );
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "Default Value"
}


ReactDOM.render(
  <App cat={5} />,
  document.getElementById('example')
)


/*
const CommentBox = require("../components/commentBox/commentBox.js");
const data = [{
  id: 1,
  author: "First Person",
  text: "This is my first person text."
}]

ReactDOM.render(
  <CommentBox data={data}/>,
  document.getElementById('example')
);
*/