"use strict";

var ListElement = React.createClass({
    
    render: function() {
        return(
           <ul>
               {
                   React.Children.map(this.props.children, function(child) {
                       return <li>{child}</li>;
                   })
               }
           </ul>
        );
        
    },
    
    propTypes: {
        name: React.PropTypes.string.isRequired,
        id: React.PropTypes.string.isRequired,
    }
});

ReactDOM.render(
  <ListElement id="1" name="List01">
      <span>Mike</span>
      <span>Wendy</span>
      <span>Michelle</span>
  </ListElement>,
  document.getElementById('container')
);