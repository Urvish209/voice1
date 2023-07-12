const speakButton = document.getElementById('bolochalo');
    const textInput = document.getElementById('text');
    const languageSelect = document.getElementById('lanselect');

    speakButton.addEventListener('click', () => {
      const text = textInput.value;
      const language = languageSelect.value;

      if ('speechSynthesis' in window) {
        const speech = new SpeechSynthesisUtterance(text);
        speech.lang = language;
        window.speechSynthesis.speak(speech);
      } else {
        console.log('Text-to-speech not supported in this browser.');
      }
    });