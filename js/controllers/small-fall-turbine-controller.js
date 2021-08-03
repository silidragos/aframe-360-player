class SmallFallTurbineController extends StepsController {
    constructor() {
        super();
        let geos = document.getElementsByClassName("geo-set");
        //00:00 - 01:45
        this.elements = [{
            startTime: 0,
            endTime: 105.0,
            elementToUnhide: null,
            paused: false,
            isNextVideo: true
        }, {
            startTime: 105,
            endTime: 105.5,
            elementToUnhide: geos[0],
            paused: true,
        },
        //01:45 - 02:07
        {
            startTime: 106,
            endTime: 127.0,
            elementToUnhide: null,
            paused: false,
        }, {
            startTime: 127.0,
            endTime: 127.5,
            elementToUnhide: geos[1],
            paused: true,
        },
        //02:07 - 03:15
        {
            startTime: 128,
            endTime: 205.0,
            elementToUnhide: null,
            paused: false,
        }, {
            startTime: 205.0,
            endTime: 205.5,
            elementToUnhide: geos[2],
            paused: true,
        }
        ];
        this.videos = [
        ];
    }
}

let smallFallTurbineController = new SmallFallTurbineController();