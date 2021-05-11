class ElectronicMicroscopeController extends StepsController {
    constructor() {
        super();
        let geos = document.getElementsByClassName("geo-set");
        this.elements = [
            //EMS: 00:00 - 00:25
            {
                startTime: 0,
                endTime: 25.0,
                elementToUnhide: null,
                paused: false,
                isNextVideo: true
            }, {
                startTime: 25,
                endTime: 25.5,
                elementToUnhide: geos[0],
                paused: true,
            },
            //EMS: 00:25 - 01:03
            {
                startTime: 26,
                endTime: 63.0,
                elementToUnhide: null,
                paused: false,
            }, {
                startTime: 63.0,
                endTime: 63.5,
                elementToUnhide: geos[1],
                paused: true,
            },
            //EMS: 01:03 - 01:11
            {
                startTime: 64,
                endTime: 71.0,
                elementToUnhide: null,
                paused: false,
            }, {
                startTime: 71.0,
                endTime: 71.5,
                elementToUnhide: geos[2],
                paused: true,
            },
            //Wood: 01:11 - 02:06
            {
                startTime: 72,
                endTime: 126,
                elementToUnhide: null,
                paused: false,
            }, {
                startTime: 126.0,
                endTime: 126.5,
                elementToUnhide: geos[3],
                paused: true,
            },
            //Disc: 02:06 - 03:06
            {
                startTime: 127,
                endTime: 184,
                elementToUnhide: null,
                paused: false,
            }, {
                startTime: 184.0,
                endTime: 184.5,
                elementToUnhide: geos[4],
                paused: true,
            },
            //EMS: 03:06 - 03:45
            {
                startTime: 187,
                endTime: 225,
                elementToUnhide: null,
                paused: false,
            }, {
                startTime: 225.0,
                endTime: 225.5,
                elementToUnhide: geos[5],
                paused: true,
            }];
        this.videos = [
        ];
    }
}

let electronicMicroscopeController = new ElectronicMicroscopeController();