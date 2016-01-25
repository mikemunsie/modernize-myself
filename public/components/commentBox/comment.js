const React = require('react');

const Comment = React.createClass({
  rawMarkup: function() {
    var rawMarkup = this.props.children.toString();
    return { __html: rawMarkup };
  },
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
});

module.exports = Comment;