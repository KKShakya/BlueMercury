



let user=JSON.parse(localStorage.getItem("user"))


let permission1 = ()=>{

    if(user.name==""){

        alert("please first login")
        
        window.location.href="./spiffy.com/signin.html"

        

        console.log("dsijdsis")
    }else{
       
        window.location.href="./Cart.html"
    }
}










