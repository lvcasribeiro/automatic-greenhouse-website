document.getElementById("display-criar-nova-cultura").style.display = "none";
document.getElementById("mensagem-de-fim-de-criacao").style.display = "none";

function estaVazio() {
    let nome_da_cultura = document.getElementById('nome-da-cultura-input').value;
    let temperatura_max = document.getElementById('temperatura-max-input').value;
    let temperatura_min = document.getElementById('temperatura-min-input').value;
    let umid_ar_max = document.getElementById('umid-ar-max-input').value;
    let umid_ar_min = document.getElementById('umid-ar-min-input').value;
    let umid_solo_max = document.getElementById("umid-solo-max-input").value;
    let umid_solo_min = document.getElementById('umid-solo-min-input').value;
    let luminosidade_min = document.getElementById('luminosidade-min-input').value;
    let dia_da_semana = document.getElementById("dia-da-semana-input").value;
    let hora_min = document.getElementById("hora-min-input").value;
    let minuto_min = document.getElementById("minuto-min-input").value;
    let hora_max = document.getElementById("hora-max-input").value;
    let minuto_max = document.getElementById("minuto-max-input").value;
    
    
    if (nome_da_cultura != "" && temperatura_max != "" && temperatura_min != "" && umid_ar_max != "" && umid_ar_min != "" && umid_solo_min != "" && luminosidade_min != "" && umid_solo_max != "" && dia_da_semana != "" && hora_min != "" && minuto_min != "" && hora_max != "" && minuto_max != "" && (parseInt(temperatura_max) >= parseInt(temperatura_min) + 5) && (parseInt(umid_ar_max) >= parseInt(umid_ar_min) + 5)) {
        document.getElementById("display-criar-nova-cultura").style.display = "block";
        setTimeout(() => {
            document.getElementById("mensagem-de-fim-de-criacao").style.display = "block";
        }, 500);
    } else {
        document.getElementById("display-criar-nova-cultura").style.display = "none";
        document.getElementById("mensagem-de-fim-de-criacao").style.display = "none";
    }
}
