document.title = "About Us";

const missionStatement = "The mission of The Bountiful Children's Foundation is to foster a culture and                                     environment that shares the communal values of love, peace, and hope and that we usher an                          era where men, women, and children are not confined to what that current have for their                            daily sustenance, that they have access to food that has nutritional value, and is                                 readily available to all that need it. We aim to make the global hunger crisis a thing of                          the past.";
const visionStatement = "Our ultimate aim the end of malnutrition the worldwide hunger crisis, especially amongst                           those of its most vulnerable members, children. While most of our initial efforts have                             revovled around serving disparate populations in Central and South America, we plan on                             expanding our global footprint within the next five years and increase our global reach                            by increasing operations in Western, Southern, and Central Africa and also expanding                               operations in Eastern Europe and disparate areas of Asia and the Pacific Rim.";
const ourStory = "Our organization began as a small outfit of concerned global citizens who bonded over a single                    cause  and want to make a difference in the lives of those born and raised under extreme                           circumstances and to effectively end childhood hunger and put a dent in the current global hunger                  crisis. Since our humble beginnings, we have expanded operations to have a global reach and a                      global impact on the lives of many, deploying services to the needy in 19 different countries                      across 4 continents";


function modifyLastElementText(className, aStr){
    let cName = '.' + className;
    let newID = document.querySelector(cName);
    newID.lastElementChild.textContent = aStr;
}


class Person {
    constructor(attrs) {
        this.fName = attrs.fName;
        this.lName = attrs.lName;
        this.DOB = attrs.DOB;
        this.country = attrs.country;
        this.location = attrs.location;
        this.description = attrs.description;
        this.title = attrs.title;
        this.photo = attrs.photo;
        
    }
}



class Employee extends Person {
    constructor(empAttrs){
        super(empAttrs);
        this.empNumber = empAttrs.empNumber;
    }
}

class Donor extends Person {
    constructor(donorAttrs){
        super(donorAttrs);
        this.donorIDNum = donorAttrs.donorIDNum;
    }
}

class Coordinator extends Person {
    constructor(coordAttrs) {
        super(coordAttrs);
        this.coordIDNum = coordAttrs.coorIDNum;
    }
}

const empOne = new Employee ({
    fName: "Antonio",
    lName: "Dinkins",
    title: "Web UI Developer",
    description: "current Lambda student (WebPT8)",
    country: "United States",
    location: "South Carolina",
    photo: "antoniodinkins.png"

});
const empTwo = new Employee ({
    fName: "Junior",
    lName: "Dugue",
    title: "Front End Engineer",
    description: "Junior Dugue is our senior developer. He has an in depth understanding of HTML, CSS, Javascript, REACT, and other development platforms. He is also an avid photographer and animal lover.",
    country: "United States",
    location: "Florida",
    photo: "juniordugue.png"

});

const empThree = new Employee ({
    fName: "Mysti",
    lName: "Dyse",
    title: "Web UI Developer",
    description: "Managerial Experience,  current Lambda Student(WebPT8), devoted global citizen, passionate about providing water to those who need and solving worldwide hunger issues",
    country: "United States",
    location: "California", 
    photo: "mystidyse.png"

});

