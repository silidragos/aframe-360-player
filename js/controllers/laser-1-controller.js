class MoonController extends StepsController {
    constructor() {
        super();
        let geos = document.getElementsByClassName("geo-set");
        //00:00 - 01:18
        this.elements = [{
            startTime: 0,
            endTime: 78.0,
            elementToUnhide: null,
            paused: false,
            isNextVideo: true
        }, {
            startTime: 78,
            endTime: 78.5,
            elementToUnhide: geos[0],
            paused: true,
        },
        //01:18 - 02:18
        {
            startTime: 79,
            endTime: 138.0,
            elementToUnhide: null,
            paused: false,
        }, {
            startTime: 138.0,
            endTime: 138.5,
            elementToUnhide: geos[1],
            paused: true,
        },
        //02:18 - 03:18
        {
            startTime: 139,
            endTime: 198.0,
            elementToUnhide: null,
            paused: false,
        }, {
            startTime: 198.0,
            endTime: 198.5,
            elementToUnhide: geos[2],
            paused: true,
        },
        //03:18 - 04:18
        {
            startTime: 199,
            endTime: 258.0,
            elementToUnhide: null,
            paused: false,
        }, {
            startTime: 258.0,
            endTime: 258.5,
            elementToUnhide: geos[3],
            paused: true,
        },
        ];
        this.videos = [
        ];
    }
}

let moonController = new MoonController();