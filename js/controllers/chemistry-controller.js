class ChemistryController extends StepsController{
    constructor() {
        super();
        let geos = document.getElementsByClassName("geo-set");
        //00:00 - 00:34
        this.elements = [{
            startTime: 0,
            endTime: 37.0,
            elementToUnhide: null,
            paused: false,
            isNextVideo: true
        },{
            startTime:37,
            endTime: 37.5,
            elementToUnhide: geos[0],
            paused:true,
        },
        //00:50 - 03:12
        {
            startTime: 37.5,
            endTime: 1760.0,
            elementToUnhide: null,
            paused: false,
        }];
        this.videos = [
        ];
    }
}

let chemistryController = new ChemistryController();