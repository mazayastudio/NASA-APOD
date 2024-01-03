// NASA API
const count = 10;
const apiKEY = "FTp929FEeEVh5pLTari5qg2CBZJKi6cUlIv19Wvb";
const apiURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKEY}&count=${count}`;

let resultsArray = [];

// get 10 images from NASA API
async function getNasaPictures() {
	try {
		const response = await fetch(apiURL);
		resultsArray = await response.json();
		console.log(resultsArray);
		// updateDOM();
	} catch (error) {
		// Catch Error Here
	}
}
getNasaPictures();
