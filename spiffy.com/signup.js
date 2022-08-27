let Data=JSON.parse(localStorage.getItem("user"))||[]
let register = async () =>{     
    let register_data = {
        email: document.getElementById('email').value,
        name: document.getElementById('name').value,//+document.getElementById('last_name').value,
        password : document.getElementById('password').value,
        username:document.getElementById('email').value,
        mobile : document.getElementById('mobile').value,
        description : document.getElementById('description').value
    }

   Data.push(register_data)
 localStorage.setItem("user",JSON.stringify(Data))
}
function tik(){
    document.getElementById("birth").style.display="inline"
}
