const audioContext = new AudioContext();

const audioMediaElement = audioContext.createMediaElementSource(
  /** @type {HTMLAudioElement} */ audio
);

await audioContext.audioWorklet.addModule('test-processor.js');
const recorder = new AudioWorkletNode(audioContext, 'test-processor', {
  processorOptions: {
    someUsefulVariable: new Map([
      [1, 'one'],
      [2, 'two'],
    ]),
  },
});

/**
 *
 * Objects of these types are designed to hold small audio snippets,
 * typically less than 45 s. For longer sounds, objects implementing
 * the MediaElementAudioSourceNode are more suitable.
 * The buffer contains data in the following format:
 * non-interleaved IEEE754 32-bit linear PCM (LPCM)
 * with a nominal range between -1 and +1, that is, a 32-bit floating point buffer,
 * with each sample between -1.0 and 1.0.
 * @param {ArrayBufferLike|Float32Array} data
 */
const convertFloatToAudioBuffer = (data) => {
  const sampleRate = 8000 | audioContext.sampleRate;
  const channels = 1;
  const sampleLength = 128 | data.length; // 1sec = sampleRate * 1
  const audioBuffer = audioContext.createBuffer(
    channels,
    sampleLength,
    sampleRate
  ); // Empty Audio
  audioBuffer.copyToChannel(new Float32Array(data), 0); // depending on your processing this could be already a float32array
  return audioBuffer;
};
let startAt = 0;
const streamDestination = audioContext.createMediaStreamDestination();
/**
 * Note this is a minimum example it plays only the first sound
 * it uses the main audio context if it would use a
 * streamDestination = context.createMediaStreamDestination();
 *
 * @param {ArrayBufferLike|Float32Array} data
 */
const play = (data) => {
  const audioBufferSourceNoce = audioContext.createBufferSource();
  audioBufferSourceNoce.buffer = convertFloatToAudioBuffer(data);

  const context = audioContext; // streamDestination; // creates a MediaStream on streamDestination.stream property
  audioBufferSourceNoce.connect(context);

  // here you will need a hugh enqueue algo that is out of scope for this answer
  startAt = Math.max(context.currentTime, startAt);
  source.start(startAt);
  startAt += buffer.duration;
  audioBufferSourceNoce.start(startAt);
};

// Here is your raw arrayBuffer ev.data
recorder.port.onmessage = (ev) => play(ev.data);

// connect the processor with the source
audioMediaElement.connect(recorder);
