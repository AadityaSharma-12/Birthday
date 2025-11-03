const music = document.getElementById('bg-music');
const btn = document.getElementById('music-btn');

const MUSIC_TIME_KEY = 'music_time';
const MUSIC_STATE_KEY = 'music_playing';

// Restore last playback time and state
const savedTime = parseFloat(localStorage.getItem(MUSIC_TIME_KEY));
if (!isNaN(savedTime)) music.currentTime = savedTime;

const savedPlaying = localStorage.getItem(MUSIC_STATE_KEY) === 'true';

// Helper to update button icon
const updateMusicButton = () => {
    btn.textContent = music.paused ? '🔇' : '🎵';
};

// Play music automatically if it was playing before
if (savedPlaying) {
    music.volume = 0.25;
    music.play().catch(() => {}); // ignore autoplay errors
}

updateMusicButton();

// Toggle music on button click
btn.addEventListener('click', () => {
    if (music.paused) {
        music.volume = 0.25;
        music.play();
    } else {
        music.pause();
    }
    updateMusicButton();
    localStorage.setItem(MUSIC_STATE_KEY, !music.paused);
});

// Update button icon on play/pause events
music.addEventListener('play', updateMusicButton);
music.addEventListener('pause', updateMusicButton);

// Save current time and state before leaving page
window.addEventListener('beforeunload', () => {
    localStorage.setItem(MUSIC_TIME_KEY, music.currentTime);
    localStorage.setItem(MUSIC_STATE_KEY, !music.paused);
});
