let register = async () =>{
     
    let register_data = {
        email: document.getElementById('email').value,
        name: document.getElementById('name').value,//+document.getElementById('last_name').value,
        password : document.getElementById('password').value,
        username:document.getElementById('email').value,
        mobile : document.getElementById('mobile').value,
        description : document.getElementById('description').value
    }
    // console.log(register_data)
   let res = await fetch(`https://masai-api-mocker.herokuapp.com/auth/register`,{
    method:'POST',
    body: JSON.stringify(register_data),

    headers: {
        'Content-Type' : 'application/json'
    }
   })
   let data = await res.json()
   console.log('data:', data)
   
if(data.error==true){
    alert ("User Already Signed Up")   
}
// function 
}
function tik(){
    document.getElementById("birth").style.display="inline"
}
