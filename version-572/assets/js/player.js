import { H as Hls } from './hls.js';

const shell = document.querySelector('[data-player]');
const video = document.querySelector('#video-player');
const bigButton = document.querySelector('[data-player-play]');
const toggleButton = document.querySelector('[data-player-toggle]');
const muteButton = document.querySelector('[data-player-mute]');
const fullscreenButton = document.querySelector('[data-player-fullscreen]');
const progress = document.querySelector('[data-player-progress]');
const currentTime = document.querySelector('[data-current-time]');
const durationTime = document.querySelector('[data-duration]');
const statusText = document.querySelector('[data-player-status]');

let hls = null;
let initialized = false;

function formatTime(value) {
  if (!Number.isFinite(value) || value < 0) {
    return '0:00';
  }

  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

function setStatus(message) {
  if (statusText) {
    statusText.textContent = message;
  }
}

function initializePlayer() {
  if (initialized || !shell || !video) {
    return;
  }

  const source = shell.dataset.videoSrc;

  if (!source) {
    setStatus('暂无播放源');
    return;
  }

  if (Hls.isSupported()) {
    hls = new Hls({
      enableWorker: true,
      lowLatencyMode: true,
    });

    hls.loadSource(source);
    hls.attachMedia(video);

    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      setStatus('播放源已就绪');
    });

    hls.on(Hls.Events.ERROR, (_event, data) => {
      if (!data?.fatal) {
        return;
      }

      setStatus('播放遇到问题，正在尝试恢复');

      if (data.type === Hls.ErrorTypes.NETWORK_ERROR) {
        hls.startLoad();
      } else if (data.type === Hls.ErrorTypes.MEDIA_ERROR) {
        hls.recoverMediaError();
      } else {
        hls.destroy();
      }
    });
  } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = source;
    setStatus('播放源已就绪');
  } else {
    setStatus('当前浏览器不支持 HLS 播放');
  }

  initialized = true;
}

async function togglePlayback() {
  if (!video) {
    return;
  }

  initializePlayer();

  try {
    if (video.paused) {
      await video.play();
    } else {
      video.pause();
    }
  } catch (error) {
    setStatus('播放被浏览器拦截，请再次点击播放');
  }
}

function updateState() {
  if (!video || !shell) {
    return;
  }

  const isPlaying = !video.paused;
  shell.classList.toggle('is-playing', isPlaying);

  if (toggleButton) {
    toggleButton.textContent = isPlaying ? '暂停' : '播放';
  }

  setStatus(isPlaying ? '正在播放' : '已暂停');
}

function updateProgress() {
  if (!video || !progress) {
    return;
  }

  progress.max = Number.isFinite(video.duration) ? String(video.duration) : '0';
  progress.value = Number.isFinite(video.currentTime) ? String(video.currentTime) : '0';

  if (currentTime) {
    currentTime.textContent = formatTime(video.currentTime);
  }

  if (durationTime) {
    durationTime.textContent = formatTime(video.duration);
  }
}

bigButton?.addEventListener('click', togglePlayback);
toggleButton?.addEventListener('click', togglePlayback);
video?.addEventListener('click', togglePlayback);
video?.addEventListener('play', updateState);
video?.addEventListener('pause', updateState);
video?.addEventListener('timeupdate', updateProgress);
video?.addEventListener('durationchange', updateProgress);
video?.addEventListener('loadedmetadata', updateProgress);

progress?.addEventListener('input', () => {
  if (!video || !progress) {
    return;
  }

  video.currentTime = Number(progress.value || 0);
});

muteButton?.addEventListener('click', () => {
  if (!video) {
    return;
  }

  video.muted = !video.muted;
  muteButton.textContent = video.muted ? '取消静音' : '静音';
});

fullscreenButton?.addEventListener('click', () => {
  if (!shell) {
    return;
  }

  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    shell.requestFullscreen();
  }
});

window.addEventListener('beforeunload', () => {
  hls?.destroy();
});
