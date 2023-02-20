let menu = prompt("¿Cuánto dinero quieres gastar en tu helado? (tope 700)");



menu = parseInt(menu);

if (menu >= 100 && menu < 150) {
    alert("Te alcanza para un helado de agua")
    alert("y te sobran" + (menu - 100))
}
else if (menu >= 150 && menu < 250) {
    alert("Te alcanza para un helado de crema")
    alert("y te sobran" + (menu - 150))
}
else if (menu >= 250 && menu < 350) {
    alert("Te alcanza para un cucurucho con 2 bochas")
    alert("y te sobran" + (menu - 250))
}
else if (menu >= 350 && menu < 450) {
    alert("Te alcanza para un cucurucho grande")
    alert("y te sobran" + (menu - 350))
}
else if (menu >= 450 && menu < 550) {
    alert("Te alcanza para 1/4kg de helado")
    alert("y te sobran" + (menu - 450))
}
else if (menu >= 700) {
    alert("Te alcanza para 1kg de helado");
    alert("y te sobran" + (menu - 700))
}else{
    alert("Lo siento, no te alcanza para comprar ningún helado")
}


