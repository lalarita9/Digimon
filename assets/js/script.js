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
//Obtener listado de Digimon nivel "Ultimate"
fetch(url)
.then(response => response.json())
.then(datos => {
    
    for (item of datos){

        let levelUltimate = datos.filter(function(item) {
            return item.level === "Ultimate";
        });
        var listaUltimate = "";
        levelUltimate.forEach(function(item) {
            listaUltimate += `<li>
            ${item.name}
            </li>`;
        });
        document.getElementById("digimon-ultimate").innerHTML = listaUltimate;
}
})
//Obtener listado de Digimon nivel "Mega"
fetch(url)
.then(response => response.json())
.then(datos => {
    
    for (item of datos){

        let levelMega = datos.filter(function(item) {
            return item.level === "Mega";
        });
        var listaMega = "";
        levelMega.forEach(function(item) {
            listaMega += `<li>
            ${item.name}
            </li>`;
        });
        document.getElementById("digimon-mega").innerHTML = listaMega;
}
})
//Obtener listado de Digimon nivel "Amor"
fetch(url)
.then(response => response.json())
.then(datos => {
    
    for (item of datos){

        let levelArmor = datos.filter(function(item) {
            return item.level === "Armor";
        });
        var listaArmor = "";
        levelArmor.forEach(function(item) {
            listaArmor += `<li>
            ${item.name}
            </li>`;
        });
        document.getElementById("digimon-armor").innerHTML = listaArmor;
}
})
            