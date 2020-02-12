AFRAME.registerComponent('show-hide-after-seconds', {
    schema: {
        from: { default: 0, type: 'number' },
        to: { default: 0, type: 'number' },
        isHidden: { default: false, type: 'boolean' }
    },

    init: function() {
        var video = document.getElementById('skybox').components.material.material.map.image;
        video.addEventListener('timeupdate', () => this.checkShowHideElements(video));
    },

    checkShowHideElements: function(video) {
        if (video.currentTime > this.data.to && !this.isHidden) {
            this.el.setAttribute('visible', false);
            video.removeEventListener('timeupdate', this.checkShowHideElements);
        } else if (video.currentTime > this.data.from && this.data.isHidden) {
            this.el.setAttribute('visible', true);
            this.isHidden = false;
        }
    }
});

AFRAME.registerComponent('show-on-hover', {
    schema: {},
    init: function() {
        this.el.object3D.children[0].el.setAttribute('visible', false);
        this.el.addEventListener(
            'mouseenter',
            function() {
                this.el.object3D.children[0].el.setAttribute('visible', true);
            }.bind(this)
        );

        this.el.addEventListener(
            'mouseleave',
            function() {
                this.el.object3D.children[0].el.setAttribute('visible', false);
            }.bind(this)
        );
    }
});
