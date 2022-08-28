let Data=JSON.parse(localStorage.getItem("user"))||[]

let register = ()=>{     
    let register_data = {
        email: document.getElementById('email').value,
        name: document.getElementById('name').value,
        password : document.getElementById('password').value,
        username:document.getElementById('email').value,
        mobile : document.getElementById('mobile').value,
        description : document.getElementById('description').value
    }
// console.log(register_data);

   Data.push(register_data)
//    console.log("data",Data);

   localStorage.setItem("user",JSON.stringify(Data));
   alert ("You account has been created")
   window.location.href = "signin.html"
}
function tik(){
    document.getElementById("birth").style.display="inline"
}
