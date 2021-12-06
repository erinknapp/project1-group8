//variable to target dom
var userCountryInput = document.querySelector("#user-country-input");
var orlando = "orlando";
var iframeSrc = document.querySelector("#iframe-display").src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyALFfph2f0J2EJwVFIHoNS_YVxXsA6P2Mg&q=" + orlando;

let countryHistorySearch = []
// if something is in local storage .... continue where the data left off. else use blank array
if (localStorage.getItem("country_name")) {
	countryHistorySearch = JSON.parse(localStorage.getItem("country_name"))
}

let listEl = document.querySelector(".list")

function savedSearches() {
	listEl.textContent = ""
	// study this later
	for (let i = countryHistorySearch.length - 1, j = 0; j < 5; i--, j++) {
		var li = document.createElement("li")
		li.setAttribute("class", "list-item")
		li.textContent = countryHistorySearch[i];
		listEl.append(li)
	}
}
savedSearches();
//function to take user input and call the data to the console. 
userCountryInput.addEventListener("submit", (e) => {
	// document.querySelector("#countryName").innerText = ""
	// document.querySelector("#populationNumber").innerText = ""
	// document.querySelector("#worldRanking").innerText = ""

	e.preventDefault();
	var countryInput = document.querySelector('#country-input').value
	population(countryInput);
	document.getElementById("user-country-input").reset();




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
				document.querySelector("#countryName").innerText = "Country Name : " + country_name
				document.querySelector("#populationNumber").innerText = "Population : " + population
				document.querySelector("#worldRanking").innerText = "Population Ranking : " + ranking
				iframeSrc = document.querySelector("#iframe-display").src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyALFfph2f0J2EJwVFIHoNS_YVxXsA6P2Mg&q=" + country_name;


				countryHistorySearch.push(country_name);
				// only JSON for array and object to package off to local storage
				localStorage.setItem('country_name', JSON.stringify(countryHistorySearch))
				savedSearches();


			})



			.catch(err => {
				document.querySelector("#countryName").innerText = "Please enter a valid country name"
				document.querySelector("#populationNumber").innerText = "Incorrect Input : mexico "
				document.querySelector("#worldRanking").innerText = "Correct Input : New Zealand"
			});

	};
});
