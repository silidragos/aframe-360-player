AFRAME.registerComponent('roci-vulcanice-controller', {
    init: function() {
        var spotComp = document.getElementById('spots');
        spotComp.addEventListener('reloadspots', function(evt) {
            console.log('Got event!');
            let infoPoints = document.getElementById('control-points');
            infoPoints.setAttribute('visible', true);
        });
    }
});

AFRAME.registerComponent('rock-info', {
    schema: {
        photo1: { type: 'string', default: '' },
        photo2: { type: 'string', default: '' },
        photo3: { type: 'string', default: '' },
        photo4: { type: 'string', default: '' }
    },
    init: function() {
        let data = this.data;
        this.el.addEventListener('click', function() {
            document.getElementById('images').setAttribute('visible', true);

            document.getElementById('image_one').setAttribute('src', data.photo1);
            document.getElementById('image_two').setAttribute('src', data.photo2);
            document.getElementById('image_three').setAttribute('src', data.photo3);
            document.getElementById('image_four').setAttribute('src', data.photo4);
        });
    }
});
