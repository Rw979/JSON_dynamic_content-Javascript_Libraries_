let headerGrid;
let mainContainer;
let mainContainerRightElement;
let mainContainerLeftElement;
/* Getting references to the profile and album menu divs （suggested by Professor Rieper）*/
let profileMenuElement;
let albumsMenuElement;
let galleryMenuElement;
let swiperContainer;
let swiperWrapper;

let twiceCollection = [
  {
    "itemTitle": "NAYEON",
    "category": "Profile",
    "id": "nayeon",
    "description": "Birth: 1995.09.22",
    "image": "https://Rw979.github.io/JSON_dynamic_content-Javascript_Libraries_/Nayeon_Profile.jpeg"
  },
  {
    "itemTitle": "JEONGYEON",
    "category": "Profile",
    "id": "jeongyeon",
    "description": "Birth: 1996.11.01",
    "image": "https://Rw979.github.io/JSON_dynamic_content-Javascript_Libraries_/Profile_Jeongyeon.jpeg"
  },
  {
    "itemTitle": "MOMO",
    "category": "Profile",
    "id": "momo",
    "description": "Birth: 1996.11.09",
    "image": "https://Rw979.github.io/JSON_dynamic_content-Javascript_Libraries_/Profile_Momo.jpeg"
  },
  {
    "itemTitle": "SANA",
    "category": "Profile",
    "id": "sana",
    "description": "Birth: 1996.12.29",
    "image": "https://Rw979.github.io/JSON_dynamic_content-Javascript_Libraries_/Profile_Sana.jpeg"
  },
  {
    "itemTitle": "JIHYO",
    "category": "Profile",
    "id": "jihyo",
    "description": "Birth: 1997.02.01",
    "image": "https://Rw979.github.io/JSON_dynamic_content-Javascript_Libraries_/Profile_Jihyo.jpeg"
  },
  {
    "itemTitle": "MINA",
    "category": "Profile",
    "id": "mina",
    "description": "Birth: 1997.03.24",
    "image": "https://Rw979.github.io/JSON_dynamic_content-Javascript_Libraries_/Profile_Mina.jpeg"
  },
  {
    "itemTitle": "DAHYUN",
    "category": "Profile",
    "id": "dahyun",
    "description": "Birth: 1998.05.28",
    "image": "https://Rw979.github.io/JSON_dynamic_content-Javascript_Libraries_/Profile_Dahyun.jpeg"
  },
  {
    "itemTitle": "CHAEYOUNG",
    "category": "Profile",
    "id": "chaeyoung",
    "description": "Birth: 1999.04.23",
    "image": "https://Rw979.github.io/JSON_dynamic_content-Javascript_Libraries_/Profile_Chaeyoung.jpeg"
  },
  {
    "itemTitle": "TZUYU",
    "category": "Profile",
    "id": "tzuyu",
    "description": "Birth: 1999.06.14",
    "image": "https://Rw979.github.io/JSON_dynamic_content-Javascript_Libraries_/Profile_Tzuyu.jpeg"
  },
  {
    "itemTitle": "ZONE",
    "category": "Album",
    "id": "zone",
    "secondTitle":"TRACK LIST",
    "description1": ["Killin’ Me Good *TITLE", "Talkin’ About It (Feat. 24kGoldn)", "Closer", "Wishing On You", "Don’t Wanna Go Back (Duet with 헤이즈)", "Room", "Nightmare", "Release Date: 2023-08-18"],
    "image": "https://Rw979.github.io/JSON_dynamic_content-Javascript_Libraries_/Album_zone.jpeg"
  },
  {
    "itemTitle": "READY TO BE",
    "category": "Album",
    "id": "readytobe",
    "secondTitle": "TRACK LIST",
    "description1": ["SET ME FREE *Title","MOONLIGHT SUNRISE","GOT THE THRILLS","BLAME IT ON ME","WALLFLOWER","CRAZY STUPID LOVE","SET ME FREE (ENG)","Release Date: 2023-03-10"],
    "image": "https://Rw979.github.io/JSON_dynamic_content-Javascript_Libraries_/Album_Ready_To_Be.jpeg"
  },
  {
    "itemTitle": "MOONLIGHT SUNRISE",
    "category": "Album",
    "id": "moonlighhtsunrise",
    "secondTitle": "TRACK LIST",
    "description1": ["MOONLIGHT SUNRISE *TITLE","Release Date: 2023-01-20"],
    "image": "https://Rw979.github.io/JSON_dynamic_content-Javascript_Libraries_/Album_Moonlight_Sunrise.jpeg"
  },
  {
    "itemTitle": "BETWEEN 1&2",
    "category": "Album",
    "id": "between1&2",
    "secondTitle": "TRACK LIST",
    "description1": ["Talk that Talk *Title","Queen of Hearts","Basics","Trouble","Brave","Gone","When We Were Kids","Release Date: 2022-08-26"],
    "image": "https://Rw979.github.io/JSON_dynamic_content-Javascript_Libraries_/Album_Between%201%262.jpeg"
  },
  {
    "itemTitle": "IM NAYEON",
    "category": "Album",
    "id": "imnayeon",
    "secondTitle": "TRACK LIST",
    "description1": ["POP!","NO PROBELM (Feat. Felix of Stray Kids)","LOVE COUNTDOWN (Feat. Wonstein)","CANDYFLOSS","ALL OR NOTHING","HAPPY BIRTHDAY TO YOU","노을만 예쁘다 (SUNSET)","Release Date: 2022-06-24"],
    "image": "https://Rw979.github.io/JSON_dynamic_content-Javascript_Libraries_/Album_IM_nayeon.jpeg"
  },
  {
    "itemTitle": "Formula of Love: O+T=<3",
    "category": "Album",
    "id": "formulaoflove",
    "secondTitle": "TRACK LIST",
    "description1": ["SCIENTIST *Title","MOONLIGHT","ICON","CRUEL","REAL YOU","F.I.L.A","LAST WALTZ","ESPRESSO","알고 싶지 않아 (REWIND)","선인장 (CACTUS)","PUSH & PULL (JIHYO, SANA, DAHYUN)","HELLO (NAYEON, MOMO, CHAEYOUNG)","1, 3, 2 (JEONGYEON, MINA, TZUYU)","CANDY","The Feels (Korean Ver.)","The Feels","SCIENTIST (R3HAB Remix)","Release Date: 2021-11-12"],
    "image": "https://Rw979.github.io/JSON_dynamic_content-Javascript_Libraries_/Album_Formula_of_Love.jpeg"
  },
  {
    "itemTitle": "CRY FOR ME",
    "category": "Album",
    "id": "cryforme",
    "secondTitle": "TRACK LIST",
    "description1": ["01. CRY FOR ME","Release Date: 2020-12-18"],
    "image": "https://Rw979.github.io/JSON_dynamic_content-Javascript_Libraries_/Album_Cry_For_Me.jpeg"
  },
  {
    "itemTitle": "Eyes wide open",
    "category": "Album",
    "id": "eyewideopen",
    "secondTitle": "TRACK LIST",
    "description1": ["I CAN'T STOP ME","HELL IN HEAVEN","UP NO MORE","DO WHAT WE LIKE","BRING IT BACK","BELIEVER","QUEEN","GO HARD","SHOT CLOCK","HANDLE IT","DEPEND ON YOU","SAY SOMETHING","BEHIND THE MASK","Release Date: 2020-10-26"],
    "image": "https://Rw979.github.io/JSON_dynamic_content-Javascript_Libraries_/Album_Eyes_wide_Open.jpeg"
  },
  {
    "itemTitle": "Feel Special",
    "category": "Album",
    "id": "feelspecial",
    "secondTitle": "TRACK LIST",
    "description1": ["FEEL SPECIAL","RAINBOW","GET LOUD","TRICK IT","LOVE FOOLISH","21:29","BREAKTHROUGH (Korean Ver.)","Release Date: 2019-09-23"],
    "image": "https://Rw979.github.io/JSON_dynamic_content-Javascript_Libraries_/Album_Feel_Special.jpeg"
  },
  {
    "itemTitle": "IMAGES",
    "category": "Gallery",
    "id": "gallery01",
    "image": ["https://Rw979.github.io/JSON_dynamic_content-Javascript_Libraries_/Gallery_1.jpeg","https://Rw979.github.io/JSON_dynamic_content-Javascript_Libraries_/Gallery_2.jpeg","https://Rw979.github.io/JSON_dynamic_content-Javascript_Libraries_/Gallery_3.jpeg","https://Rw979.github.io/JSON_dynamic_content-Javascript_Libraries_/Gallery_5.jpeg"]
  }
];



document.addEventListener("DOMContentLoaded", function () {
  headerGridElement = document.getElementById('headerGrid');
  mainContainerElement = document.getElementById("mainContainer");
  mainContainerRightElement = document.getElementById("mainContainerRight");
  mainContainerLeftElement = document.getElementById("mainContainerLeft");
  profileMenuElement = document.getElementById("profileMenu");
  albumsMenuElement = document.getElementById("albumsMenu");
  galleryMenuElement = document.getElementById("galleryMenu");
  swiperContainer = document.getElementById('.swiper');
  swiperWrapper = document.querySelector('.swiper-wrapper');

let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let urlSection = urlParams.get('section');
let urlID = urlParams.get('id');


  /*Json for headerGrid*/
  let imageData = {
    "imageURL": "https://Rw979.github.io/JSON_dynamic_content-Javascript_Libraries_/twicelogo.png",
    "text": "Twice"
  };

  let newImg = document.createElement('img');
  newImg.src = imageData.imageURL;
  newImg.style.width = '300px';

  let newTitle = document.createElement('h1'); 
  newTitle.innerText = imageData.text; 

  headerGridElement.appendChild(newImg);
  headerGridElement.appendChild(newTitle);
  
  /* CREATE MENU (Code by Professor Rieper)*/
  for (const item of twiceCollection) {
  	console.log(item);
  	console.log(item['id']);

  	let newLink = document.createElement("a");
  	newLink.innerText = item['itemTitle'];
  	newLink.href = "index.html?section=" + item['category'] + "&id=" + item['id'];

  	if (item['category'] == "Profile") {
  		profileMenuElement.appendChild(newLink);
  	}
  	else if (item['category'] == "Album") {
  		albumsMenuElement.appendChild(newLink);
  	}
  	else if (item['category'] == "Gallery"){

  		galleryMenuElement.appendChild(newLink);
      }
  	}

 
   /* CREATE CONTENT (Code by Professor Rieper)*/

  for (const item of twiceCollection) {
    
   /* For individual page (Code by Professor Rieper*/
  	if (urlSection == "Profile" || urlSection == "Album" || urlSection == "Gallery") {
  		if (item['id'] == urlID) {
  			createTwicePage(item);
  		}
  	}

  	else {
  		createTwicePreview(item);
  	}
  }
 
 });


function createTwicePreview(incomingJSON){
	let newPreviewLink = document.createElement("A");
	newPreviewLink.href = "index.html?section=" + incomingJSON["category"].toLowerCase() + "&id=" + incomingJSON["id"];

	let newPreviewElement = document.createElement("DIV");
	newPreviewLink.appendChild(newPreviewElement);

	let newPreviewTitle = document.createElement("P");
	newPreviewTitle.classList.add("previewTitle");
	newPreviewTitle.innerText = incomingJSON["itemTitle"];
    newPreviewElement.appendChild(newPreviewTitle);  

    let newPreviewThumbnail = document.createElement("IMG");
    newPreviewThumbnail.classList.add("thumbnail");
    newPreviewThumbnail.src = incomingJSON["image"];
    newPreviewElement.appendChild(newPreviewThumbnail);  

    mainContainerLeftElement.appendChild(newPreviewLink);             
}


function createTwicePage(incomingJSON) {
    let newDiv = document.createElement("DIV");

    let newTitle = document.createElement('h2');
    newTitle.innerText = incomingJSON.itemTitle;

    let newDescription = document.createElement('p');
    newDescription.innerText = incomingJSON.description;

    let newImage = document.createElement('img');
    newImage.src = incomingJSON.image;
    newImage.alt = incomingJSON.itemTitle;

    if (incomingJSON.category === "Profile") {
        newDiv.appendChild(newTitle);
        newDiv.appendChild(newDescription);
        newDiv.appendChild(newImage);
    } else if (incomingJSON.category === "Album") {
        newDiv.appendChild(newImage);
        newDiv.appendChild(newTitle);

        if (incomingJSON.secondTitle) {
            let newTitle2 = document.createElement('h3');
            newTitle2.innerText = incomingJSON.secondTitle;
            newDiv.appendChild(newTitle2);
        }

        let trackList = document.createElement('ol');  
           for (let track of incomingJSON.description1) {
        let trackItem = document.createElement('li');  
           trackItem.innerText = track;
           trackList.appendChild(trackItem);  
        }
        newDiv.appendChild(trackList);  

    } else if (incomingJSON.category === "Gallery") {
        for (let imgUrl of incomingJSON.image) {
            let slide = document.createElement('div');
            slide.className = 'swiper-slide';

            let img = document.createElement('img');
            img.src = imgUrl;
            slide.appendChild(img);
            swiperWrapper.appendChild(slide);
        }

        const swiper = new Swiper('.swiper', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        });
    }
        
    mainContainerLeftElement.appendChild(newDiv);
    }


