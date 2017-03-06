var Hello = React.createClass({
  getInitialState: function () {
      console.log('getInitialState'); 
     
    return {
      opacity: 1.0
    };
  },

  componentDidMount: function () {
      console.log('componentDidMount');
      var thisInstance = this;
      
      console.log(thisInstance);
      
      setInterval(function () {
          var opacity = thisInstance.state.opacity;
          opacity -= .05;
          if (opacity < 0.1) {
            opacity = 1.0;
          }
          thisInstance.setState({
            opacity: opacity
          });
        }, 100);
      
//    this.timer = setInterval(function () {
//      var opacity = this.state.opacity;
//      opacity -= .05;
//      if (opacity < 0.1) {
//        opacity = 1.0;
//      }
//      this.setState({
//        opacity: opacity
//      });
//    }.bind(this), 100);
  },

  render: function () {
    return (
      <div style={{opacity: this.state.opacity}}>
        Hello {this.props.name}
      </div>
    );
  }
});

ReactDOM.render(
  <Hello name="React!"/>,
  document.getElementById('container')
);