var url = "https://digimon-api.vercel.app/api/digimon"

//Solitud a la Api el listado de Digimon nivel "Fresh"
fetch(url)
.then(response => response.json())
.then(datos => {
    
    for (item of datos){

        let levelFresh = datos.filter(function(item) {
            return item.level === "Fresh";
        });
        //Resultado se muestra en formato Card de Boostrap en HTML//
        var listaFresh = "";
        levelFresh.forEach(function(item) {
            listaFresh += `<div class="card bg_fresh col col-xl-4 col-lg-4 col-md-3 col-sm-12 mx-3 mb-5" style="width: 15rem;" id="cardNormal">
            <img src="${item.img}" class="card-img-top" style="height:100px;" alt="imagen digimon">
            <div class="card-body"><h6 class="card-title"><b>NOMBRE:</b> ${item.name}</h6>
            <hr color="#b2b2a2"></hr>
            <p class="card-text"><b>LEVEL:</b> ${item.level}</p></div></div>`;
        });
        document.getElementById("digimon-fresh").innerHTML = listaFresh;
}
})
//Solitud a la Api el listado de Digimon nivel "In-Training"
fetch(url)
.then(response => response.json())
.then(datos => {
    
    for (item of datos){

        let levelTraining = datos.filter(function(item) {
            return item.level === "In Training";
        });
        //Resultado se muestra en formato Card de Boostrap en HTML//
        var listaTraining = "";
        levelTraining.forEach(function(item) {
            listaTraining += `<div class="card bg_intraining col col-xl-4 col-lg-4 col-md-3 col-sm-12 mx-3 mb-5" style="width: 15rem;" id="cardNormal">
            <img src="${item.img}" class="card-img-top img_ho" style="height:100px;" alt="imagen digimon">
            <div class="card-body"><h6 class="card-title"><b>NOMBRE:</b> ${item.name}</h6>
            <hr color="#b2b2a2"></hr>
            <p class="card-text"><b>LEVEL:</b> ${item.level}</p></div></div>`;
        });
        document.getElementById("digimon-training").innerHTML = listaTraining;
}
})
//Solitud a la Api ellistado de Digimon nivel "Rookie"
fetch(url)
.then(response => response.json())
.then(datos => {
    
    for (item of datos){

        let levelRookie = datos.filter(function(item) {
            return item.level === "Rookie";
        });
        //Resultado se muestra en formato Card de Boostrap en HTML//
        var listaRookie = "";
        levelRookie.forEach(function(item) {
            listaRookie += `<div class="card bg_rookie col col-xl-4 col-lg-4 col-md-3 col-sm-12 mx-3 mb-5" style="width: 15rem;" id="cardNormal">
            <img src="${item.img}" class="card-img-top img_ho" style="height:100px;" alt="imagen digimon">
            <div class="card-body"><h6 class="card-title"><b>NOMBRE:</b> ${item.name}</h6>
            <hr color="#b2b2a2"></hr>
            <p class="card-text"><b>LEVEL:</b> ${item.level}</p></div></div>`;
        });
        document.getElementById("digimon-rookie").innerHTML = listaRookie;
}
})
//Solitud a la Api ellistado de Digimon nivel "Champion"
fetch(url)
.then(response => response.json())
.then(datos => {
    
    for (item of datos){

        let levelChampion = datos.filter(function(item) {
            return item.level === "Champion";
        });
        //Resultado se muestra en formato Card de Boostrap en HTML//
        var listaChampion = "";
        levelChampion.forEach(function(item) {
            listaChampion += `<div class="card bg_champion col col-xl-4 col-lg-4 col-md-3 col-sm-12 mx-3 mb-5" style="width: 15rem;" id="cardNormal"  >
            <img src="${item.img}" class="card-img-top img_ho" style="height:100px;" alt="imagen digimon">
            <div class="card-body"><h6 class="card-title"><b>NOMBRE:</b> ${item.name}</h6>
            <hr color="#b2b2a2"></hr>
            <p class="card-text"><b>LEVEL:</b> ${item.level}</p></div></div>`;
        });
        document.getElementById("digimon-champion").innerHTML = listaChampion;
}
})
//Solitud a la Api el listado de Digimon nivel "Ultimate"
fetch(url)
.then(response => response.json())
.then(datos => {
    
    for (item of datos){

        let levelUltimate = datos.filter(function(item) {
            return item.level === "Ultimate";
        });
        //Resultado se muestra en formato Card de Boostrap en HTML//
        var listaUltimate = "";
        levelUltimate.forEach(function(item) {
            listaUltimate += `<div class="card bg_ultimate col col-xl-4 col-lg-4 col-md-3 col-sm-12 mx-3 mb-5" style="width: 15rem;" id="cardNormal">
            <img src="${item.img}" class="card-img-top img_ho" style="height:100px;" alt="imagen digimon">
            <div class="card-body"><h6 class="card-title"><b>NOMBRE:</b> ${item.name}</h6>
            <hr color="#b2b2a2"></hr>
            <p class="card-text"><b>LEVEL:</b> ${item.level}</p></div></div>`;
        });
        document.getElementById("digimon-ultimate").innerHTML = listaUltimate;
}
})
//Solitud a la Api el listado de Digimon nivel "Mega"
fetch(url)
.then(response => response.json())
.then(datos => {
    
    for (item of datos){

        let levelMega = datos.filter(function(item) {
            return item.level === "Mega";
        });
        //Resultado se muestra en formato Card de Boostrap en HTML//
        var listaMega = "";
        levelMega.forEach(function(item) {
            listaMega += `<div class="card bg_mega text-light col col-xl-4 col-lg-4 col-md-3 col-sm-12 mx-3 mb-5" style="width: 15rem;" id="cardNormal">
            <img src="${item.img}" class="card-img-top" style="height:100px;" alt="imagen digimon">
            <div class="card-body"><h6 class="card-title"><b>NOMBRE:</b> ${item.name}</h6>
            <hr color="#b2b2a2"></hr>
            <p class="card-text"><b>LEVEL:</b> ${item.level}</p></div></div>`;
        });
        document.getElementById("digimon-mega").innerHTML = listaMega;
}
})
//Solitud a la Api el listado de Digimon nivel "Armor"
fetch(url)
.then(response => response.json())
.then(datos => {
    
    for (item of datos){

        let levelArmor = datos.filter(function(item) {
            return item.level === "Armor";
        });
        //Resultado se muestra en formato Card de Boostrap en HTML//
        var listaArmor = "";
        levelArmor.forEach(function(item) {
            listaArmor += `<div class="card bg_armor col col-xl-4 col-lg-4 col-md-3 col-sm-12 mx-3 mb-5" style="width: 15rem;" id="cardNormal">
            <img src="${item.img}" class="card-img-top" style="height:100px;" alt="imagen digimon">
            <div class="card-body"><h6 class="card-title"><b>NOMBRE:</b> ${item.name}</h6>
            <hr color="#b2b2a2"></hr>
            <p class="card-text"><b>LEVEL:</b> ${item.level}</p></div></div>`;
        });
        document.getElementById("digimon-armor").innerHTML = listaArmor;
}
})
//Función para ayudar a Digievolucionar a "Poyomon"
var botonEvol = document.querySelector('#btn-go');
        botonEvol.addEventListener('click', digi_evolucion);
        function digi_evolucion() {

            var imagen = document.getElementById('evol_img');
        
            if (imagen.getAttribute("src") == "assets/img/poyomon.png") {
        
                imagen.src = "assets/img/tokomon.png";
                return;
            }    
             
            if (imagen.getAttribute("src") == "assets/img/tokomon.png") {
        
                imagen.src = "assets/img/patamon.png";  
                return;
            }
            if (imagen.getAttribute("src") == "assets/img/patamon.png") {
        
                imagen.src = "assets/img/angemon.png";  
                return;
            }
            else {        
                imagen.src = "assets/img/holyangemon.png";  
                return;
            }
                    
        
            }
//Función para responder De quién es la silueta
var botonRespuesta = document.querySelector('#btn-repuesta');
botonRespuesta.addEventListener('click', verificar);       
function verificar(){

if(document.getElementById("flexRadioDefault1").checked) {
  
  alert("✘ \n Nunca volveré a insultar a nadie \n （っ＾▿＾)☞ ¡Oh, mira un tarado!");
  return;
}
if(document.getElementById("flexRadioDefault2").checked) {
  
    alert("✘ \n No, glugluglu, soy la estrella de otro anime");
    return;
  
} 
if(document.getElementById("flexRadioDefault3").checked) {
  
    alert("✘ \n Que bruto pongale 0 ☜(ˆ▿ˆc)");
    return;
  }
  if(document.getElementById("flexRadioDefault4").checked) {
    var mono = document.getElementById('sil-betamon');
    
    if (mono.getAttribute("src") == "assets/img/silueta-betamon.png") {
        mono.src = "assets/img/betamon_color.png";
        alert("✔ Respuesta Correcta \n (👍≖‿‿≖)👍 👍(≖‿‿≖👍)");  
      
    } 
    return
  }
    
  else {
    alert ("Debes elgir una opción")
  }
}




   
          