class MoonController extends StepsController {
    constructor() {
        super();
        let geos = document.getElementsByClassName("geo-set");
        //00:00 - 00:40
        this.elements = [{
            startTime: 0,
            endTime: 38.0,
            elementToUnhide: null,
            paused: false,
            isNextVideo: true
        }, {
            startTime: 38,
            endTime: 38.5,
            elementToUnhide: geos[0],
            paused: true,
        },
        //00:40 - 01:00
        {
            startTime: 41,
            endTime: 60.0,
            elementToUnhide: null,
            paused: false,
        }, {
            startTime: 60.0,
            endTime: 60.5,
            elementToUnhide: geos[1],
            paused: true,
        },
        //01:00 - 01:20
        {
            startTime: 61,
            endTime: 76.0,
            elementToUnhide: null,
            paused: false,
        }, {
            startTime: 76.0,
            endTime: 76.5,
            elementToUnhide: geos[2],
            paused: true,
        },
        //01:20 - 01:40
        {
            startTime: 81,
            endTime: 100.0,
            elementToUnhide: null,
            paused: false,
        }, {
            startTime: 100.0,
            endTime: 100.5,
            elementToUnhide: geos[3],
            paused: true,
        },
        ];
        this.videos = [
        ];
    }
}

let moonController = new MoonController();