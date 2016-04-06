require("./commentBox.scss");
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
      data: this.props.data
    });
  },
  handleCommentSubmit: function(comment) {
    comment.id = (this.state.data.length+1).toString();
    this.state.data.push(comment);
    this.setState(this);
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments ({this.state.data.length})</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
});

module.exports = CommentBox;