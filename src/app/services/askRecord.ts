export async function askRecord(): Promise<void> {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
    console.log('Permission granted for recording.');
    console.log(stream);
  } catch (error) {
    console.error('Permission denied for recording:', error);
    // Handle the error, such as showing a message to the user or disabling the recording feature.
  }
}