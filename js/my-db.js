let dbPromised = idb.open("wtf", 1, function(upgradeDb) {
    let articlesObjectStore = upgradeDb.createObjectStore("teams", {
      keyPath: "id"
    });
    articlesObjectStore.createIndex("nameTeam", "nameTeam", { unique: false });
  });

  function savedTeam(team) {
    dbPromised
      .then(db => {
        let tx = db.transaction("teams", "readwrite");
        let store = tx.objectStore("teams");
        store.put(team);

        return tx.complete;
      })
      .then(()=> {
       M.toast({html: 'Sip Sudah disimpan'})
      });
  }
    function deleteTeam(team) {
    dbPromised
      .then(db => {
        let tx = db.transaction("teams", "readwrite");
        let store = tx.objectStore("teams");
        store.delete(Number(team.id));
        // transaction.objectStore("clubs").delete(Number(data.id));
        return tx.complete;
      })
      .then(()=> {
         M.toast({html: 'Sip Sudah dihapus'})

      });
  }


  function getAll() {
  return new Promise((resolve, reject) => {
    dbPromised
      .then(db => {
        let tx = db.transaction("teams", "readonly");
        let store = tx.objectStore("teams");
        return store.getAll();
      })
      .then(teams => {

        if(teams.length === 0){
          notfound()
        }else{
          resolve(teams);
        }
      });
  });
}

//component buat tampilan jika tidak ada konten tersimpan.
function notfound(){
  const nf = `
  <img src="img/404.png" style="width:100%;" alt="page not found">
  <h3 style="color:dimgrey;">Oppss, Kayaknya kamu belum menyimpan tim favorit kamu</h3 style="color:dimgrey;">`;
  document.querySelector('#notfound').innerHTML = nf;
}
