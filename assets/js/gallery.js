
const photoILove = [
  {
    id: 1,
    title:'Inspecting the Galaxy',
    description: 'Photo of a person looking at the milky way',
    width: '400',
    height: '300',
    pathURL: 'milky-way.jpg',
    linkURL: 'https://pixabay.com/photos/milky-way-stars-man-silhouette-1023340/',
    credit: 'free-photos', 
    creditURL: 'https://pixabay.com/users/free-photos-242387/?tab=popular'
  },
  {
    id: 2,
    title:'Up in the clouds',
    description: 'Photo of a cloudy sky',
    width: '400',
    height: '300',
    pathURL: 'cloudy-sky.jpg',
    linkURL: 'https://pixabay.com/photos/sky-clouds-dark-cloudscape-690293/',
    credit: 'free-photos', 
    creditURL: 'https://pixabay.com/users/free-photos-242387/?tab=popular'
  },
  {
    id: 3,
    title:'Feeling Small',
    description: 'photo of the milky way through pine trees',
    width: '400',
    height: '300',
    pathURL: 'milky-way2.jpg',
    linkURL: 'https://pixabay.com/photos/milky-way-galaxy-night-sky-stars-984050/',
    credit: 'free-photos', 
    creditURL: 'https://pixabay.com/users/free-photos-242387/?tab=popular'
  },
  {
    id: 4,
    title:'Gazing into the stars',
    description: 'Photo of the milky way galaxy in a starry night',
    width: '400',
    height: '300',
    pathURL: 'starry-sky.jpg',
    linkURL: 'https://pixabay.com/photos/sky-stars-constellations-stargazing-828648/',
    credit: 'free-photos', 
    creditURL: 'https://pixabay.com/users/free-photos-242387/?tab=popular'
  },
  {
    id: 5,
    title:'Into the Deep blue',
    description: 'Dark blue starry sky',
    width: '400',
    height: '300',
    pathURL: 'dk-blue-starry.jpg',
    linkURL: 'https://pixabay.com/photos/stars-night-sky-milky-way-darkness-1246590/',
    credit: 'free-photos', 
    creditURL: 'https://pixabay.com/users/free-photos-242387/?tab=popular'
  },
  {
    id: 6,
    title:'Sunset over the ocean',
    description: 'Photo of sunset over the ocean',
    width: '400',
    height: '300',
    pathURL: 'sunset-over-ocean.jpg',
    linkURL: 'https://pixabay.com/photos/sunset-sea-horizon-sky-sunlight-768759/',
    credit: 'free-photos', 
    creditURL: 'https://pixabay.com/users/free-photos-242387/?tab=popular'
  },
  {
    id: 7,
    title:'Shooting Star',
    description: 'Photo of a shooting star over the mountains',
    width: '400',
    height: '300',
    pathURL: 'shooting-star.jpg',
    linkURL: 'https://pixabay.com/photos/purple-sky-dusk-shooting-star-690724/',
    credit: 'free-photos', 
    creditURL: 'https://pixabay.com/users/free-photos-242387/?tab=popular'
  },
  {
    id: 8,
    title:'Lady looking up at the sky',
    description: 'Lady looking at the milky way',
    width: '400',
    height: '300',
    pathURL: 'starry-night.jpg',
    linkURL: 'https://pixabay.com/photos/starry-night-starry-sky-silhouette-1149815/',
    credit: 'free-photos', 
    creditURL: 'https://pixabay.com/users/free-photos-242387/?tab=popular'
  },
  {
    id: 9,
    title:'Top of the World',
    description: 'Photo of a hiker looking off into the sky',
    width: '400',
    height: '300',
    pathURL: 'mountaineer-silhouette.jpg',
    linkURL: 'https://pixabay.com/photos/mountain-top-mountaineer-silhouette-984083/',
    credit: 'free-photos', 
    creditURL: 'https://pixabay.com/users/free-photos-242387/?tab=popular'
  }
]
//output variable
let picture = '';
//foreach 
photoILove.forEach(function(item){
 picture = picture + `<figure>
 <a href="${item.linkURL}">
  <img src="assets/images/sm/${item.pathURL}" width = "${item.width}" height = "${item.height}" alt="${item.description}">
 </a>
 <figcaption>${item.title}</figcaption>
 </figure>
 `
})

const photo = document.querySelector('.container')
photo.innerHTML = picture

const button = document.querySelector(".second-circle")
const container = document.querySelector(".first-circle")
const dark = document.querySelector("body")

const toggleHandler = function () { 
  
  button.classList.toggle("move-right")
  dark.classList.toggle("dark-mode")
  container.classList.toggle("dark-circle")
}
button.addEventListener('click', toggleHandler)