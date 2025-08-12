const audio = document.querySelector('audio')
const audioPlayer = document.querySelector('.audio-player')
const timeRange = document.querySelector('#timeRange')
const volumeRange = document.querySelector('#volumeRange')
const play = document.querySelector('#play')
const pause = document.querySelector('#pause')
const stop = document.querySelector('#stop')
const backward = document.querySelector('#backward')
const forward = document.querySelector('#forward')
const volumeBtn = document.querySelector('#volumeBtn')
const highVolume = document.querySelector('#highVolume')
const lowVolume = document.querySelector('#lowVolume')
const noVolume = document.querySelector('#noVolume')
const songTitle = document.querySelector('#songTitle')
const songImg = document.querySelector('#songImg')
const current = document.querySelector('#current')
const duration = document.querySelector('#duration')

const activeColor = "#55354F";
const inactiveColor = "#00000014";

window.addEventListener("load", function () {
        timeRange.setAttribute("max", audio.duration)
        setRangeBackground(audio.volume, audio.currentTime)
        setRangeBackground(audio.volume, audio.currentTime)
        setVolumeIcon(audio.volume)
        duration.innerText = `${Math.floor(audio.duration / 60)} : ${Math.floor(audio.duration % 60)}`
})

play.addEventListener('click', function () {
        audio.play()
})

pause.addEventListener('click', function () {
        audio.pause()
})

stop.addEventListener('click', function () {
        audio.pause()
        audio.currentTime = 0
})

audio.addEventListener("timeupdate", function () {
        var minutes = Math.floor(audio.currentTime / 60)
        var seconds = Math.floor(audio.currentTime % 60)
        current.innerText = `${minutes} : ${seconds}`
        timeRange.value = audio.currentTime
        setRangeBackground(audio.volume, audio.currentTime)
})

timeRange.addEventListener("change", function () {
        audio.currentTime = timeRange.value
})

volumeRange.addEventListener("input", function () {
        audio.volume = volumeRange.value
        setVolumeIcon(audio.volume)
})

audio.addEventListener("volumechange", function () {
        volumeRange.value = audio.volume
        setVolumeIcon(audio.volume)
        setRangeBackground(audio.volume, audio.currentTime)
})

function setRangeBackground(vol = 1, time = 0) {
        time = (time / audio.duration) * 100
        timeRange.style.background = `linear-gradient(90deg, ${activeColor} ${time}% , ${inactiveColor} ${time}%)`;
        volumeRange.style.background = `linear-gradient(90deg, ${activeColor} ${vol * 100}% , ${inactiveColor} ${vol * 100}%)`;
}

volumeBtn.addEventListener('click', function () {
        audio.muted = !audio.muted

        if (audio.muted) {
                audio.volume = 0
        } else {
                audio.volume = 1
        }

        setVolumeIcon(audio.volume)
})

function setVolumeIcon(vol) {

        if (vol === 0) {
                highVolume.style.display = 'none'
                lowVolume.style.display = 'none'
                noVolume.style.display = 'block'
        } else if (vol > 0 && vol <= 0.5) {
                highVolume.style.display = 'none'
                lowVolume.style.display = 'block'
                noVolume.style.display = 'none'
        } else {
                highVolume.style.display = 'block'
                lowVolume.style.display = 'none'
                noVolume.style.display = 'none'
        }
}

const songs = [
        {
                title: "Alemoony Ainayk",
                song: "./assets/audio/02.Alemoony_Ainayk.mp3",
                img: './assets/images/3alemony_enhanced.jpg'
        },
        {
                title: "Shababek",
                song: "./assets/audio/05.Shababek.mp3",
                img: './assets/images/shababik_enhanced.jpg'
        },
        {
                title: "Madad",
                song: "./assets/audio/06.Madad.mp3",
                img: './assets/images/madad_enhanced.jpg'
        }
]

let currentIndex = 0

function setSong(idx) {
        songImg.setAttribute('src', songs[idx].img)
        songImg.setAttribute('alt', `${songs[idx].title} image`)
        songTitle.textContent = songs[idx].title
        audio.setAttribute('src', songs[idx].song)
        setRangeBackground(1, 0)
}

forward.addEventListener('click', function () {
        currentIndex++
        if (currentIndex === songs.length) currentIndex = 0
        setSong(currentIndex)
})

backward.addEventListener('click', function () {
        currentIndex--
        if (currentIndex === 0) currentIndex = songs.length - 1
        setSong(currentIndex)
})