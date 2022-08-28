





let Logged_In_User=JSON.parse(localStorage.getItem("LoginUser")) || [];
console.log(Logged_In_User);

let permission1 = ()=>{
    if(Logged_In_User.length === 0){
        
        window.location.href="./signin.html"
        
        console.log("dsijdsis")
    }else{
        // alert("welcome to cart")
        
        window.location.href="./Cart.html"
        // console.log("im else")
    }
}










