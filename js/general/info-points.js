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


AFRAME.registerComponent('show-child-on-click', {
    init: function () {
        const children = this.el.object3D.children;
        const child = children[0].el; 
        child.setAttribute('visible', false);
        this.el.addEventListener(
            'click',
            () => {
                console.log("el",child);
                child.setAttribute('visible', !child.getAttribute('visible'));
            }
        );
    }
});

AFRAME.registerComponent('open-image', {
    schema: {
        target: { default: "", type: 'string' },
        src: { default: "", type: 'string' }
    },

    init: function () {
        const target = document.getElementById(this.data.target);
        target.setAttribute('visible', false);
        var sideImage = new Image();

        this.el.addEventListener(
            'click',
            () => {
                let isVisible = target.getAttribute("visible");
                if(isVisible && target.getAttribute("src") === this.data.src){
                    target.setAttribute('visible', false);
                }else if(!isVisible){
                    target.setAttribute('visible', true);
                }
                target.setAttribute("src", this.data.src);
                
                //Resize
                sideImage.src = target.getAttribute("src");
                sideImage.onload = (()=>{
                    let w = 4, h = 4;
                    const ratio = sideImage.height / sideImage.width;
                    if(sideImage.width > sideImage.height){
                        w = 4;
                        h = w * ratio;
                    }else{
                        h = 4;
                        w = h / ratio;
                    }
                    target.setAttribute("width", w);
                    target.setAttribute("height", h);
                    console.log(`Setting size to ${w} x ${h}`);
                });
                
            }
        );
    }
});