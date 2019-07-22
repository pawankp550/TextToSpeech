const talk = document.getElementById('talk');
const transcript = document.getElementById('transcript');

const speechRecog =  window.speechRecognition || window.webkitSpeechRecognition;
const speechRecognition = new speechRecog();

const loveReply = 'Fuck you piece of shit';
const greetings = [`I'm fine how are you` ]

speechRecognition.onstart = () => {
    console.log("voice is activated");
}

speechRecognition.onresult = (event) => {
    console.log(event);
    console.log(event.results[0][0].transcript);
    let Speechtext = event.results[0][0].transcript;
    transcript.innerHTML = Speechtext;
    readOutLoud(Speechtext);
}

talk.addEventListener('click', ()=>{
    speechRecognition.start();
})

function readOutLoud (text) {
    if(text.includes('I love you')){
        text = 'I love you more';
    }

    if(text.includes('f***')){
        text = 'fuck you too'
    }

    const speech = new SpeechSynthesisUtterance()
    speech.text = text;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}


// SpeechRecognitionEvent {isTrusted: true, resultIndex: 0, results: SpeechRecognitionResultList, interpretation: null, emma: null, …}
// bubbles: false
// cancelBubble: false
// cancelable: false
// composed: false
// currentTarget: SpeechRecognition {grammars: SpeechGrammarList, lang: "", continuous: false, interimResults: false, maxAlternatives: 1, …}
// defaultPrevented: false
// emma: null
// eventPhase: 0
// interpretation: null
// isTrusted: true
// path: []
// resultIndex: 0
// results: SpeechRecognitionResultList
// 0: SpeechRecognitionResult
// 0: SpeechRecognitionAlternative {transcript: "hi", confidence: 0.7595043182373047}
// isFinal: true
// length: 1
// __proto__: SpeechRecognitionResult
// length: 1
// __proto__: SpeechRecognitionResultList
// returnValue: true
// srcElement: SpeechRecognition {grammars: SpeechGrammarList, lang: "", continuous: false, interimResults: false, maxAlternatives: 1, …}
// target: SpeechRecognition {grammars: SpeechGrammarList, lang: "", continuous: false, interimResults: false, maxAlternatives: 1, …}
// timeStamp: 31381.20499998331
// type: "result"
// __proto__: SpeechRecognitionEvent

