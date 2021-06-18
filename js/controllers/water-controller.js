class MoonController extends StepsController {
    constructor() {
        super();
        let geos = document.getElementsByClassName("geo-set");
        //00:00 - 00:44
        this.elements = [{
            startTime: 0,
            endTime: 44.0,
            elementToUnhide: null,
            paused: false,
            isNextVideo: true
        }, {
            startTime: 44,
            endTime: 44.5,
            elementToUnhide: geos[0],
            paused: true,
        },
        //00:44 - 01:14
        {
            startTime: 45,
            endTime: 74.0,
            elementToUnhide: null,
            paused: false,
        }, {
            startTime: 74.0,
            endTime: 74.5,
            elementToUnhide: geos[1],
            paused: true,
        },
        //01:14 - 01:44
        {
            startTime: 75,
            endTime: 104.0,
            elementToUnhide: null,
            paused: false,
        }, {
            startTime: 104.0,
            endTime: 104.5,
            elementToUnhide: geos[2],
            paused: true,
        },
        ];
        this.videos = [
        ];
    }
}

let moonController = new MoonController();