class AerodynamicsController extends StepsController{
    constructor() {
        super();
        let geos = document.getElementsByClassName("geo-set");
        //00:00 - 00:25
        this.elements = [{
            startTime: 0,
            endTime: 24.0,
            elementToUnhide: null,
            paused: false,
            isNextVideo: true
        },{
            startTime:24,
            endTime: 24.5,
            elementToUnhide: geos[0],
            paused:true,
        },
        //00:25 - 01:05
        {
            startTime: 25.5,
            endTime: 65.0,
            elementToUnhide: null,
            paused: false,
        },{
            startTime: 65.0,
            endTime: 65.5,
            elementToUnhide: geos[1],
            paused:true,
        },
        //01:05 - 01:35
        {
            startTime: 66,
            endTime: 95.0,
            elementToUnhide: null,
            paused: false,
        },{
            startTime: 95.0,
            endTime: 95.5,
            elementToUnhide: geos[2],
            paused:true,
        }];
        this.videos = [
        ];
    }
}

let aerodynamicsController = new AerodynamicsController();