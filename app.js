// const btn = document.querySelector('.talk');
// const content = document.querySelector('.content');

// function speak(text) {
//     const text_speak = new SpeechSynthesisUtterance(text);
    
//     // Set the voice to a female voice
//     const voices = window.speechSynthesis.getVoices();
//     text_speak.voice = voices.find(voice => voice.name === "Google UK English Female") || voices[0];
    
//     text_speak.rate = 1;
//     text_speak.volume = 1;
//     text_speak.pitch = 1;
    
//     window.speechSynthesis.speak(text_speak);
// }

// function wishMe() {
//     const day = new Date();
//     const hour = day.getHours();

//     if (hour >= 0 && hour < 12) {
//         speak("Good Morning! How can I assist you today?");
//     } else if (hour >= 12 && hour < 17) {
//         speak("Good Afternoon! How can I assist you today?");
//     } else {
//         speak("Good Evening! How can I assist you tonight?");
//     }
// }

// window.addEventListener('load', () => {
//     // Wait for voices to be loaded
//     window.speechSynthesis.onvoiceschanged = () => {
//         speak("Initializing your personal assistant...");
//         wishMe();
//     };
// });

// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// const recognition = new SpeechRecognition();

// recognition.onresult = (event) => {
//     const currentIndex = event.resultIndex;
//     const transcript = event.results[currentIndex][0].transcript;
//     content.textContent = transcript;
//     takeCommand(transcript.toLowerCase());
// };

// btn.addEventListener('click', () => {
//     content.textContent = "Listening...";
//     recognition.start();
// });

// function takeCommand(message) {
//     if (message.includes('hey') || message.includes('hello')) {
//         speak("Hello! How may I help you?");
//     } else if (message.includes('good morning')) {
//         speak("Good Morning! Hope you have a wonderful day!");
//     } else if (message.includes('good afternoon')) {
//         speak("Good Afternoon! How can I assist you?");
//     } else if (message.includes('good evening')) {
//         speak("Good Evening! How can I help you tonight?");
//     } else if (message.includes('good night')) {
//         speak("Good Night! Have a restful sleep!");
//     } else if (message.includes("open google")) {
//         window.open("https://google.com", "_blank");
//         speak("Opening Google...");
//     } else if (message.includes("open youtube")) {
//         window.open("https://youtube.com", "_blank");
//         speak("Opening YouTube...");
//     } else if (message.includes("open facebook")) {
//         window.open("https://facebook.com", "_blank");
//         speak("Opening Facebook...");
//     } else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
//         window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
//         const finalText = "Here's what I found on the internet about " + message;
//         speak(finalText);
//     } else if (message.includes('wikipedia')) {
//         window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
//         const finalText = "Here's what I found on Wikipedia about " + message;
//         speak(finalText);
//     } else if (message.includes('time')) {
//         const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
//         const finalText = "The current time is " + time;
//         speak(finalText);
//     } else if (message.includes('date')) {
//         const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
//         const finalText = "Today's date is " + date;
//         speak(finalText);
//     } else if (message.includes('calculator')) {
//         window.open('Calculator:///');
//         const finalText = "Opening Calculator";
//         speak(finalText);
//     } else {
//         window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
//         const finalText = "I found some information for " + message + " on Google";
//         speak(finalText);
//     }
// }



const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);
    
    // Set the voice to a female voice
    const voices = window.speechSynthesis.getVoices();
    text_speak.voice = voices.find(voice => voice.name === "Google UK English Female") || voices[0];
    
    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;
    
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    const day = new Date();
    const hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning! How can I assist you today?");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon! How can I assist you today?");
    } else {
        speak("Good Evening! How can I assist you tonight?");
    }
}

window.addEventListener('load', () => {
    // Wait for voices to be loaded
    window.speechSynthesis.onvoiceschanged = () => {
        speak("Initializing your personal assistant...");
        wishMe();
    };
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});

function takeCommand(message) {
    if (message.includes('hey') || message.includes('hello')) {
        speak("Hello! How may I help you?");
    } else if (message.includes('good morning')) {
        speak("Good Morning! Hope you have a wonderful day!");
    } else if (message.includes('good afternoon')) {
        speak("Good Afternoon! How can I assist you?");
    } else if (message.includes('good evening')) {
        speak("Good Evening! How can I help you tonight?");
    } else if (message.includes('good night')) {
        speak("Good Night! Have a restful sleep!");
    } else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening YouTube...");
    } else if (message.includes("open facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...");
    } else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "Here's what I found on the internet about " + message;
        speak(finalText);
    } else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
        const finalText = "Here's what I found on Wikipedia about " + message;
        speak(finalText);
    } else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        const finalText = "The current time is " + time;
        speak(finalText);
    } else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        const finalText = "Today's date is " + date;
        speak(finalText);
    } else if (message.includes('calculator')) {
        window.open('Calculator:///');
        const finalText = "Opening Calculator";
        speak(finalText);
    } else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on Google";
        speak(finalText);
    }
}
