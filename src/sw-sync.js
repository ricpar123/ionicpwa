

var datos;
 
var datosJson;

self.addEventListener('message', function(event) {
   
   datos = event.data;
   datosJson = datos['formdata'];

   console.log('datos del post:', datosJson);

});

self.addEventListener('sync', function(event) {

    console.log('SW: Sync');

    if ( event.tag === 'nuevo-informe' ) {

//postear a la BD cuando hay conexion 
   event.waitUntil(enviarDatos());
   }
});

function enviarDatos(){
    notifeMe();
}

function notifeMe(){

   Notification.requestPermission((result) => {
    if(result === 'granted'){
       navigator.serviceWorker.ready.then((reg) => {
          reg.showNotification('informe enviado!!!!!');
       });
    }
 })
 
}