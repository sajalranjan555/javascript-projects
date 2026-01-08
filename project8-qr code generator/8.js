const inputtext=document.getElementById("input-text")
const imgbox=document.getElementById("imgbox")
const qrimage=document.getElementById("qrimage")



function generateQR(){
    if(inputtext.value.length>0){
        qrimage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inputtext.value;
        imgbox.classList.add("show-img")
    }
    else{
        alert("write something")
    }
}