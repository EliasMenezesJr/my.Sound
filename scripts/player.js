/* cards */
const titleCard = document.querySelectorAll("h3#title")
const artistCard = document.querySelectorAll("p#artist")
const imgCard = document.querySelectorAll("img#imgCard")
let pos
let isIndex = true;

const buttonIndex = document.querySelector('header .name-project button')

let titleStyleMusic = document.querySelector("img#img-style-music")
console.log();

let mainPrimary = document.querySelector("main#main-primary")
let mainSecond = document.querySelector("main#main-second")

if(isIndex){
    mainPrimary.classList.add("main-primary")
}

/* titleplaying*/
const titlePlaying = document.getElementById('titlePlaying')

/* controls */
const audio = document.querySelector("audio#audio-playing")

const playControl = document.querySelector(".controls #playControl")
playControl.addEventListener("click", playControls)
const pauseControl = document.querySelector(".controls #pauseControl")
pauseControl.addEventListener("click", pauseControls)

const prevControl = document.getElementById('prevControl')
prevControl.addEventListener("click",prevControls)

const nextControl = document.getElementById('nextControl')
nextControl.addEventListener("click",nextControls)

/* volume */
const volumeUp = document.getElementById('volumeUp')
volumeUp.addEventListener("click", ()=>{
    audio.volume+=0.1;
})
const volumeDown = document.getElementById('volumeDown')
volumeDown.addEventListener("click", ()=>{
    audio.volume-=0.1;
})

function autoPlay() {
    playControls();
    audio.volume=0.1;
}

function playControls() {
    audio.play()
}

function pauseControls() {
    audio.pause()
}

function prevControls() {
    newPos = newPos - 1;
    audio.src = window.sounds[numberStyle][newPos].file;
    audio.src = window.sounds[numberStyle][newPos].file;
    titlePlaying.innerHTML =`Playing  -  ${window.sounds[numberStyle][newPos].title}  -  ${window.sounds[numberStyle][newPos].artist}`
    autoPlay()
}

let n = 1
function nextControls() {
    newPos = pos + n;
    n = n + 1
    console.log(newPos);
    audio.src = window.sounds[numberStyle][newPos].file;
    titlePlaying.innerHTML =`Playing  -  ${window.sounds[numberStyle][newPos].title}  -  ${window.sounds[numberStyle][newPos].artist}`
    autoPlay()
}


const styles = document.querySelectorAll("ul#styles li")

buttonIndex.addEventListener('click', ()=>{
    isIndex = true;
    styleSelect()
})

for(let p = 0; p <styles.length; p++){
    styles[p].addEventListener('click',()=> {
        isIndex = false;
        styleSelect()
    })
    
    function styleSelect(){

        numberStyle = p
        
        if(isIndex == false){
            switch(numberStyle){
                case 0:
                titleStyleMusic.src = './assets/icons/rock.png'
                break;
                case 1: 
                titleStyleMusic.src = './assets/icons/hip-hop.png'
                break;
                case 2: 
                titleStyleMusic.src = './assets/icons/dance.png'
                break;
                case 3: 
                titleStyleMusic.src = './assets/icons/country.png'
                break;
            }

            for( let i = 0; i < titleCard.length; i++){
                /* cards */
                titleCard[i].addEventListener("click", addSound)
                imgCard[i].src = `http://lorempixel.com/112/112/sports/${i}`
                titleCard[i].innerText = `${window.sounds[numberStyle][i].title}`
                artistCard[i].innerText = `${window.sounds[numberStyle][i].artist}`
            
                
                /* controls*/
                function addSound(){
                    // audio.src = window.sounds[i].file;
                    titlePlaying.innerHTML =`Playing  -  ${window.sounds[numberStyle][i].title}  -  ${window.sounds[numberStyle][i].artist}`
                    audio.src = window.sounds[numberStyle][i].file
                    pos = i
                    autoPlay()
                }
            }

            // mainPrimary.style.display = "flex"
            // mainSecond.style.display = "none"
            mainPrimary.classList.add("active")
            mainSecond.classList.remove("active")
        } 
        
        else {
            if(numberStyle == 99 || isIndex == true){
                mainPrimary.classList.remove("active")
                mainSecond.classList.add("active")
            } 
        }
    }
}
