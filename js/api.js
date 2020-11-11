const base_url = "https://api.football-data.org/v2/";

const api_token = "fdd4f2514836449bbcd23314d3fe4c94";

let fetchApi = (url) => {
  return fetch(url, {
    headers: {
      "X-Auth-Token": api_token,
    },
  });
};

// Blok kode yang akan di panggil jika fetch berhasil
function status(response) {
  if (response.status !== 200) {
    console.log("Error : " + response.status);
    // Method reject() akan membuat blok catch terpanggil
    return Promise.reject(new Error(response.statusText));
  } else {
    // Mengubah suatu objek menjadi Promise agar bisa "di-then-kan"
    return Promise.resolve(response);
  }
}
// Blok kode untuk memparsing json menjadi array JavaScript
function json(response) {
  return response.json();
}
// Blok kode untuk meng-handle kesalahan di blok catch
function error(error) {
  // Parameter error berasal dari Promise.reject()
  console.log("Error : " + error);
}
// Blok kode untuk melakukan request data json
function getCompetitions() {
  if ("caches" in window) {
    caches
      .match(base_url + "competitions/2021/teams")
      .then(function (response) {
        if (response) {
          response.json().then(function (data) {

            console.log(data);
            var listClub = "";
    		data.teams.forEach(club => {
    		listClub += `
    		  <div class="card">
  				<div class="card-image waves-effect waves-block waves-light">
    			  <img class="activator tmb-club" src="${club.crestUrl}">
    			</div>
    			<div class="card-content">
    			  <span class="card-title activator grey-text text-darken-4">${club.name}</span>
    			  <p><a href="#">This is a link</a></p>
    			</div>
 			 </div>

    		`
    	});
    	document.querySelector(".list-club").innerHTML = listClub
 
          });
        }
      });
  }
  fetchApi(base_url + "competitions/2021/teams")
    .then(status)
    .then(json)
    .then(function (data) {
    	console.log(data)
            var listClub = "";
    		data.teams.forEach(club => {
    		listClub += `
    		  <div class="row">
    		  	<div class="col s4">
    		  		<div class="card-image waves-effect waves-block waves-light">
    			 	<img class="activator tmb-club" src="${club.crestUrl}">
    				</div>
    				<div class="card-content">
    			  	<span class="card-title activator grey-text text-darken-4">${club.name}</span>
    			  	<p><a href="#">This is a link</a></p>
    				</div>
	 			 </div>
    		`
    	});
    	document.querySelector(".list-club").innerHTML = listClub
    })
    .catch(error);
}


// getCompetitions()
console.log('test for api.js')