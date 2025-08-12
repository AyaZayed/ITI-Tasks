// ** QUESTION 1 - TEXTBOX TO SPECIFY WHICH MOUSE BUTTON CLICKED **

const textbox = document.querySelector("#textbox")

textbox.addEventListener('mousedown', (e) => {
        alert(`Mouse button clicked: ${e.button}`)
});

// ** QUESTION 2 - CLOCK **

let clockInterval;
const clockBtn = document.querySelector('#clock-btn')
clockBtn.insertAdjacentHTML('afterend', `<p id="clock"></p>`)
const clockElement = document.querySelector('#clock')

clockBtn.addEventListener('click', () => {
        alert('Time started')
        startClock()
})

function startClock() {
        clockInterval = setInterval(() => {
                const now = new Date().toLocaleTimeString();
                clockElement.textContent = now;
        }, 1000);
}

function stopClock(e, isAlt) {
        if (e.altKey === isAlt && (e.key === 'q' || e.key === 'Q' || e.key === 'ض')) {
                if (clockInterval) {
                        clearInterval(clockInterval);
                        alert("Clock stopped");
                }
        }
}

function altQ() {
        document.addEventListener('keydown', (e) => {
                stopClock(e, true)
        })
}

function justQ() {
        document.addEventListener('keydown', (e) => {
                stopClock(e, false)
        })
}

// TODO Uncomment to see difference
// altQ()
justQ()

// ** QUESTION 3 - TEXTBOX THAT ACCEPTS ONLY SPECIFIED INPUT **

const alphabetInput = document.querySelector('#alphabet')

function acceptLettersOnly() {
        alphabetInput.addEventListener('keydown', (e) => {
                e.stopPropagation()
                const pattern = /^\p{L}+$/u
                if (pattern.test(e.key)) {
                        return console.log(e.key);
                }
                e.preventDefault()
        })
}

acceptLettersOnly()

// ** QUESTION 4 - SIMPLE SLIDER **

const sliderImg = document.querySelector('.slider img')
const nextBtn = document.querySelector('.slider #next')
const prevBtn = document.querySelector('.slider #prev')

const images = [
        {
                src: "https://images.unsplash.com/photo-1741377772075-5f0f0d21d6b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D",
                alt: "Photographer's equipment arranged neatly on a wooden table."
        },
        {
                src: "https://plus.unsplash.com/premium_photo-1740992237716-2bb9f560cc6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D",
                alt: "Gas station illuminated by spotlights in darkness."
        }, {
                src: "https://images.unsplash.com/photo-1734779206719-864dbdae36d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fHw%3D",
                alt: "A close up of a black and white pattern"
        },

]

let currentImgIdx = 0;

function updateSlider() {
        sliderImg.setAttribute('src', images[currentImgIdx].src);
        sliderImg.setAttribute('alt', images[currentImgIdx].alt);
}

nextBtn.addEventListener('click', () => {
        currentImgIdx++;
        if (currentImgIdx >= images.length) {
                currentImgIdx = 0;
        }
        updateSlider();
});

prevBtn.addEventListener('click', () => {
        currentImgIdx--;
        if (currentImgIdx < 0) {
                currentImgIdx = images.length - 1;
        }
        updateSlider();
});


// ** QUESTION 5 - CHANGE IMAGE OPACITY WHEN HOVERED **

const opacityImg = document.querySelector('.gallery')

opacityImg.addEventListener("mouseover", (e) => {
        if (e.target.tagName === "IMG") {
                e.target.style.opacity = "0.3";
        }
});

opacityImg.addEventListener("mouseout", (e) => {
        if (e.target.tagName === "IMG") {
                e.target.style.opacity = "1";
        }
});

// ** PREVENT RIGHT CLICK ON IMAGES **

document.body.addEventListener('click', (e) => {
        if (e.target.tagName === "IMG" && e.button === 2) {
                e.preventDefault()
        }
})