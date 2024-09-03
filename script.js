document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.container');

    setTimeout(function () {
        container.classList.add('visible');
    }, 300); 
});

function letGo() {
    let music = document.getElementById("background-music");
    music.play(); // Start playing the music

    let thought = document.getElementById("thought").value;
    let inputField = document.getElementById("thought");
    let button = document.querySelector("button");
    let worryStar = document.getElementsByClassName("input-star")[0];

    worryStar.innerHTML = thought;

    inputField.classList.add('hidden');
    button.classList.add('hidden');

    setTimeout(function() {
        const finalScale = 1 / worryStar.offsetWidth;
        worryStar.style.transition = "transform 80s ease"; 
        worryStar.style.transform = `scale(${finalScale})`;

        // Trigger the fade-in of the last two phrases after the star disappears
        setTimeout(showFinalPhrases, 80000); // 80s matches the shrinking duration
    }, 2000); 

    let phrases = [
        "Relax and watch your thought float away into the space",
        "Let's start by taking a deep breath in... and feel the solace ",
        "...breathe out slowly, letting go of all that weighs you down",
        "Everything is okay, you're more than enough, and you are in control ",
        "You're doing just fine, keep moving forward with confidence",
        "Life is more valuable than this thought... and so are you",
        "The universe spans over 93 billion light years of wonders or maybe infinite" ,
        "Our galaxy is small, but it holds countless number of possibilities",
        "Our sun is tiny compared to the vastness of the universe",
        "Earth is just a minuscule in the cosmos, yet it is our home",
        "Our cities are insignificant in the grand scale of the universe",
        "You are microscopic, yet you have the power to change",
        "This thought does not matter in the grand scheme of life",
        "It will easily fade away with ease, just like a passing cloud",
        "And life will continue to move forward, as it always does"
    ];

    let currentPhraseIndex = 0;
    let h1Element = document.getElementById("changing-text");

    function changeText() {
        if (currentPhraseIndex < phrases.length) {
            h1Element.style.opacity = '0';

            setTimeout(function() {
                h1Element.innerHTML = phrases[currentPhraseIndex];
                currentPhraseIndex++;

                h1Element.style.opacity = '0.8';

                if (currentPhraseIndex < phrases.length) {
                    setTimeout(changeText, 3000); 
                } else {
                    // Fade out the last phrase after it appears
                    setTimeout(function() {
                        h1Element.style.transition = 'opacity 6s ease';
                        h1Element.style.opacity = '0';
                    }, 3000); // Start fade out after 3 seconds
                }
            }, 2000); 
        }
    }

    changeText();

    function showFinalPhrases() {
        let finalPhrase = `
            Hope you feel better and keep going :><br>
            - Zanjoweeee -
        `;

        let container = document.querySelector('.container');
        container.innerHTML = ''; // Clear existing content

        let pElement = document.createElement('p');
        pElement.innerHTML = finalPhrase;
        pElement.style.opacity = '0';
        pElement.style.transition = 'opacity 6s ease';
        pElement.style.textAlign = 'center';
        pElement.style.fontSize = '38px'; 
        pElement.style.fontWeight = 'bold';
        pElement.style.lineHeight = '1.33'; 
        pElement.style.marginBottom = '33px';// Adjust line spacing
        container.appendChild(pElement);

        // Fade in the text
        setTimeout(function() {
            pElement.style.opacity = '1';
        }, 500); // Slight delay to ensure smooth fade-in

        // Ensure music is still playing
        setTimeout(function() {
            if (music.paused) {
                music.play(); // Play the music again if it paused
            }
        }, 1000);
    }
}
