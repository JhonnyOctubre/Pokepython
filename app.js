function validar() {
  var nombre=document.getElementById("nombre");
  var edad=document.getElementById("edad");
  var mail=document.getElementById("mail");
  
  if (nombre.value==="" || edad.value==="" || mail.value==="" ) {
      alert("Entrenador, te faltan datos!");
      return false;
  }

  for (var j = 0; j < nombre.value.length; j++) {
      var char = nombre.value.charAt(j);
      if (char >= "0" && char <= "9") {
        alert("Entrenador, el nombre no tiene numeros.");
        return false;
      }
  }

  for (var j = 0; j < apellido.value.length; j++) {
      var char = apellido.value.charAt(j);
      if (char >= "0" && char <= "9") {
        alert("Entrenador, el nombre no tiene numeros.");
        return false;
      }
  }

  alert("Formulario enviado correctamente. Gracias por su consulta.")
  return true;

}


const $form = document.querySelector('#form');

$form.addEventListener('submit', handleSubmit);

async function handleSubmit(event){
event.preventDefault();
const form = new FormData(this);
const response = await fetch(this.action, {
method: this.method,
body: form,
headers: {
'Accept': 'application/json'
}
});
if(response.ok){
this.reset();
alert('¡Todo bien!');
}
}
