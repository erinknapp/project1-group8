// var userFormEl = document.querySelector(#id of user form) **********
// var countryNameInputEl = document.querySelector("#WHATEVER THE ID IS") *************
// var errorEl = document.querySelector("#error div ID") *******


// // checks to see 
// var submitCountryHandler = function (event) {
// 	// *****we need this still - creates a variable that = user input country name******
// 	var countryName = countryNameInputEl.value.trim();
// 	// checks if country name exists
// 	if (countryName) {
// 		getCountryData(countryName);
// 	}
// 	else {
// 		// error div displays error text in errorEl******
// 	}
// }

// // fetches data from user input
// var getCountryData = function (countryName) {
// 	// not sure if this will work
// 	var apiUrl = "https://world-population.p.rapidapi.com/population?country_name=" + country;
// 	fetch(apiUrl, {
// 		"method": "GET",
// 		"headers": {
// 			"x-rapidapi-host": "world-population.p.rapidapi.com",
// 			"x-rapidapi-key": "5867605f7emsh8f0491558ec3b3dp1c25c4jsndf1f00ebc83d"
// 		}
// 	})
// 		.then(response => {
// 			console.log(response);
// 		})
// 		.catch(err => {
// 			console.error(err);
// 		});
// }


// var displayCountryData = function () {

// }


// Bryan's try


//variable to target dom
var userCountryInput = document.querySelector("#user-country-input");

//function to take user input and call the data to the console. 
userCountryInput.addEventListener("click", (e) => {
	e.preventDefault();
	var countryInput = document.querySelector('#country-input').value;
	population(countryInput);

	function population(countryInput) {
		fetch("https://world-population.p.rapidapi.com/population?country_name=" + countryInput, {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "world-population.p.rapidapi.com",
				"x-rapidapi-key": "bb2565e4e3msh03afa59d6e059b2p1f662cjsn993ece23cd23"
			}
		})

			.then(response => response.json())
			.then(response => {
				console.log(response)
				const { country_name, population, ranking } = response.body;
				console.log(country_name, population, ranking)
				document.querySelector("#countryName").innerText = country_name
				document.querySelector("#populationNumber").innerText = population
				document.querySelector("#worldRanking").innerText = ranking
			})



			.catch(err => {
				console.error(err);
			});
	};
});




// var population = fetch("https://world-population.p.rapidapi.com/population?country_name=" + userCountryInput, {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "world-population.p.rapidapi.com",
// 		"x-rapidapi-key": "bb2565e4e3msh03afa59d6e059b2p1f662cjsn993ece23cd23"
// 	}
// })
// 	.then(response => {
// 		console.log((response).json());
// 	})
// 	.catch(err => {
// 		console.error(err);
// 	})