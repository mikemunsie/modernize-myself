const React = require('react');
const request = require('superagent');

const CommentForm = React.createClass({
  getInitialState: function() {

        request
      .get('/api/user')
      .set('Accept', 'application/json')
      .end(function(err, res){
        console.log(res);
        // Calling the end function will send the request
      });



    return {author: '', text: ''};
  },
  handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },
  handleSubmit: function(e) {

    request
      .post('/api/user')
      .send({ 
        name: "Michael Munsie",
        age: 23
        /*
        age: {
          type: Number,
          required: true
        }
        */
      })
      .set('Accept', 'application/json')
      .end(function(err, res){
        console.log(res);
        // Calling the end function will send the request
      });


    e.preventDefault();
    return;
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    console.log(this.props.onCommentSubmit)
    this.props.onCommentSubmit({author: author, text: text});
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
});

module.exports = CommentForm;