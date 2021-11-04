class SettlementsController extends StepsController {
    constructor() {
        super();
        let geos = document.getElementsByClassName("geo-set");
        //00:00 - 00:35
        this.elements = [{
            startTime: 0,
            endTime: 35.0,
            elementToUnhide: null,
            paused: false,
            isNextVideo: true
        }, {
            startTime: 35,
            endTime: 35.5,
            elementToUnhide: geos[0],
            paused: true,
        },
        //00:35 - 00:55
        {
            startTime: 35,
            endTime: 55.0,
            elementToUnhide: null,
            paused: false,
        }, {
            startTime: 55.0,
            endTime: 55.5,
            elementToUnhide: geos[1],
            paused: true,
        },
        //00:55 - 01:15
        {
            startTime: 56,
            endTime: 74.0,
            elementToUnhide: null,
            paused: false,
        }, {
            startTime: 74.0,
            endTime: 74.5,
            elementToUnhide: geos[2],
            paused: true,
        }
        ];
        this.videos = [
        ];
    }
}

let settlements = new SettlementsController();