AFRAME.registerComponent('speed-tracker', {
    schema: {
        step: { type: 'number', default: 0 }
    },
    init: function() {
        var video = document.getElementById('video');
        video.addEventListener(
            'timeupdate',
            function() {
                if (video.currentTime > 13 && this.data.step === 0) {
                    this.data.step++;
                    this.el.setAttribute('visible', true);
                    document.getElementById('speed_1').play();
                } else if (video.currentTime > 26 && this.data.step === 1) {
                    this.data.step++;
                    document.getElementById('speed_1').pause();
                    document.getElementById('speed_2').play();
                    document.getElementById('info_panel').setAttribute('src', '#info_2');
                    this.el.setAttribute('src', '#speed_2');
                } else if (video.currentTime > 36 && this.data.step === 2) {
                    document.getElementById('speed_2').pause();
                    this.el.setAttribute('visible', false);
                }
            }.bind(this)
        );

        this.el.setAttribute('visible', false);
    }
});
