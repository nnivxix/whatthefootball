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