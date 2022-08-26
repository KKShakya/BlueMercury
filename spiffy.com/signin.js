let login = async () => {
    let login_data = {        
        password :document.getElementById('password').value,
        username : document.getElementById('username').value,        
    };
    // console.log('login_data:', login_data)
    let res = await fetch(`https://masai-api-mocker.herokuapp.com/auth/login`,{
        method: 'POST',
        body:JSON.stringify(login_data),
        headers: {
            'Content-Type':'application/json'
        }
    })
    let data =await res.json();
    console.log('data:', data)
    // let { username } = login_data;
    // let { token } = data;
    // getProfile(username,token);
    if(data.error==false){
     alert ("Logged In")
    }
}
// import {navbar} from './components/modules/navbar.js'
// // console.log(navbar());
// document.getElementById("navbar").innerHTML = navbar();



// let getProfile = async (username, token) => {
//     let res = await fetch(
//         `https://masai-api-mocker.herokuapp.com/user/${username}`,{
//             method: 'GET',
//             headers: {
//                 'Content-Type' : 'application/json',
//                 Authorization: `Bearer ${token}`
//             }
//         }
//     )
//     let data = await res.json();
//     console.log('data:', data)

// }
