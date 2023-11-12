let headerGrid;
let mainContainer;

let twiceCollection = [
  {
  	"itemTitle": "NAYEON",
  	"category" : "Profile",
  	"descirption" : "2003/1025",
  	"image" : "https://Rw979.github.io/JSON_dynamic_content-Javascript_Libraries_/twicelogo.png"
  }


];

document.addEventListener("DOMContentLoaded", function(){
	headerGrid = document.getElementById('headerGrid');
	mainContainer = document.getElementById("mainContainer");
	mainContainerRight = document.getElementById("mainContainer_right");

	let queryString = window.location.search;
	let urlParams = new URLSearchParams(queryString);
	let urlSection = urlParams.get('section');
	let urlID = urlParams.get('id');

		for (let i = 0; i < twiceCollection.length; i++) {
		  if (twiceCollection[i]["category"] == urlSection || urlSection == "" || urlSection == null){
		  	createTwicepreview(twiceCollection[i]);
		}
	}
}

/*Json for headerGrid*/
let imageData = {
  "imageURL": "https://Rw979.github.io/JSON_dynamic_content-Javascript_Libraries_/twicelogo.png",
  "text": "Twice"
};

let headerGrid = document.getElementById('headerGrid');

let newImg = document.createElement('img');
newImg.src = imageData.imageURL;
newImg.style.width = '300px'; 

let newText = document.createTextNode(imageData.text);

headerGrid.appendChild(newImg);
headerGrid.appendChild(newText);


/*Json for mainContainer_right*/

let submenutext = {
  "Profile": ["NAYEON", "JEONGYEON", "MOMO", "SANA", "JIHYO", "MINA", "DAHYUN", "CHAEYOUNG", "TZUYU"],
  "Gallery": ["Ready to Love", "Let Me Know"]
};

let mainContainerRight = document.getElementById("mainContainer_right");

for (let section in submenutext) {
  let newHeading = document.createElement("h2");
  newHeading.innerText = section;

  mainContainerRight.appendChild(newHeading);

  
  for (let i = 0; i < submenutext[section].length; i++) {
 
    let newParagraph = document.createElement("p");
    newParagraph.innerText = submenutext[section][i];

  
    mainContainerRight.appendChild(newParagraph);
  }
}
































