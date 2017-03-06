var UserGist = React.createClass({
  getInitialState: function() {
    return {
      users: [],
    };
  },

  componentDidMount: function() {
    $.get(this.props.source, function(result) {
      
      if (this.isMounted()) {
        this.setState({
          users: result,
        });
      }
      
    }.bind(this));
  },

  render: function() {
      console.log('render');
      console.log(this.state.users);
      return (
          <div> 
              { // 这是一个表达式，相当于每一个循环的项，因此它有return
                  this.state.users.map(function(element) {
                      return <p key={element.id}> {element.id}' link please click <a href={element.url}>here</a>.</p>;
                  })
                  
              }
          </div> 
      );
  },
  
//  render: function () {
//      return (
//        <div>
//          Hello {this.props.name}
//        </div>
//      );
//    }
  
});

ReactDOM.render(
  <UserGist source="/react-demo/users.json" name="Mike" />,
  document.getElementById('container')
);
