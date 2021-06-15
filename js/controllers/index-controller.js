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
            topic: "The regular pyramid; pyramid, high, surface area, volume",
            ageGroup: "15",
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
            discipline: "Engineering",
            topic: "Analysis and design of bridge structures",
            ageGroup: "16-17",
            lessonPlan: "TBD",
            link: "./",
        }, {
            id: "5",
            title: "Astronomy",
            discipline: "Physics, Astronomy",
            topic: "Celestial objects, planets, moons, stars, Lunar and Solar Eclipses",
            ageGroup: "13",
            lessonPlan: "TBD",
            link: "./moon.html",
            lessonPlanUK: './pdfs/o3.2_lesson plan_Astronomy_5_EN.pdf',
            lessonPlanLit: './pdfs/o3.2_lesson plan_Astronomy_5_LT.pdf'
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
            ageGroup: "15-16",
            lessonPlan: "TBD",
            link: "./chemistry-2.html"
        }, {
            id: "10",
            title: "Chemistry Experiments",
            discipline: "Chemistry",
            topic: "Coloured flames; 'Fireflies' - energetic oxidation of alcohols; Hydrogen",
            ageGroup: "16-17",
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
            discipline: "Mechanics, Engineering",
            topic: "Ferrari and the Main Components of a Car Engine",
            ageGroup: "15-16",
            lessonPlan: "TBD",
            link: "./",
            rowspan:2,
            lessonPlanUK: './pdfs/02_Lesson Plan_Ferrari_Mechanics_17_EN.pdf',
            lessonPlanIt: './pdfs/02_Lesson Plan_Ferrari_Mechanics_17_IT.pdf'
        }, {
            id: "17.1",
            discipline: "History",
            topic: "Historical Iconic Images: Ferrari Prancing Horse",
            ageGroup: "15-16",
            lessonPlan: "TBD",
            link: "./",
            lessonPlanUK: './pdfs/01_Lesson Plan_Ferrari_History_18_EN.pdf',
            lessonPlanIt: './pdfs/01_Lesson Plan_Ferrari_History_18_IT.pdf'
        },{
            id: "18",
            title: "Flora",
            discipline: "Biology",
            topic: "Plant fertilization and development",
            ageGroup: "15-16",
            lessonPlan: "TBD",
            link: "./"
        }, {
            id: "19",
            title: "Friction drag - Car & Airplane Simulation",
            discipline: "Physics",
            topic: "Friction drag; Aerodynamics",
            ageGroup: "??",
            lessonPlan: "TBD",
            link: "./aerodynamics.html"
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
            topic: "Radiation spectrum, linear, band and continuous radiation spectrum, absorption spectrum, spectral analysis.",
            ageGroup: "16",
            lessonPlan: "TBD",
            link: "./"
        }, {
            id: "23",
            title: "Leaning Tower of Pisa",
            rowspan:3,
            discipline: "Math",
            topic: "Length and area of the cut arc",
            ageGroup: "16",
            lessonPlan: "TBD",
            link: "./math.html",
            lessonPlanUK: './pdfs/03_Lesson Plan_Leaning Tower of Pisa_Math_25_EN.pdf',
            lessonPlanIt: './pdfs/03_Lesson Plan_Leaning Tower of Pisa_Math_25_IT.pdf'
        }, {
            id: "24",
            discipline: "Math",
            topic: "Types of angles, Pythagorean Theorem",
            ageGroup: "15-16",
            lessonPlan: "TBD",
            link: "./math.html",
            lessonPlanUK: './pdfs/03_Lesson Plan_Leaning Tower of Pisa_Math_25_EN.pdf',
            lessonPlanIt: './pdfs/03_Lesson Plan_Leaning Tower of Pisa_Math_25_IT.pdf'
        }, {
            id: "24.5",
            discipline: "Geography",
            topic: "Geographical landmarks",
            ageGroup: "13-14",
            lessonPlan: "TBD",
            link: "./math.html",
            lessonPlanUK: './pdfs/04_Lesson Plan_Pisa Leaning Tower_Geography_26_EN.pdf',
            lessonPlanIt: './pdfs/04_Lesson Plan_Pisa Leaning Tower_Geography_26_IT.pdf'
        }, {
            id: "25",
            title: "Leonardo da Vinci machines Working models",
            discipline: "Robotics",
            topic: "Leonardo da Vinci’ Robot; Application of robotics in real life",
            ageGroup: "15-16",
            lessonPlan: "TBD",
            link: "./da-vinci.html",
            rowspan:5,
            lessonPlanUK: './pdfs/06_Lesson Plan_Leonardo da Vinci_Robotics_27_EN.pdf',
            lessonPlanIt: './pdfs/06_Lesson Plan_Leonardo da Vinci_Robotics_27_IT.pdf'
        }, {
            id: "25.5",
            discipline: "Engineering",
            topic: "Leonardo da Vinci, the Naturalistic Engineer; Engineering and natural observation",
            ageGroup: "15-16",
            lessonPlan: "TBD",
            link: "./da-vinci.html",
            lessonPlanUK: './pdfs/07_Lesson Plan_Leonardo da Vinci_Engineering_28_EN.pdf',
            lessonPlanIt: './pdfs/07_Lesson Plan_Leonardo da Vinci_Engineering_28_IT.pdf'
        }, {
            id: "26",
            discipline: "Mechanics",
            topic: "Self-supporting bridge; connecting element of walls, supports.",
            ageGroup: "17-18",
            lessonPlan: "TBD",
            link: "./da-vinci.html",
            lessonPlanUK: './pdfs/05_Lesson Plan_Leonardo da Vinci_Mechanics_30_EN.pdf',
            lessonPlanIt: './pdfs/05_Lesson Plan_Leonardo da Vinci_Mechanics_30_IT.pdf'
        }, {
            id: "26.5",
            discipline: "Mechanics",
            topic: "Chain Drive Mechanism ; Application of mechanics in real life",
            ageGroup: "15-16",
            lessonPlan: "TBD",
            link: "./da-vinci.html",
            lessonPlanUK: './pdfs/05_Lesson Plan_Leonardo da Vinci_Mechanics_30_EN.pdf',
            lessonPlanIt: './pdfs/05_Lesson Plan_Leonardo da Vinci_Mechanics_30_IT.pdf'
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
            topic: "Mediterranean vegetation",
            ageGroup: "15-16",
            lessonPlan: "TBD",
            link: "./",
            lessonPlanUK: './pdfs/08_Lesson Plan_Mediterranean Vegetation_Biology_33_EN.pdf',
            lessonPlanIt: './pdfs/08_Lesson Plan_Mediterranean Vegetation_Biology_33_IT.pdf'
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
            topic: "The importance of physical activity for human health",
            ageGroup: "16-17",
            lessonPlan: "TBD",
            link: "./biology.html"
        }, {
            id: "32",
            discipline: "CLIL / Biology",
            topic: "Anatomy and English language, vocabulary ",
            ageGroup: "14-15",
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
            link: "./optical-microscope.html"
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
            link: "./zoology.html",
        }]
    }

    setMaterials(filter) {
        let table = document.querySelector("#main-table tbody");
        table.innerHTML = "";
        let id = 1;
        for (let row of this.classes) {
            if (filter !== "all" && !row.discipline.toLowerCase().includes(filter)) {
                continue;
            }
            let rowEl = document.createElement("tr");
            let cell = document.createElement("td");
            cell.innerText = id;
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
            let lessonPlanWrapper = document.createElement("span");

            let lessonPlanText = document.createElement("p");
            lessonPlanText.innerText = "Lesson Plan";
            lessonPlanWrapper.appendChild(lessonPlanText);

            let anchor = document.createElement("a");
            if(row.lessonPlanUK !== undefined){
                anchor.href = row.lessonPlanUK;
                anchor.target = "_blank";
            }
            let flagUK = document.createElement("img");
            flagUK.src = "./img/flags/uk.jpg";
            flagUK.classList.add("flag");
            anchor.appendChild(flagUK);
            lessonPlanWrapper.appendChild(anchor);

            anchor = document.createElement("a");
            if(row.lessonPlanRo !== undefined){
                anchor.href = row.lessonPlanRo;
                anchor.target = "_blank";
            }
            let flagRo = document.createElement("img");
            flagRo.src = "./img/flags/ro.jpg";
            flagRo.classList.add("flag");
            lessonPlanWrapper.appendChild(flagRo);
            anchor.appendChild(flagRo);
            lessonPlanWrapper.appendChild(anchor);

            anchor = document.createElement("a");
            if(row.lessonPlanLit !== undefined){
                anchor.href = row.lessonPlanLit;
                anchor.target = "_blank";
            }
            let flagLithuania = document.createElement("img");
            flagLithuania.src = "./img/flags/lithuania.jpg";
            flagLithuania.classList.add("flag");
            anchor.appendChild(flagLithuania);
            lessonPlanWrapper.appendChild(anchor);

            anchor = document.createElement("a");
            if(row.lessonPlanPor !== undefined){
                anchor.href = row.lessonPlanPor;
                anchor.target = "_blank";
            }
            let flagPor = document.createElement("img");
            flagPor.src = "./img/flags/portugal.jpg";
            flagPor.classList.add("flag");
            anchor.appendChild(flagPor);
            lessonPlanWrapper.appendChild(anchor);

            anchor = document.createElement("a");
            if(row.lessonPlanIt !== undefined){
                anchor.href = row.lessonPlanIt;
                anchor.target = "_blank";
            }
            let flagItaly = document.createElement("img");
            flagItaly.src = "./img/flags/italy.jpg";
            flagItaly.classList.add("flag");
            anchor.appendChild(flagItaly);
            lessonPlanWrapper.appendChild(anchor);

            cell.appendChild(lessonPlanWrapper);
            // cell.innerText = row.lessonPlan;
            rowEl.appendChild(cell);

            table.appendChild(rowEl);

            id++;
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