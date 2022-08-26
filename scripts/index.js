let arr = [];

arr[0] =
  "https://cdn.shopify.com/s/files/1/0283/0185/2747/files/lightweight-skincare-hp-hero-des_1600x.jpg?v=1660596941";
arr[1] =
  "https://cdn.shopify.com/s/files/1/0283/0185/2747/files/routines-extend-your-summer-glow-hero-des_2800x.jpg?v=1660082597";
arr[2] =
  "https://cdn.shopify.com/s/files/1/0283/0185/2747/files/lune-aster-sunset-eyeshadow-hero-des_2800x.jpg?v=1659557146";

let arr2 = [
  `<h1>Dew Drops</h1><p>Check out our favorite new and bestselling serums, lotions and lightweight creams, all of which hydrate beautifully without feeling the least bit heavy on your skin</p><a href="https://bluemercury.com/collections/best-products-for-glowing-skin">Shop Now</a>`,
  `<h2><span>Routine</span><strong>Reboot</strong></h2><span>The</span><br><strong>"Extend Your Summer Glow"</strong><br><span>Routine</span><p>Proper pre-bed beauty prep will not only help you rest easy, but also simplify your AM routine. With just a few advance steps, you’ll hop out of bed looking bright-eyed, radiant and ready to go.</p><a href="https://bluemercury.com/products/the-extend-your-summer-glow-routine-bundle">Shop Now</a>`,
  `<h2>Lune+Aster</h2><h1>Dusk + Shadows</h1><p> This new palette features five universal, sunset-inspired shades in matte and shimmer finishes, so you can easily create an alluring eye look!</p><a href="/products/lune-aster-sunset-eyeshadow-palette">Shop Now</a>`,
];

let arr3 = [
  `Free Shipping for BlueRewards Members`,
  `Free Gifts with Purchase. Browse Now `,
  `Free Samples with All Orders`
]

let i = 0;

function radio1() {
  i = 0;
}

function radio2() {
  i = 1;
}

function radio3() {
  i = 2;
}

function slideshow() {



  document.querySelector("#slide_text").innerHTML=arr3[i]


  let x = document.getElementById("slide_link");
  
 let k = arr[i];
  x.setAttribute("style", `background-image: url(${k})`);
  
  let k1 = arr2[i];

  document.querySelector("#slide_line_text").innerHTML = k1;

  x.style.backgroundRepeat = "no-repeat";
  x.style.backgroundSize = "cover";

 
  x.style.marginTop = "0rem"
  x.style.width = "100%";

  if (i < arr.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("slideshow()", 3000);
}

// window.onload=slideshow

slideshow();

let data = async () => {
  try {
    let res = await fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json"
    );

    let data = await res.json();

    

    // display(data);

    // display1(data);

    // display3(data)

  } catch (err) {
    console.log(err);
  }
};

data();

function display(arr) {
  for (let i = 50; i < 70; i++) {
    let div = document.createElement("div");

    let img = document.createElement("img");

    let x = arr[i].api_featured_image;

    img.src = `https:${x}`;

    let p = document.createElement("p");
    p.innerText = arr[i].brand;
    let p1 = document.createElement("p");
    p1.innerText = arr[i].name;
    let p2 = document.createElement("p");
    p2.innerText = `$ ${arr[i].price}`;

    div.append(img, p, p1, p2);

    document.querySelector("#slide_p1").append(div);

  
  }
}

function display1(arr) {
  for (let i = 70; i <= 90; i++) {
    let div = document.createElement("div");

    let img = document.createElement("img");

    let x = arr[i].api_featured_image;

    img.src = `https:${x}`;

    let p = document.createElement("p");
    p.innerText = arr[i].brand;
    let p1 = document.createElement("p");
    p1.innerText = arr[i].name;
    let p2 = document.createElement("p");
    p2.innerText =`$ ${arr[i].price}`;

    div.append(img, p, p1, p2);

    document.querySelector("#slide_p2").append(div);

    
  }
}


function display3(arr) {
  for (let i = 100; i <= 120; i++) {
    let div = document.createElement("div");

    let img = document.createElement("img");

    let x = arr[i].api_featured_image;

    img.src = `https:${x}`;

    let p = document.createElement("p");
    p.innerText = arr[i].brand;
    let p1 = document.createElement("p");
    p1.innerText = arr[i].name;
    let p2 = document.createElement("p");
    p2.innerText = `$ ${arr[i].price}`;

    div.append(img, p, p1, p2);

    document.querySelector("#slide_p3").append(div);


  }
}


  