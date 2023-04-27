var url = "https://digimon-api.vercel.app/api/digimon"
//Obtener listado de Digimon nivel "Fresh"
fetch(url)
.then(response => response.json())
.then(datos => {
    
    for (item of datos){

        let levelFresh = datos.filter(function(item) {
            return item.level === "Fresh";
        });
        var listaFresh = "";
        levelFresh.forEach(function(item) {
            listaFresh += `<li>
            ${item.name}
            </li>`;
        });
        document.getElementById("digimon-fresh").innerHTML = listaFresh;
}
})
//Obtener listado de Digimon nivel "In-Training"
fetch(url)
.then(response => response.json())
.then(datos => {
    
    for (item of datos){

        let levelTraining = datos.filter(function(item) {
            return item.level === "In Training";
        });
        var listaTraining = "";
        levelTraining.forEach(function(item) {
            listaTraining += `<li>
            ${item.name}
            </li>`;
        });
        document.getElementById("digimon-training").innerHTML = listaTraining;
}
})
//Obtener listado de Digimon nivel "Rookie"
fetch(url)
.then(response => response.json())
.then(datos => {
    
    for (item of datos){

        let levelRookie = datos.filter(function(item) {
            return item.level === "Rookie";
        });
        var listaRookie = "";
        levelRookie.forEach(function(item) {
            listaRookie += `<li>
            ${item.name}
            </li>`;
        });
        document.getElementById("digimon-rookie").innerHTML = listaRookie;
}
})
//Obtener listado de Digimon nivel "Champion"
fetch(url)
.then(response => response.json())
.then(datos => {
    
    for (item of datos){

        let levelChampion = datos.filter(function(item) {
            return item.level === "Champion";
        });
        var listaChampion = "";
        levelChampion.forEach(function(item) {
            listaChampion += `<li>
            ${item.name}
            </li>`;
        });
        document.getElementById("digimon-champion").innerHTML = listaChampion;
}
})
            