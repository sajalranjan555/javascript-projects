const container=document.getElementById("text-container")
const button=document.getElementById("btn")
let notes=document.querySelectorAll(".input")





button.addEventListener("click",()=>{
    let inputbox=document.createElement("p")
    let img=document.createElement("img")
    inputbox.className="input"
    inputbox.setAttribute("contenteditable","true")
    img.src="/project5/image/delete.png"
    container.appendChild(inputbox).appendChild(img)
})

//  delete ka add karo
container.addEventListener("click",function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove()
        storeData()
    }
    else if(e.target.tagName==="P"){
        notes=document.querySelectorAll(".input");
       notes.forEach(nt=>{
        nt.onkeyup=function(){
            storeData()
        }
       })
    } 
})

// show karne ke liye
function showData(){
    container.innerHTML=localStorage.getItem("notes")
} 
showData();

// store karne ke liye
function storeData(){
    localStorage.setItem("notes",container.innerHTML)
}

document.addEventListener("keydown",event=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak")
        event.preventDefault()
    }
})
