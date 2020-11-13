
const ditelClub = data => {
	let DitelClubHTML ="";
	let SquadClubHTML ="";
	DitelClubHTML +=`
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
		SquadClubHTML += `
		  <tr>
            <td>${player.name}</td>
            <td>${player.position}</td>
            <td>${player.nationality}</td>
          </tr>
	`
	})


	document.querySelector(".detail").innerHTML = DitelClubHTML;
	document.querySelector(".table-squad").innerHTML = SquadClubHTML;
	// resolve(data);
}
