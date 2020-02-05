AFRAME.registerComponent('video-360-play-pause', {
    schema: {
        playIcon: { default: '#play-icon' },
        pauseIcon: { default: '#pause-icon' },
        isPlaying: { default: false }
    },
    init: function() {
        this.el.setAttribute('src', this.data.playIcon);

        this.el.addEventListener(
            'click',
            function() {
                var video = document.getElementById('skybox').components.material.material.map.image;
                if (!video) {
                    return;
                }
                if (this.data.isPlaying) {
                    this.pauseVideo();
                } else {
                    this.startVideo();
                }
            }.bind(this)
        );

        this.el.addEventListener('pauseVideo', this.pauseVideo.bind(this));
        this.el.addEventListener('startVideo', this.startVideo.bind(this));
    },

    pauseVideo: function() {
        console.log('Pausing');
        var video = document.getElementById('skybox').components.material.material.map.image;

        video.pause();
        this.data.isPlaying = false;
        this.el.setAttribute('src', this.data.playIcon);
    },

    startVideo: function() {
        var video = document.getElementById('skybox').components.material.material.map.image;

        video.play();
        this.data.isPlaying = true;
        this.el.setAttribute('src', this.data.pauseIcon);
    }
});

document.getElementById('start-video').addEventListener('click', function() {
    document.getElementById('start-video').style.display = 'none';
    document.getElementById('skybox').components.material.material.map.image.play();
    setTimeout(() => {
        document.getElementById('skybox').components.material.material.map.image.pause();
    }, 1000);
});
