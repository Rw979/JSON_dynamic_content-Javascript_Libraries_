let headerGrid;
let mainContainer;
let mainContainerRightElement;
let mainContainerLeftElement;

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
    "description": ["1. Killin’ Me Good *TITLE", "2. Talkin’ About It (Feat. 24kGoldn)", "3. Closer", "4. Wishing On You", "5. Don’t Wanna Go Back (Duet with 헤이즈)", "6. Room", "7. Nightmare", "Release Date: 2023-08-18"],
    "image": "https://Rw979.github.io/JSON_dynamic_content-Javascript_Libraries_/Album_zone.jpeg"
  },
  {
    "itemTitle": "READY TO BE",
    "category": "Album",
    "id": "readytobe",
    "secondTitle": "TRACK LIST",
    "description": ["1. SET ME FREE *Title","2. MOONLIGHT SUNRISE","3. GOT THE THRILLS","4. BLAME IT ON ME","5. WALLFLOWER","6. CRAZY STUPID LOVE","7. SET ME FREE (ENG)","Release Date: 2023-03-10"],
    "image": "https://Rw979.github.io/JSON_dynamic_content-Javascript_Libraries_/Album_Ready_To_Be.jpeg"
  },
  {
    "itemTitle": "MOONLIGHT SUNRISE",
    "category": "Album",
    "id": "moonlighhtsunrise",
    "secondTitle": "TRACK LIST",
    "description": ["1. MOONLIGHT SUNRISE *TITLE","Release Date: 2023-01-20"],
    "image": "https://Rw979.github.io/JSON_dynamic_content-Javascript_Libraries_/Album_Moonlight_Sunrise.jpeg"
  },
  {
    "itemTitle": "BETWEEN 1&2",
    "category": "Album",
    "id": "between1&2",
    "secondTitle": "TRACK LIST",
    "description": ["1. Talk that Talk *Title","2. Queen of Hearts","3. Basics","4. Trouble","5. Brave","6. Gone","7. When We Were Kids","Release Date: 2022-08-26"],
    "image": "https://Rw979.github.io/JSON_dynamic_content-Javascript_Libraries_/Album_Between%201%262.jpeg"
  },
  {
    "itemTitle": "IM NAYEON",
    "category": "Album",
    "id": "imnayeon",
    "secondTitle": "TRACK LIST",
    "description": ["1. POP!","2. NO PROBELM (Feat. Felix of Stray Kids)","3. LOVE COUNTDOWN (Feat. Wonstein)","4. CANDYFLOSS","5. ALL OR NOTHING","6. HAPPY BIRTHDAY TO YOU","7. 노을만 예쁘다 (SUNSET)","Release Date: 2022-06-24"],
    "image": "https://Rw979.github.io/JSON_dynamic_content-Javascript_Libraries_/"
  },
  {
    "itemTitle": "Formula of Love: O+T=<3",
    "category": "Album",
    "id": "formulaoflove",
    "secondTitle": "TRACK LIST",
    "description": ["1. SCIENTIST *Title","2. MOONLIGHT","3. ICON","4. CRUEL","5. REAL YOU","6. F.I.L.A","7. LAST WALTZ","8. ESPRESSO","9. 알고 싶지 않아 (REWIND)","10. 선인장 (CACTUS)","11. PUSH & PULL (JIHYO, SANA, DAHYUN)","12. HELLO (NAYEON, MOMO, CHAEYOUNG)","13. 1, 3, 2 (JEONGYEON, MINA, TZUYU)","14. CANDY","15 The Feels (Korean Ver.)","16. The Feels","17. SCIENTIST (R3HAB Remix)","Release Date: 2021-11-12"],
    "image": "https://Rw979.github.io/JSON_dynamic_content-Javascript_Libraries_/Album_Formula_of_Love.png"
  },
  {
    "itemTitle": "CRY FOR ME",
    "category": "Album",
    "id": "cryforme",
    "secondTitle": "TRACK LIST",
    "description": ["01. CRY FOR ME","Release Date: 2020-12-18"],
    "image": "https://Rw979.github.io/JSON_dynamic_content-Javascript_Libraries_/Album_Cry_For_Me.jpeg"
  },
  {
    "itemTitle": "Eyes wide open",
    "category": "Album",
    "id": "eyewideopen",
    "secondTitle": "TRACK LIST",
    "description": ["01. I CAN'T STOP ME","02. HELL IN HEAVEN","03. UP NO MORE","04. DO WHAT WE LIKE","05. BRING IT BACK","06. BELIEVER","07. QUEEN","08. GO HARD","09. SHOT CLOCK","10. HANDLE IT","11. DEPEND ON YOU","12. SAY SOMETHING","13. BEHIND THE MASK","Release Date: 2020-10-26"],
    "image": "https://Rw979.github.io/JSON_dynamic_content-Javascript_Libraries_/Album_Eyes_wide_Open.png"
  },
  {
    "itemTitle": "Feel Special",
    "category": "Album",
    "id": "feelspecial",
    "secondTitle": "TRACK LIST",
    "description": ["01. FEEL SPECIAL","02. RAINBOW","03. GET LOUD","04. TRICK IT","05. LOVE FOOLISH","06. 21:29","07. BREAKTHROUGH (Korean Ver.)","Release Date: 2019-09-23"],
    "image": "https://Rw979.github.io/JSON_dynamic_content-Javascript_Libraries_/Album_Feel_Special.jpeg"
  }
];

document.addEventListener("DOMContentLoaded", function () {
  headerGridElement = document.getElementById('headerGrid');
  mainContainerElement = document.getElementById("mainContainer");
  mainContainerRightElement = document.getElementById("mainContainerRight");
  mainContainerLeftElement = document.getElementById("mainContainerLeft");

  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let urlSection = urlParams.get('section');
  let urlID = urlParams.get('id');

  if (urlSection != "Profile") {
    if (urlSection == "Album") {
    }
    else if (urlSection == "Gallery") {
    }
    else {
      for (let i = 0; i < twiceCollection.length; i++) {
        if (twiceCollection[i]["category"] == urlSection || urlSection == "" || urlSection == null) {
          createTwicePreview(twiceCollection[i]);
        }
      }
    }
  } 


  else {
    for (let i = 0; i < twiceCollection.length; i++) {
      if (twiceCollection[i]["id"] == urlID) {
        createTwicePage(twiceCollection[i]);
      }
    }
  }

  /*Json for headerGrid*/
  let imageData = {
    "imageURL": "https://Rw979.github.io/JSON_dynamic_content-Javascript_Libraries_/twicelogo.png",
    "text": "Twice"
  };

  let newImg = document.createElement('img');
  newImg.src = imageData.imageURL;
  newImg.style.width = '300px';

  let newText = document.createTextNode(imageData.text);

  headerGridElement.appendChild(newImg);
  headerGridElement.appendChild(newText);

  /*Json for mainContainer_right*/
  let submenutext = {
    "Profile": ["NAYEON", "JEONGYEON", "MOMO", "SANA", "JIHYO", "MINA", "DAHYUN", "CHAEYOUNG", "TZUYU"],
    "Album": ["ZONE", "READY TO BE","MOONLIGHT SUNRISE", "BETWEEN 1&2","IM NAYEON", "Formula of Love: O+T=<3","CRY FOR ME", "Eyes wide open","Feel Special"]
  };

  for (let section in submenutext) {
    let newHeading = document.createElement("h2");
    newHeading.innerText = section;

    mainContainerRightElement.appendChild(newHeading);

    for (let i = 0; i < submenutext[section].length; i++) {

      let newLink = document.createElement("a");
      newLink.innerText = submenutext[section][i];
      newLink.href = "index.html?section=" + section + "&id=" + twiceCollection[i].id;
      mainContainerRightElement.appendChild(newLink);

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

        newDiv.appendChild(newDescription);
    } else if (incomingJSON.category === "Gallery") {
        newDiv.appendChild(newImage);
        newDiv.appendChild(newTitle);
        newDiv.appendChild(newDescription);
    }

    mainContainerLeftElement.appendChild(newDiv);
}

