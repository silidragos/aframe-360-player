//Videos of multiple scenes, each from different angles
//Before each video, it is paused and graphic info appears
class BiologyController {

    constructor() {
        this._handleTimeUpdate = this._handleTimeUpdate.bind(this);

        this.skybox = document.getElementById("skybox");
        this.nextVideoBut = document.getElementById("next-video");
        this.rotateLeftBut = document.getElementById("go-around-left");
        this.rotateRightBut = document.getElementById("go-around-right");
        this.videos = [
            {
                idx: 0,
                videoId: 'h_front',
                pauseAt: 9
            },
            {
                idx: 0,
                videoId: 'h_side',
                pauseAt: 6.5
            }, {
                idx: 0,
                videoId: 'h_back',
                pauseAt: 1.5
            },
            {
                idx: 1,
                videoId: 'g_side',
                pauseAt: 2.5
            },
            {
                idx: 2,
                videoId: 'run_front',
                pauseAt: 0
            },
            {
                idx: 2,
                videoId: 'run_side',
                pauseAt:0
            }, {
                idx: 3,
                videoId: 'swimming',
                pauseAt:6
            }
        ];

        this.currentIdx = 0;

        this.nextVideoBut.addEventListener("click", () => {
            this.setNextVideo();
        })
        this.rotateLeftBut.addEventListener("click", () => {
            this.rotateVideoLeft();
        });
        this.rotateRightBut.addEventListener("click", () => {
            this.rotateVideoRight();
        });
        this.setState(0);

    }


    setState(idx) {
        this.currentIdx = idx;

        if (this.currentVideo !== undefined) {
            this.currentVideo.removeEventListener("timeupdate", this._handleTimeUpdate);
        }
        this.currentVideo = document.getElementById(this.videos[this.currentIdx].videoId);
        this.currentVideo.currentTime = 0;
        this.wasPaused = false;
        this.currentVideo.addEventListener("timeupdate", this._handleTimeUpdate);

        this.skybox.setAttribute('src', "#" + this.videos[idx].videoId);

        if (idx > 0 && this.videos[idx].idx === this.videos[idx - 1].idx) {
            this.rotateLeftBut.setAttribute("visible", true);
            this.rotateLeftBut.classList.add("raycastable");
        } else {
            this.rotateLeftBut.setAttribute("visible", false);
            this.rotateLeftBut.classList.remove("raycastable");
        }

        if (idx < this.videos.length - 1 && this.videos[idx].idx === this.videos[idx + 1].idx) {
            this.rotateRightBut.setAttribute("visible", true);
            this.rotateRightBut.classList.add("raycastable");
        } else {
            this.rotateRightBut.setAttribute("visible", false);
            this.rotateRightBut.classList.remove("raycastable");
        }

        if (this.videos[idx].idx < this.videos[this.videos.length - 1].idx) {
            this.nextVideoBut.setAttribute("visible", true);
            this.nextVideoBut.classList.add("raycastable");
        } else {
            this.nextVideoBut.setAttribute("visible", false);
            this.nextVideoBut.classList.remove("raycastable");
        }
        console.log("idx", idx);
        setTimeout(() => {
            document.dispatchEvent(new Event("skyboxUpdated"));
        }, 500);
    }

    _handleTimeUpdate() {
        console.log(this.currentVideo.currentTime);
        if(this.currentVideo.currentTime > this.videos[this.currentIdx].pauseAt && !this.wasPaused){
            console.log("Paused!");
            this.wasPaused = true;
            this.currentVideo.pause();
        }
    }

    setNextVideo() {
        let idx = this.currentIdx;
        while (idx < this.videos.length && this.videos[idx].idx === this.videos[this.currentIdx].idx) {
            idx++;
        }

        if (idx < this.videos.length) {
            this.setState(idx);
        }
    }

    rotateVideoLeft() {
        let idx = this.currentIdx;
        if (this.videos[idx - 1].idx === this.videos[idx].idx) {
            this.setState(idx - 1);
        }
    }

    rotateVideoRight() {
        let idx = this.currentIdx;
        if (this.videos[idx + 1].idx === this.videos[idx].idx) {
            this.setState(idx + 1);
        }
    }
}

let biologyController = new BiologyController();