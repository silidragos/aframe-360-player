class WindTurbineController extends StepsController {
    constructor() {
        super();
        let geos = document.getElementsByClassName("geo-set");
        //00:00 - 01:39
        this.elements = [{
            startTime: 0,
            endTime: 99.0,
            elementToUnhide: null,
            paused: false,
            isNextVideo: true
        }, {
            startTime: 99,
            endTime: 99.5,
            elementToUnhide: geos[0],
            paused: true,
        },
        //01:39 - 02:39
        {
            startTime: 100,
            endTime: 159.0,
            elementToUnhide: null,
            paused: false,
        }, {
            startTime: 159.0,
            endTime: 159.5,
            elementToUnhide: geos[1],
            paused: true,
        },
        //02:39 - 03:09
        {
            startTime: 160,
            endTime: 189.0,
            elementToUnhide: null,
            paused: false,
        }, {
            startTime: 189.0,
            endTime: 189.5,
            elementToUnhide: geos[2],
            paused: true,
        }
        ];
        this.videos = [
        ];
    }
}

let windTurbineController = new WindTurbineController();