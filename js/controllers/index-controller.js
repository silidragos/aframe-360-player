class IndexController {

    constructor() {
        this.classes = [{
            id: "1",
            title: "Altitudinal distribution of flora",
            discipline: "Biology",
            topic: "Organisms and their environment",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "/"
        }, {
            id: "2",
            title: "Architecture in mathematics",
            discipline: "Math",
            topic: "buildings, pieces of architecture, pyramid, prism, square, rectangle, cone, roll, etc.",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "/"
        }, {
            id: "3",
            title: "Astronomy",
            discipline: "Astronomy",
            topic: "",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "/"
        }, {
            id: "4",
            title: "Bridges",
            discipline: "Physics / Engineering",
            topic: "Bridges, construction of bridges",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "/"
        }, {
            id: "5",
            title: "Caves",
            discipline: "Geography",
            topic: "Caves",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "/"
        }, {
            id: "6",
            title: "Chemistry Experiments",
            discipline: "Chemistry",
            topic: "Redox reactions;Elephant’s toothpaste;Combustion of carbohydrates;",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "/chemistry-1.html"
        }, {
            id: "7",
            title: "Chemistry Experiments",
            discipline: "Chemistry",
            topic: "Coloured flames; Green Chemical Volcano;",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "/chemistry-2.html"
        }, {
            id: "8",
            title: "Chemistry Experiments",
            discipline: "Chemistry",
            topic: "Coloured flames; 'Fireflies' - energetic oxidation of alcohols",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "/chemistry-3.html"
        }, {
            id: "9",
            title: "Chemistry Experiments",
            discipline: "Chemistry",
            topic: "pH indicator; 'Lava lamp'; Chemical volcano - glycerine burning",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "/chemistry-4.html"
        }, {
            id: "10/11",
            title: "Chemistry Experiments",
            discipline: "Chemistry",
            topic: "Isobar process; Violent oxidation; Aluminium chlorination; Stoichiometry",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "/chemistry-5.html"
        }, {
            id: "12",
            title: "Electron Microscope",
            discipline: "Physics",
            topic: "The device; Operating an electronic microscope",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "/"
        }, {
            id: "13",
            title: "Electron Microscope",
            discipline: "Chemistry",
            topic: "Atoms, elements and compounds",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "/"
        }, {
            id: "14",
            title: "Electron Microscope",
            discipline: "Chemistry",
            topic: "The periodic table – Fe ????",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "/"
        }, {
            id: "15",
            title: "Electron Microscope",
            discipline: "Chemistry",
            topic: "Metal alloys",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "/"
        }, {
            id: "16",
            title: "Ferrari - Sports car engines",
            discipline: "Physics",
            topic: "Work, energy and power",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "/"
        }, {
            id: "17",
            title: "Friction drag - Car & Airplane Simulation",
            discipline: "Physics",
            topic: "Friction drag; Aerodynamic",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "/"
        }, {
            id: "18",
            title: "Lake Types",
            discipline: "Geography",
            topic: " Natural dam lake, a volcanic lake, artificial/human made dam lake, glacial lake",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "/"
        }, {
            id: "19",
            title: "Laser",
            discipline: "Physics",
            topic: "The Process",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "/"
        }, {
            id: "20",
            title: "Laser",
            discipline: "Physics",
            topic: "What is a Laser? How lasers work? How is it used?",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "/"
        }, {
            id: "21/22",
            title: "Leaning Tower of Pisa",
            discipline: "Math",
            topic: "Collinear points, circle, adjacent angles, parallelism, geometric forms, plane and space geometry",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "/math.html"
        }, {
            id: "23",
            title: "Leonardo da Vinci machines Working models",
            discipline: "Physics",
            topic: "",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: ""
        },{
            id: "24",
            title: "Leonardo da Vinci machines Working models",
            discipline: "Mechanics",
            topic: "",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: ""
        },{
            id: "25",
            title: "Leonardo da Vinci machines Working models",
            discipline: "History",
            topic: "",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: ""
        },{
            id: "26",
            title: "Measuring Tools",
            discipline: "Physics",
            topic: "",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: ""
        },{
            id: "27",
            title: "Movement and coordination at the gym",
            discipline: "Biology",
            topic: "Types of movement and coordination actions",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "/biology.html"
        },{
            id: "28",
            title: "Movement and coordination at the gym",
            discipline: "Biology",
            topic: "Muscles, Bones and Central Nervous System",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "/biology.html"
        },{
            id: "30",
            title: "Optical Microscope",
            discipline: "Physics",
            topic: "",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: ""
        },{
            id: "31",
            title: "Plasma Injection",
            discipline: "Physics",
            topic: "Plasma, Aggregation State",
            ageGroup: "??",
            lessonPlan: "Plasma. The 4th aggregation state of matter.",
            link: "/plasma.html"
        },{
            id: "32",
            title: "Phyiscs on the ski slope",
            discipline: "Physics",
            topic: "Forces Action",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "/"
        },{
            id: "33",
            title: "Robotics",
            discipline: "Technology/Physics",
            topic: "Subasamble, stimuli, impuls electric",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "/"
        },{
            id: "34",
            title: "Shapes of settlements",
            discipline: "Geography",
            topic: "Human settlements and their impact on environment",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "/"
        },{
            id: "35",
            title: "The carillon mechanical clock",
            discipline: "Physics",
            topic: "",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "/"
        },{
            id: "36",
            title: "The movements of a skier on an inclined plane",
            discipline: "Physics",
            topic: "Inclined plane, movement, distance and coordinates",
            ageGroup: "??",
            lessonPlan: "Movement on an inclined plane",
            link: "/math.html"
        },{
            id: "37",
            title: "Turbine - fluid mechanics",
            discipline: "Physics/Mechanics",
            topic: "",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "/"
        },{
            id: "38",
            title: "Turbine - fluid mechanics",
            discipline: "Physics/Mechanics",
            topic: "",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "/"
        },{
            id: "39",
            title: "Volcanic Rocks",
            discipline: "Geography",
            topic: "Volcanic Rocks",
            ageGroup: "15-16 years old",
            lessonPlan: "Volcanic Rocks",
            link: "/roci-vulcanice.html"
        },{
            id: "40",
            title: "Zoology - The Anatomy Museum",
            discipline: "Biology/Zoology",
            topic: "??",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "/"
        }]
    }

    setMaterials(filter){
        let table = document.querySelector("#main-table tbody");
        table.innerHTML = "";
        for(let row of this.classes){
            if(filter !== "all" && !row.discipline.toLowerCase().includes(filter)){
                continue;
            }
            let rowEl = document.createElement("tr");
            let cell = document.createElement("td");
            cell.innerText = row.id;
            rowEl.appendChild(cell);

            cell = document.createElement("td");
            if(row.link !== "" && row.link !== "/"){
                let link = document.createElement("a");
                link.setAttribute("href", row.link);
                link.innerText = row.title;
                cell.appendChild(link);
            }else{
                cell.innerText = row.title;
            }
            rowEl.appendChild(cell);
            
            cell = document.createElement("td");
            cell.innerText = row.discipline;
            rowEl.appendChild(cell);
            
            cell = document.createElement("td");
            cell.innerText = row.topic;
            rowEl.appendChild(cell);
            
            cell = document.createElement("td");
            cell.innerText = row.ageGroup;
            rowEl.appendChild(cell);
            
            cell = document.createElement("td");
            cell.innerText = row.lessonPlan;
            rowEl.appendChild(cell);

            table.appendChild(rowEl);
        }
    }

    onFilterChanged(){
        let filter = document.getElementById("discipline").value;
        console.log("select changed", filter);
        this.setMaterials(filter);
    }

}

let indexController = new IndexController();
indexController.setMaterials("all");