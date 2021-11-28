// var userFormEl = document.querySelector(#id of user form) **********
// var countryNameInputEl = document.querySelector("#WHATEVER THE ID IS") *************
// var errorEl = document.querySelector("#error div ID") *******


// checks to see 
var submitCountryHandler = function(event) {
	// *****we need this still - creates a variable that = user input country name******
	var countryName = countryNameInputEl.value.trim();
	// checks if country name exists
	if (countryName) {
		getCountryData(countryName);
	}
	else {
		// error div displays error text in errorEl******
	}
} 

// fetches data from user input
var getCountryData = function (country) {
	// not sure if this will work
	var apiUrl = "https://world-population.p.rapidapi.com/population?country_name=" + country;
	fetch(apiUrl, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "world-population.p.rapidapi.com",
		"x-rapidapi-key": "5867605f7emsh8f0491558ec3b3dp1c25c4jsndf1f00ebc83d"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
}


var displayCountryData = function () {

}

userFormEl.addEventListener("submit", submitCountryHandler)
