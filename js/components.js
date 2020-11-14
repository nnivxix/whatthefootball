const daftarTeam = (data) =>  {
	let DaftarTeamHTML = "";
	data.teams.forEach(club => {
		DaftarTeamHTML += `
		<div class="row">
		<div class="col l4 s12 center card-bg">
			<div class="card-image waves-effect waves-block waves-light">
			<img class="activator tmb-club" src="${club.crestUrl}">
			</div>
			<div class="card-content">
			<span class="card-title activator grey-text text-darken-4">${club.name}</span>
			<p><a class="waves-effect waves-light  btn-color" href="./team.html?id=${club.id}">Info lebih</a></p>
		</div>
		</div>
		`
	});
	document.querySelector(".list-club").innerHTML = DaftarTeamHTML;

}


const ditelTeam = data => {
	let DitelTeamHTML ="";
	let SquadTeamHTML ="";

	DitelTeamHTML +=`
	    <div class="row">
	    	<img src="${data.crestUrl}" alt="logo club" class="col s12 l6 center">
        	<div class="col s12 m12"><h3>${data.name}</h3></div>
        	<div class="col s12 m12">Nama singkat : <b>${data.shortName}</b></div>
        	<div class="col s12 m12">Alamat : <i>${data.address}</i></div>
        	<div class="col s12 m12">Nama Stadion : ${data.venue}</div>
        	<div class="col s12 m12">Seluler : <a href="tel:${data.phone}">${data.phone}</a></div>
        	<div class="col s12 m12">Website : <a href="${data.website}">${data.website}</a></div>
        </div>
	`;
	data.squad.forEach(player =>{
		SquadTeamHTML += `
		  <tr>
            <td>${player.name}</td>
            <td>${player.position}</td>
            <td>${player.nationality}</td>
          </tr>
	`
	})


	document.querySelector(".detail").innerHTML = DitelTeamHTML;
	document.querySelector(".table-squad").innerHTML = SquadTeamHTML;
	// resolve(data);
}

const AllSavedTeams = (data) =>{

  let SavedTeamHTML = "";
  data.forEach(club => {
    SavedTeamHTML += `
    <div class="row">
    <div class="col l4 s12 center card-bg">
      <div class="card-image waves-effect waves-block waves-light">
      <img class="activator tmb-club" src="${club.crestUrl}">
      </div>
      <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">${club.name}</span>
      <p><a class="waves-effect waves-light  btn-color" href="./team.html?id=${club.id}&saved=true">Info lebih</a></p>
    </div>
    </div>
    `
  });
    document.querySelector(".list-club").innerHTML = SavedTeamHTML;
}