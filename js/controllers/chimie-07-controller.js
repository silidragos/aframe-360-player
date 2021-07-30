class ChimieController extends StepsController {
    constructor() {
        super();
        let geos = document.getElementsByClassName("geo-set");
        //00:00 - 00:45
        this.elements = [{
            startTime: 0,
            endTime: 45.0,
            elementToUnhide: null,
            paused: false,
            isNextVideo: true
        }, {
            startTime: 45,
            endTime: 45.5,
            elementToUnhide: geos[0],
            paused: true,
        },
        //00:45 - 01:15
        {
            startTime: 46,
            endTime: 75.0,
            elementToUnhide: null,
            paused: false,
        }, {
            startTime: 75.0,
            endTime: 75.5,
            elementToUnhide: geos[1],
            paused: true,
        },
        //01:15 - 01:45
        {
            startTime: 75,
            endTime: 105.0,
            elementToUnhide: null,
            paused: false,
        }, {
            startTime: 105.0,
            endTime: 105.5,
            elementToUnhide: geos[2],
            paused: true,
        },
        ];
        this.videos = [
        ];
    }
}

let chimieController = new ChimieController();