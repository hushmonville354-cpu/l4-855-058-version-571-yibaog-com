import { H as Hls } from "./hls-vendor.js";

export function initVideoPlayer(source) {
    function setup() {
        var video = document.querySelector("[data-player-video]");
        var overlay = document.querySelector("[data-player-overlay]");
        var button = document.querySelector("[data-player-button]");
        if (!video || !source) {
            return;
        }

        var hlsInstance = null;
        var nativeHls = video.canPlayType("application/vnd.apple.mpegurl");

        if (nativeHls) {
            video.src = source;
        } else if (Hls.isSupported()) {
            hlsInstance = new Hls({
                enableWorker: true,
                lowLatencyMode: true
            });
            hlsInstance.loadSource(source);
            hlsInstance.attachMedia(video);
            hlsInstance.on(Hls.Events.ERROR, function (event, data) {
                if (!data || !data.fatal) {
                    return;
                }
                if (data.type === Hls.ErrorTypes.NETWORK_ERROR) {
                    hlsInstance.startLoad();
                } else if (data.type === Hls.ErrorTypes.MEDIA_ERROR) {
                    hlsInstance.recoverMediaError();
                } else {
                    hlsInstance.destroy();
                }
            });
        } else {
            video.src = source;
        }

        function startPlayback() {
            if (overlay) {
                overlay.classList.add("is-hidden");
            }
            video.play().catch(function () {});
        }

        if (overlay) {
            overlay.addEventListener("click", startPlayback);
        }
        if (button) {
            button.addEventListener("click", startPlayback);
        }
        video.addEventListener("click", function () {
            if (video.paused) {
                startPlayback();
            }
        });
        video.addEventListener("play", function () {
            if (overlay) {
                overlay.classList.add("is-hidden");
            }
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", setup);
    } else {
        setup();
    }
}
