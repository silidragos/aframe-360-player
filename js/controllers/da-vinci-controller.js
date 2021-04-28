class DaVinciController extends StepsController{
    constructor() {
        super();
        let geos = document.getElementsByClassName("geo-set");
        //Intro & Chain Drive: 00:00 - 00:21
        this.elements = [{
            startTime: 0,
            endTime: 21.0,
            elementToUnhide: null,
            paused: false,
            isNextVideo: true
        },{
            startTime:21,
            endTime: 21.5,
            elementToUnhide: geos[0],
            paused:true,
        },
        //Anemometer: 00:21 - 00:33
        {
            startTime: 21.5,
            endTime: 33.0,
            elementToUnhide: null,
            paused: false,
        },{
            startTime: 33.0,
            endTime: 33.5,
            elementToUnhide: geos[1],
            paused:true,
        },
        //Vertical Ball: 00:33 - 00:43
        {
            startTime: 34,
            endTime: 43.0,
            elementToUnhide: null,
            paused: false,
        },{
            startTime: 43.0,
            endTime: 43.5,
            elementToUnhide: geos[2],
            paused:true,
        },
        //Printing press: 00:43 - 01:02
        {
            startTime: 44,
            endTime: 62,
            elementToUnhide: null,
            paused: false,
        },{
            startTime: 62.0,
            endTime: 62.5,
            elementToUnhide: geos[3],
            paused:true,
        },
        //Revolving Crane: 01:02 - 01:27
        {
            startTime: 63,
            endTime: 87,
            elementToUnhide: null,
            paused: false,
        },{
            startTime: 87.0,
            endTime: 87.5,
            elementToUnhide: geos[4],
            paused:true,
        },
        //Archimedes Screw: 01:27 - 01:37
        {
            startTime: 88,
            endTime: 97,
            elementToUnhide: null,
            paused: false,
        },{
            startTime: 97.0,
            endTime: 97.5,
            elementToUnhide: geos[5],
            paused:true,
        },
        //Machine Gun: 01:37 - 02:31
        {
            startTime: 98,
            endTime: 151,
            elementToUnhide: null,
            paused: false,
        },{
            startTime: 151.0,
            endTime: 151.5,
            elementToUnhide: geos[6],
            paused:true,
        },
        //Ornitopter: 02:31 - 03:02
        {
            startTime: 152,
            endTime: 182,
            elementToUnhide: null,
            paused: false,
        },{
            startTime: 182.0,
            endTime: 182.5,
            elementToUnhide: geos[7],
            paused:true,
        },
        //Oil Press: 03:02 - 03:19
        {
            startTime: 183,
            endTime: 199,
            elementToUnhide: null,
            paused: false,
        },{
            startTime: 199.0,
            endTime: 199.5,
            elementToUnhide: geos[8],
            paused:true,
        },
        //Hydraulic Saw: 03:19 - 04:58
        {
            startTime: 200,
            endTime: 298,
            elementToUnhide: null,
            paused: false,
        },{
            startTime: 298.0,
            endTime: 298.5,
            elementToUnhide: geos[9],
            paused:true,
        }];
        this.videos = [
        ];
    }
}

let davinciController = new DaVinciController();