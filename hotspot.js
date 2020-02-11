AFRAME.registerComponent('hotspots', {
    init: function() {
        this.el.addEventListener('reloadspots', function(evt) {
            var currSpotGroup = document.getElementById(evt.detail.currspots);
            currSpotGroup.setAttribute('scale', '0 0 0');
            var newSpotGroup = document.getElementById(evt.detail.newspots);
            newSpotGroup.setAttribute('scale', '1 1 1');
        });
    }
});

AFRAME.registerComponent('spot', {
    schema: {
        linkto: { type: 'string', default: '' },
        spotgroup: { type: 'string', default: '' },
        imageLink: { type: 'string', default: '#hotspot' }
    },
    init: function() {
        this.el.setAttribute('src', this.data.imageLink);
        this.el.setAttribute('look-at', '#cam');

        var data = this.data;

        this.el.addEventListener('click', function() {
            document.getElementById('video-control').emit('pauseVideo');

            var sky = document.getElementById('skybox');
            sky.setAttribute('src', data.linkto);

            var spotComp = document.getElementById('spots');
            var currSpots = this.parentElement.getAttribute('id');
            spotComp.emit('reloadspots', {
                newspots: data.spotgroup,
                currspots: currSpots
            });
        });
    }
});
