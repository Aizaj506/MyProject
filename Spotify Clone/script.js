console.log("Welcome to spotify");

//Initilize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Chand Sifarish", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Sayiyaan", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Desh Mere", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Bhula Dena (Aashiqui 2)", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Buttabomma song", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Slam-e-ishq", filePath: "songs/6.mp3", coverPath: "covers/5.jpg"},
    {songName: "Slam-e-ishq", filePath: "songs/6.mp3", coverPath: "covers/5.jpg"},
    {songName: "Slam-e-ishq", filePath: "songs/6.mp3", coverPath: "covers/5.jpg"},
    {songName: "Slam-e-ishq", filePath: "songs/6.mp3", coverPath: "covers/5.jpg"},
    {songName: "Slam-e-ishq", filePath: "songs/6.mp3", coverPath: "covers/5.jpg"},
];

songItem.forEach((element, i) => {
   // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// audioElement.play(); 

// Handle play/puse click
masterPlay.addEventListener('click',  ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
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

//Listen to Events
audioElement.addEventListener('timeupdate', () =>{
   // console.log("Time Update");
    //update seekbar
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
   // console.log(progress);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value;
});

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click', (e)=>{
       // console.log(e.target)
       songIndex = parseInt(e.target.id);
       makeAllPlays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');

        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    });
});

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex >= 9){
        songIndex = 0;
    }
    else{
        songIndex = songIndex + 1;
    }

    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
    masterSongName.innerText = songs[songIndex].songName;
});

document.getElementById('prev').addEventListener('click', ()=>{
    if(songIndex <= 0){
        songIndex = 0;
    }
    else{
        songIndex = songIndex - 1;
    }

    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
    masterSongName.innerText = songs[songIndex].songName;
});