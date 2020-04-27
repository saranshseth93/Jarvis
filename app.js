const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const greetings = ['I\'m good you little piece of love', 'Doing good homey', 'Leave me alone'];
const weather = ['Weather is fine', 'Why do you want to know the weather? You are in lockdown!'];

recognition.onstart = function() {
    console.log('voice is activated');
};

recognition.onresult = function(event){
    const current = event.resultIndex;

    const transcript = event.results[0][0].transcript;
    // content.textContent = transcript;

    readOutLoud(transcript);
};

btn.addEventListener('click', () => {
    console.log('hello');
    recognition.start();
});

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I'm sorry, I don't know what you said. Try using my sister Google assistant or Amazon Alexa for better results. I'm too young!";
    if(message.includes('how are you')){
        const finalGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalGreeting;
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}