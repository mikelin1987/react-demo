"use strict";

class Clock extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
      console.log('componentDidMount');
      var thisInstance = this;
      
      setInterval(function() {
          console.log('change');
          
          thisInstance.setState({
              date: new Date()
          });
          
      }, 1000);
  }
  
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('container')
);
