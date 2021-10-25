class MedVegController extends StepsController {
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
        //00:50 - 01:20
        {
            startTime: 51,
            endTime: 80.0,
            elementToUnhide: null,
            paused: false,
        }, {
            startTime: 80.0,
            endTime: 80.5,
            elementToUnhide: geos[1],
            paused: true,
        }
        ];
        this.videos = [
        ];
    }
}

let medVegController = new MedVegController();