class IndexController {

    constructor() {
        this.classes = [{
            id: "1",
            title: "Altitudinal distribution of flora",
            discipline: "Biology",
            topic: "Organisms and their environment",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./"
        }, {
            id: "2",
            title: "Architectural buildings",
            discipline: "Math",
            topic: "buildings, pieces of architecture, pyramid, prism, square, rectangle, cone, roll, etc.",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./",
            rowspan:2
        }, {
            id: "3",
            discipline: "Technology",
            topic: "Architectural styles",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./",
        },{
            id: "4",
            title: "Architectural bridges and roads",
            discipline: "Technology",
            topic: "Architectural styles",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./",
        }, {
            id: "5",
            title: "Astronomy",
            discipline: "Astronomy",
            topic: "",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./"
        }, {
            id: "6",
            title: "Caves",
            discipline: "Geography",
            topic: "Caves",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./"
        }, {
            id: "7",
            title: "Chemical Reactions",
            discipline: "Chemistry",
            topic: "Atoms, Molecules",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./"
        }, {
            id: "8",
            title: "Chemistry Experiments",
            discipline: "Chemistry",
            topic: "Redox reactions;Elephant’s toothpaste;Combustion of carbohydrates;",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./chemistry-1.html"
        }, {
            id: "9",
            title: "Chemistry Experiments",
            discipline: "Chemistry",
            topic: "Coloured flames; Green Chemical Volcano;",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./chemistry-2.html"
        }, {
            id: "10",
            title: "Chemistry Experiments",
            discipline: "Chemistry",
            topic: "Coloured flames; 'Fireflies' - energetic oxidation of alcohols",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./chemistry-3.html"
        }, {
            id: "11",
            title: "Chemistry Experiments",
            discipline: "Chemistry",
            topic: "pH indicator; 'Lava lamp'; Chemical volcano - glycerine burning",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./chemistry-4.html"
        }, {
            id: "12",
            title: "Chemistry Experiments",
            rowspan: 2,
            discipline: "Chemistry",
            topic: "Isobar process; Violent oxidation; Aluminium chlorination;",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./chemistry-5.html"
        }, {
            id: "13",
            discipline: "Chemistry",
            topic: "Stoichiometry",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./chemistry-5.html"
        }, {
            id: "14",
            title: "Electron Microscope",
            discipline: "Physics",
            topic: "The device; Operating an electronic microscope",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./electronic-microscope.html",
            rowspan:3
        }, {
            id: "15",
            discipline: "Chemistry",
            topic: "Atoms, elements and compounds",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./"
        }, {
            id: "16",
            discipline: "Chemistry",
            topic: "Metal alloys, Disk brake structure - FE, C",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./"
        }, {
            id: "17",
            title: "Ferrari - Sports car engines",
            discipline: "Physics",
            topic: "Work- product of force and displacement, energy and power",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./"
        },{
            id: "18",
            title: "Flora",
            discipline: "Biology",
            topic: "Plants, Gymnosperms, Angiosperms, Ferns, Moss",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./"
        }, {
            id: "19",
            title: "Friction drag - Car & Airplane Simulation",
            discipline: "Physics",
            topic: "Friction drag; Aerodynamics",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./"
        }, {
            id: "20",
            title: "Lake Types",
            discipline: "Geography",
            topic: " Natural dam lake, a volcanic lake, artificial/human made dam lake, glacial lake",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./"
        }, {
            id: "21",
            title: "Laser",
            discipline: "Physics",
            topic: "The process of measuring the speed of particles moving through the air",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./",
            rowspan: 2
        }, {
            id: "22",
            discipline: "Physics",
            topic: "What is a Laser? How lasers work? How is it used?",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./"
        }, {
            id: "23",
            title: "Leaning Tower of Pisa",
            rowspan:2,
            discipline: "Math",
            topic: "Collinear points, circle, adjacent angles, parallelism, geometric forms, plane and space geometry",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./math.html"
        }, {
            id: "24",
            discipline: "Math",
            topic: "Collinear points, circle, adjacent angles, parallelism, geometric forms, plane and space geometry",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./math.html"
        }, {
            id: "25",
            title: "Leonardo da Vinci machines Working models",
            discipline: "Physics",
            topic: "Angle gears and rack and pinion gears, parallel linkage",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./da-vinci.html",
            rowspan:3
        }, {
            id: "26",
            discipline: "Mechanics",
            topic: "Flying machines, working models (mechanisms, earth, water, air, fire)",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./"
        }, {
            id: "27",
            discipline: "History",
            topic: "Leonardo mathematical education, Pacioli / The printing machine ",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./"
        }, {
            id: "28",
            title: "Measuring Tools",
            discipline: "Physics",
            topic: "Cellini School",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./"
        }, {
            id: "29",
            title: "Mediterranean Vegetation",
            discipline: "Biology",
            topic: "Mediterranean vegetation, plans, environment",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./"
        },{
            id: "30",
            title: "Movement and coordination at the gym",
            rowspan: 3,
            discipline: "Biology",
            topic: "Types of movement and coordination actions",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./biology.html"
        }, {
            id: "31",
            discipline: "Biology",
            topic: "Muscles, Bones and Central Nervous System",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./biology.html"
        }, {
            id: "32",
            discipline: "Biology",
            topic: "Anatomy and English language, vocabulary ",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./biology.html"
        }, {
            id: "33",
            title: "NC Machine Tools",
            discipline: "Mechanics",
            topic: "??",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./"
        }, {
            id: "34",
            title: "Optical Microscope",
            discipline: "Physics",
            topic: "Metal alloys, Disc brake structure",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: ""
        }, {
            id: "35",
            title: "Plasma Injection",
            discipline: "Physics",
            topic: "Plasma, Aggregation State",
            ageGroup: "??",
            lessonPlan: "Plasma. The 4th aggregation state of matter.",
            link: "./plasma.html"
        }, {
            id: "36",
            title: "Phyiscs on the ski slope",
            discipline: "Physics",
            topic: "Forces Action",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./"
        }, {
            id: "37",
            title: "Robotics",
            discipline: "Technology/Physics",
            topic: "Subassemblies, stimuli, impuls electric",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./"
        }, {
            id: "38",
            title: "Shapes of settlements",
            discipline: "Geography",
            topic: "Human settlements and their impact on environment",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./"
        }, {
            id: "39",
            title: "The carillon mechanical clock",
            discipline: "Physics",
            topic: "Carillon mechanism, lever and pulley system,",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./",
            rowspan:2
        },{
            id: "40",
            discipline: "History",
            topic: "Clock History",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./"
        }, {
            id: "41",
            title: "The movements of a skier on an inclined plane",
            discipline: "Physics",
            topic: "Inclined plane, movement, distance and coordinates",
            ageGroup: "??",
            lessonPlan: "Movement on an inclined plane",
            link: "./schi.html"
        }, {
            id: "42",
            title: "Turbine - fluid mechanics",
            discipline: "Physics/Mechanics",
            topic: "",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./"
        }, {
            id: "43",
            title: "Turbine - fluid mechanics",
            discipline: "Physics/Mechanics",
            topic: "",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./"
        }, {
            id: "44",
            title: "Volcanic Rocks",
            discipline: "Geography",
            topic: "Volcanic Rocks",
            ageGroup: "15-16 years old",
            lessonPlan: "Volcanic Rocks",
            link: "./roci-vulcanice.html"
        }, {
            id: "45",
            title: "Water treatment plant",
            discipline: "Technology",
            topic: "Water treatment plant systems, procedures, water filtration",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./",
            rowspan:2
        }, {
            id: "46",
            discipline: "Chemistry",
            topic: "Drinking water, Waste water;Determination of pH, Salinity",
            ageGroup: "12-13 years",
            lessonPlan: "Determining the different characteristics of wastewater compared to drinking water",
            link: "./",
        }, {
            id: "47",
            title: "Zoology - The Anatomy Museum",
            discipline: "Biology/Zoology",
            topic: "Animal molds, animal organs, bone system, circulatory system",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./",
        }]
    }

    setMaterials(filter) {
        let table = document.querySelector("#main-table tbody");
        table.innerHTML = "";
        for (let row of this.classes) {
            if (filter !== "all" && !row.discipline.toLowerCase().includes(filter)) {
                continue;
            }
            let rowEl = document.createElement("tr");
            let cell = document.createElement("td");
            cell.innerText = row.id;
            rowEl.appendChild(cell);

            if (row.title) {
                cell = document.createElement("td");
                if (row.rowspan) {
                    cell.setAttribute("rowspan", row.rowspan);
                }

                let titleParent = cell;
                if (row.link !== "" && row.link !== "./") {
                    let link = document.createElement("a");
                    link.setAttribute("href", row.link);
                    titleParent = link;
                    cell.appendChild(titleParent);
                }
                titleParent.innerText = row.title;
                rowEl.appendChild(cell);
            }

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

    onFilterChanged() {
        let filter = document.getElementById("discipline").value;
        console.log("select changed", filter);
        this.setMaterials(filter);
    }

}

let indexController = new IndexController();
indexController.setMaterials("all");