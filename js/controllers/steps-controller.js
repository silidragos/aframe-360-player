class StepsController {
    constructor() {
        this.idx = 0;
        this.elements = [{
            startTime: 0,
            endTime: 32.0,
            elementToUnhide: null,
            paused: false,
            isNextVideo: true
        }];
        this.videos = [
            ""
        ];

        this.currentVideo = 0;
        this.isVideoReset = true;
        this.video = document.getElementById('video');


        const video = this.video;
        document.addEventListener('keyup', event => {
            if (event.code === 'Space') {
                this.OnNextStep();
            }
        })
        video.addEventListener(
            'timeupdate',
            () => {
                if (this.isVideoReset && video.currentTime >= this.elements[this.idx].endTime) {
                    let oldIdx = this.idx;
                    this.idx += 1;
                    this.SetStep(this.elements[oldIdx], this.elements[this.idx]);
                }
            });
        video.addEventListener(
            'ended',
            () => {
                if (!this.isVideoReset) {
                    console.log("Video resetted because finished.");
                    this.isVideoReset = true;
                    this.SetNextVideo();
                }
            }
        )
    }
    SetStep(oldEl, newEl, isManuallySet = false) {
        if (newEl.paused) {
            this.video.pause();
            document.getElementById("video-control").setAttribute("visible", false);
        } else {
            this.video.play();
            document.getElementById("video-control").setAttribute("visible", true);
        }
        if (!isManuallySet && newEl.isNextVideo) {
            this.isVideoReset = false;
        }

        if (oldEl !== null && oldEl.elementToUnhide !== null) {
            oldEl.elementToUnhide.setAttribute("visible", false);
            let raycastables = oldEl.elementToUnhide.getElementsByClassName("to-raycast");
            console.log("hide", raycastables);
            for (const raycastable of raycastables) {
                raycastable.classList.remove("raycastable");
            }
        }
        if (newEl.elementToUnhide !== null) {
            newEl.elementToUnhide.setAttribute("visible", true); 
            let raycastables = newEl.elementToUnhide.getElementsByClassName("to-raycast");
            console.log("show", raycastables);
            for (const raycastable of raycastables) {
                raycastable.classList.add("raycastable");
            }
        }
    }

    OnNextStep() {
        let oldIdx = this.idx;
        this.idx++;
        console.log("Next", this.idx);
        if (this.elements[this.idx].isNextVideo !== undefined && this.elements[this.idx].isNextVideo) {
            this.SetNextVideo();
        }
        this.video.currentTime = this.elements[this.idx].startTime;
        this.SetStep(this.elements[oldIdx], this.elements[this.idx], true);
    }

    SetNextVideo() {
        if (this.currentVideo === this.videos.length) return;
        video.src = this.videos[this.currentVideo++];
        video.play();
        video.volume = 0;

        document.dispatchEvent(new Event("skyboxUpdated"));
    }
}
