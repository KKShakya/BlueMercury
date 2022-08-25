let login = async () => {
    let login_data = {        
        password :document.getElementById('login_pass').value,
        username : document.getElementById('login_email').value,        
    };
    let res = await fetch(`https://masai-api-mocker.herokuapp.com/auth/login`,{
        method: 'POST',
        body:JSON.stringify(login_data),
        headers: {
            'Content-Type':'application/json'
        }
    })
    let data =await res.json();
    console.log('data:', data)
    // console.log(login_data)
}

