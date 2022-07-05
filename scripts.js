function alertCopiado(mensage){
    navigator.clipboard.writeText(mensage);
    window.alert("O texto foi copiado:\n" + mensage);
}