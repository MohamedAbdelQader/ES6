//////Check Task 

let fruits = ["apple", "strawberry", "banana", "orange", "mango"] ;

let first = fruits.every(i => (typeof i === "string"))
        console.log(first)
    

//////Second Task

let Second = fruits.filter(i=>(
    i.startsWith("a")
))
console.log(Second)

//////Third Task

let Third = fruits.filter(i=>(
    i.startsWith("b")||i.startsWith("s")
))
console.log(Third)

//////Fourth
Third.forEach(i => {
    console.log(i)
});

//////Fifth
var value=document.getElementById("value")
value.addEventListener("click",function(){
var promisetask= new Promise(function(resolve,reject)
{  
    var request=new XMLHttpRequest();
    var inp = document.getElementById("input").value;
    if(inp){
        
        request.open("GET","https://jsonplaceholder.typicode.com/posts?userId="+inp)
        request.onreadystatechange=function(){
            if(request.readyState==4 && request.status==200){
                console.log(request.responseText)
            }
        }
        // request.send()
        request.send()
    }
    resolve ("done")
  
    
    reject("Not done")
    
}   
)
promisetask.then(function(haha)
{
    console.log(haha)
}).catch(function(myerror)
{
    console.log(myerror)
})
})

///////Sixth
async function products()
{
    let allproducts=await fetch("https://60523dc8fb49dc00175b7d04.mockapi.io/api/v1/products")
    let transfer=await allproducts.json()
    let body=document.getElementsByTagName("body")[0]
    for (const i of transfer) {
        let div= document.createElement("div")
        body.append(div)
        div.innerHTML=`<p>${"this is name = "+i.name+"</p>"+ "<p> this is price ="+i.image+"</p>"+"<p> this is price ="+i.price}</p>`
        body.append(div)
        
    }
}
products()