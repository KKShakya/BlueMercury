
let page;

let url;
function bath(){

    page=2;
    // console.log(page)
    // url=`https://sephora.p.rapidapi.com/products/list?categoryId=cat150006&pageSize=20&currentPage=2`

    // let res=await fetch(url,{
    //     method:'GET',
    //     headers: {
    //         'Content-Type':'application/json',
    //         'X-RapidAPI-Key': '092a07a068msh595681c162b3a40p1f553bjsn2c590ce28b45',
    //          'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
    //      }
    // });
    // let data=await res.json()
    // console.log(data)
    // let datas=data.products
    // appendData(datas)   

}

// console.log(url)
console.log(page)




let main=async()=>{




    url=`https://sephora.p.rapidapi.com/products/list?categoryId=cat150006&pageSize=20&currentPage=${page}`
    
let res=await fetch(url,{
    method:'GET',
    headers: {
        'Content-Type':'application/json',
		'X-RapidAPI-Key': '092a07a068msh595681c162b3a40p1f553bjsn2c590ce28b45',
 		'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
 	}
});

let data=await res.json()
console.log(data)
let datas=data.products
appendData(datas)
console.log(datas)

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