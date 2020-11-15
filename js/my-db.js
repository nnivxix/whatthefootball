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
        alert("Tim Favoritmu sudah disimpan");
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
        alert("Tim Favoritmu sudah dihapus")
      });
  }


  function getAll() {
  return new Promise((resolve, reject) => {
    dbPromised
      .then(db => {
        let tx = db.transaction("teams", "readonly");
        let store = tx.objectStore("teams");;
        return store.getAll();
      })
      .then(teams => {
        resolve(teams);
      });
  });
}

