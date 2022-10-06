// --------------- --------------- --------------- --------------- ---------------

// Autenticação da base de dados em nuvem - Firebase:
const firebaseConfig = {
    apiKey: "AIzaSyC0V4ondRarfexHG9TBkzdjC2I_TsIX2tg",
    authDomain: "estufa-automatica.firebaseapp.com",
    databaseURL: "https://estufa-automatica-default-rtdb.firebaseio.com",
    projectId: "estufa-automatica",
    storageBucket: "estufa-automatica.appspot.com",
    messagingSenderId: "381969799444",
    appId: "1:381969799444:web:49148117f7b85f70638a01",
    measurementId: "G-NXMW70MV0R"
  };

// Inicialização do Firebase:
firebase.initializeApp(firebaseConfig);


// --------------- --------------- --------------- --------------- ---------------

// Menu responsivo:
let menu = document.querySelector('#icone-menu');
let navbar = document.querySelector('.barra-de-navegacao');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    // Menu:
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    // Botão voltar ao topo:
    scrollFunction();
}

// --------------- --------------- --------------- --------------- ---------------

// Botão voltar ao topo:
document.getElementById("botao-voltar-ao-topo").style.display = "none";

function scrollFunction() {
    if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
        document.getElementById("botao-voltar-ao-topo").style.display = "block";
    } else {
        document.getElementById("botao-voltar-ao-topo").style.display = "none";
    }
}

// --------------- --------------- --------------- --------------- ---------------

// Conversação Firebase:
$(document).ready(function () {

    var database = firebase.database();

    // Variáveis de controle dos atuadores - 0 e 1:
    var Iluminacao;
    var CoolerResfriamento;
    var PlacaAquecimento;
    var Bomba;
    var Exaustor;
    var Janelas;

    var Controle;

    // Variáveis de captura de medições:
    var UmidadeAr;
    var Temperatura;
    var UmidadeSolo;
    var Luminosidade;

    database.ref().on("value", function(snap) {
        Iluminacao = snap.val().Atuadores.Iluminacao;
        CoolerResfriamento = snap.val().Atuadores.CoolerResfriamento;
        PlacaAquecimento = snap.val().Atuadores.PlacaAquecimento;
        Bomba = snap.val().Atuadores.Bomba;
        Exaustor = snap.val().Atuadores.Exaustor;
        Janelas = snap.val().Atuadores.Janelas;
        Controle = snap.val().Variaveis.Controle;

        UmidadeAr = snap.val().VariaveisMedidas.UmidadeAr;
        Temperatura = snap.val().VariaveisMedidas.Temperatura;
        UmidadeSolo = snap.val().VariaveisMedidas.UmidadeSolo;
        Luminosidade = snap.val().VariaveisMedidas.Luminosidade;

        // --------------- --------------- ---------------

        if (Iluminacao == "1") {    
            // Checkup da Iluminação:
            document.getElementById("iluminacao-artificial-desligada").style.display = "none";
            document.getElementById("iluminacao-artificial-ligada").style.display = "block";
            document.getElementById("status-iluminacao-artificial").innerHTML = " ligada.";
            document.getElementById("status-iluminacao-artificial").style.color = "rgb(23, 224, 16)";
        } else {
            document.getElementById("iluminacao-artificial-desligada").style.display = "block";
            document.getElementById("iluminacao-artificial-ligada").style.display = "none";
            document.getElementById("status-iluminacao-artificial").innerHTML = " desligada.";
            document.getElementById("status-iluminacao-artificial").style.color = "#ff0000";
        }

        // --------------- --------------- ---------------

        if (CoolerResfriamento == "1") {    
            // Checkup do Resfriamento:
            document.getElementById("resfriamento-desligado").style.display = "none";
            document.getElementById("resfriamento-ligado").style.display = "block";
            document.getElementById("status-resfriamento").innerHTML = " ligado.";
            document.getElementById("status-resfriamento").style.color = "rgb(23, 224, 16)";
        } else {
            document.getElementById("resfriamento-desligado").style.display = "block";
            document.getElementById("resfriamento-ligado").style.display = "none";
            document.getElementById("status-resfriamento").innerHTML = " desligado.";
            document.getElementById("status-resfriamento").style.color = "#ff0000";
        }

        // --------------- --------------- ---------------

        if (PlacaAquecimento == "1") {    
            // Checkup do Aquecimento:
            document.getElementById("aquecimento-desligado").style.display = "none";
            document.getElementById("aquecimento-ligado").style.display = "block";
            document.getElementById("status-aquecimento").innerHTML = " ligado.";
            document.getElementById("status-aquecimento").style.color = "rgb(23, 224, 16)";
        } else {
            document.getElementById("aquecimento-desligado").style.display = "block";
            document.getElementById("aquecimento-ligado").style.display = "none";
            document.getElementById("status-aquecimento").innerHTML = " desligado.";
            document.getElementById("status-aquecimento").style.color = "#ff0000";
        }

        // --------------- --------------- ---------------

        if (Bomba == "1") {    
            // Checkup da Irrigação:
            document.getElementById("irrigacao-desligada").style.display = "none";
            document.getElementById("irrigacao-ligada").style.display = "block";
            document.getElementById("status-irrigacao").innerHTML = " ligada.";
            document.getElementById("status-irrigacao").style.color = "rgb(23, 224, 16)";
        } else {
            document.getElementById("irrigacao-desligada").style.display = "block";
            document.getElementById("irrigacao-ligada").style.display = "none";
            document.getElementById("status-irrigacao").innerHTML = " desligada.";
            document.getElementById("status-irrigacao").style.color = "#ff0000";
        }

        // --------------- --------------- ---------------

        if (Exaustor == "1") {    
            // Checkup do Umidificador:
            document.getElementById("exaustor-desligado").style.display = "none";
            document.getElementById("exaustor-ligado").style.display = "block";
            document.getElementById("status-exaustor").innerHTML = " ligada.";
            document.getElementById("status-exaustor").style.color = "rgb(23, 224, 16)";
        } else {
            document.getElementById("exaustor-desligado").style.display = "block";
            document.getElementById("exaustor-ligado").style.display = "none";
            document.getElementById("status-exaustor").innerHTML = " desligada.";
            document.getElementById("status-exaustor").style.color = "#ff0000";
        }

        // --------------- --------------- ---------------

        if (Janelas == "1") {    
            // Checkup da Irrigação:
            document.getElementById("janela-desligada").style.display = "none";
            document.getElementById("janela-ligada").style.display = "block";
            document.getElementById("status-janela").innerHTML = " aberta.";
            document.getElementById("status-janela").style.color = "rgb(23, 224, 16)";
        } else {
            document.getElementById("janela-desligada").style.display = "block";
            document.getElementById("janela-ligada").style.display = "none";
            document.getElementById("status-janela").innerHTML = " fechada.";
            document.getElementById("status-janela").style.color = "#ff0000";
        }

        // --------------- --------------- ---------------

        if (Controle == "1") {    
            // Checkup da Iluminação:
            document.getElementById("controle-manual-desligado").style.display = "none";
            document.getElementById("controle-manual-ligado").style.display = "block";
            document.getElementById("status-controle-manual").innerHTML = " automático.";
            document.getElementById("status-controle-manual").style.color = "rgb(23, 224, 16)";
        } else {
            document.getElementById("controle-manual-desligado").style.display = "block";
            document.getElementById("controle-manual-ligado").style.display = "none";
            document.getElementById("status-controle-manual").innerHTML = " manual.";
            document.getElementById("status-controle-manual").style.color = "#ff0000";
        }

        // --------------- --------------- ---------------

        // Envio da umidade e temperatura do DHT22:
        document.getElementById("valor-de-umidade").innerHTML = UmidadeAr;
        document.getElementById("valor-de-temperatura").innerHTML = Temperatura;

        // Envio da luminosidade do LDR:
        document.getElementById("valor-de-luminosidade").innerHTML = Luminosidade;

        // Envio da umidade do solo do FC-28:
        document.getElementById("valor-de-umidade-do-solo").innerHTML = UmidadeSolo;
    });

// --------------- --------------- --------------- --------------- ---------------

    $(".botao-iluminacao-artificial").click(function () {
        var firebaseRef = firebase.database().ref().child("Atuadores/Iluminacao");

        if (Iluminacao == "1") {
            firebaseRef.set("0");
            Iluminacao = "0";
        } else {
            firebaseRef.set("1");
            Iluminacao = "1";
        }
    })

    // --------------- --------------- ---------------

    $(".botao-resfriamento").click(function () {
        var firebaseRef = firebase.database().ref().child("Atuadores/CoolerResfriamento");

        if (CoolerResfriamento == "1") {  
            firebaseRef.set("0");
            CoolerResfriamento = "0";
        } else {
            firebaseRef.set("1");
            CoolerResfriamento = "1";
        }
    })

    // --------------- --------------- ---------------

    $(".botao-aquecimento").click(function () {
        var firebaseRef = firebase.database().ref().child("Atuadores/PlacaAquecimento");

        if (PlacaAquecimento == "1") {    
            firebaseRef.set("0");
            PlacaAquecimento = "0";
        } else {
            firebaseRef.set("1");
            PlacaAquecimento = "1";
        }
    })

    // --------------- --------------- ---------------

    $(".botao-irrigacao").click(function () {
        var firebaseRef = firebase.database().ref().child("Atuadores/Bomba");

        if (Bomba == "1") {    
            firebaseRef.set("0");
            Bomba = "0";
        } else {
            firebaseRef.set("1");
            Bomba = "1";
        }
    })

    // --------------- --------------- ---------------

    $(".botao-exaustor").click(function () {
        var firebaseRef = firebase.database().ref().child("Atuadores/Exaustor");

        if (Exaustor == "1") {   
            firebaseRef.set("0");
            Exaustor = "0";
        } else {
            firebaseRef.set("1");
            Exaustor = "1";
        }
    })

    // --------------- --------------- ---------------

    $(".botao-janela").click(function () {
        var firebaseRef = firebase.database().ref().child("Atuadores/Janelas");

        if (Janelas == "1") { 
            firebaseRef.set("0");
            Janelas = "0";
        } else {
            firebaseRef.set("1");
            Janelas = "1";
        }
    })

    // --------------- --------------- ---------------

    $(".botao-controle-manual").click(function () {
        var firebaseRef = firebase.database().ref().child("Variaveis/Controle");

        if (Controle == "1") { 
            firebaseRef.set("0");
            Controle = "0";
        } else {
            firebaseRef.set("1");
            Controle = "1";
        }
    })
});

// --------------- --------------- --------------- --------------- ---------------
