const dropArea = document.getElementById('dropArea');
const songList = document.getElementById('songList');
let songArray = [];
let currentSongIndex = 0;
let audio = new Audio();

dropArea.addEventListener('dragover', (event) => {
    event.preventDefault();
    dropArea.style.borderColor = 'green';
});

dropArea.addEventListener('dragleave', () => {
    dropArea.style.borderColor = '#ccc';
});

dropArea.addEventListener('drop', (event) => {
    event.preventDefault();
    dropArea.style.borderColor = '#ccc';

    const files = Array.from(event.dataTransfer.files);
    const filePaths = files.map(file => file.path);
    window.electron.sendDroppedFiles(filePaths);
});

window.electron.onDroppedFiles((filePaths) => {
    songArray.push(...filePaths);
    updateSongList();
});

document.getElementById('playPause').addEventListener('click', () => {
    if (audio.paused && songArray.length > 0) {
        audio.src = songArray[currentSongIndex];
        audio.play();
    } else {
        audio.pause();
    }
});

function updateSongList() {
    songList.innerHTML = '';
    songArray.forEach((song) => {
        const li = document.createElement('li');
        li.textContent = path.basename(song);
        songList.appendChild(li);
    });
}
