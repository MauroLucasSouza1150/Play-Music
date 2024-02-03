const btnPlayPause = document.getElementById("play-pause");
const btnNext = document.getElementById("proximo")
const btnBack = document.getElementById("anterior")
const titleMusic = document.getElementById("nome-music")
const musicAudio = document.getElementById("audio");
const numeroMusicas = 6;
let tocando = 0;
let music1 = 1;

// const nomesMusicas = [
//     "50 Cent 21 Questions",
//     "50 Cent in da Club",
//     "50 Cent just a lil bit",
//     "50 Cent Many men",
//     "50 Cent Pimp",
//     "50 Cent Window Shopper"
// ];

function playMusic() {
    musicAudio.play();
    btnPlayPause.classList.remove("bi-play-circle-fill")
    btnPlayPause.classList.add("bi-pause-circle");
    tocando = true
}

function stopMusic() {
    musicAudio.pause();
    btnPlayPause.classList.add("bi-play-circle-fill")
    btnPlayPause.classList.remove("bi-pause-circle")
    tocando = false
}

function playOrPauseMusic() {
    if (tocando === true) {
        stopMusic()
    } else {
        playMusic()
    }
}

function changeMusic() {
    titleMusic.innerText = " 50 Cent Música " + music1;
}


function nextMusic() {
    if (music1 === numeroMusicas) {
        music1 = 1
    }else {
        music1 = music1 + 1
    }

    musicAudio.src = "./audio/" + music1 + ".mp3" // Inicie automaticamente a próxima música
    playMusic();
    tocando = 1;
    changeMusic();
}

function backMusic() {
    if (music1 === 1) {
        music1 = numeroMusicas;
    }else {
        music1 = music1 - 1;
    }

    musicAudio.src = "./audio/" + music1 + ".mp3" // Inicie automaticamente a música anterior
    playMusic();
    tocando = 1;
    changeMusic();
}

btnPlayPause.addEventListener("click", playOrPauseMusic);
btnNext.addEventListener("click", nextMusic);
btnBack.addEventListener("click", backMusic);