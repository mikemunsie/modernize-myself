var React = require('react');
var ReactDOM = require('react-dom');

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