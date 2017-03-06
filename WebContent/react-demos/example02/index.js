function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

var users = new Array();
users[0] = {firstName: 'Lam',
            lastName: 'Mike'};
users[1] = {firstName: 'Tam',
            lastName: 'Wendy'};
users[2] = {firstName: 'Lam',
            lastName: 'Michelle'};

ReactDOM.render(
  <div>
  {
      users.map(function (user) {
          return <div key={user.firstName + user.lastName} className="name-div">{formatName(user)}</div>
      })
  }
  </div>,
  document.getElementById('container')
);

