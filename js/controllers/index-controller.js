class IndexController {

    constructor() {
        this.classes = [
            {
                id: "0",
                title: "A travel along the Douro river",
                discipline: "Geology",
                topic: "Minerals, Rocks, Granite, Shale, Quartzite, Gneiss, Moscovite, Biotite, Feldspar, Quartz, Staurolite, Olivine",
                ageGroup: "12",
                lessonPlan: "TBD",
                link: "https://felipegimenezsilva.github.io/douro.html",
                lessonPlanUK: './pdfs/25.10/1_O3.2_LessonPlan_Douro_Minerals_EN.docx',
                lessonPlanIt: './pdfs/25.10/1_O3.2_LessonPlan_Douro_Minerals_IT.docx',
                lessonPlanLit: './pdfs/25.10/1_O3.2_LessonPlan_Douro_Minerals_LT.docx',
                lessonPlanPor: './pdfs/25.10/1_O3.2_LessonPlan_Douro_Minerals_PT.docx',
                lessonPlanRo: './pdfs/25.10/1_O3.2_LessonPlan_Douro_Minerals_RO.docx',
                rowspan: 2
            },
            {
                id: "0.5",
                discipline: "Biology, Geology",
                topic: "Abiotic factors, Ecosystems, Ecological succession",
                ageGroup: "14-15",
                lessonPlan: "TBD",
                lessonPlanUK: './pdfs/25.10/2_O3.2_LessonPlan_Douro_Abiotic_EN.docx',
                lessonPlanIt: './pdfs/25.10/2_O3.2_LessonPlan_Douro_Abiotic_IT.docx',
                lessonPlanLit: './pdfs/25.10/2_O3.2_LessonPlan_Douro_Abiotic_LT.docx',
                lessonPlanPor: './pdfs/25.10/2_O3.2_LessonPlan_Douro_Abiotic_PT.docx',
                lessonPlanRo: './pdfs/25.10/2_O3.2_LessonPlan_Douro_Abiotic_RO.docx',
                link: "https://felipegimenezsilva.github.io/douro.html",
            },
            {
                id: "0.75",
                title: "Acid-base titration",
                discipline: "Chemistry",
                topic: "Acid-base titration, equivalence point, titration curve",
                ageGroup: "16-17",
                lessonPlan: "TBD",
                lessonPlanUK: './pdfs/25.10/3_O3.2_LessonPlan_AcidBase_EN.docx',
                lessonPlanIt: './pdfs/25.10/3_O3.2_LessonPlan_AcidBase_IT.docx',
                lessonPlanLit: './pdfs/25.10/3_O3.2_LessonPlan_AcidBase_LT.docx',
                lessonPlanPor: './pdfs/25.10/3_O3.2_LessonPlan_AcidBase_PT.docx',
                lessonPlanRo: './pdfs/25.10/3_O3.2_LessonPlan_AcidBase_RO.docx',
                link: "https://felipegimenezsilva.github.io/exp1.html",
            },
            {
                id: "1",
                title: "Altitudinal distribution of flora",
                discipline: "Biology",
                topic: "Organisms and their environment",
                ageGroup: "15+",
                lessonPlan: "TBD",
                lessonPlanUK: './pdfs/25.10/4_O3.2_Lesson plan_Altitudinal_distribution_of_flora_EN.docx',
                lessonPlanIt: './pdfs/25.10/4_O3.2_Lesson plan_Altitudinal_distribution_of_flora_IT.docx',
                lessonPlanLit: './pdfs/25.10/4_O3.2_Lesson plan_Altitudinal_distribution_of_flora_LT.docx',
                lessonPlanPor: './pdfs/25.10/4_O3.2_Lesson plan_Altitudinal_distribution_of_flora_PT.docx',
                lessonPlanRo: './pdfs/25.10/4_O3.2_Lesson plan_Altitudinal_distribution_of_flora_RO.docx',
                link: "./altitudinal-flora.html"
            }, {
                id: "2",
                title: "Architectural buildings",
                discipline: "Math",
                topic: "The regular pyramid; pyramid, high, surface area, volume",
                ageGroup: "15",
                lessonPlan: "TBD",
                link: "./architectural-buildings.html",
                rowspan: 4,
                lessonPlanUK: './pdfs/25.10/5_O3.2_Lesson plan_Architectural buildings_The regular_EN.docx',
                lessonPlanIt: './pdfs/25.10/5_O3.2_Lesson plan_Architectural buildings_The regular_IT.docx',
                lessonPlanLit: './pdfs/25.10/5_O3.2_Lesson plan_Architectural buildings_The regular_LT.docx',
                lessonPlanPor: './pdfs/25.10/5_O3.2_Lesson plan_Architectural buildings_The regular_PT.docx',
                lessonPlanRo: './pdfs/25.10/5_O3.2_Lesson plan_Architectural buildings_The regular_RO.docx',
            }, {
                id: "2.3",
                discipline: "Math",
                topic: "Pythagoras Theorem",
                ageGroup: "13",
                lessonPlan: "TBD",
                lessonPlanUK: './pdfs/25.10/6_O3.2_LessonPlan_Architectural buildings_Pythagoras_EN.docx',
                lessonPlanIt: './pdfs/25.10/6_O3.2_LessonPlan_Architectural buildings_Pythagoras_IT.docx',
                lessonPlanLit: './pdfs/25.10/6_O3.2_LessonPlan_Architectural buildings_Pythagoras_LT.docx',
                lessonPlanPor: './pdfs/25.10/6_O3.2_LessonPlan_Architectural buildings_Pythagoras_PT.docx',
                lessonPlanRo: './pdfs/25.10/6_O3.2_LessonPlan_Architectural buildings_Pythagoras_RO.docx',
            }, {
                id: "2.6",
                discipline: "Math",
                topic: "Cross sections of a cube",
                ageGroup: "13-17",
                lessonPlan: "TBD",
                lessonPlanUK: './pdfs/25.10/7_O3.2_LessonPlan_Architectural buildings_Cross_EN.docx',
                lessonPlanIt: './pdfs/25.10/7_O3.2_LessonPlan_Architectural buildings_Cross_IT.docx',
                lessonPlanLit: './pdfs/25.10/7_O3.2_LessonPlan_Architectural buildings_Cross_LT.docx',
                lessonPlanPor: './pdfs/25.10/7_O3.2_LessonPlan_Architectural buildings_Cross_PT.docx',
                lessonPlanRo: './pdfs/25.10/7_O3.2_LessonPlan_Architectural buildings_Cross_RO.docx',
            }, {
                id: "3",
                discipline: "Technology",
                topic: "Architectural styles",
                ageGroup: "15",
                lessonPlan: "TBD",
                lessonPlanUK: './pdfs/25.10/8_O3.2_Lesson plan_Architectural buildings_Technology_EN.docx',
                lessonPlanIt: './pdfs/25.10/8_O3.2_Lesson plan_Architectural buildings_Technology_IT.docx',
                lessonPlanLit: './pdfs/25.10/8_O3.2_Lesson plan_Architectural buildings_Technology_LT.docx',
                lessonPlanPor: './pdfs/25.10/8_O3.2_Lesson plan_Architectural buildings_Technology_PT.docx',
                lessonPlanRo: './pdfs/25.10/8_O3.2_Lesson plan_Architectural buildings_Technology_RO.docx',
            }, {
                id: "4",
                title: "Architectural bridges and roads",
                discipline: "Engineering",
                topic: "Analysis and design of bridge structures",
                ageGroup: "16-17",
                lessonPlan: "TBD",
                lessonPlanUK: './pdfs/25.10/9_O3.2_Lesson plan_Architectural Bridges_Analysis_EN.docx',
                lessonPlanIt: './pdfs/25.10/9_O3.2_Lesson plan_Architectural Bridges_Analysis_IT.docx',
                lessonPlanLit: './pdfs/25.10/9_O3.2_Lesson plan_Architectural Bridges_Analysis_LT.docx',
                lessonPlanPor: './pdfs/25.10/9_O3.2_Lesson plan_Architectural Bridges_Analysis_PT.docx',
                lessonPlanRo: './pdfs/25.10/9_O3.2_Lesson plan_Architectural Bridges_Analysis_RO.docx',
                link: "./architectural-bridges.html",
                lessonPlanLit: './pdfs/o3.2_lesson plan_Engineering_Bridges_4_LT.pdf'
            }, {
                id: "5",
                title: "Astronomy",
                discipline: "Physics, Astronomy",
                topic: "Celestial objects, planets, moons, stars, Lunar and Solar Eclipses",
                ageGroup: "13",
                lessonPlan: "TBD",
                lessonPlanUK: './pdfs/25.10/10_O3.2_lesson plan_Astronomy_EN.docx',
                lessonPlanIt: './pdfs/25.10/10_O3.2_lesson plan_Astronomy_IT.docx',
                lessonPlanLit: './pdfs/25.10/10_O3.2_lesson plan_Astronomy_LT.docx',
                lessonPlanPor: './pdfs/25.10/10_O3.2_lesson plan_Astronomy_PT.docx',
                lessonPlanRo: './pdfs/25.10/10_O3.2_lesson plan_Astronomy_RO.docx',
                link: "./moon.html",
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
                title: "Chemical Reactions - Download App",
                discipline: "Chemistry",
                topic: "Combination reaction, reactants, reaction products law of mass action",
                ageGroup: "13-14",
                lessonPlan: "TBD",
                lessonPlanUK: './pdfs/25.10/12_O3.2_Lesson plan_Chemical reactions_Combination_EN.docx',
                lessonPlanIt: './pdfs/25.10/12_O3.2_Lesson plan_Chemical reactions_Combination_IT.docx',
                lessonPlanLit: './pdfs/25.10/12_O3.2_Lesson plan_Chemical reactions_Combination_LT.docx',
                lessonPlanPor: './pdfs/25.10/12_O3.2_Lesson plan_Chemical reactions_Combination_PT.docx',
                lessonPlanRo: './pdfs/25.10/12_O3.2_Lesson plan_Chemical reactions_Combination_RO.docx',
                link: "https://github.com/RaduStefan999/Chimie_VR"
                // link: "./chemistry-7.html"
            }, {
                id: "8",
                title: "Chemistry Experiments",
                discipline: "Chemistry",
                topic: "Redox reactions;Elephant’s toothpaste;Combustion of carbohydrates;",
                ageGroup: "16-17",
                lessonPlan: "TBD",
                lessonPlanUK: './pdfs/25.10/13_O3.2_LessonPlan_Chemistry exp_Redox_EN.docx',
                lessonPlanIt: './pdfs/25.10/13_O3.2_LessonPlan_Chemistry exp_Redox_IT.docx',
                lessonPlanLit: './pdfs/25.10/13_O3.2_LessonPlan_Chemistry exp_Redox_LT.docx',
                lessonPlanPor: './pdfs/25.10/13_O3.2_LessonPlan_Chemistry exp_Redox_PT.docx',
                lessonPlanRo: './pdfs/25.10/13_O3.2_LessonPlan_Chemistry exp_Redox_RO.docx',
                link: "./chemistry-1.html"
            }, {
                id: "9",
                title: "Chemistry Experiments",
                discipline: "Chemistry",
                topic: "Coloured flames; Green Chemical Volcano;",
                ageGroup: "15-16",
                lessonPlan: "TBD",
                lessonPlanUK: './pdfs/25.10/14_O3.2_Lesson plan_Chemistry exp_Coloured_EN.docx',
                lessonPlanIt: './pdfs/25.10/14_O3.2_Lesson plan_Chemistry exp_Coloured_IT.docx',
                lessonPlanLit: './pdfs/25.10/14_O3.2_Lesson plan_Chemistry exp_Coloured_LT.docx',
                lessonPlanPor: './pdfs/25.10/14_O3.2_Lesson plan_Chemistry exp_Coloured_PT.docx',
                lessonPlanRo: './pdfs/25.10/14_O3.2_Lesson plan_Chemistry exp_Coloured_RO.docx',
                link: "./chemistry-2.html"
            }, {
                id: "10",
                title: "Chemistry Experiments",
                discipline: "Chemistry",
                topic: "Hydrogen; Coloured flames; 'Fireflies' - energetic oxidation of alcohols; Hydrogen",
                ageGroup: "16-17",
                lessonPlan: "TBD",
                link: "./chemistry-3.html",
                lessonPlanUK: './pdfs/25.10/15_O3.2_Lesson plan_Chemistry exp_Hydrogen_EN.docx',
                lessonPlanIt: './pdfs/25.10/15_O3.2_Lesson plan_Chemistry exp_Hydrogen_IT.docx',
                lessonPlanLit: './pdfs/25.10/15_O3.2_Lesson plan_Chemistry exp_Hydrogen_LT.docx',
                lessonPlanPor: './pdfs/25.10/15_O3.2_Lesson plan_Chemistry exp_Hydrogen_PT.docx',
                lessonPlanRo: './pdfs/25.10/15_O3.2_Lesson plan_Chemistry exp_Hydrogen_RO.docx',
            }, {
                id: "11",
                title: "Chemistry Experiments",
                discipline: "Chemistry",
                topic: "pH indicator; 'Lava lamp'; Chemical volcano - glycerine burning",
                ageGroup: "14-15",
                lessonPlan: "TBD",
                link: "./chemistry-4.html",
                lessonPlanUK: './pdfs/25.10/16_O3.2_Lesson plan_Chemistry exp_pH_EN.docx',
                lessonPlanIt: './pdfs/25.10/16_O3.2_Lesson plan_Chemistry exp_pH_IT.docx',
                lessonPlanLit: './pdfs/25.10/16_O3.2_Lesson plan_Chemistry exp_pH_LT.docx',
                lessonPlanPor: './pdfs/25.10/16_O3.2_Lesson plan_Chemistry exp_pH_PT.docx',
                lessonPlanRo: './pdfs/25.10/16_O3.2_Lesson plan_Chemistry exp_pH_RO.docx',
            }, {
                id: "12",
                title: "Chemistry Experiments",
                discipline: "Chemistry",
                topic: "Isobar process; Violent oxidation; Aluminium chlorination;",
                ageGroup: "14-15",
                lessonPlan: "TBD",
                link: "./chemistry-5.html",
                lessonPlanUK: './pdfs/25.10/17_O3.2_Lesson plan_Chemistry exp_Aluminium_EN.docx',
                lessonPlanIt: './pdfs/25.10/17_O3.2_Lesson plan_Chemistry exp_Aluminium_IT.docx',
                lessonPlanLit: './pdfs/25.10/17_O3.2_Lesson plan_Chemistry exp_Aluminium_LT.docx',
                lessonPlanPor: './pdfs/25.10/17_O3.2_Lesson plan_Chemistry exp_Aluminium_PT.docx',
                lessonPlanRo: './pdfs/25.10/17_O3.2_Lesson plan_Chemistry exp_Aluminium_RO.docx',
            // }, {
            //     id: "13",
            //     discipline: "Chemistry",
            //     topic: "Stoichiometry",
            //     ageGroup: "??",
            //     lessonPlan: "TBD",
            //     link: "./chemistry-5.html"
            },{
                id: "14",
                title: "Electron Microscope",
                discipline: "Physics",
                topic: "The device; Operating an electronic microscope",
                ageGroup: "15",
                lessonPlan: "TBD",
                link: "./electronic-microscope.html",
                lessonPlanUK: './pdfs/25.10/18_O3.2_Lesson plan_Electron_Physics_EN.docx',
                lessonPlanIt: './pdfs/25.10/18_O3.2_Lesson plan_Electron_Physics_IT.docx',
                lessonPlanLit: './pdfs/25.10/18_O3.2_Lesson plan_Electron_Physics_LT.docx',
                lessonPlanPor: './pdfs/25.10/18_O3.2_Lesson plan_Electron_Physics_PT.docx',
                lessonPlanRo: './pdfs/25.10/18_O3.2_Lesson plan_Electron_Physics_RO.docx',
                rowspan: 2
            // }, {
            //     id: "15",
            //     discipline: "Chemistry",
            //     topic: "Atoms, elements and compounds",
            //     ageGroup: "??",
            //     lessonPlan: "TBD",
            //     link: "./"
            }, {
                id: "16",
                discipline: "Chemistry",
                topic: "Metal alloys, Disk brake structure - FE, C",
                ageGroup: "15",
                lessonPlan: "TBD",
                lessonPlanUK: './pdfs/25.10/19_O3.2_Lesson plan_Electron_Chemistry_EN.docx',
                lessonPlanIt: './pdfs/25.10/19_O3.2_Lesson plan_Electron_Chemistry_IT.docx',
                lessonPlanLit: './pdfs/25.10/19_O3.2_Lesson plan_Electron_Chemistry_LT.docx',
                lessonPlanPor: './pdfs/25.10/19_O3.2_Lesson plan_Electron_Chemistry_PT.docx',
                lessonPlanRo: './pdfs/25.10/19_O3.2_Lesson plan_Electron_Chemistry_RO.docx',
            }, {
                id: "17",
                title: "Ferrari - Sports car engines",
                discipline: "Mechanics, Engineering",
                topic: "Ferrari and the Main Components of a Car Engine",
                ageGroup: "15-16",
                lessonPlan: "TBD",
                link: "./ferrari.html",
                lessonPlanUK: './pdfs/25.10/20_O3.2_Lesson Plan_Ferrari_Mechanics_EN.docx',
                lessonPlanIt: './pdfs/25.10/20_O3.2_Lesson Plan_Ferrari_Mechanics_IT.docx',
                lessonPlanLit: './pdfs/25.10/20_O3.2_Lesson Plan_Ferrari_Mechanics_LT.docx',
                lessonPlanPor: './pdfs/25.10/20_O3.2_Lesson Plan_Ferrari_Mechanics_PT.docx',
                lessonPlanRo: './pdfs/25.10/20_O3.2_Lesson Plan_Ferrari_Mechanics_RO.docx',
            }, {
                id: "17.1",
                title: "Ferrari - Prancing Horse",
                discipline: "History",
                topic: "Historical Iconic Images: Ferrari Prancing Horse",
                ageGroup: "15-16",
                lessonPlan: "TBD",
                link: "./ferrari-prancing.html",
                lessonPlanUK: './pdfs/25.10/21_O3.2_Lesson Plan_Ferrari_Mechanics_Prancing_EN.docx',
                lessonPlanIt: './pdfs/25.10/21_O3.2_Lesson Plan_Ferrari_Mechanics_Prancing_IT.docx',
                lessonPlanLit: './pdfs/25.10/21_O3.2_Lesson Plan_Ferrari_Mechanics_Prancing_LT.docx',
                lessonPlanPor: './pdfs/25.10/21_O3.2_Lesson Plan_Ferrari_Mechanics_Prancing_PT.docx',
                lessonPlanRo: './pdfs/25.10/21_O3.2_Lesson Plan_Ferrari_Mechanics_Prancing_RO.docx',
            }, {
                id: "18",
                title: "Flora - Download App",
                discipline: "Biology",
                topic: "Plant fertilization and development",
                ageGroup: "15-16",
                lessonPlan: "TBD",
                rowspan: 2,
                link: "https://github.com/RaduStefan999/Biologie_VR",
                lessonPlanUK: './pdfs/25.10/22_O3.2_Lesson plan_Fertilization in plants_EN.docx',
                lessonPlanIt: './pdfs/25.10/22_O3.2_Lesson plan_Fertilization in plants_IT.docx',
                lessonPlanLit: './pdfs/25.10/22_O3.2_Lesson plan_Fertilization in plants_LT.docx',
                lessonPlanPor: './pdfs/25.10/22_O3.2_Lesson plan_Fertilization in plants_PT.docx',
                lessonPlanRo: './pdfs/25.10/22_O3.2_Lesson plan_Fertilization in plants_RO.docx',
            },{
                id: "18",
                discipline: "Biology",
                topic: "Plant reproduction",
                ageGroup: "13-15",
                lessonPlan: "TBD",
                lessonPlanUK: './pdfs/25.10/23_O3.2_Lesson Plan_Flora_Reproduction_EN.docx',
                lessonPlanIt: './pdfs/25.10/23_O3.2_Lesson Plan_Flora_Reproduction_IT.docx',
                lessonPlanLit: './pdfs/25.10/23_O3.2_Lesson Plan_Flora_Reproduction_LT.docx',
                lessonPlanPor: './pdfs/25.10/23_O3.2_Lesson Plan_Flora_Reproduction_PT.docx',
                lessonPlanRo: './pdfs/25.10/23_O3.2_Lesson Plan_Flora_Reproduction_RO.docx',
            } , {
                id: "19",
                title: "Friction drag - Car & Airplane Simulation",
                discipline: "Physics",
                topic: "Friction drag; Aerodynamics",
                ageGroup: "15",
                lessonPlan: "TBD",
                link: "./aerodynamics.html",
                lessonPlanUK: './pdfs/25.10/24_O3.2_Lesson plan_Friction_Drag_EN.docx',
                lessonPlanIt: './pdfs/25.10/24_O3.2_Lesson plan_Friction_Drag_IT.docx',
                lessonPlanLit: './pdfs/25.10/24_O3.2_Lesson plan_Friction_Drag_LT.docx',
                lessonPlanPor: './pdfs/25.10/24_O3.2_Lesson plan_Friction_Drag_PT.docx',
                lessonPlanRo: './pdfs/25.10/24_O3.2_Lesson plan_Friction_Drag_RO.docx',
            }, {
                id: "20",
                title: "Lakes",
                discipline: "Geography",
                topic: "Hydro lakes, Natural dam lake,  a volcanic lake, artificial/human made dam lake,  glacial lake",
                ageGroup: "15",
                lessonPlan: "TBD",
                link: "./lakes.html",
                lessonPlanUK: './pdfs/25.10/25_O3.2_Lesson plan_Lakes_EN.docx',
                lessonPlanIt: './pdfs/25.10/25_O3.2_Lesson plan_Lakes_IT.docx',
                lessonPlanLit: './pdfs/25.10/25_O3.2_Lesson plan_Lakes_LT.docx',
                lessonPlanPor: './pdfs/25.10/25_O3.2_Lesson plan_Lakes_PT.docx',
                lessonPlanRo: './pdfs/25.10/25_O3.2_Lesson plan_Lakes_RO.docx',
            }, {
                id: "21",
                title: "Laser - particle movement",
                discipline: "Physics",
                topic: "The process of measuring the speed of particles moving through the air",
                ageGroup: "15",
                lessonPlan: "TBD",
                link: "./laser-1.html",
                lessonPlanUK: './pdfs/25.10/26_O3.2_Lesson plan_Laser_Particle mov_EN.docx',
                lessonPlanIt: './pdfs/25.10/26_O3.2_Lesson plan_Laser_Particle mov_IT.docx',
                lessonPlanLit: './pdfs/25.10/26_O3.2_Lesson plan_Laser_Particle mov_LT.docx',
                lessonPlanPor: './pdfs/25.10/26_O3.2_Lesson plan_Laser_Particle mov_PT.docx',
                lessonPlanRo: './pdfs/25.10/26_O3.2_Lesson plan_Laser_Particle mov_RO.docx',
                // rowspan: 2
            }, {
                id: "22",
                title: "Laser - The Physics of lasers",
                discipline: "Physics",
                topic: "Radiation spectrum, linear, band and continuous radiation spectrum, absorption spectrum, spectral analysis.",
                ageGroup: "16",
                lessonPlan: "TBD",
                link: "./laser-2.html",
                lessonPlanUK: './pdfs/25.10/27_O3.2_Lesson Plan_Laser_The Physics_EN.docx',
                lessonPlanIt: './pdfs/25.10/27_O3.2_Lesson Plan_Laser_The Physics_IT.docx',
                lessonPlanLit: './pdfs/25.10/27_O3.2_Lesson Plan_Laser_The Physics_LT.docx',
                lessonPlanPor: './pdfs/25.10/27_O3.2_Lesson Plan_Laser_The Physics_PT.docx',
                lessonPlanRo: './pdfs/25.10/27_O3.2_Lesson Plan_Laser_The Physics_RO.docx',
            }, {
                id: "23",
                title: "Leaning Tower of Pisa",
                rowspan: 4,
                discipline: "Math",
                topic: "Length and area of the cut arc",
                ageGroup: "16",
                lessonPlan: "TBD",
                link: "./math.html",
                lessonPlanUK: './pdfs/25.10/28_O3.2_Lesson Plan_Pisa_Lenght_EN.docx',
                lessonPlanIt: './pdfs/25.10/28_O3.2_Lesson Plan_Pisa_Lenght_IT.docx',
                lessonPlanLit: './pdfs/25.10/28_O3.2_Lesson Plan_Pisa_Lenght_LT.docx',
                lessonPlanPor: './pdfs/25.10/28_O3.2_Lesson Plan_Pisa_Lenght_PT.docx',
                lessonPlanRo: './pdfs/25.10/28_O3.2_Lesson Plan_Pisa_Lenght_RO.docx',
            }, {
                id: "24",
                discipline: "Math",
                topic: "Types of angles, Pythagorean Theorem",
                ageGroup: "15-16",
                lessonPlan: "TBD",
                link: "./math.html",
                lessonPlanUK: './pdfs/25.10/29_O3_Lesson Plan_Pisa_Types Pythagorean_EN.docx',
                lessonPlanIt: './pdfs/25.10/29_O3_Lesson Plan_Pisa_Types Pythagorean_IT.docx',
                lessonPlanLit: './pdfs/25.10/29_O3_Lesson Plan_Pisa_Types Pythagorean_LT.docx',
                lessonPlanPor: './pdfs/25.10/29_O3_Lesson Plan_Pisa_Types Pythagorean_PT.docx',
                lessonPlanRo: './pdfs/25.10/29_O3_Lesson Plan_Pisa_Types Pythagorean_RO.docx',
            }, {
                id: "24.5",
                discipline: "Geography",
                topic: "Geographical landmarks",
                ageGroup: "13-14",
                lessonPlan: "TBD",
                link: "./math.html",
                lessonPlanUK: './pdfs/25.10/30_O3_Lesson Plan_Pisa Leaning_Geography_EN.docx',
                lessonPlanIt: './pdfs/25.10/30_O3_Lesson Plan_Pisa Leaning_Geography_IT.docx',
                lessonPlanLit: './pdfs/25.10/30_O3_Lesson Plan_Pisa Leaning_Geography_LT.docx',
                lessonPlanPor: './pdfs/25.10/30_O3_Lesson Plan_Pisa Leaning_Geography_PT.docx',
                lessonPlanRo: './pdfs/25.10/30_O3_Lesson Plan_Pisa Leaning_Geography_RO.docx',
            }, {
                id: "24.75",
                discipline: "Arts",
                topic: "The Tower of Pisa, history and curiosities",
                ageGroup: "15<",
                lessonPlan: "TBD",
                link: "./math.html",
                lessonPlanUK: './pdfs/25.10/31_O3.2_Lesson plan_Pisa_Arts_EN.docx',
                lessonPlanIt: './pdfs/25.10/31_O3.2_Lesson plan_Pisa_Arts_IT.docx',
                lessonPlanLit: './pdfs/25.10/31_O3.2_Lesson plan_Pisa_Arts_LT.docx',
                lessonPlanPor: './pdfs/25.10/31_O3.2_Lesson plan_Pisa_Arts_PT.docx',
                lessonPlanRo: './pdfs/25.10/31_O3.2_Lesson plan_Pisa_Arts_RO.docx',
            }, {
                id: "25",
                title: "Leonardo da Vinci machines Working models",
                discipline: "Robotics",
                topic: "Leonardo da Vinci’ Robot; Application of robotics in real life",
                ageGroup: "15-16",
                lessonPlan: "TBD",
                link: "./da-vinci.html",
                rowspan: 6,
                lessonPlanUK: './pdfs/25.10/32_O3.2_Lesson Plan_Leonardo da Vinci_Robotics_EN.docx',
                lessonPlanIt: './pdfs/25.10/32_O3.2_Lesson Plan_Leonardo da Vinci_Robotics_IT.docx',
                lessonPlanLit: './pdfs/25.10/32_O3.2_Lesson Plan_Leonardo da Vinci_Robotics_LT.docx',
                lessonPlanPor: './pdfs/25.10/32_O3.2_Lesson Plan_Leonardo da Vinci_Robotics_PT.docx',
                lessonPlanRo: './pdfs/25.10/32_O3.2_Lesson Plan_Leonardo da Vinci_Robotics_RO.docx',
            }, {
                id: "25.5",
                discipline: "Engineering",
                topic: "Leonardo da Vinci, the Naturalistic Engineer; Engineering and natural observation",
                ageGroup: "15-16",
                lessonPlan: "TBD",
                link: "./da-vinci.html",
                lessonPlanUK: './pdfs/25.10/33_O3.2_Lesson Plan_Leonardo da Vinci_Engineering_EN.docx',
                lessonPlanIt: './pdfs/25.10/33_O3.2_Lesson Plan_Leonardo da Vinci_Engineering_IT.docx',
                lessonPlanLit: './pdfs/25.10/33_O3.2_Lesson Plan_Leonardo da Vinci_Engineering_LT.docx',
                lessonPlanPor: './pdfs/25.10/33_O3.2_Lesson Plan_Leonardo da Vinci_Engineering_PT.docx',
                lessonPlanRo: './pdfs/25.10/33_O3.2_Lesson Plan_Leonardo da Vinci_Engineering_RO.docx',
            }, {
                id: "26",
                discipline: "Technology",
                topic: "Leonardo da Vinci inventions",
                ageGroup: "14-15",
                lessonPlan: "TBD",
                link: "./da-vinci.html",
                lessonPlanUK: './pdfs/25.10/34_O3_Lesson Plan_LeonardodaVinci_Technology_EN.docx',
                lessonPlanIt: './pdfs/25.10/34_O3_Lesson Plan_LeonardodaVinci_Technology_IT.docx',
                lessonPlanLit: './pdfs/25.10/34_O3_Lesson Plan_LeonardodaVinci_Technology_LT.docx',
                lessonPlanPor: './pdfs/25.10/34_O3_Lesson Plan_LeonardodaVinci_Technology_PT.docx',
                lessonPlanRo: './pdfs/25.10/34_O3_Lesson Plan_LeonardodaVinci_Technology_RO.docx',
            }, {
                id: "26.5",
                discipline: "Mechanics",
                topic: "Self-supporting bridge; connecting element of walls, supports.",
                ageGroup: "17-18",
                lessonPlan: "TBD",
                link: "./da-vinci.html",
                lessonPlanUK: './pdfs/25.10/35_O3.2_Lesson plan_Leonardo da Vinci_self supporting bridge_EN.docx',
                lessonPlanIt: './pdfs/25.10/35_O3.2_Lesson plan_Leonardo da Vinci_self supporting bridge_IT.docx',
                lessonPlanLit: './pdfs/25.10/35_O3.2_Lesson plan_Leonardo da Vinci_self supporting bridge_LT.docx',
                lessonPlanPor: './pdfs/25.10/35_O3.2_Lesson plan_Leonardo da Vinci_self supporting bridge_PT.docx',
                lessonPlanRo: './pdfs/25.10/35_O3.2_Lesson plan_Leonardo da Vinci_self supporting bridge_RO.docx',
            }, {
                id: "27",
                discipline: "Mechanics",
                topic: "Chain Drive Mechanism ; Application of mechanics in real life",
                ageGroup: "15-16",
                lessonPlan: "TBD",
                link: "./",
                lessonPlanUK: './pdfs/25.10/36_O3_Lesson Plan_Leonardo da Vinci_Chain Drive_EN.docx',
                lessonPlanIt: './pdfs/25.10/36_O3_Lesson Plan_Leonardo da Vinci_Chain Drive_IT.docx',
                lessonPlanLit: './pdfs/25.10/36_O3_Lesson Plan_Leonardo da Vinci_Chain Drive_LT.docx',
                lessonPlanPor: './pdfs/25.10/36_O3_Lesson Plan_Leonardo da Vinci_Chain Drive_PT.docx',
                lessonPlanRo: './pdfs/25.10/36_O3_Lesson Plan_Leonardo da Vinci_Chain Drive_RO.docx',
            }, {
                id: "27.5",
                discipline: "History",
                topic: "History through iconic images",
                ageGroup: "15-16",
                lessonPlan: "TBD",
                link: "./",
                lessonPlanUK: './pdfs/25.10/37_O3_Lesson Plan_LeonardodaVinci_History_EN.docx',
                lessonPlanIt: './pdfs/25.10/37_O3_Lesson Plan_LeonardodaVinci_History_IT.docx',
                lessonPlanLit: './pdfs/25.10/37_O3_Lesson Plan_LeonardodaVinci_History_LT.docx',
                lessonPlanPor: './pdfs/25.10/37_O3_Lesson Plan_LeonardodaVinci_History_PT.docx',
                lessonPlanRo: './pdfs/25.10/37_O3_Lesson Plan_LeonardodaVinci_History_RO.docx',
            }, {
                id: "28",
                title: "Measuring Tools",
                discipline: "Physics",
                topic: "Mechanics Measuring Tools",
                ageGroup: "15-16",
                lessonPlan: "TBD",
                link: "./measuring-tools.html",
                lessonPlanUK: './pdfs/25.10/38_O3.2_Lesson plan_Measuring tools_EN.docx',
                lessonPlanIt: './pdfs/25.10/38_O3.2_Lesson plan_Measuring tools_IT.docx',
                lessonPlanLit: './pdfs/25.10/38_O3.2_Lesson plan_Measuring tools_LT.docx',
                lessonPlanPor: './pdfs/25.10/38_O3.2_Lesson plan_Measuring tools_PT.docx',
                lessonPlanRo: './pdfs/25.10/38_O3.2_Lesson plan_Measuring tools_RO.docx',
            }, {
                id: "29",
                title: "Mediterranean Vegetation",
                discipline: "Biology",
                topic: "Mediterranean vegetation",
                ageGroup: "15-16",
                lessonPlan: "TBD",
                link: "./mediterranean-vegetation.html",
                lessonPlanUK: './pdfs/25.10/39_O3_Lesson Plan_Mediterranean Vegetation_EN.docx',
                lessonPlanIt: './pdfs/25.10/39_O3_Lesson Plan_Mediterranean Vegetation_IT.docx',
                lessonPlanLit: './pdfs/25.10/39_O3_Lesson Plan_Mediterranean Vegetation_LT.docx',
                lessonPlanPor: './pdfs/25.10/39_O3_Lesson Plan_Mediterranean Vegetation_PT.docx',
                lessonPlanRo: './pdfs/25.10/39_O3_Lesson Plan_Mediterranean Vegetation_RO.docx',
            }, {
                id: "30",
                title: "Movement and coordination at the gym",
                rowspan: 2,
                discipline: "Biology",
                topic: "The importance of physical activity for human health",
                ageGroup: "16-17",
                lessonPlan: "TBD",
                link: "./biology.html",
                lessonPlanUK: './pdfs/25.10/40_O3.2_Lesson plan_Movement_The importance of_EN.docx',
                lessonPlanIt: './pdfs/25.10/40_O3.2_Lesson plan_Movement_The importance of_IT.docx',
                lessonPlanLit: './pdfs/25.10/40_O3.2_Lesson plan_Movement_The importance of_LT.docx',
                lessonPlanPor: './pdfs/25.10/40_O3.2_Lesson plan_Movement_The importance of_PT.docx',
                lessonPlanRo: './pdfs/25.10/40_O3.2_Lesson plan_Movement_The importance of_RO.docx',
            }, {
                id: "32",
                discipline: "CLIL / Biology",
                topic: "Anatomy and English language, vocabulary ",
                ageGroup: "14-15",
                lessonPlan: "TBD",
                link: "./biology.html",
                lessonPlanUK: './pdfs/25.10/41_O3.2_Lesson plan_Movement_CLIL_EN.docx',
                lessonPlanIt: './pdfs/25.10/41_O3.2_Lesson plan_Movement_CLIL_IT.docx',
                lessonPlanLit: './pdfs/25.10/41_O3.2_Lesson plan_Movement_CLIL_LT.docx',
                lessonPlanPor: './pdfs/25.10/41_O3.2_Lesson plan_Movement_CLIL_PT.docx',
                lessonPlanRo: './pdfs/25.10/41_O3.2_Lesson plan_Movement_CLIL_RO.docx',
            }, {
                id: "33",
                title: "NC Machine Tools",
                discipline: "Mechanics",
                topic: "NC Machines, NC Milling, NC Turning",
                ageGroup: "17-18",
                lessonPlan: "TBD",
                link: "./nc-machine.html",
                lessonPlanUK: './pdfs/25.10/42_O3.2_Lesson plan_NC Machine_EN.docx',
                lessonPlanIt: './pdfs/25.10/42_O3.2_Lesson plan_NC Machine_IT.docx',
                lessonPlanLit: './pdfs/25.10/42_O3.2_Lesson plan_NC Machine_LT.docx',
                lessonPlanPor: './pdfs/25.10/42_O3.2_Lesson plan_NC Machine_PT.docx',
                lessonPlanRo: './pdfs/25.10/42_O3.2_Lesson plan_NC Machine_RO.docx',
            }, {
                id: "34",
                title: "Optical Microscope",
                discipline: "Physics",
                topic: "Metal alloys, Disc brake structure",
                ageGroup: "15+",
                lessonPlan: "TBD",
                link: "./optical-microscope.html",
                lessonPlanUK: './pdfs/25.10/43_O3.2_Lesson plan_Optical microscope_Metal_Alloys_EN.docx',
                lessonPlanIt: './pdfs/25.10/43_O3.2_Lesson plan_Optical microscope_Metal_Alloys_IT.docx',
                lessonPlanLit: './pdfs/25.10/43_O3.2_Lesson plan_Optical microscope_Metal_Alloys_LT.docx',
                lessonPlanPor: './pdfs/25.10/43_O3.2_Lesson plan_Optical microscope_Metal_Alloys_PT.docx',
                lessonPlanRo: './pdfs/25.10/43_O3.2_Lesson plan_Optical microscope_Metal_Alloys_RO.docx',
            }, {
                id: "35",
                title: "Plasma Injection",
                discipline: "Physics",
                topic: "Plasma, Aggregation State",
                ageGroup: "12",
                lessonPlan: "Plasma. The 4th aggregation state of matter.",
                link: "./plasma.html",
                lessonPlanUK: './pdfs/25.10/44_O3.2_Lesson plan_Plasma injection_EN.docx',
                lessonPlanIt: './pdfs/25.10/44_O3.2_Lesson plan_Plasma injection_IT.docx',
                lessonPlanLit: './pdfs/25.10/44_O3.2_Lesson plan_Plasma injection_LT.docx',
                lessonPlanPor: './pdfs/25.10/44_O3.2_Lesson plan_Plasma injection_PT.docx',
                lessonPlanRo: './pdfs/25.10/44_O3.2_Lesson plan_Plasma injection_RO.docx',
            },{
                id: "35.5",
                title: "Rivers",
                discipline: "Geography",
                topic: "Geographical layout of rivers, types of rivers, river anatomy, erosion, sedimentation",
                ageGroup: "??",
                lessonPlan: "Plasma. The 4th aggregation state of matter.",
                link: "./rivers.html",
            // },{
            //     id: "36",
            //     title: "Phyiscs on the ski slope",
            //     discipline: "Physics",
            //     topic: "Forces Action",
            //     ageGroup: "??",
            //     lessonPlan: "TBD",
            //     link: "./"
            }, {
                id: "37",
                title: "Robotics",
                discipline: "Technology, Physics",
                topic: "Subassemblies, stimuli, impuls electric",
                ageGroup: "15+",
                lessonPlan: "TBD",
                link: "./robotics.html",
                lessonPlanUK: './pdfs/25.10/46_O3.2_Lesson plan_Robotics_EN.docx',
                lessonPlanIt: './pdfs/25.10/46_O3.2_Lesson plan_Robotics_IT.docx',
                lessonPlanLit: './pdfs/25.10/46_O3.2_Lesson plan_Robotics_LT.docx',
                lessonPlanPor: './pdfs/25.10/46_O3.2_Lesson plan_Robotics_PT.docx',
                lessonPlanRo: './pdfs/25.10/46_O3.2_Lesson plan_Robotics_RO.docx',
            }, {
                id: "38",
                title: "Shapes of settlements",
                discipline: "Geography",
                topic: "Human settlements and their impact on environment",
                ageGroup: "??",
                lessonPlan: "TBD",
                link: "./"
            },{
                id: "38.5",
                title: "Synthesis of Aspirin",
                discipline: "Chemistry",
                topic: "Synthesis, reaction yield, product purity, catalyst",
                ageGroup: "15-16",
                lessonPlan: "TBD",
                link: "https://felipegimenezsilva.github.io/exp2.html",
                lessonPlanUK: './pdfs/25.10/48_O3.2_LessonPlan_Synthesis of Aspirin_EN.docx',
                lessonPlanIt: './pdfs/25.10/48_O3.2_LessonPlan_Synthesis of Aspirin_IT.docx',
                lessonPlanLit: './pdfs/25.10/48_O3.2_LessonPlan_Synthesis of Aspirin_LT.docx',
                lessonPlanPor: './pdfs/25.10/48_O3.2_LessonPlan_Synthesis of Aspirin_PT.docx',
                lessonPlanRo: './pdfs/25.10/48_O3.2_LessonPlan_Synthesis of Aspirin_RO.docx',
            }, {
                id: "39",
                title: "The carillon mechanical clock",
                discipline: "Physics",
                topic: "Carillon mechanism, lever and pulley system,",
                ageGroup: "14",
                lessonPlan: "TBD",
                link: "./palat.html",
                rowspan: 2,
                lessonPlanUK: './pdfs/25.10/49_O3_Lesson Plan_The carillon clock_Physics_EN.docx',
                lessonPlanIt: './pdfs/25.10/49_O3_Lesson Plan_The carillon clock_Physics_IT.docx',
                lessonPlanLit: './pdfs/25.10/49_O3_Lesson Plan_The carillon clock_Physics_LT.docx',
                lessonPlanPor: './pdfs/25.10/49_O3_Lesson Plan_The carillon clock_Physics_PT.docx',
                lessonPlanRo: './pdfs/25.10/49_O3_Lesson Plan_The carillon clock_Physics_RO.docx',
            }, {
                id: "40",
                discipline: "History",
                topic: "Clock History",
                ageGroup: "14",
                lessonPlan: "TBD",
                link: "./",
                lessonPlanUK: './pdfs/25.10/50_O3_Lesson Plan_The carillon clock_History_EN.docx',
                lessonPlanIt: './pdfs/25.10/50_O3_Lesson Plan_The carillon clock_History_IT.docx',
                lessonPlanLit: './pdfs/25.10/50_O3_Lesson Plan_The carillon clock_History_LT.docx',
                lessonPlanPor: './pdfs/25.10/50_O3_Lesson Plan_The carillon clock_History_PT.docx',
                lessonPlanRo: './pdfs/25.10/50_O3_Lesson Plan_The carillon clock_History_RO.docx'
            }, {
                id: "41",
                title: "The movements of a skier on an inclined plane",
                discipline: "Physics",
                topic: "Inclined plane, movement, distance and coordinates",
                ageGroup: "12",
                lessonPlan: "Movement on an inclined plane",
                link: "./schi.html",
                lessonPlanUK: './pdfs/25.10/51_O3.2_Lesson plan_Skier_Inclined Plane_EN.docx',
                lessonPlanIt: './pdfs/25.10/51_O3.2_Lesson plan_Skier_Inclined Plane_IT.docx',
                lessonPlanLit: './pdfs/25.10/51_O3.2_Lesson plan_Skier_Inclined Plane_LT.docx',
                lessonPlanPor: './pdfs/25.10/51_O3.2_Lesson plan_Skier_Inclined Plane_PT.docx',
                lessonPlanRo: './pdfs/25.10/51_O3.2_Lesson plan_Skier_Inclined Plane_RO.docx'
            }, {
                id: "42",
                title: "Turbine - Small Fall Water Turbine",
                discipline: "Physics/Mechanics",
                topic: "Hydraulics, Water Turbine, Computer simulation",
                ageGroup: "15+",
                lessonPlan: "TBD",
                link: "./small-fall-turbine.html",
                lessonPlanUK: './pdfs/25.10/52_O3.2_Lesson plan_Turbine_Small fall_EN.docx',
                lessonPlanIt: './pdfs/25.10/52_O3.2_Lesson plan_Turbine_Small fall_IT.docx',
                lessonPlanLit: './pdfs/25.10/52_O3.2_Lesson plan_Turbine_Small fall_LT.docx',
                lessonPlanPor: './pdfs/25.10/52_O3.2_Lesson plan_Turbine_Small fall_PT.docx',
                lessonPlanRo: './pdfs/25.10/52_O3.2_Lesson plan_Turbine_Small fall_RO.docx'
            }, {
                id: "43",
                title: "Turbine - Wind Turbine",
                discipline: "Physics/Mechanics",
                topic: "Air flow, Wind Turbine, Computer simulation.",
                ageGroup: "15+",
                lessonPlan: "TBD",
                link: "./wind-turbine.html",
                lessonPlanUK: './pdfs/25.10/53_O3.2_Lesson plan_Turbine_Wind_EN.docx',
                lessonPlanIt: './pdfs/25.10/53_O3.2_Lesson plan_Turbine_Wind_IT.docx',
                lessonPlanLit: './pdfs/25.10/53_O3.2_Lesson plan_Turbine_Wind_LT.docx',
                lessonPlanPor: './pdfs/25.10/53_O3.2_Lesson plan_Turbine_Wind_PT.docx',
                lessonPlanRo: './pdfs/25.10/53_O3.2_Lesson plan_Turbine_Wind_RO.docx'
            }, {
                id: "44",
                title: "Volcanic Rocks",
                discipline: "Geography",
                topic: "Volcanic Rocks",
                ageGroup: "15-16",
                lessonPlan: "Volcanic Rocks",
                link: "./roci-vulcanice.html",
                lessonPlanUK: './pdfs/25.10/54_O3.2_Lesson plan_Volcanic Rocks_EN.docx',
                lessonPlanIt: './pdfs/25.10/54_O3.2_Lesson plan_Volcanic Rocks_IT.docx',
                lessonPlanLit: './pdfs/25.10/54_O3.2_Lesson plan_Volcanic Rocks_LT.docx',
                lessonPlanPor: './pdfs/25.10/54_O3.2_Lesson plan_Volcanic Rocks_PT.docx',
                lessonPlanRo: './pdfs/25.10/54_O3.2_Lesson plan_Volcanic Rocks_RO.docx'
            }, {
                id: "44.5",
                title: "Water Pollution",
                discipline: "Geography, Technology",
                topic: "Water use statistics, water pollution, water impact agents, water footprint",
                ageGroup: "??",
                lessonPlan: "TBD",
                link: "./"
            },{
                id: "45",
                title: "Water treatment plant",
                discipline: "Technology",
                topic: "Water treatment plant systems, procedures, water filtration",
                ageGroup: "15+",
                lessonPlan: "TBD",
                link: "./water-treatment.html",
                rowspan: 2,
                lessonPlanUK: './pdfs/25.10/56_O3.2_Lesson plan_Water Plant_Technology_EN.docx',
                lessonPlanIt: './pdfs/25.10/56_O3.2_Lesson plan_Water Plant_Technology_IT.docx',
                lessonPlanLit: './pdfs/25.10/56_O3.2_Lesson plan_Water Plant_Technology_LT.docx',
                lessonPlanPor: './pdfs/25.10/56_O3.2_Lesson plan_Water Plant_Technology_PT.docx',
                lessonPlanRo: './pdfs/25.10/56_O3.2_Lesson plan_Water Plant_Technology_RO.docx'
            }, {
                id: "46",
                discipline: "Chemistry",
                topic: "Drinking water, Waste water;Determination of pH, Salinity",
                ageGroup: "12-13",
                lessonPlan: "TBD",
                lessonPlanUK: './pdfs/25.10/57_O3.2_Lesson plan_Water Plant_Chemistry_EN.docx',
                lessonPlanIt: './pdfs/25.10/57_O3.2_Lesson plan_Water Plant_Chemistry_IT.docx',
                lessonPlanLit: './pdfs/25.10/57_O3.2_Lesson plan_Water Plant_Chemistry_LT.docx',
                lessonPlanPor: './pdfs/25.10/57_O3.2_Lesson plan_Water Plant_Chemistry_PT.docx',
                lessonPlanRo: './pdfs/25.10/57_O3.2_Lesson plan_Water Plant_Chemistry_RO.docx'
            }, {
                id: "47",
                title: "Zoology - The Anatomy Museum",
                discipline: "Biology/Zoology",
                topic: "Animal molds, animal organs, bone system, circulatory system",
                ageGroup: "12+",
                lessonPlan: "TBD",
                link: "./zoology.html",
                lessonPlanUK: './pdfs/25.10/58_O3.2_Lesson plan_Zoology_EN.docx',
                lessonPlanIt: './pdfs/25.10/58_O3.2_Lesson plan_Zoology_IT.docx',
                lessonPlanLit: './pdfs/25.10/58_O3.2_Lesson plan_Zoology_LT.docx',
                lessonPlanPor: './pdfs/25.10/58_O3.2_Lesson plan_Zoology_PT.docx',
                lessonPlanRo: './pdfs/25.10/58_O3.2_Lesson plan_Zoology_RO.docx'
            }]
    }

    setMaterials(filter) {
        let table = document.querySelector("#main-table tbody");
        table.innerHTML = "";
        let id = 1;
        let idx = 0;
        let isGap = false;
        for (let row of this.classes) {
            idx++;
            if (filter !== "all" && !row.discipline.toLowerCase().includes(filter)) {
                isGap = true;
                continue;
            }

            let rowEl = document.createElement("tr");
            let cell = document.createElement("td");
            cell.innerText = id;
            rowEl.appendChild(cell);

            if (row.title) {
                isGap = false;
                cell = document.createElement("td");
                if (row.rowspan && filter === "all") {
                    cell.setAttribute("rowspan", row.rowspan);
                } else if (row.rowspan && row.rowspan > 1) {
                    isGap = true;
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
            } else if (isGap) {
                isGap = true;
                let lastTitleIdx = idx - 1;
                while (idx > 0 && this.classes[lastTitleIdx].title === undefined) {
                    console.log(lastTitleIdx);
                    lastTitleIdx--;
                }

                cell = document.createElement("td");

                let lastRow = this.classes[lastTitleIdx];

                let titleParent = cell;
                if (lastRow.link !== "" && lastRow.link !== "./") {
                    let link = document.createElement("a");
                    link.setAttribute("href", lastRow.link);
                    titleParent = link;
                    cell.appendChild(titleParent);
                }
                titleParent.innerText = lastRow.title;
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
            if (row.lessonPlanUK !== undefined) {
                anchor.href = row.lessonPlanUK;
                anchor.target = "_blank";
            }
            let flagUK = document.createElement("img");
            flagUK.src = "./img/flags/uk.jpg";
            flagUK.classList.add("flag");
            anchor.appendChild(flagUK);
            lessonPlanWrapper.appendChild(anchor);

            anchor = document.createElement("a");
            if (row.lessonPlanRo !== undefined) {
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
            if (row.lessonPlanLit !== undefined) {
                anchor.href = row.lessonPlanLit;
                anchor.target = "_blank";
            }
            let flagLithuania = document.createElement("img");
            flagLithuania.src = "./img/flags/lithuania.jpg";
            flagLithuania.classList.add("flag");
            anchor.appendChild(flagLithuania);
            lessonPlanWrapper.appendChild(anchor);

            anchor = document.createElement("a");
            if (row.lessonPlanPor !== undefined) {
                anchor.href = row.lessonPlanPor;
                anchor.target = "_blank";
            }
            let flagPor = document.createElement("img");
            flagPor.src = "./img/flags/portugal.jpg";
            flagPor.classList.add("flag");
            anchor.appendChild(flagPor);
            lessonPlanWrapper.appendChild(anchor);

            anchor = document.createElement("a");
            if (row.lessonPlanIt !== undefined) {
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