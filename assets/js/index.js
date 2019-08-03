const photodirectory = "./assets/img/";
const mainPageImgs = ["mother2.png", "bestfriends2.jpg", "poor_girl.png"];
const countries = ['Bolivia',  'Brazil', 'Cambodia', 'Colombia', 'Ecuador', 'El Salvador', 
                   'Ghana', 'Guatemala', 'Haiti', 'Honduras', 'Kiribati', 'Madagascar', 'Mongolia',
                    'Nicaragua', 'Paraguay', 'Peru', 'Philippines', 'Sierra Leone', 'Zimbabwe'];
let imgCounter = 0;
let photoChngVar = "";
class Country {
    constructor(countryAttrs){
        this.name = countryAttrs.name;
        this.population = countryAttrs.name;
        this.capital = countryAttrs.capital;
        this.povertyPop = countryAttrs.povertyPop;
    }
}
class Articles {
    constructor (artAttrs){
        this.heading = artAttrs.heading;
        this.byLine = artAttrs.byLine;
        this.mainContent = artAttrs.mainContent;
        this.datePublished = artAttrs.datePublished;
        this.author = artAttrs.author;
    }
    /*appendArticles(artObj, element) {
       if (this.isArticle(artObj)){
            let headingTag= document.createElement('h1');
            let byLineTag = document.createElement('em');
            let contentTag = document.createElement('p');
            let datePubTag = document.createElement('h3');
            let authorTag = byLineTag;



       }
    }

    prependArticles(artObj, element) {
        if (this.isArticle(artObj)){
           let headingTag= document.createElement('h1');
            let byLineTag = document.createElement('em');
            let contentTag = document.createElement('p');
            let datePubTag = document.createElement('h3');
            let authorTag = byLineTag;
        }
    }*/

    isArticle(artObj) {
        if (typeof(artObj) === "Articles") {
            return true;
        }
        else{
          console.log( "Not an Article Object."); 
          return false;
        }
    };
}

function changePhoto() {
    imgCounter++;
   let newPageImg = document.querySelector('.pageImg');
   console.log(newPageImg);
   if (imgCounter >= mainPageImgs.length){
       imgCounter = 0;
       newPageImg.src = photodirectory + mainPageImgs[imgCounter];
   }
   else { newPageImg.src = photodirectory + mainPageImgs[imgCounter];}
}
