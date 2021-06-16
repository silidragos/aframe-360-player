class MoonController extends StepsController {
    constructor() {
        super();
        let geos = document.getElementsByClassName("geo-set");
        //00:00 - 01:27
        this.elements = [{
            startTime: 0,
            endTime: 87.0,
            elementToUnhide: null,
            paused: false,
            isNextVideo: true
        }, {
            startTime: 87,
            endTime: 87.5,
            elementToUnhide: geos[0],
            paused: true,
        },
        //01:27 - 02:27
        {
            startTime: 88,
            endTime: 147.0,
            elementToUnhide: null,
            paused: false,
        }, {
            startTime: 147.0,
            endTime: 147.5,
            elementToUnhide: geos[1],
            paused: true,
        },
        //02:27 - 04:57
        {
            startTime: 150,
            endTime: 270.0,
            elementToUnhide: null,
            paused: false,
        }, {
            startTime: 270.0,
            endTime: 270.5,
            elementToUnhide: geos[2],
            paused: true,
        },
        ];
        this.videos = [
        ];
    }
}

let moonController = new MoonController();