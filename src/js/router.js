window.libreria.getId('vista').enrutar()
.ruta('/', './views/01noticias.html', null, null)
.ruta('/01noticias', './views/01noticias.html', null, null)
.ruta('/Steam', './views/Steam.html', null, null)
.ruta('/02login', './views/02login.html', null, null)

// .ruta('/', './views/01index.html', 'miControlador', function(){
//     libreria.getCtrl().conBoton()
// })


// .ruta('/01noticias', './views/01noticias.html', 'miControlador', function(){
//     libreria.getCtrl().segundaprueba()
// })
// .ruta('/tercera', './views/tercera.html', 'miControlador', function(){
//     libreria.getCtrl().prueba()
// })