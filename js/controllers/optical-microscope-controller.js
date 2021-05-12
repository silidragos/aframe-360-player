class ElectronicMicroscopeController extends StepsController {
    constructor() {
        super();
        let geos = document.getElementsByClassName("geo-set");
        this.elements = [
            //00:00 - 01:41
            {
                startTime: 0,
                endTime: 101.0,
                elementToUnhide: null,
                paused: false,
                isNextVideo: true
            }, {
                startTime: 101,
                endTime: 101.5,
                elementToUnhide: geos[0],
                paused: true,
            },
            //01:41 - 03:30
            {
                startTime: 102,
                endTime: 210.0,
                elementToUnhide: null,
                paused: false,
            }, {
                startTime: 210.0,
                endTime: 210.5,
                elementToUnhide: geos[1],
                paused: true,
            }];
        this.videos = [
        ];
    }
}

let electronicMicroscopeController = new ElectronicMicroscopeController();