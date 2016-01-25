const React = require('react');
const CommentList = require("./commentList.js");
const CommentForm = require("./commentForm.js");

const CommentBox = React.createClass({
  getInitialState: function() {
    return {
      data: []
    };
  },
  componentDidMount: function() {
    this.setState({
      data: window.data
    });
  },
  handleCommentSubmit: function(comment) {
    comment.id = (data.length+1).toString();
    data.push(comment);
    this.setState({
      data: data
    });
    console.log(data);
  },
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
});

module.exports = CommentBox;