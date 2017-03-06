var LikeButton = React.createClass({
  getInitialState: function() {
    return {liked: false};
  },
  
  onClick: function(event) {
    this.setState({liked: !this.state.liked});
  },
  
  render: function() {
    var text = this.state.liked ? 'like' : 'haven\'t liked';
    return (
      <div onClick={this.onClick}>
        You {text} this. Click to toggle.
      </div>
    );
  }
  
});

ReactDOM.render(
  <LikeButton />,
  document.getElementById('container')
);