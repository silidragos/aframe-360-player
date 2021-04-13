// let base_url = "./video/";
let base_url = "https://vr-projects-eu.s3.eu-central-1.amazonaws.com/videos/"

AFRAME.registerComponent('video-360-play-pause', {
    schema: {
        playIcon: { default: '#play-icon' },
        pauseIcon: { default: '#pause-icon' },
        isPlaying: { default: false }
    },
    init: function() {
        this.el.setAttribute('src', this.data.playIcon);
        this.reinitVideoListeners();
        
        this.el.addEventListener(
            'click',
            () => {
                if (!this.video) {
                    return;
                }
                if (this.data.isPlaying) {
                    this.video.pause();
                } else {
                    this.video.play();
                }
            }
        );

        document.addEventListener("skyboxUpdated", ()=>{
            this.reinitVideoListeners();
        });
    },

    reinitVideoListeners(){
        if(this.video !== undefined){
            this.video.pause();
            this.video.onplay = undefined;
            this.video.onpause = undefined;
        }

        this.video = document.getElementById('skybox').components.material.material.map.image;
        console.log("new video", this.video);
        this.video.onplay = this.startVideo.bind(this);
        this.video.onpause = this.pauseVideo.bind(this);

        this.pauseVideo();
    },

    pauseVideo: function() {
        console.log("video paused");
        this.data.isPlaying = false;
        this.el.setAttribute('src', this.data.playIcon);
    },

    startVideo: function() {
        console.log("video played");
        this.data.isPlaying = true;
        this.el.setAttribute('src', this.data.pauseIcon);
    }
});

AFRAME.registerComponent('auto-stop-at-times', {
    schema: {
        stopTimes: {
            default: [],
            parse: function(value) {
                return value.split('/');
            }
        },
        currentIdx: {
            default: 0
        },
        startFrom:{
            default:0
        }
    },
    init: function() {
        var video = document.getElementById('video');
        video.currentTime = this.data.startFrom;
        video.addEventListener(
            'timeupdate',
            function() {
                if (video.currentTime > parseFloat(this.data.stopTimes[this.data.currentIdx])) {
                    this.data.currentIdx++;
                    document.getElementById('video-control').emit('pauseVideo');
                }
            }.bind(this)
        );
    }
});

document.querySelector('a-scene').addEventListener('loaded', ()=>{
    document.getElementById('start-video').addEventListener('click', () => {
        document.getElementById('start-video').style.display = 'none';
    
        console.log("found",  document.getElementById('skybox').components);
        document.getElementById('skybox').components.material.material.map.image.play();
        // document.getElementById('video').play();
    
        setTimeout(() => {
            document.getElementById('skybox').components.material.material.map.image.pause();
        }, 250);
    });
});