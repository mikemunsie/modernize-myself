var React = require('react');
var ReactDOM = require('react-dom');

let Mixin = (InnerComponent) => class extends React.Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.state = {val: 0}
  }
  componentWillMount() {
    this.setState({
      val: this.props.start ? this.props.start : 0
    })
  }
  update() {
    this.setState({ val: this.state.val + 1})
  }
  render() {
    return (
      <InnerComponent
        update={this.update}
        {...this.state}
        {...this.props}
      />
    )
  }
}

const ButtonMixed1 = Mixin((props) =>
  <button
    onClick={props.update}
  >
    {props.txt}: {props.val}
  </button>
)

const Cool = () => <span>Cool</span>

class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>{this.props.children}</button>
    )
  }
}

class Wrapper extends React.Component {
  constructor() {
    super();
  }
  mount() {
    ReactDOM.render(<App cat={5} />, this.refs.app)
  }
  unMount() {
    ReactDOM.unmountComponentAtNode(this.refs.app)
  }
  render() {
    return (
      <div>
        <ButtonMixed1 txt="ButtonMixed1" start={10} />
        <input type="button" value="Mount" onClick={this.mount.bind(this)} />
        <input type="button" value="UnMount" onClick={this.unMount.bind(this)} />
        <br/>
        <br/>
        <div ref="app"></div>
      </div>
    )
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      red: 255,
      green: 0,
      blue: 0,
      secondsRunning: 0
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
  componentWillMount() {
    this.secondsTimer = setInterval(() => {
      this.setState({
        secondsRunning: this.state.secondsRunning+1
      });
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.secondsTimer)
  }

  // Set a condition when the component should actually update (after 3 seconds as an example)
  shouldComponentUpdate() {
    return this.state.secondsRunning > 3
  }
  render() {
    let txt = this.props.txt
    let cat = this.props.cat
    let bgPreviewStyle = {
      width: "150px",
      height: "150px",
      background: "rgb(" + [this.state.red,this.state.green,this.state.blue].join(",") + ")"
    }
    return (
      <div>
        <h1>RGB Slider (will not run for 3 seconds)</h1>
        <br/>
        <br/>
        Running for {this.state.secondsRunning} seconds.
        <br/>
        <br/>
        <Button el="{this.refs.red}" onClick={this.removeSlider}>This is a <Cool/> Button</Button>
        <div className="bgPreview" style={bgPreviewStyle}></div>
        <hr/>
        Red: {this.state.red}
        <br/>
        <Slider ref="red" value={this.state.red} update={this.update} />
        <br/>
        Green: {this.state.green}
        <br/>
        <Slider ref="green" value={this.state.green} update={this.update} />
        <br/>
        Blue: {this.state.blue}
        <br/>
        <Slider ref="blue" value={this.state.blue} update={this.update} />
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
  <Wrapper />,
  document.getElementById('example')
)