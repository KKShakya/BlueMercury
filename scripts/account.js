let login = JSON.parse(localStorage.getItem("LoginUser")) || [];

let userName = document.getElementById("name");
let logout = document.getElementById("logout");
console.log(login);
if(login.length === 0){
  userName.visibility = "hidden";
}else{
  userName.innerText = login[0].user;
  logout.innerText = "logout";
}
console.log("account");
