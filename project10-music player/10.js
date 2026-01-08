const progress=document.getElementById("progress") 
const play=document.getElementById("play") 
const audio=document.getElementById("audio")


audio.onloadedmetadata=function(){
    progress.max=audio.duration 
    progress.value=audio.currentTime 
}

function playPause(){
    if(play.classList.contains("fa-pause")){
        audio.pause()
        play.classList.remove("fa-pause")
        play.classList.add("fa-play")

    }
    else{
        audio.play()
        play.classList.add("fa-pause")
        play.classList.remove("fa-play")
    }
}
if(audio.play()){
    setInterval(()=>{
        progress.value=audio.currentTime 
    },500)
}
progress.onchange=function(){
    audio.play()
    audio.currentTime=progress.value
    play.classList.add("fa-pause")
    play.classList.remove("fa-play")
}