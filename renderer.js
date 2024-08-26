const fileInput = document.getElementById('fileInput');
const audioPlayer = document.getElementById('audioPlayer');

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const fileURL = URL.createObjectURL(file);
    audioPlayer.src = fileURL;
  }
});
