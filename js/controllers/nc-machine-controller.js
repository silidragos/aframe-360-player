class NCMachineController extends StepsController {
    constructor() {
        super();
        let geos = document.getElementsByClassName("geo-set");
        //00:00 - 01:23
        this.elements = [{
            startTime: 0,
            endTime: 83.0,
            elementToUnhide: null,
            paused: false,
            isNextVideo: true
        }, {
            startTime: 83,
            endTime: 83.5,
            elementToUnhide: geos[0],
            paused: true,
        },
        //01:23 - 02:00
        {
            startTime: 84,
            endTime: 120.0,
            elementToUnhide: null,
            paused: false,
        }, {
            startTime: 120.0,
            endTime: 120.5,
            elementToUnhide: geos[1],
            paused: true,
        },
        //02:00 - 02:33
        {
            startTime: 121,
            endTime: 153.0,
            elementToUnhide: null,
            paused: false,
        }, {
            startTime: 153.0,
            endTime: 153.5,
            elementToUnhide: geos[2],
            paused: true,
        },
        //02:33 - 03:14
        {
            startTime: 154,
            endTime: 194.0,
            elementToUnhide: null,
            paused: false,
        }, {
            startTime: 194.0,
            endTime: 194.5,
            elementToUnhide: geos[3],
            paused: true,
        }
        ];
        this.videos = [
        ];
    }
}

let ncMachineController = new NCMachineController();