class Math01Controller extends StepsController{
    constructor() {
        super();
        let geos = document.getElementsByClassName("geo-set");
        this.elements = [{
            startTime: 0,
            endTime: 32.0,
            elementToUnhide: null,
            paused: false,
            isNextVideo: true
        },{
            startTime:32.0,
            endTime: 33.0,
            elementToUnhide: geos[0],
            paused:true,
        },{
            startTime:33.0,
            endTime: 87.0,
            elementToUnhide: null,
            paused:false,
        },{
            startTime:87.0,
            endTime: 88.0,
            elementToUnhide: geos[1],
            paused:true,
        },{
            startTime:87.0,
            endTime: 9,
            elementToUnhide: null,
            paused:false,
            isNextVideo: true
        },{
            startTime:9.25,
            endTime: 100,
            elementToUnhide: geos[2],
            paused:true
        },{
            startTime:9.5,
            endTime: 100,
            elementToUnhide: geos[3],
            paused:true
        },{
            startTime:9.5,
            endTime: 100,
            elementToUnhide: geos[4],
            paused:true
        },{
            startTime:9.5,
            endTime: 100,
            elementToUnhide: geos[5],
            paused:true
        },{
            startTime:9.5,
            endTime: 100,
            elementToUnhide: geos[6],
            paused:true
        },{
            startTime:9.5,
            endTime: 15,
            elementToUnhide: null,
            paused:false,
            isNextVideo: true
        },{
            startTime:15,
            endTime: 16,
            elementToUnhide: geos[7],
            paused:true
        },{
            startTime:15,
            endTime: 34,
            elementToUnhide: null,
            paused:false
        },{
            startTime:34,
            endTime: 35,
            elementToUnhide: geos[8],
            paused:true
        }];
        this.videos = [
            base_url + "math/architecture_1_montage.mp4",
            base_url + "math/architecture_1_montage_2.mp4"
        ];
    }
}

let mathController = new Math01Controller();