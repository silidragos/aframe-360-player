class MoonController extends StepsController{
    constructor() {
        super();
        let geos = document.getElementsByClassName("geo-set");
        //00:00 - 01:20
        this.elements = [{
            startTime: 0,
            endTime: 80.0,
            elementToUnhide: null,
            paused: false,
            isNextVideo: true
        },{
            startTime:80,
            endTime: 80.5,
            elementToUnhide: geos[0],
            paused:true,
        },
        //01:20 - 01:30
        {
            startTime: 81,
            endTime: 90.0,
            elementToUnhide: null,
            paused: false,
        },{
            startTime: 90.0,
            endTime: 90.5,
            elementToUnhide: geos[1],
            paused:true,
        },
        //01:30 - 01:40
        {
            startTime: 91,
            endTime: 100.0,
            elementToUnhide: null,
            paused: false,
        },{
            startTime: 100.0,
            endTime: 100.5,
            elementToUnhide: geos[2],
            paused:true,
        },
        //01:40 - 01:50
        {
            startTime: 101,
            endTime: 108.0,
            elementToUnhide: null,
            paused: false,
        },{
            startTime: 108.0,
            endTime: 108.5,
            elementToUnhide: geos[3],
            paused:true,
        },
        //01:50 - 02:00
        {
            startTime: 111,
            endTime: 118.0,
            elementToUnhide: null,
            paused: false,
        },{
            startTime: 118.0,
            endTime: 118.5,
            elementToUnhide: geos[4],
            paused:true,
        },
        //02:00 - 02:10
        {
            startTime: 121,
            endTime: 128.0,
            elementToUnhide: null,
            paused: false,
        },{
            startTime: 128.0,
            endTime: 128.5,
            elementToUnhide: geos[5],
            paused:true,
        },
        //02:10 - 02:20
        {
            startTime: 131,
            endTime: 140.0,
            elementToUnhide: null,
            paused: false,
        },{
            startTime: 140.0,
            endTime: 140.5,
            elementToUnhide: geos[6],
            paused:true,
        },
        //02:20 - 02:30
        {
            startTime: 141,
            endTime: 148.0,
            elementToUnhide: null,
            paused: false,
        },{
            startTime: 148.0,
            endTime: 148.5,
            elementToUnhide: geos[7],
            paused:true,
        },
        //02:30 - 02:40
        {
            startTime: 151,
            endTime: 160.0,
            elementToUnhide: null,
            paused: false,
        },{
            startTime: 160.0,
            endTime: 160.5,
            elementToUnhide: geos[8],
            paused:true,
        }];
        this.videos = [
        ];
    }
}

let moonController = new MoonController();