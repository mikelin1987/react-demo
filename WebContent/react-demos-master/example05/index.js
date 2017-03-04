"use strict";

var messages = ['Hello, World', 'Hello, Planet', 'Hello, Universe'];
var randomMessage = '';

var Greeting = React.createClass({
  render: function() {
    return (
      <p>{this.props.message} ~</p>
    );
  }
});

function updateGreeting() {
    console.log('updateGreeting');
    
    randomMessage = messages[Math.floor((Math.random() * 3))];
    
    ReactDOM.render(
        <Greeting message={randomMessage}/>,
        document.getElementById('container')
      );
}

updateGreeting();

setInterval(function() {
   updateGreeting();
}, 1000);


