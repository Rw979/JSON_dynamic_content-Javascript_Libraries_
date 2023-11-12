let pageTitleElement;
let outputGridElement;
let projectDisplayElement;

let portfolioCollection = [
   {
   	"category": "Profile",
   	"id" : "twice1",
   	"description" : "bieguanwoxinazaixkjbc",
   	"image" : "https://www.pinterest.com/pin/9640586695987722/",
   }

];

document.addEventListener("DOMContentLoaded", function(){

  /* Get page element references */
  pageTitleElement = document.getElementById("pageTitle");
  outputGridElement = document.getElementById("outputGrid");
  projectDisplayElement = document.getElementById("projectDisplay");

  /* Get URL Params */
  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let urlSection = urlParams.get('section');
  let urlID = urlParams.get('id');

  if (urlSection != "Profile") { /* Display project previews in grid */

    /* Set page title if we are in a specific section */
    if (urlSection == "Album") {
      pageTitleElement.innerText = "Album";
    }
    else if (urlSection == "Gallery") {
      pageTitleElement.innerText = "Gallery";
    }

    /* Create thumbnails for matching category, or all */
    for (let i = 0; i < portfolioCollection.length; i++) {
      if (portfolioCollection[i]["category"] == urlSection || urlSection == "" || urlSection == null){
        createProjectPreview(portfolioCollection[i]);
      }
    }

  }

  else {
    /* Display individual project by trying to match the "ID" value */
    for (let i = 0; i < portfolioCollection.length; i++) {
      if (portfolioCollection[i]["id"] == urlID) {
        createProjectPage(portfolioCollection[i]);
      }
    }
  }


  let newDiv = document.createElement("DIV");
  newDiv.classList.add("ourSpecialDiv");

  let newImg = document.createElement("IMG");
  newImg.classList.add("anAmazingImage");
  newImg.src = "https://rw979.github.io/JSON_dynamic_content-Javascript_Libraries_/twicelogo.png";

  newDiv.appendChild(newImg);

  headerGrid.appendChild(newDiv);

});

function createProjectPreview(incomingJSON) {
  let newPreviewElement = document.createElement("div");
  newPreviewElement.classList.add("projectPreview");

  let newPreviewImage = document.createElement("img");
  newPreviewImage.classList.add("projectImage");
  newPreviewImage.src = incomingJSON["image"];
  newPreviewImage.alt = incomingJSON["description"];

  newPreviewElement.appendChild(newPreviewImage);
  outputGridElement.appendChild(newPreviewElement);
}








































