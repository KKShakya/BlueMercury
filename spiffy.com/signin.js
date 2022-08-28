let data = JSON.parse(localStorage.getItem('user'));
let flag = false;
function login() {
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  for (let i = 0; i < data.length; i++) {
    let char = data[i];
    if (char.username == username && char.password == password) {
      flag = true;
    }
  }
  if (flag == true) {
    alert('Logged In');
  } else {
    alert('Wrong email or password');
  }

    location.replace("./index.html")

}
