

let user=JSON.parse(localStorage.getItem("user"))

let permission1 = ()=>{
    if(user.name==""){
        
        window.location.href="./spiffy.com/signin.html"

        console.log("dsijdsis")
    }else{
        alert("welcome to wishlist")
    }
}