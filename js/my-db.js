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
        console.log(team);
        store.put(team);
        return tx.complete;
      })
      .then(()=> {
        console.log("Artikel berhasil di simpan.");
      });
  }
    function deleteTeam(team) {
    dbPromised
      .then(db => {
        let tx = db.transaction("teams", "readwrite");
        let store = tx.objectStore("teams");
        console.log(team);
        store.delete(Number(team.id));
        // transaction.objectStore("clubs").delete(Number(data.id));
        return tx.complete;
      })
      .then(()=> {
        console.log("Delete");
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

////////////////////
// function getAll() {
//   return new Promise(function(resolve, reject) {
//     dbPromised
//       .then(function(db) {
//         var tx = db.transaction("articles", "readonly");
//         var store = tx.objectStore("articles");
//         return store.getAll();
//       })
//       .then(function(articles) {
//         resolve(articles);
//       });
//   });
// }

