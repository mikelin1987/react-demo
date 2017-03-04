"use strict";

class MyElement extends React.Component {
    
    render() {
        return(
                <span>
                My name is {formatName(user)}, I am from {this.props.country} ~!
            </span>        
        );
        
    }
}

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

var user = {
  firstName: 'Lam',
  lastName: 'Mike'
};

ReactDOM.render(
  <MyElement country="China" ></MyElement>,
  document.getElementById('container')
);