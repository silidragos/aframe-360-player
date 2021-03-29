class ChemistryController extends StepsController{
    constructor() {
        super();
        let geos = document.getElementsByClassName("geo-set");
        //00:00 - 00:34
        this.elements = [{
            startTime: 0,
            endTime: 36.0,
            elementToUnhide: null,
            paused: false,
            isNextVideo: true
        },{
            startTime:36,
            endTime: 36.5,
            elementToUnhide: geos[0],
            paused:true,
        },
        //00:50 - 03:12
        {
            startTime: 36.5,
            endTime: 176.0,
            elementToUnhide: null,
            paused: false,
        },
        //00:00 - 00:34
        {
            startTime: 176.5,
            endTime: 212,
            elementToUnhide: null,
            paused: false,
        },
        {
            startTime:212,
            endTime: 212.5,
            elementToUnhide: geos[1],
            paused:true,
        },
        //03:20 - 05:26
        {
            startTime: 212.5,
            endTime: 337,
            elementToUnhide: null,
            paused: false,
        },
        //00:00 - 00:34
        {
            startTime: 337,
            endTime: 373,
            elementToUnhide: null,
            paused: false,
        },
        {
            startTime:373,
            endTime: 373.5,
            elementToUnhide: geos[2],
            paused:true,
        },
        //05:34 - 09:55
        {
            startTime: 373.5,
            endTime: 635,
            elementToUnhide: null,
            paused: false,
        },
        //00:00 - 00:34
        {
            startTime: 635,
            endTime: 670,
            elementToUnhide: null,
            paused: false,
        },
        {
            startTime:671,
            endTime: 671.5,
            elementToUnhide: geos[3],
            paused:true,
        },
        //10:00 - 13:51
        {
            startTime: 671.5,
            endTime: 901,
            elementToUnhide: null,
            paused: false,
        },
        //00:00 - 00:34
        {
            startTime: 901,
            endTime: 936,
            elementToUnhide: null,
            paused: false,
        },
        {
            startTime:936,
            endTime: 936.5,
            elementToUnhide: geos[4],
            paused:true,
        },
        //14:21 - 19:36
        {
            startTime: 915.5,
            endTime: 1250,
            elementToUnhide: null,
            paused: false,
        }];
        this.videos = [
        ];
    }
}

let chemistryController = new ChemistryController();