// --------------- --------------- --------------- --------------- ---------------

// Conversação Firebase:
$(document).ready(function () {

    var database = firebase.database();
    var CulturaCebolinha;
    var CulturaManjericao;
    var CulturaAlface;
    var CulturaCoentro;
    var CulturaAlternativa;
    var CulturaAtiva = firebase.database().ref().child("Culturas/CulturaAtiva");

    database.ref().on("value", function(snap) {
        CulturaCebolinha = snap.val().Culturas.CulturaCebolinha;
        CulturaManjericao = snap.val().Culturas.CulturaManjericao;
        CulturaAlface = snap.val().Culturas.CulturaAlface;
        CulturaCoentro = snap.val().Culturas.CulturaCoentro;
        CulturaAlternativa = snap.val().Culturas.CulturaAlternativa;
        CulturaAplicada = snap.val().Culturas.CulturaAtiva;

        LuminosidadeMinima = snap.val().Variaveis.LuminosidadeMinima;
        TemperaturaMaxima = snap.val().Variaveis.TemperaturaMaxima;
        TemperaturaMinima = snap.val().Variaveis.TemperaturaMinima;
        UmidadeMaximaAr = snap.val().Variaveis.UmidadeMaximaAr;
        UmidadeMinimaAr = snap.val().Variaveis.UmidadeMinimaAr;
        UmidadeMaximaSolo = snap.val().Variaveis.UmidadeMaximaSolo;
        UmidadeMinimaSolo = snap.val().Variaveis.UmidadeMinimaSolo;
        
        DiaDaSemana = snap.val().Variaveis.DiaDaSemana;
        HoraMaxima = snap.val().Variaveis.HoraMaxima;
        HoraMinima = snap.val().Variaveis.HoraMinima;
        MinutoMinimo = snap.val().Variaveis.MinutoMinimo;
        MinutoMaximo = snap.val().Variaveis.MinutoMaximo;

        document.getElementById("cultura-aplicada").innerHTML = CulturaAplicada;

        // --------------- --------------- ---------------

        if (CulturaCebolinha == "1") {    
            // Checkup da Cebolinha:
            document.getElementById("cebolinha-desligada").style.display = "none";
            document.getElementById("cebolinha-ligada").style.display = "block";
            document.getElementById("status-cebolinha").innerHTML = " ativa.";
            document.getElementById("status-cebolinha").style.color = "rgb(23, 224, 16)";
        } else {
            document.getElementById("cebolinha-desligada").style.display = "block";
            document.getElementById("cebolinha-ligada").style.display = "none";
            document.getElementById("status-cebolinha").innerHTML = " desativada.";
            document.getElementById("status-cebolinha").style.color = "#ff0000";
        }

        // --------------- --------------- ---------------

        if (CulturaManjericao == "1") {    
            // Checkup do Manjericão:
            document.getElementById("manjericao-desligada").style.display = "none";
            document.getElementById("manjericao-ligada").style.display = "block";
            document.getElementById("status-manjericao").innerHTML = " ativa.";
            document.getElementById("status-manjericao").style.color = "rgb(23, 224, 16)";
        } else {
            document.getElementById("manjericao-desligada").style.display = "block";
            document.getElementById("manjericao-ligada").style.display = "none";
            document.getElementById("status-manjericao").innerHTML = " desativada.";
            document.getElementById("status-manjericao").style.color = "#ff0000";
        }

        // --------------- --------------- ---------------

        if (CulturaAlface == "1") {    
            // Checkup do Alface:
            document.getElementById("alface-desligada").style.display = "none";
            document.getElementById("alface-ligada").style.display = "block";
            document.getElementById("status-alface").innerHTML = " ativa.";
            document.getElementById("status-alface").style.color = "rgb(23, 224, 16)";
        } else {
            document.getElementById("alface-desligada").style.display = "block";
            document.getElementById("alface-ligada").style.display = "none";
            document.getElementById("status-alface").innerHTML = " desativada.";
            document.getElementById("status-alface").style.color = "#ff0000";
        }

        // --------------- --------------- ---------------

        if (CulturaCoentro == "1") {    
            // Checkup do Coentro:
            document.getElementById("coentro-desligada").style.display = "none";
            document.getElementById("coentro-ligada").style.display = "block";
            document.getElementById("status-coentro").innerHTML = " ativa.";
            document.getElementById("status-coentro").style.color = "rgb(23, 224, 16)";
        } else {
            document.getElementById("coentro-desligada").style.display = "block";
            document.getElementById("coentro-ligada").style.display = "none";
            document.getElementById("status-coentro").innerHTML = " desativada.";
            document.getElementById("status-coentro").style.color = "#ff0000";
        }

        // --------------- --------------- ---------------

        if (CulturaAlternativa == "1") {    
            // Checkup do Manjericão:
            document.getElementById("alternativa-desligada").style.display = "none";
            document.getElementById("alternativa-ligada").style.display = "block";
            document.getElementById("status-alternativa").innerHTML = " ativa.";
            document.getElementById("status-alternativa").style.color = "rgb(23, 224, 16)";

            // Se a cultura criada estiver ativa, deixar o quadrado relativo a esta preenchido com os valores: AQUI
            document.getElementById("nome-da-cultura").innerHTML = CulturaAplicada  ;
            document.getElementById("temperatura-max").innerHTML = TemperaturaMaxima;
            document.getElementById("temperatura-min").innerHTML = TemperaturaMinima;
            document.getElementById("umid-ar-max").innerHTML = UmidadeMaximaAr;
            document.getElementById("umid-ar-min").innerHTML = UmidadeMinimaAr;
            document.getElementById("umid-solo-max").innerHTML = UmidadeMaximaSolo;
            document.getElementById("umid-solo-min").innerHTML = UmidadeMinimaSolo;
            document.getElementById("luminosidade-min").innerHTML = LuminosidadeMinima;

            document.getElementById("hora-min").innerHTML = HoraMinima;
            document.getElementById("minuto-max").innerHTML = MinutoMaximo;
            document.getElementById("hora-max").innerHTML = HoraMaxima;
            document.getElementById("minuto-min").innerHTML = MinutoMinimo;
            document.getElementById("dia-da-semana").innerHTML = DiaDaSemana;
        } else {
            document.getElementById("alternativa-desligada").style.display = "block";
            document.getElementById("alternativa-ligada").style.display = "none";
            document.getElementById("status-alternativa").innerHTML = " desativada.";
            document.getElementById("status-alternativa").style.color = "#ff0000";

            document.getElementById("nome-da-cultura").innerHTML = "-";
            document.getElementById("temperatura-max").innerHTML = "-";
            document.getElementById("temperatura-min").innerHTML = "-";
            document.getElementById("umid-ar-max").innerHTML = "-";
            document.getElementById("umid-ar-min").innerHTML = "-";
            document.getElementById("umid-solo-min").innerHTML = "-";
            document.getElementById("umid-solo-max").innerHTML = "-";
            document.getElementById("luminosidade-min").innerHTML = "-";

            document.getElementById("hora-min").innerHTML = "-";
            document.getElementById("minuto-min").innerHTML = "-";
            document.getElementById("hora-max").innerHTML = "-";
            document.getElementById("minuto-max").innerHTML = "-";
            document.getElementById("dia-da-semana").innerHTML = "-";

        }
    });

    // --------------- --------------- --------------- --------------- ---------------

    $(".botao-cebolinha").click(function () {
        var firebaseRef = firebase.database().ref().child("Culturas/CulturaCebolinha");
        var firebaseManjericao = firebase.database().ref().child("Culturas/CulturaManjericao");
        var firebaseAlface = firebase.database().ref().child("Culturas/CulturaAlface");
        var firebaseCoentro = firebase.database().ref().child("Culturas/CulturaCoentro");
        var firebaseAlternativa = firebase.database().ref().child("Culturas/CulturaAlternativa");

        // Variáveis para parametrização: AQUI
        var LuminosidadeMinima = firebase.database().ref().child("Variaveis/LuminosidadeMinima");
        var TemperaturaMaxima = firebase.database().ref().child("Variaveis/TemperaturaMaxima");
        var TemperaturaMinima = firebase.database().ref().child("Variaveis/TemperaturaMinima");
        var UmidadeMaximaAr = firebase.database().ref().child("Variaveis/UmidadeMaximaAr");
        var UmidadeMaximaSolo = firebase.database().ref().child("Variaveis/UmidadeMaximaSolo");
        var UmidadeMinimaAr = firebase.database().ref().child("Variaveis/UmidadeMinimaAr");
        var UmidadeMinimaSolo = firebase.database().ref().child("Variaveis/UmidadeMinimaSolo");

        var DiaDaSemana = firebase.database().ref().child("Variaveis/DiaDaSemana");
        var HoraMaxima = firebase.database().ref().child("Variaveis/HoraMaxima");
        var HoraMinima = firebase.database().ref().child("Variaveis/HoraMinima");
        var MinutoMaximo = firebase.database().ref().child("Variaveis/MinutoMaximo");
        var MinutoMinimo = firebase.database().ref().child("Variaveis/MinutoMinimo");

        if (CulturaCebolinha == "1") {
            firebaseRef.set("0");
            CulturaCebolinha = "0";
        } else {
            firebaseRef.set("1");
            firebaseManjericao.set("0");
            firebaseAlface.set("0");
            firebaseCoentro.set("0");
            firebaseAlternativa.set("0");
            CulturaCebolinha = "1";
            CulturaManjericao = "0";
            CulturaAlface = "0";
            CulturaCoentro = "0";
            CulturaAlternativa = "0";

            CulturaAtiva.set("Cebolinha");
            document.getElementById("cultura-aplicada").innerHTML = "Cebolinha";

            // Enviando para o banco de dados os valores inseridos nos inputs: AQUI
            LuminosidadeMinima.set("100");
            TemperaturaMaxima.set("24");
            TemperaturaMinima.set("13");
            UmidadeMaximaAr.set("60");
            UmidadeMinimaAr.set("50");
            UmidadeMinimaSolo.set("11");
            UmidadeMaximaSolo.set("80");
            DiaDaSemana.set("2");
            HoraMaxima.set("15");
            HoraMinima.set("13");
            MinutoMaximo.set("00");
            MinutoMinimo.set("00");
        }
    })

    // --------------- --------------- ---------------

    $(".botao-manjericao").click(function () {
        var firebaseRef = firebase.database().ref().child("Culturas/CulturaManjericao");
        var firebaseCebolinha = firebase.database().ref().child("Culturas/CulturaCebolinha");
        var firebaseAlface = firebase.database().ref().child("Culturas/CulturaAlface");
        var firebaseAlternativa = firebase.database().ref().child("Culturas/CulturaAlternativa");
        var firebaseCoentro = firebase.database().ref().child("Culturas/CulturaCoentro");

        // Variáveis para parametrização: AQUI
        var LuminosidadeMinima = firebase.database().ref().child("Variaveis/LuminosidadeMinima");
        var TemperaturaMaxima = firebase.database().ref().child("Variaveis/TemperaturaMaxima");
        var TemperaturaMinima = firebase.database().ref().child("Variaveis/TemperaturaMinima");
        var UmidadeMaximaAr = firebase.database().ref().child("Variaveis/UmidadeMaximaAr");
        var UmidadeMinimaAr = firebase.database().ref().child("Variaveis/UmidadeMinimaAr");
        var UmidadeMaximaSolo = firebase.database().ref().child("Variaveis/UmidadeMaximaSolo");
        var UmidadeMinimaSolo = firebase.database().ref().child("Variaveis/UmidadeMinimaSolo");

        var DiaDaSemana = firebase.database().ref().child("Variaveis/DiaDaSemana");
        var HoraMaxima = firebase.database().ref().child("Variaveis/HoraMaxima");
        var HoraMinima = firebase.database().ref().child("Variaveis/HoraMinima");
        var MinutoMaximo = firebase.database().ref().child("Variaveis/MinutoMaximo");
        var MinutoMinimo = firebase.database().ref().child("Variaveis/MinutoMinimo");

        if (CulturaManjericao == "1") {
            firebaseRef.set("0");
            CulturaManjericao = "0";
        } else {
            firebaseRef.set("1");
            firebaseCebolinha.set("0");
            firebaseAlface.set("0");
            firebaseAlternativa.set("0");
            firebaseCoentro.set("0");
            CulturaManjericao = "1";
            CulturaCebolinha = "0";
            CulturaAlface = "0";
            CulturaAlternativa = "0";
            CulturaCoentro = "0";

            CulturaAtiva.set("Manjericão");
            document.getElementById("cultura-aplicada").innerHTML = "Manjericão";

            // Enviando para o banco de dados os valores inseridos nos inputs: AQUI
            LuminosidadeMinima.set("300");
            TemperaturaMaxima.set("21");
            TemperaturaMinima.set("18");
            UmidadeMaximaAr.set("70");
            UmidadeMinimaAr.set("50");
            UmidadeMinimaSolo.set("10");
            UmidadeMaximaSolo.set("95");
            DiaDaSemana.set("3");
            HoraMaxima.set("16");
            HoraMinima.set("14");
            MinutoMaximo.set("00");
            MinutoMinimo.set("00");
        }
    })

    // --------------- --------------- ---------------

    $(".botao-alface").click(function () {
        var firebaseRef = firebase.database().ref().child("Culturas/CulturaAlface");
        var firebaseCebolinha = firebase.database().ref().child("Culturas/CulturaCebolinha");
        var firebaseManjericao = firebase.database().ref().child("Culturas/CulturaManjericao");
        var firebaseAlternativa = firebase.database().ref().child("Culturas/CulturaAlternativa");
        var firebaseCoentro = firebase.database().ref().child("Culturas/CulturaCoentro");

        // Variáveis para parametrização: AQUI
        var LuminosidadeMinima = firebase.database().ref().child("Variaveis/LuminosidadeMinima");
        var TemperaturaMaxima = firebase.database().ref().child("Variaveis/TemperaturaMaxima");
        var TemperaturaMinima = firebase.database().ref().child("Variaveis/TemperaturaMinima");
        var UmidadeMaximaAr = firebase.database().ref().child("Variaveis/UmidadeMaximaAr");
        var UmidadeMinimaAr = firebase.database().ref().child("Variaveis/UmidadeMinimaAr");
        var UmidadeMaximaSolo = firebase.database().ref().child("Variaveis/UmidadeMaximaSolo");
        var UmidadeMinimaSolo = firebase.database().ref().child("Variaveis/UmidadeMinimaSolo");

        var DiaDaSemana = firebase.database().ref().child("Variaveis/DiaDaSemana");
        var HoraMaxima = firebase.database().ref().child("Variaveis/HoraMaxima");
        var HoraMinima = firebase.database().ref().child("Variaveis/HoraMinima");
        var MinutoMaximo = firebase.database().ref().child("Variaveis/MinutoMaximo");
        var MinutoMinimo = firebase.database().ref().child("Variaveis/MinutoMinimo");

        if (CulturaAlface == "1") {
            firebaseRef.set("0");
            CulturaAlface = "0";
        } else {
            firebaseRef.set("1");
            firebaseCebolinha.set("0");
            firebaseManjericao.set("0");
            firebaseAlternativa.set("0");
            firebaseCoentro.set("0");
            CulturaManjericao = "0";
            CulturaCebolinha = "0";
            CulturaAlface = "1";
            CulturaAlternativa = "0";
            CulturaCoentro = "0";

            CulturaAtiva.set("Alface");
            document.getElementById("cultura-aplicada").innerHTML = "Alface";

            // Enviando para o banco de dados os valores inseridos nos inputs: AQUI
            LuminosidadeMinima.set("150");
            TemperaturaMaxima.set("20");
            TemperaturaMinima.set("14");
            UmidadeMaximaAr.set("70");
            UmidadeMinimaAr.set("60");
            UmidadeMinimaSolo.set("15");
            UmidadeMaximaSolo.set("97");
            DiaDaSemana.set("7");
            HoraMaxima.set("16");
            HoraMinima.set("16");
            MinutoMaximo.set("30");
            MinutoMinimo.set("20");
        }
    })

    // --------------- --------------- ---------------

    $(".botao-coentro").click(function () {
        var firebaseRef = firebase.database().ref().child("Culturas/CulturaCoentro");
        var firebaseCebolinha = firebase.database().ref().child("Culturas/CulturaCebolinha");
        var firebaseAlface = firebase.database().ref().child("Culturas/CulturaAlface");
        var firebaseAlternativa = firebase.database().ref().child("Culturas/CulturaAlternativa");
        var firebaseCoentro = firebase.database().ref().child("Culturas/CulturaManjericao");

        // Variáveis para parametrização: AQUI
        var LuminosidadeMinima = firebase.database().ref().child("Variaveis/LuminosidadeMinima");
        var TemperaturaMaxima = firebase.database().ref().child("Variaveis/TemperaturaMaxima");
        var TemperaturaMinima = firebase.database().ref().child("Variaveis/TemperaturaMinima");
        var UmidadeMaximaAr = firebase.database().ref().child("Variaveis/UmidadeMaximaAr");
        var UmidadeMinimaAr = firebase.database().ref().child("Variaveis/UmidadeMinimaAr");
        var UmidadeMinimaSolo = firebase.database().ref().child("Variaveis/UmidadeMinimaSolo");
        var UmidadeMaximaSolo = firebase.database().ref().child("Variaveis/UmidadeMaximaSolo");

        var DiaDaSemana = firebase.database().ref().child("Variaveis/DiaDaSemana");
        var HoraMaxima = firebase.database().ref().child("Variaveis/HoraMaxima");
        var HoraMinima = firebase.database().ref().child("Variaveis/HoraMinima");
        var MinutoMaximo = firebase.database().ref().child("Variaveis/MinutoMaximo");
        var MinutoMinimo = firebase.database().ref().child("Variaveis/MinutoMinimo");

        if (CulturaCoentro == "1") {
            firebaseRef.set("0");
            CulturaCoentro = "0";
        } else {
            firebaseRef.set("1");
            firebaseCebolinha.set("0");
            firebaseAlface.set("0");
            firebaseAlternativa.set("0");
            firebaseCoentro.set("0");
            CulturaManjericao = "0";
            CulturaCebolinha = "0";
            CulturaAlface = "0";
            CulturaAlternativa = "0";
            CulturaCoentro = "1";

            CulturaAtiva.set("Coentro");
            document.getElementById("cultura-aplicada").innerHTML = "Coentro";

            // Enviando para o banco de dados os valores inseridos nos inputs: AQUI
            LuminosidadeMinima.set("210");
            TemperaturaMaxima.set("22");
            TemperaturaMinima.set("17");
            UmidadeMaximaAr.set("80");
            UmidadeMinimaAr.set("50");
            UmidadeMinimaSolo.set("20");
            UmidadeMaximaSolo.set("94");
            DiaDaSemana.set("3");
            HoraMaxima.set("09");
            HoraMinima.set("09");
            MinutoMaximo.set("50");
            MinutoMinimo.set("40");
        }
    })

    // --------------- --------------- ---------------

    $(".botao-alternativa").click(function () {
        var firebaseRef = firebase.database().ref().child("Culturas/CulturaAlternativa");
        var firebaseManjericao = firebase.database().ref().child("Culturas/CulturaManjericao");
        var firebaseCebolinha = firebase.database().ref().child("Culturas/CulturaCebolinha");
        var firebaseAlface = firebase.database().ref().child("Culturas/CulturaAlface");
        var firebaseCoentro = firebase.database().ref().child("Culturas/CulturaCoentro");

        // Variáveis para parametrização: AQUI
        var LuminosidadeMinima = firebase.database().ref().child("Variaveis/LuminosidadeMinima");
        var TemperaturaMaxima = firebase.database().ref().child("Variaveis/TemperaturaMaxima");
        var TemperaturaMinima = firebase.database().ref().child("Variaveis/TemperaturaMinima");
        var UmidadeMaximaAr = firebase.database().ref().child("Variaveis/UmidadeMaximaAr");
        var UmidadeMinimaAr = firebase.database().ref().child("Variaveis/UmidadeMinimaAr");
        var UmidadeMinimaSolo = firebase.database().ref().child("Variaveis/UmidadeMinimaSolo");
        var UmidadeMaximaSolo = firebase.database().ref().child("Variaveis/UmidadeMaximaSolo");

        var DiaDaSemana = firebase.database().ref().child("Variaveis/DiaDaSemana");
        var HoraMaxima = firebase.database().ref().child("Variaveis/HoraMaxima");
        var HoraMinima = firebase.database().ref().child("Variaveis/HoraMinima");
        var MinutoMaximo = firebase.database().ref().child("Variaveis/MinutoMaximo");
        var MinutoMinimo = firebase.database().ref().child("Variaveis/MinutoMinimo");

        if (CulturaAlternativa == "1") {
            firebaseRef.set("0");
            CulturaAlternativa = "0";
        } else {
            firebaseRef.set("1");
            firebaseManjericao.set("0");
            firebaseAlface.set("0");
            firebaseCoentro.set("0");
            firebaseCebolinha.set("0");
            CulturaAlternativa = "1";
            CulturaCebolinha = "0";
            CulturaManjericao = "0";
            CulturaAlface = "0";
            CulturaCoentro = "0";

            setTimeout(() => {
                document.getElementById("display-criar-nova-cultura").style.display = "none";
                document.getElementById("nome-da-cultura-input").value = "";
                document.getElementById("temperatura-max-input").value = "";
                document.getElementById("temperatura-min-input").value = "";
                document.getElementById("umid-ar-max-input").value = "";
                document.getElementById("umid-ar-min-input").value = "";
                document.getElementById("umid-solo-min-input").value = "";
                document.getElementById("umid-solo-max-input").value = "";
                document.getElementById("hora-min-input").value = "";
                document.getElementById("hora-max-input").value = "";
                document.getElementById("minuto-min-input").value = "";
                document.getElementById("minuto-max-input").value = "";
                document.getElementById("dia-da-semana-input").value = "";
                document.getElementById("luminosidade-min-input").value = "";
            }, 500);
        }

        nome_da_cultura = document.getElementById("nome-da-cultura-input").value;
        temperatura_max = document.getElementById("temperatura-max-input").value;
        temperatura_min = document.getElementById("temperatura-min-input").value;
        umid_ar_max = document.getElementById("umid-ar-max-input").value;
        umid_ar_min = document.getElementById("umid-ar-min-input").value;
        umid_solo_max = document.getElementById("umid-solo-max-input").value;
        umid_solo_min = document.getElementById("umid-solo-min-input").value;
        luminosidade_min = document.getElementById("luminosidade-min-input").value;

        dia_da_semana = document.getElementById("dia-da-semana-input").value;
        hora_min = document.getElementById("hora-min-input").value;
        minuto_min = document.getElementById("minuto-min-input").value;
        hora_max = document.getElementById("hora-max-input").value;
        minuto_max = document.getElementById("minuto-max-input").value;


        document.getElementById("nome-da-cultura").innerHTML = nome_da_cultura;
        document.getElementById("temperatura-max").innerHTML = temperatura_max;
        document.getElementById("temperatura-min").innerHTML = temperatura_min;
        document.getElementById("umid-ar-max").innerHTML = umid_ar_max;
        document.getElementById("umid-ar-min").innerHTML = umid_ar_min;
        document.getElementById("umid-solo-min").innerHTML = umid_solo_min;
        document.getElementById("umid-solo-max").innerHTML = umid_solo_max;
        document.getElementById("luminosidade-min").innerHTML = luminosidade_min;

        document.getElementById("hora-min").innerHTML = hora_min;
        document.getElementById("minuto-min").innerHTML = minuto_min;
        document.getElementById("hora-max").innerHTML = hora_max;
        document.getElementById("minuto-max").innerHTML = minuto_max;
        document.getElementById("dia-da-semana").innerHTML = dia_da_semana;


        CulturaAtiva.set(nome_da_cultura);
        document.getElementById("cultura-aplicada").innerHTML = nome_da_cultura;

        // Enviando para o banco de dados os valores inseridos nos inputs: AQUI
        LuminosidadeMinima.set(luminosidade_min);
        TemperaturaMaxima.set(temperatura_max);
        TemperaturaMinima.set(temperatura_min);
        UmidadeMaximaAr.set(umid_ar_max);
        UmidadeMinimaAr.set(umid_ar_min);
        UmidadeMinimaSolo.set(umid_solo_min);
        UmidadeMaximaSolo.set(umid_solo_max);
        DiaDaSemana.set(dia_da_semana);
        HoraMaxima.set(hora_max);
        HoraMinima.set(hora_min);
        MinutoMaximo.set(minuto_max);
        MinutoMinimo.set(minuto_min);
    })
});

// --------------- --------------- --------------- --------------- ---------------
