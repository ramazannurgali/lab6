// Array of tracks
const tracks = [
    {
        name: 'Despasito',
        artist: 'luis fonsi',
        src: 'song/Despacito.mp3',
        cover: 'photoss/despasito.jpeg'
    },
    {
        name: 'assasins',
        artist: 'creed valhala',
        src: 'song/assasins.mp3',
        cover: 'photoss/assasins.jpeg'
    },
    {
        name: 'almaty-tyni',
        artist: 'Kairat Nurtas',
        src: 'song/almaty-tyni.mp3',
        cover: 'photoss/almatytuniph.jpeg'
    }
];

// DOM Elements
const cover = document.getElementById('cover');
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const trackName = document.getElementById('track-name');
const artistName = document.getElementById('artist-name');
const trackList = document.getElementById('track-list');

let currentTrackIndex = 0;

// Load the initial track
function loadTrack(index) {
    const track = tracks[index];
    audio.src = track.src;
    cover.src = track.cover;
    trackName.textContent = track.name;
    artistName.textContent = track.artist;
}

// Play or pause the track
function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = '❚❚'; // Pause icon
    } else {
        audio.pause();
        playPauseBtn.textContent = '▶'; // Play icon
    }
}

// Play the next track
function playNext() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
    playPauseBtn.textContent = '❚❚'; // Update button to pause
}

// Play the previous track
function playPrev() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
    playPauseBtn.textContent = '❚❚'; // Update button to pause
}

// Populate the track list
function populateTrackList() {
    tracks.forEach((track, index) => {
        const li = document.createElement('li');
        li.textContent = `${track.name} - ${track.artist}`;
        li.addEventListener('click', () => {
            currentTrackIndex = index;
            loadTrack(currentTrackIndex);
            audio.play();
            playPauseBtn.textContent = '❚❚'; // Update button to pause
        });
        trackList.appendChild(li);
    });
}

// Event Listeners
playPauseBtn.addEventListener('click', togglePlayPause);
nextBtn.addEventListener('click', playNext);
prevBtn.addEventListener('click', playPrev);

// Initialize the player
loadTrack(currentTrackIndex);
populateTrackList();
