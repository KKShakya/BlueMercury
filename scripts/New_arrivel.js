<script>



let main=async()=>{


let res=await fetch('https://sephora.p.rapidapi.com/products/list?categoryId=cat150006&pageSize=60&currentPage=1',{
    method:'GET',
    // body:JSON.stringify(register_data),
    headers: {
        'Content-Type':'application/json',
		'X-RapidAPI-Key': '092a07a068msh595681c162b3a40p1f553bjsn2c590ce28b45',
 		'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
 	}
});
let data=await res.json()
console.log(data.products)
appendData(data.products)

}

function appendData(data){
    data.forEach((elem)=>{
        let div=document.createElement("div")
        let name=document.createElement("p")
        name.innerText=elem.brandName
        let image=document.createElement("img")
        image.src=elem.heroImage



        div.append(image,name)
        document.querySelector("#products").append(div)
    })
}
</script>