console.log("Welcome to music app (Taylor's Version)");
let songNumber = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let songPlaying = document.getElementById("songPlaying");
let progressBar = document.getElementById("progressBar");
let songitem = Array.from(document.getElementsByClassName('songitem'));


let songs = [
    {songName:"Cruel Summer by Taylor Swift (Lover)", filePath: "songs/1.mp3", coverPath:'img/lover.png'},
    {songName:"London Boy by Taylor Swift (Lover)", filePath: "songs/2.mp3", coverPath:'img/lover.png'},
    {songName:"Cornelia Street by Taylor Swift (Lover)", filePath: "songs/3.mp3", coverPath:'img/lover.png'},
    {songName:"Paper Rings by Taylor Swift (Lover)", filePath: "songs/4.mp3", coverPath:'img/lover.png'},
    {songName:"Daylight by Taylor Swift (Lover)", filePath: "songs/5.mp3", coverPath:'img/lover.png'},
    {songName:"Ready For It by Taylor Swift (Reputation)", filePath: "songs/6.mp3", coverPath:'img/rep.png'},
    {songName:"End Game by Taylor Swift (Reputation) ", filePath: "songs/7.mp3", coverPath:'img/rep.png'},
]
songitem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    console.log(element,i);
})

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
})

audioElement.addEventListener('timeupdate', ()=> {
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    progressBar.value = progress;
})

progressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (progressBar.value*audioElement.duration)/100;
})
const allPlay = ()=>{
    Array.from(document.getElementsByClassName("songPlay")).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })

}
Array.from(document.getElementsByClassName("songPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        allPlay();
        songNumber = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songNumber+1}.mp3`;
        audioElement.currentTime = 0;
        songPlaying.innerText = songs[songNumber].songName;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songNumber>=6){
        songNumber=0;
    }
    else{
        songNumber = songNumber+1;
    }
    songPlaying.innerText = songs[songNumber].songName;
    audioElement.src = `songs/${songNumber+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('back').addEventListener('click',()=>{
    if(songNumber<=0){
        songNumber=6;
    }
    else{
        songNumber = songNumber-1;
    }
    songPlaying.innerText = songs[songNumber].songName;
    audioElement.src = `songs/${songNumber+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})