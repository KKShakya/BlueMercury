

let wish=document.querySelector("#permission")


let nav=document.querySelector("#navbar")

let obja={
    name:"",
    email:"rickysakhare@gmail.com"
}

localStorage.setItem("user", JSON.stringify(obja))

let user=JSON.parse(localStorage.getItem("user"))


let permission1 = ()=>{
    if(user.name==""){
        
        window.location.href="./spiffy.com/signin.html"

        console.log("dsijdsis")
    }else{
        alert("welcome to wishlist")
    }
}










