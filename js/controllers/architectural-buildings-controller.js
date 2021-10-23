class ArchitecturalBuildings extends StepsController {
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
        },
        //01:20 - 01:50
        {
            startTime: 81,
            endTime: 110.0,
            elementToUnhide: null,
            paused: false,
        }, {
            startTime: 110.0,
            endTime: 110.5,
            elementToUnhide: geos[2],
            paused: true,
        },
        //01:50 - 02:20
        {
            startTime: 111,
            endTime: 140.0,
            elementToUnhide: null,
            paused: false,
        }, {
            startTime: 140.0,
            endTime: 140.5,
            elementToUnhide: geos[3],
            paused: true,
        },
        //02:20 - 02:50
        {
            startTime: 141,
            endTime: 170.0,
            elementToUnhide: null,
            paused: false,
        }, {
            startTime: 170.0,
            endTime: 170.5,
            elementToUnhide: geos[4],
            paused: true,
        },
        //02:50 - 03:20
        {
            startTime: 171,
            endTime: 200.0,
            elementToUnhide: null,
            paused: false,
        }, {
            startTime: 200.0,
            endTime: 200.5,
            elementToUnhide: geos[5],
            paused: true,
        },
        //03:20 - 03:50
        {
            startTime: 201,
            endTime: 230.0,
            elementToUnhide: null,
            paused: false,
        }, {
            startTime: 230.0,
            endTime: 230.5,
            elementToUnhide: geos[6],
            paused: true,
        },
        //03:50 - 04:20
        {
            startTime: 231,
            endTime: 260.0,
            elementToUnhide: null,
            paused: false,
        }, {
            startTime: 260.0,
            endTime: 260.5,
            elementToUnhide: geos[7],
            paused: true,
        },
        //04:20 - 04:50
        {
            startTime: 261,
            endTime: 290.0,
            elementToUnhide: null,
            paused: false,
        }, {
            startTime: 290.0,
            endTime: 290.5,
            elementToUnhide: geos[8],
            paused: true,
        }
        ];
        this.videos = [
        ];
    }
}

let architecturalBuildings = new ArchitecturalBuildings();