//Needs  <script src="./js/libs/dat.gui.min.js"></script>
const gui = new dat.GUI();

//Set position around circle + height
//TODO replace height with azimuth & elevation
AFRAME.registerComponent('get-position', {
    init: function () {
        let myObj = this.el.object3D;
        this.angle = {
            x: 0,
            y: 0,
        }
        const cubeFolder = gui.addFolder("Cube")
        cubeFolder.add(this.angle, "x", 0, Math.PI * 2, 0.01)
        cubeFolder.add(this.angle, "y", -10, 10, 0.01)
        cubeFolder.open()

        document.addEventListener("keypress", (ev) => {
            console.log(ev.keyCode);
            if (ev.keyCode === 115) {
                console.log(this.el.object3D.position);
            }
        })
    },
    tick: function () {
        this.el.object3D.position.set(4 * Math.sin(this.angle.x), this.angle.y, 4 * Math.cos(this.angle.x));
    }
});