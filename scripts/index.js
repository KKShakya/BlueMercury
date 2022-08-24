
let arr=[]

arr[0]="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/lightweight-skincare-hp-hero-des_1600x.jpg?v=1660596941"
arr[1]="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/routines-extend-your-summer-glow-hero-des_2800x.jpg?v=1660082597"
arr[2]="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/lune-aster-sunset-eyeshadow-hero-des_2800x.jpg?v=1659557146"
  
   let i=0

   function radio11(){
        i=0
        console.log("works")
       document.querySelector("#radio1").innerHTML=""
      }

   function slideshow(){

      let x=document.getElementById("slide")

    

      x.src=arr[i];

      // console.log(i)

      if(i < arr.length -1){

        i++
      }else{

        i=0
      }

      setTimeout("slideshow()", 5000)

   }

      window.onload=slideshow