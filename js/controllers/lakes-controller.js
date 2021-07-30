class LakesController extends StepsController {
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
        }
        ];
        this.videos = [
        ];
    }
}

let lakesController = new LakesController();