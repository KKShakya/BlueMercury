let data = JSON.parse(localStorage.getItem('user'));
let LoginUser = [];

let flag = false;
function login() {
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

 let obj = {
  user:username,
  pwd:password,
}
  for (let i = 0; i < data.length; i++) {
    let char = data[i];
    if (char.username == username && char.password == password) {
      flag = true;
    }
  }

  LoginUser.push(obj);
localStorage.setItem('LoginUser', JSON.stringify(LoginUser));

  if (flag == true) {
    alert('Logged In');
  } else {
    alert('Wrong email or password');
  }
  

    location.replace("./index.html")

}
