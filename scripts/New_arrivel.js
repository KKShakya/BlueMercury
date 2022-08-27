
let page;

let url;
let bath=async()=>{
    url=`https://sephora.p.rapidapi.com/products/list?categoryId=cat150006&pageSize=20&currentPage=2`
    let res=await fetch(url,{
        method:'GET',
        headers: {
            'Content-Type':'application/json',
            'X-RapidAPI-Key': '2d3a7e5e94msh2293d946fc77747p1a6907jsn481aaf792503',
             'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
         }
    });
    let data=await res.json()
    let datas=data.products
    document.querySelector(".box1>p>span").innerText="BATH & BODY"
    document.querySelector("#box2-heading").innerText="BATH & BODY ITEMS"
    document.querySelector("#box2-heading2").innerText="These items are specified as Body lotion and Bath items."
    appendData(datas)   
}

// Category 2
let Fragrance=async()=>{
    url=`https://sephora.p.rapidapi.com/products/list?categoryId=cat150006&pageSize=20&currentPage=3`
    let res=await fetch(url,{
        method:'GET',
        headers: {
            'Content-Type':'application/json',
            'X-RapidAPI-Key': '2d3a7e5e94msh2293d946fc77747p1a6907jsn481aaf792503',
             'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
         }
    });
    let data=await res.json()
    let datas=data.products
    document.querySelector(".box1>p>span").innerText="FRAGRANCE"
    document.querySelector("#box2-heading").innerText="FRAGRANCE"
    document.querySelector("#box2-heading2").innerText="These items are specially for fragrance like perfumes and Fragrance Creams."
    appendData(datas)   
}

// Category 3
let Hair=async()=>{
    url=`https://sephora.p.rapidapi.com/products/list?categoryId=cat150006&pageSize=20&currentPage=4`
    let res=await fetch(url,{
        method:'GET',
        headers: {
            'Content-Type':'application/json',
            'X-RapidAPI-Key': '2d3a7e5e94msh2293d946fc77747p1a6907jsn481aaf792503',
             'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
         }
    });
    let data=await res.json()
    let datas=data.products
    document.querySelector(".box1>p>span").innerText="HAIR CARE"
    document.querySelector("#box2-heading").innerText="HAIR CARE"
    document.querySelector("#box2-heading2").innerText="These items are specially designed for hairs like straightner and waxes."
    appendData(datas)   
}
//category 4
let Skins=async()=>{
    url=`https://sephora.p.rapidapi.com/products/list?categoryId=cat150006&pageSize=20&currentPage=5`
    let res=await fetch(url,{
        method:'GET',
        headers: {
            'Content-Type':'application/json',
            'X-RapidAPI-Key': '2d3a7e5e94msh2293d946fc77747p1a6907jsn481aaf792503',
             'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
         }
    });
    document.querySelector(".box1>p>span").innerText="SKIN"
    document.querySelector("#box2-heading").innerText="SKIN"
    document.querySelector("#box2-heading2").innerText="These items are specially designed for skin care. Here items speicfied for all types of skin."
    let data=await res.json()
    let datas=data.products
    appendData(datas)   
}

//Category 5
let Makeup=async()=>{
    url=`https://sephora.p.rapidapi.com/products/list?categoryId=cat150006&pageSize=20&currentPage=6`
    let res=await fetch(url,{
        method:'GET',
        headers: {
            'Content-Type':'application/json',
            'X-RapidAPI-Key': '2d3a7e5e94msh2293d946fc77747p1a6907jsn481aaf792503',
             'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
         }
    });
    document.querySelector(".box1>p>span").innerText="MAKEUP ITEMS"
    document.querySelector("#box2-heading").innerText="MAKEUP ITEMS"
    document.querySelector("#box2-heading2").innerText="These items are specially designed for instant makeup and full bride makeup also."
    let data=await res.json()
    let datas=data.products
    appendData(datas)   
}



let main=async()=>{
    document.querySelector(".box1>p>span").innerText="NEW ARRIVELS"
    document.querySelector("#box2-heading").innerText="NEW ARRIVELS"
    document.querySelector("#box2-heading2").innerText="These items are newly introduced items of our company."
    url=`https://sephora.p.rapidapi.com/products/list?categoryId=cat150006&pageSize=20&currentPage=${page}`
    
let res=await fetch(url,{
    method:'GET',
    headers: {
        'Content-Type':'application/json',
		'X-RapidAPI-Key': '2d3a7e5e94msh2293d946fc77747p1a6907jsn481aaf792503',
 		'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
 	}
});
let data=await res.json()
let datas=data.products
appendData(datas)


document.querySelector("#sort").addEventListener("change",handleNameSort)
function handleNameSort(){
    let selected=document.querySelector("#sort").value
    
    if(selected==="LTH"){
        datas.sort(function(a,b){   
            if(a.currentSku.listPrice>b.currentSku.listPrice) return 1;
            if(a.currentSku.listPrice<b.currentSku.listPrice) return -1;
            return 0;
        })
        appendData(datas)
    }
    else if(selected="HTL"){
        datas.sort(function(a,b){   
            if(a.currentSku.listPrice>b.currentSku.listPrice) return -1;
            if(a.currentSku.listPrice<b.currentSku.listPrice) return 11;
            return 0;
        })
        appendData(datas)
    }
    else if(selected="Ascending"){
        datas.sort(function(a,b){   
            let x=a.displayName.toUpperCase();
            let y=b.displayName.toUpperCase();
            if(x>y) return 1;
            if(x<y) return -1;
            return 0;
        })
        appendData(datas)
    }
    else if(selected="Descending"){
        datas.sort(function(a,b){   
            let x=a.displayName.toUpperCase();
            let y=b.displayName.toUpperCase();
            if(x>y) return -1;
            if(x<y) return 1;
            return 0;
        })
        appendData(datas)
    }

}
// }
}
let count=0;
function appendData(data){
    document.querySelector("#products").innerHTML=null
    count++
    data.forEach((elem)=>{
        let div=document.createElement("div")
        div.addEventListener("click",function(){
            item(elem)
        })
        // count++
        let brandName=document.createElement("h4")
        brandName.innerText=elem.brandName
        let name=document.createElement("p")
        name.innerText=elem.displayName
        let image=document.createElement("img")
        image.src=elem.heroImage
        let price=document.createElement("p")
        price.innerText=elem.currentSku.listPrice

        div.append(image,brandName,name,price)
        document.querySelector("#products").append(div)
        document.querySelector(".result>span").innerText=count;
    })
}
function item(elem){
    console.log(elem)
    localStorage.setItem('items',JSON.stringify(elem))
    window.location.href="items.html"
}

// Best items lists


let bitem1=async()=>{
    url=`https://sephora.p.rapidapi.com/products/detail?productId=P500307&preferedSku=2210607`
    let res=await fetch(url,{
        method:'GET',
        headers: {
            'Content-Type':'application/json',
            'X-RapidAPI-Key': '2d3a7e5e94msh2293d946fc77747p1a6907jsn481aaf792503',
             'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
         }
    });
    let datav=await res.json()
    localStorage.setItem("bestItem",JSON.stringify(datav))  
    window.location.href="./best_item.html"
}

let blip=async()=>{
    url=`https://sephora.p.rapidapi.com/products/detail?productId=P236816&preferedSku=2210607`
    let res=await fetch(url,{
        method:'GET',
        headers: {
            'Content-Type':'application/json',
            'X-RapidAPI-Key': '2d3a7e5e94msh2293d946fc77747p1a6907jsn481aaf792503',
             'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
         }
    });
    let datav=await res.json()
    localStorage.setItem("bestItem",JSON.stringify(datav))  
    window.location.href="./best_item.html"
}