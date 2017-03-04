function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

var user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

var element = (
  <span>
    Hello, {formatName(user)} ~!
  </span>
);
console.log('React');

ReactDOM.render(
  element,
  document.getElementById('container')
);