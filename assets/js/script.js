// const apiKeyYelp = "qFwMRrFz89YuZqRfKo1Def_bbMCDnBRebVF0aKvoW7-2SjGoHLVH63DTd2_QdE_L-Z-o--y_IsCEFShisIuQ9zj6ecoo8r6-XXsOnPYuW4eUYF88i_HUQd80oSmgYXYx"

// const apiKeyGoogle = "AIzaSyALFfph2f0J2EJwVFIHoNS_YVxXsA6P2Mg"


// let placesToEat = {
//     apiKey: "",
//     fetchPlacesToEat: function ()
// }

var getPopOver10M = function () {
	fetch("https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=10000000", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
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

getPopOver10M();