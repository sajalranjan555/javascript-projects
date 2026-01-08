const toastbox=document.getElementById("toastbox")
let successmsg='<i class="fa-solid fa-circle-check"></i> successfully submitted'
let errormsg='<i class="fa-solid fa-circle-xmark"></i>Please fix the error'
let invalidmsg='<i class="fa-solid fa-circle-exclamation"></i>invalid message !click again'


function showToast(msg){
    let toast=document.createElement("div")
    toast.classList.add("toast")              //class banaya div me
    toast.innerHTML=msg
    toastbox.append(toast)


    if(msg.includes("error")){
        toast.classList.add("error")
    }
    if(msg.includes("invalid")){
        toast.classList.add("invalid")
    }


    setTimeout(()=>{
     toast.remove()   
    },6000)
}