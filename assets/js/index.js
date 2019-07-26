const mainPageImgs = ["assets/img/mother2.png", "assets/img/beautifulchild.jpg"];
const countries = ['Bolivia',  'Brazil', 'Cambodia', 'Colombia', 'Ecuador', 'El Salvador', 
                   'Ghana', 'Guatemala', 'Haiti', 'Honduras', 'Kiribati, ''Madagascar', 'Mongolia',
                    'Nicaragua', 'Paraguay', 'Peru', 'Philippines', 'Sierra Leone', 'Zimbabwe'];

class Person {
    constructor(attrs) {
        this.fName = attrs.fName;
        this.lName = attrs.lName;
        this.DOB = attrs.DOB;
        this.country = attrs.country;
        this.location = attrs.location;
        this.description = attrs.description;
        this.title = attrs.title;
    }
}

class Employee extends Person {
    constructor(empAttrs){
        super(empAttrs);
    }
}

class Donor extends Person {
    constructor(donorAttrs){
        super(donorAttrs);
    }
}

class Coordinator extends Person {
    constructor(coordAttrs) {
        super(coordAttrs);
    }
}

const empOne = new Employee ({
    fName: "Antonio",
    lName: "Dinkins",
    title: "Web UI Developer",
    description: "current Lambda student (WebPT8)",
    country: "United States",
    location: "South Carolina"

});
const empTwo = new Employee ({
    fName: "Junior",
    lName: "Dugue",
    title: "React Developer",
    description: "Avid photographer, coder extraordinaire, current Lambda student (WebPT6)",
    country: "United States",
    location: "Florida"

});

const empThree = new Employee ({
    fName: "Mysti",
    lName: "Dyse",
    title: "Web UI Developer",
    description: "Managerial Experience,  current Lambda Student(WebPT8), devoted global citizen",
    country: "United States",
    location: "California"

});