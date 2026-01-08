const quote=document.getElementById("quote")
const author=document.getElementById("author")




// api generator

const apiUrl="https://api.quotable.io/random"

async function getQuote(apiUrl){
  const response=await fetch(apiUrl)
  var data=await response.json()
//   console.log(data)

  quote.innerHTML=data.content
  author.innerHTML=data.author
}
getQuote(apiUrl)

//  tweet wali link kholo
function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+ quote.innerHTML,"Tweet Window","width=600, height=300")
}