// const fs = require('fs');
// const dir = "../client/public/img"
// let imgList = null;


//  function getImgPaths () {
//    fs.readdir(dir,  function (error, list) {
//     imgList = list.filter(entry => entry.includes("mjm"))
//     console.log(imgList);
//   });
// }

// getImgPaths();

const pictures = [
  {
    id: 1,
    thumb:"/img/mjm_ - 1.jpg",
    full: "/img/mjm_thumb_ - 1.jpg",
    year: "2010",
    location: "Copperopolis, CA",
    format: "Medium Format Film",
    notes: ""
  },
  {
    id: 2,
    thumb:"/img/mjm_ - 2.jpg",
    full: "/img/mjm_thumb_ - 2.jpg",
    year: "2010",
    location: "Arnold, CA",
    format: "Medium Format Film",
    notes: ""
  },
  {
    id: 3,
    thumb:"/img/mjm_ - 3.jpg",
    full: "/img/mjm_thumb_ - 3.jpg",
    year: "2011",
    location: "Paia, HI",
    format: "Medium Format Film",
    notes: ""
  },
  {
    id: 8,
    thumb:"/img/mjm_ - 8.jpg",
    full: "/img/mjm_thumb_ - 8.jpg",
    year: "2012",
    location: "Mountain Home, ID",
    format: "Digital",
    notes: ""
  },
  {
    id: 9,
    thumb:"/img/mjm_ - 9.jpg",
    full: "/img/mjm_thumb_ - 9.jpg",
    year: "2012",
    location: "Santa Cruz, CA",
    format: "Medium Format Film",
    notes: ""
  },
  {
    id: 10,
    thumb:"/img/mjm_ - 10.jpg",
    full: "/img/mjm_thumb_ - 10.jpg",
    year: "2013",
    location: "Murphy's, CA",
    format: "Medium Format Film",
    notes: ""
  },
  {
    id: 11,
    thumb:"/img/mjm_ - 11.jpg",
    full: "/img/mjm_thumb_ - 11.jpg",
    year: "2013",
    location: "Belize",
    format: "35mm Film",
    notes: ""
  },
  {
    id: 12,
    thumb:"/img/mjm_ - 12.jpg",
    full: "/img/mjm_thumb_ - 12.jpg",
    year: "2013",
    location: "Belize",
    format: "35mm Film",
    notes: ""
  },
  {
    id: 13,
    thumb:"/img/mjm_ - 13.jpg",
    full: "/img/mjm_thumb_ - 13.jpg",
    year: "2013",
    location: "Cupertino, CA",
    format: "Digital",
    notes: ""
  },
  {
    id: 14,
    thumb:"/img/mjm_ - 14.jpg",
    full: "/img/mjm_thumb_ - 14.jpg",
    year: "2014",
    location: "Puerto Vallarta, Mexico",
    format: "Digital",
    notes: ""
  },
  {
    id: 15,
    thumb:"/img/mjm_ - 15.jpg",
    full: "/img/mjm_thumb_ - 15.jpg",
    year: "2014",
    location: "Cupertino, CA",
    format: "Digital",
    notes: ""
  },
  {
    id: 17,
    thumb:"/img/mjm_ - 17.jpg",
    full: "/img/mjm_thumb_ -17.jpg",
    year: "2015",
    location: "Manville, WY",
    format: "Digital",
    notes: ""
  },
  
]


//**************** Database uploader **********************/


const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
//**************CHANGE DB LINK BELOW ******************/
mongoose.connect("mongodb://mimitch:Bladerunner80@ds125198.mlab.com:25198/pictures");

const Picture = require("./models/PictureModel.js");

pictures.forEach((pic) => {
const newPic = new Picture(pic);
newPic.save();
})

// for (let index = 0; index < foos.length; index++) {
//   const newFoo = new Foo(
//     foos[index]
//   );
//   newFoo.save();
// }

//******************* Image scrapper **********************/


// const download = require('image-downloader')
// let count = 0
// function downloadAllImages() {
//   drinks.forEach((drk) => {
//     const options = {
//       url: drk.strDrinkThumb,
//       dest: '/Users/mmitchell/Desktop/CocktailImages'                  
//     }
       
//     async function downloadIMG() {
//       try {
//         const { filename, image } = await download.image(options)
//         count++
//         console.log(filename, "    ", count) // => /path/to/dest/image.jpg 
//       } catch (e) {
//         throw e
//       }
//     }
       
//     downloadIMG()
//   })
// }
// downloadAllImages()


  
