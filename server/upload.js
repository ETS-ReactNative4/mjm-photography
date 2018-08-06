
//*************** scrape a folder for file neames ******************/

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
    thumb:"/img/mjm_thumb_ - 1.jpg",
    full:"/img/mjm_ - 1.jpg",
    year: "2010",
    location: "Copperopolis, CA",
    format: "Medium Format Film",
    notes: ""
  },
  {
    id: 2,
    thumb:"/img/mjm_thumb_ - 2.jpg",
    full:"/img/mjm_ - 2.jpg",
    year: "2010",
    location: "Arnold, CA",
    format: "Medium Format Film",
    notes: ""
  },
  {
    id: 3,
    thumb:"/img/mjm_thumb_ - 3.jpg",
    full:"/img/mjm_ - 3.jpg",
    year: "2011",
    location: "Paia, HI",
    format: "Medium Format Film",
    notes: ""
  },
  {
    id: 8,
    thumb:"/img/mjm_thumb_ - 8.jpg",
    full:"/img/mjm_ - 8.jpg",
    year: "2012",
    location: "Mountain Home, ID",
    format: "Digital",
    notes: ""
  },
  {
    id: 9,
    thumb:"/img/mjm_thumb_ - 9.jpg",
    full:"/img/mjm_ - 9.jpg",
    year: "2012",
    location: "Santa Cruz, CA",
    format: "35mm Film",
    notes: ""
  },
  {
    id: 10,
    thumb:"/img/mjm_thumb_ - 10.jpg",
    full:"/img/mjm_ - 10.jpg",
    year: "2013",
    location: "Murphy's, CA",
    format: "Medium Format Film",
    notes: ""
  },
  {
    id: 11,
    thumb:"/img/mjm_thumb_ - 11.jpg",
    full:"/img/mjm_ - 11.jpg",
    year: "2013",
    location: "Belize",
    format: "35mm Film",
    notes: ""
  },
  {
    id: 12,
    thumb:"/img/mjm_thumb_ - 12.jpg",
    full:"/img/mjm_ - 12.jpg",
    year: "2013",
    location: "Belize",
    format: "35mm Film",
    notes: ""
  },
  {
    id: 13,
    thumb:"/img/mjm_thumb_ - 13.jpg",
    full:"/img/mjm_ - 13.jpg",
    year: "2013",
    location: "Cupertino, CA",
    format: "Digital",
    notes: ""
  },
  {
    id: 14,
    thumb:"/img/mjm_thumb_ - 14.jpg",
    full:"/img/mjm_ - 14.jpg",
    year: "2014",
    location: "Puerto Vallarta, Mexico",
    format: "Digital",
    notes: ""
  },
  {
    id: 15,
    thumb:"/img/mjm_thumb_ - 15.jpg",
    full:"/img/mjm_ - 15.jpg",
    year: "2014",
    location: "Cupertino, CA",
    format: "Digital",
    notes: ""
  },
  {
    id: 17,
    thumb:"/img/mjm_thumb_ - 17.jpg",
    full:"/img/mjm_ - 17.jpg",
    year: "2015",
    location: "Paris, France",
    format: "Digital",
    notes: ""
  },
  {
    id: 18,
    thumb:"/img/mjm_thumb_ - 18.jpg",
    full:"/img/mjm_ - 18.jpg",
    year: "2015",
    location: "Lyon, France",
    format: "Digital",
    notes: ""
  },
  {
    id: 19,
    thumb:"/img/mjm_thumb_ - 19.jpg",
    full:"/img/mjm_ - 19.jpg",
    year: "2015",
    location: "Lyon, France",
    format: "Digital",
    notes: ""
  },
  {
    id: 20,
    thumb:"/img/mjm_thumb_ - 20.jpg",
    full:"/img/mjm_ - 20.jpg",
    year: "2015",
    location: "Lyon, France",
    format: "Digital",
    notes: ""
  },
  {
    id: 21,
    thumb:"/img/mjm_thumb_ - 21.jpg",
    full:"/img/mjm_ - 21.jpg",
    year: "2015",
    location: "Lyon, France",
    format: "Digital",
    notes: ""
  },
  {
    id: 22,
    thumb:"/img/mjm_thumb_ - 22.jpg",
    full:"/img/mjm_ - 22.jpg",
    year: "2015",
    location: "Barcelona, Spain",
    format: "Digital",
    notes: ""
  },
  {
  id: 23,
  thumb:"/img/mjm_thumb_ - 23.jpg",
  full:"/img/mjm_ - 23.jpg",
  year: "2015",
  location: "San Gimignano, Italy",
  format: "Digital",
  notes: ""
},
{
  id: 24,
  thumb:"/img/mjm_thumb_ - 24.jpg",
  full:"/img/mjm_ - 24.jpg",
  year: "2015",
  location: "Paris, France",
  format: "Digital",
  notes: ""
},
{
  id: 25,
  thumb:"/img/mjm_thumb_ - 25.jpg",
  full:"/img/mjm_ - 25.jpg",
  year: "2016",
  location: "Lafayette⁩, CO",
  format: "Digital",
  notes: ""
},
{
  id: 26,
  thumb:"/img/mjm_thumb_ - 26.jpg",
  full:"/img/mjm_ - 26.jpg",
  year: "2017",
  location: "Austin, TX",
  format: "Digital",
  notes: ""
},
{
  id: 27,
  thumb:"/img/mjm_thumb_ - 27.jpg",
  full:"/img/mjm_ - 27.jpg",
  year: "2017",
  location: "Austin, TX",
  format: "Digital",
  notes: ""
},
{
  id: 28,
  thumb:"/img/mjm_thumb_ - 28.jpg",
  full:"/img/mjm_ - 28.jpg",
  year: "2017",
  location: "Austin, TX",
  format: "Digital",
  notes: ""
},
{
  id: 29,
  thumb:"/img/mjm_thumb_ - 29.jpg",
  full:"/img/mjm_ - 29.jpg",
  year: "2017",
  location: "Austin, TX",
  format: "Digital",
  notes: ""
},
{
  id: 30,
  thumb:"/img/mjm_thumb_ - 30.jpg",
  full:"/img/mjm_ - 30.jpg",
  year: "2017",
  location: "Austin, TX",
  format: "Digital",
  notes: ""
},
{
  id: 31,
  thumb:"/img/mjm_thumb_ - 31.jpg",
  full:"/img/mjm_ - 31.jpg",
  year: "2017",
  location: "Austin, TX",
  format: "Digital",
  notes: ""
},
{
  id: 32,
  thumb:"/img/mjm_thumb_ - 32.jpg",
  full:"/img/mjm_ - 32.jpg",
  year: "2017",
  location: "Austin, TX",
  format: "Digital",
  notes: ""
},
{
  id: 33,
  thumb:"/img/mjm_thumb_ - 33.jpg",
  full:"/img/mjm_ - 33.jpg",
  year: "2017",
  location: "Muskogee, OK",
  format: "Digital",
  notes: ""
},
{
  id: 34,
  thumb:"/img/mjm_thumb_ - 34.jpg",
  full:"/img/mjm_ - 34.jpg",
  year: "2018",
  location: "Austin, TX",
  format: "Digital",
  notes: ""
},
{
  id: 35,
  thumb:"/img/mjm_thumb_ - 35.jpg",
  full:"/img/mjm_ - 35.jpg",
  year: "2018",
  location: "Austin, TX",
  format: "Digital",
  notes: ""
},
{
  id: 36,
  thumb:"/img/mjm_thumb_ - 36.jpg",
  full:"/img/mjm_ - 36.jpg",
  year: "2018",
  location: "Austin, TX",
  format: "Digital",
  notes: ""
},
{
  id: 37,
  thumb:"/img/mjm_thumb_ - 37.jpg",
  full:"/img/mjm_ - 37.jpg",
  year: "2018",
  location: "Over Texas",
  format: "Digital",
  notes: ""
},
{
  id: 38,
  thumb:"/img/mjm_thumb_ - 38.jpg",
  full:"/img/mjm_ - 38.jpg",
  year: "2018",
  location: "Austin, TX",
  format: "Digital",
  notes: ""
},






]

//**************** Database uploader **********************/

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

//**************CHANGE DB LINK BELOW ******************/

mongoose.connect("mongodb://mimitch:Bladerunner80@ds125198.mlab.com:25198/pictures", { useNewUrlParser: true });

const Picture = require("./models/PictureModel.js");

pictures.forEach((pic) => {
  const newPic = new Picture(pic);
  newPic.save();
})


//******************* Image scrapper **********************/


// const download = require('image-downloader')
// let count = 0
// function downloadAllImages() {
//   drinks.forEach((drk) => {
//     const options = {
//       url: drk.strDrinkfull,
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


  
