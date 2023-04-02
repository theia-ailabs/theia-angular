function textSpeech() {
  const msg = new SpeechSynthesisUtterance();
  const voices = window.speechSynthesis.getVoices();
  msg.voice = voices[10];
  msg.volume = 1; // From 0 to 1
  msg.rate = 1; // From 0.1 to 10
  msg.pitch = 2; // From 0 to 2
  msg.text = 'Como estas Joel';
  msg.lang = 'es';
  speechSynthesis.speak(msg);
}
