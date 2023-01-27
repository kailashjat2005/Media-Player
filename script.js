

// all the Variables are here to use as per requirement in function
let songIndex = 0;
let audioElement = new Audio('Songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');      
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
 
    {songName: "Hum tere bin ab", filePath: "Songs/1.mp3", },
    {songName: "hum he dil me song", filePath: "Songs/2.mp3", },
    {songName: "Rabba mere mene kyo", filePath: "songs/3.mp3",},
    {songName: "Salam-e-Ishq", filePath: "songs/4.mp3", },
    {songName: "Bhula Dena muje", filePath: "songs/5.mp3", },
     {songName: "Tumhari Kasam - kayamat", filePath: "songs/6.mp3"},
    
]

 songItems.forEach((element, i)=>{ 
element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

//  play or pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused ){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}















// here is the function for next and previous button------------->

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
     masterSongName.innerText = songs[songIndex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
