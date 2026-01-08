const inputBox=document.querySelector(".flex2 input")
const container=document.querySelector(".items")


function addTask(){
if(inputBox.value===''){
    alert("you must write something")
}
else{
    let li=document.createElement("li")              //create kiya
    li.innerHTML=inputBox.value                        //box me dala
    container.appendChild(li)                   //print kiya

    // cross symbol create karo span use karke
    let span=document.createElement("span")
    span.innerHTML="\u00d7"
    li.appendChild(span)
}
inputBox.value=""
storedata()
}

container.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        storedata()
    }
    else if(e.target.tagName==="SPAN"){
         e.target.parentElement.remove()
         storedata()
    }
})

function storedata(){
    localStorage.setItem("data",container.innerHTML)
}
function showdata(){
    container.innerHTML=localStorage.getItem("data")
}
showdata()