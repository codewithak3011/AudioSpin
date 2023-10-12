console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let audioElement2 = new Audio('songs/2.mp3');
let audioElement3 = new Audio('songs/3.mp3');
let audioElement4 = new Audio('songs/4.mp3');
let audioElement5 = new Audio('songs/5.mp3');
let audioElement6 = new Audio('songs/6.mp3');
let audioElement7 = new Audio('songs/7.mp3');
let audioElement8 = new Audio('songs/8.mp3');
let audioElement9 = new Audio('songs/9.mp3');
let audioElement10 = new Audio('songs/10.mp3');

let nine=document.getElementById("nine");

let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
// let songName = Array.from(document.getElementsByClassName('songName'));
// let boond= document.getElementById('boond');
// let katra= document.getElementById('katra');

let songs = [
    {songName: "Ankit Tiwari - Boond Boond", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Ankit Tiwari & Prakriti Kakar-Katra Katra ", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Arijit Singh - Main Dhoondne Ko Zamaane Mein", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Arijit Singh - Raabta", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Arijit Singh - Sanam Re", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Armaan Malik - Jab Tak", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Armaan Malik - Kaun Tujhe", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Atif Aslam - Dil Diyan Gallan", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Atif Aslam - Woh Lamhe ", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Darshan Raval - Tera Zikr", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})

// songItems.addEventListener('click', ()=>{
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play();
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//         gif.style.opacity = 1;
//     }
//     else{
//         audioElement.pause();
//         masterPlay.classList.remove('fa-pause-circle');
//         masterPlay.classList.add('fa-play-circle');
//         gif.style.opacity = 0;
//     }
// })

boond.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.src = `songs/1.mp3`;
    masterSongName.innerText = songs[0].songName;

        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        makeAllPlays();
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

katra.addEventListener('click', ()=>{
    if(audioElement2.paused || audioElement2.currentTime<=0){
        audioElement2.src = `songs/2.mp3`;
    masterSongName.innerText = songs[1].songName;
        
        audioElement2.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        makeAllPlays();
    }
    else{
        audioElement2.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

dhoondne.addEventListener('click', ()=>{
    if(audioElement3.paused || audioElement3.currentTime<=0){
        audioElement3.src = `songs/3.mp3`;
    masterSongName.innerText = songs[2].songName;
        audioElement3.play();
        
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        makeAllPlays();
    }
    else{
        audioElement3.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

raabta.addEventListener('click', ()=>{
    if(audioElement4.paused || audioElement4.currentTime<=0){

        audioElement4.src = `songs/4.mp3`;
        masterSongName.innerText = songs[3].songName;

        audioElement4.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement4.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

sanam.addEventListener('click', ()=>{
    if(audioElement5.paused || audioElement5.currentTime<=0){

        audioElement5.src = `songs/5.mp3`;
    masterSongName.innerText = songs[4].songName;
        audioElement5.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement5.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

jabtak.addEventListener('click', ()=>{
    if(audioElement6.paused || audioElement6.currentTime<=0){

        audioElement6.src = `songs/6.mp3`;
    masterSongName.innerText = songs[5].songName;
        audioElement6.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement6.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

kaun.addEventListener('click', ()=>{
    if(audioElement7.paused || audioElement7.currentTime<=0){

        audioElement7.src = `songs/7.mp3`;
        masterSongName.innerText = songs[6].songName;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        audioElement7.play();
        document.getElementById("demo").innerHTML = audioElement.currentTime;
    }
    else{
        
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
        audioElement7.pause();
        document.getElementById("demo").innerHTML = audioElement.currentTime;
    }
})


dil.addEventListener('click', ()=>{
    if(audioElement8.paused || audioElement8.currentTime<=0){

        audioElement8.src = `songs/8.mp3`;
    masterSongName.innerText = songs[7].songName;
        audioElement8.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement8.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
lamhe.addEventListener('click', ()=>{
    if(audioElement9.paused || audioElement9.currentTime<=0){

        audioElement9.src = `songs/9.mp3`;
    masterSongName.innerText = songs[8].songName;
        audioElement9.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement9.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
zikr.addEventListener('click', ()=>{
    if(audioElement10.paused || audioElement10.currentTime<=0){

        audioElement10.src = `songs/10.mp3`;
        masterSongName.innerText = songs[9].songName;
        audioElement10.play();
        // nine.classList.remove('fa-play-circle');
        // nine.classList.add('fa-pause-circle');
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement10.pause();
        // nine.classList.remove('fa-pause-circle');
        // nine.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})


// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
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
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})



setInterval(myFunction, 1000);

// audioElement.ontimeupdate = function() {myFunction()};

function myFunction() {
  // Display the current position of the video in a p element with id="demo"
  let seconds= parseInt(audioElement.currentTime);
  let minutes = Math.floor(seconds / 60);
  let extraSeconds = seconds % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;

  document.getElementById("demo").innerHTML=minutes+":"+extraSeconds;

}
// function myFunction() {
//     // Display the current position of the video in a p element with id="demo"
//     let seconds= parseInt(audioElement7.currentTime);
//     let minutes = Math.floor(seconds / 60);
//     let extraSeconds = seconds % 60;
//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;
  
//     document.getElementById("demo").innerHTML=minutes+":"+extraSeconds;
  
//   }




// document.getElementById("demo").innerHTML 


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}



Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);

        // audioElement.src = `songs/${songIndex+1}.mp3`;
        //     masterSongName.innerText = songs[songIndex].songName;
        //     audioElement.currentTime = 0;
        //     audioElement.play();
        //     gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = `songs/${songIndex+1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            document.getElementById("demo").innerHTML = audioElement.currentTime;
            audioElement.currentTime = 0;
            audioElement.play();
            audioElement.loop=true;
            gif.style.opacity = 1;
        
        if(audioElement.paused || audioElement.currentTime>=0)
        {
            // || audioElement.currentTime<=0
            // audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = `songs/${songIndex+1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            document.getElementById("demo").innerHTML = audioElement.currentTime;
            audioElement.currentTime = 0;
            audioElement.play();
            audioElement.loop=true;
            gif.style.opacity = 1;
        }
        else 
        {
            // audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
            // audioElement.src = `songs/${songIndex+1}.mp3`;
            // masterSongName.innerText = songs[songIndex].songName;
            document.getElementById("demo").innerHTML = audioElement.currentTime;
            audioElement.pause();
            audioElement.loop=true;
            gif.style.opacity = 1;
           

        }
            

        if(audioElement.paused || audioElement.currentTime<=0)
        {

            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        }
        else
        {
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');

        }
    })
})

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
    gif.style.opacity = 1;
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
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})



document.querySelector(".home").click();