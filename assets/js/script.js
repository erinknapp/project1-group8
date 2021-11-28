// var countryNameInputEl = document.querySelector("#WHATEVER THE ID IS") *************
// var errorEl = document.querySelector("#error div ID") *******

var submitUserHandler = function(event) {
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
var getCountryData = function (country) {
	// not sure if this will work
	fetch("https://world-population.p.rapidapi.com/population?country_name=" + country, {
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
