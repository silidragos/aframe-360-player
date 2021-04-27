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
            elementToUnhide: null,
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
            elementToUnhide: null,
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
            elementToUnhide: null,
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
            elementToUnhide: null,
            paused:true,
        },
        //Revolving Crane: 01:02 - 01:13
        {
            startTime: 63,
            endTime: 73,
            elementToUnhide: null,
            paused: false,
        },{
            startTime: 73.0,
            endTime: 73.5,
            elementToUnhide: null,
            paused:true,
        },
        //Archimedes Screw: 01:13 - 01:58
        {
            startTime: 74,
            endTime: 118,
            elementToUnhide: null,
            paused: false,
        },{
            startTime: 118.0,
            endTime: 118.5,
            elementToUnhide: null,
            paused:true,
        },
        //Machine Gun: 01:58 - 02:31
        {
            startTime: 119,
            endTime: 151,
            elementToUnhide: null,
            paused: false,
        },{
            startTime: 151.0,
            endTime: 151.5,
            elementToUnhide: null,
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
            elementToUnhide: null,
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
            elementToUnhide: null,
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
            elementToUnhide: null,
            paused:true,
        }];
        this.videos = [
        ];
    }
}

let davinciController = new DaVinciController();