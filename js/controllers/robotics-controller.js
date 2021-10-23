class RoboticsController extends StepsController {
    constructor() {
        super();
        let geos = document.getElementsByClassName("geo-set");
        //00:00 - 01:37
        this.elements = [{
            startTime: 0,
            endTime: 97.0,
            elementToUnhide: null,
            paused: false,
            isNextVideo: true
        }, {
            startTime: 97,
            endTime: 97.5,
            elementToUnhide: geos[0],
            paused: true,
        },
        //01:37 - 02:37
        {
            startTime: 100,
            endTime: 157.0,
            elementToUnhide: null,
            paused: false,
        }, {
            startTime: 157.0,
            endTime: 157.5,
            elementToUnhide: geos[1],
            paused: true,
        },
        //02:37 - 03:14
        {
            startTime: 158,
            endTime: 194.0,
            elementToUnhide: null,
            paused: false,
        }, {
            startTime: 194.0,
            endTime: 194.5,
            elementToUnhide: geos[2],
            paused: true,
        }
        ];
        this.videos = [
        ];
    }
}

let roboticsController = new RoboticsController();