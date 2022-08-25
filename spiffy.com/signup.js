let register = async () =>{
    const r = Math.random()*(max-min) + min
     
    let register_data = {
        email: document.getElementById('email').value,
        name: document.getElementById('first_name').value+document.getElementById('last_name').value,
        password : document.getElementById('password').value,
        username:document.getElementById('first_name').value+"-"+document.getElementById('last_name').value+Math.random(),
        mobile : document.getElementById('mobile').value,
        description : document.getElementById('description').value
    }
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
}

function tik(){
    document.getElementById("birth").style.display="inline"
}