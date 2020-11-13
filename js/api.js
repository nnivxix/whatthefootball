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

//fungsi pemanggilan data semua tim
function getAllTeams() {
  if ("caches" in window) {
    caches
      .match(base_url + "competitions/2021/teams")
      .then(function (response) {
        if (response) {
          response.json().then(function (data) {
          daftarTeam(data);
          });
        }
      });
  }
  fetchApi(base_url + "competitions/2021/teams")
    .then(status)
    .then(json)
    .then(function (data) {
      daftarTeam(data);
      console.log(data.teams);
    })
    .catch(error);
}

//funsi pemanggilan tim sesuai ID
function getTeamById() {
    return new Promise(function(resolve, reject) {
  // Ambil nilai query parameter (?id=)
  let urlParams = new URLSearchParams(window.location.search);
  let idParam = urlParams.get("id");
    if ("caches" in window) {
      caches.match(base_url + "teams/" + idParam).then( (response) => {
        if (response) {
          response.json().then( (data) => {
            ditelTeam(data)

          });
        }
      });
    }
    fetchApi(base_url + "teams/" + idParam)
      .then(status)
      .then(json)
      .then( (data) => {
          ditelTeam(data)
      })
          .catch(error);
  })
  }