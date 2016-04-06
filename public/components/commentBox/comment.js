const React = require('react');

const Comment = React.createClass({
  rawMarkup: function() {
    var rawMarkup = this.props.children.toString();
    return { __html: rawMarkup };
  },
  render: function() {
    return (
      <div className="comment">
        <div className="commentAuthor">
          {this.props.author}
        </div>
        <span className="commentText" dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
});

module.exports = Comment;