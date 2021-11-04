class CavesController extends StepsController {
    constructor() {
        super();
        let geos = document.getElementsByClassName("geo-set");
        //00:00 - 00:50
        this.elements = [{
            startTime: 0,
            endTime: 50.0,
            elementToUnhide: null,
            paused: false,
            isNextVideo: true
        }, {
            startTime: 50,
            endTime: 50.5,
            elementToUnhide: geos[0],
            paused: true,
        },
        //00:50 - 01:10
        {
            startTime: 51,
            endTime: 70.0,
            elementToUnhide: null,
            paused: false,
        }, {
            startTime: 70.0,
            endTime: 70.5,
            elementToUnhide: geos[1],
            paused: true,
        },
        //01:10 - 01:30
        {
            startTime: 71,
            endTime: 90.0,
            elementToUnhide: null,
            paused: false,
        }, {
            startTime: 90.0,
            endTime: 90.5,
            elementToUnhide: geos[2],
            paused: true,
        }
        ];
        this.videos = [
        ];
    }
}

let caves = new CavesController();