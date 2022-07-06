//alert text
function alertCopiado(mensage){
    navigator.clipboard.writeText(mensage);
    window.alert("O texto foi copiado:\n" + mensage);
}


//abre e e fecha menu no celular

var aberto = false;
function setContato(){
    var lista = document.getElementById('list');
    if (aberto==false){
        aberto=true;
        lista.style.display = "block";
    }else{
        aberto=false;
        lista.style.display = "none";
    }
}
