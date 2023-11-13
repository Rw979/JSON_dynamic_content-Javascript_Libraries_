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
    "Album": ["Ready to Love", "Let Me Know"]
  };

  for (let section in submenutext) {
    let newHeading = document.createElement("h2");
    newHeading.innerText = section;

    mainContainerRightElement.appendChild(newHeading);

    for (let i = 0; i < submenutext[section].length; i++) {

      let newLink = document.createElement("a");
      newLink.innerText = submenutext[section][i];
      newLink.href = "index.html?section=Profile&id=" + twiceCollection[i].id;
      mainContainerRightElement.appendChild(newLink);

    }
  }
});


function createTwicePreview(incomingJSON){
	let newPreviewLink = document.createElement("A");
	newPreviewLink.href = "index.html?section=profile&id=" + incomingJSON["id"];

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

    // 修正了属性名称从 'descirption' 到 'description'
    let newDescription = document.createElement('p');
    newDescription.innerText = incomingJSON.description;

    let newImage = document.createElement('img');
    newImage.src = incomingJSON.image;
    newImage.alt = incomingJSON.itemTitle;

    newDiv.appendChild(newTitle);
    newDiv.appendChild(newDescription);
    newDiv.appendChild(newImage);

    mainContainerLeftElement.appendChild(newDiv);
}


 


