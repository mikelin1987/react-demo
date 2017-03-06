var Input = React.createClass({
    
  getInitialState: function() {
    return {value: 'Hello World!'};
  },
  
  onChange: function(event) {
    this.setState({value: event.target.value});
  },
  
  render: function () {
    var value = this.state.value;
    console.log(value);
    
    return (
      <div>
        <input type="text" value={value} onChange={this.onChange} />
        <p>Your input: {value}</p>
      </div>
    );
  }
});

ReactDOM.render(
    <Input/>,
    document.getElementById('container')
);