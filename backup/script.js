document.addEventListener("DOMContentLoaded", function () {
    const quoteTrack = document.getElementById("quote-track");

    if (!quoteTrack) {
        console.error("Error: .quote-track element not found.");
        return;
    }

    const quotes = [
        "The world is not beautiful. Therefore it is.",
        "So, we began our travels knowing nothing, least of all where we were going.",
        "If you’ve got a problem with the world, change yourself. If that's a problem, close your eyes, shut your mouth, and live like a hermit.",
        "Life is to kill time. Until I die, I have to somehow cope with it.",
        "God knows...",
        "You buddy, still alive?",
        "Awake, arise or be for ever fall’n",
        "Present Day, Present Time.",
        "Roaming in between the worlds of sleep and awake",
        "I thought what I'd do was I'd pretend I was one of those deaf-mutes.",
        "I'm quite illiterate, but I read a lot.",
        "The mind is its own place, and in itself can make a heaven of hell, a hell of heaven.",
        "Better to reign in Hell, than to serve in Heaven.",
        "Never knows best.",
        "To be alive, to walk this very earth ; that’s the real curse right there."
    ];

    function fillTrack() {
        quoteTrack.innerHTML = ""; 

        
        for (let i = 0; i < 2; i++) { 
            quotes.forEach(quote => {
                let span = document.createElement("span");
                span.className = "quote";
                span.textContent = `"${quote}"`;
                quoteTrack.appendChild(span);
            });
        }
    }

    fillTrack();
});
