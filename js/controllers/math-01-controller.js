class Math01Controller {
    constructor() {
        let geos = document.getElementsByClassName("geo-set");
        this.idx = 0;
        this.elements = [{
            startTime: 0,
            endTime: 32.0,
            elementToUnhide: null,
            paused: false,
            isNextVideo: true
        },{
            startTime:32.0,
            endTime: 33.0,
            elementToUnhide: geos[0],
            paused:true,
        },{
            startTime:33.0,
            endTime: 87.0,
            elementToUnhide: null,
            paused:false,
        },{
            startTime:87.0,
            endTime: 88.0,
            elementToUnhide: geos[1],
            paused:true,
        },{
            startTime:87.0,
            endTime: 9,
            elementToUnhide: null,
            paused:false,
            isNextVideo: true
        },{
            startTime:9.25,
            endTime: 100,
            elementToUnhide: geos[2],
            paused:true
        },{
            startTime:9.5,
            endTime: 100,
            elementToUnhide: geos[3],
            paused:true
        },{
            startTime:9.5,
            endTime: 100,
            elementToUnhide: geos[4],
            paused:true
        },{
            startTime:9.5,
            endTime: 100,
            elementToUnhide: geos[5],
            paused:true
        },{
            startTime:9.5,
            endTime: 100,
            elementToUnhide: geos[6],
            paused:true
        },{
            startTime:9.5,
            endTime: 15,
            elementToUnhide: null,
            paused:false,
            isNextVideo: true
        },{
            startTime:15,
            endTime: 16,
            elementToUnhide: geos[7],
            paused:true
        },{
            startTime:15,
            endTime: 34,
            elementToUnhide: null,
            paused:false
        },{
            startTime:34,
            endTime: 35,
            elementToUnhide: geos[8],
            paused:true
        }];
        this.videos = [
            "./video/math/architecture_1_montage.mp4",
            "./video/math/architecture_1_montage_2.mp4"
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
                if(this.isVideoReset && video.currentTime >= this.elements[this.idx].endTime){
                    let oldIdx = this.idx;
                    this.idx += 1;
                    this.SetStep(this.elements[oldIdx], this.elements[this.idx]);
                }
            });
        video.addEventListener(
            'ended',
            ()=>{
                if(!this.isVideoReset) {
                    console.log("Video resetted because finished.");
                    this.isVideoReset = true;
                    this.SetNextVideo();
                }
            }
        )
    }
    SetStep(oldEl, newEl, isManuallySet = false){
        if(newEl.paused){
            this.video.pause();
            document.getElementById("video-control").setAttribute("visible", false);
        }else{
            this.video.play();
            document.getElementById("video-control").setAttribute("visible", true);
        }
        if(!isManuallySet && newEl.isNextVideo){
            this.isVideoReset = false;
        }

        if(oldEl !== null && oldEl.elementToUnhide !== null){
            oldEl.elementToUnhide.setAttribute("visible", false);
        }
        if(newEl.elementToUnhide !== null){
            newEl.elementToUnhide.setAttribute("visible", true);
        }
    }

    OnNextStep() {
        let oldIdx = this.idx;
        this.idx++;
        console.log("Next", this.idx);
        if(this.elements[this.idx].isNextVideo !== undefined && this.elements[this.idx].isNextVideo){
            this.SetNextVideo();
        }
        this.video.currentTime = this.elements[this.idx].startTime;
        this.SetStep(this.elements[oldIdx], this.elements[this.idx], true);
    }

    SetNextVideo(){
        if(this.currentVideo === this.videos.length) return;
        video.src = this.videos[this.currentVideo++];
        video.play();
        video.volume = 0;

        document.dispatchEvent(new Event("skyboxUpdated"));
    }
}

let mathController = new Math01Controller();