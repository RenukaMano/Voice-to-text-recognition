let speak = document.getElementById('speak');
    let textarea = document.getElementById('textarea');
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition = new SpeechRecognition();
    speak.addEventListener('click', function () {
        recognition.start();
        textarea.innerHTML = '...speaking';
    })
    
    recognition.onresult = function (e) {
        let transcript = e.results[0][0].transcript;
        textarea.innerHTML = transcript;
        
    }
