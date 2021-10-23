class AltitudinalFlora extends StepsController {
    constructor() {
        super();
        let geos = document.getElementsByClassName("geo-set");
        //00:00 - 01:00
        this.elements = [{
            startTime: 0,
            endTime: 60.0,
            elementToUnhide: null,
            paused: false,
            isNextVideo: true
        }, {
            startTime: 60,
            endTime: 60.5,
            elementToUnhide: geos[0],
            paused: true,
        },
        //01:00 - 01:30
        {
            startTime: 61,
            endTime: 90.0,
            elementToUnhide: null,
            paused: false,
        }, {
            startTime: 90.0,
            endTime: 90.5,
            elementToUnhide: geos[1],
            paused: true,
        },
        //01:30 - 02:00
        {
            startTime: 91,
            endTime: 120.0,
            elementToUnhide: null,
            paused: false,
        }, {
            startTime: 120.0,
            endTime: 120.5,
            elementToUnhide: geos[2],
            paused: true,
        },
        //02:00 - 02:25
        {
            startTime: 121,
            endTime: 145.0,
            elementToUnhide: null,
            paused: false,
        }, {
            startTime: 145.0,
            endTime: 145.5,
            elementToUnhide: geos[3],
            paused: true,
        }
        ];
        this.videos = [
        ];
    }
}

let altitudinalFlora = new AltitudinalFlora();