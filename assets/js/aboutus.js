document.title = "About Us";

const missionStatement = "";
const visionStatement = "";
const ourStory = "";

function modifyLastElementText(className, aStr){
    let newID = document.querySelector(className);
    newID.lastElementChild.textContent = aStr;
}

function changeEmpPhoto(photoName){
    let newPhoto = document.query
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
    title: "React Developer",
    description: "Avid photographer, coder extraordinaire, current Lambda student (WebPT6)",
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

