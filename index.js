


document.getElementById('shareButton').addEventListener('click', function() {
  if (navigator.share) {
    navigator.share({
      title: 'Título de la página',
      url: window.location.href
    })
    .then(() => console.log('Enlace compartido correctamente.'))
    .catch((error) => console.error('Error al compartir el enlace:', error));
  } else {
    console.log('La funcionalidad de compartir no está soportada en este navegador.');
  }
});


            function updateStates() {
              var citySelect = document.getElementById("cities");
              var stateSelect = document.getElementById("states");
              stateSelect.innerHTML = "";
            
              var city = citySelect.value;
              var states;
            
              
              if (city === "León") {
                states = ["Guanajuato"];
              } 
              
              states.forEach(function(state) {
                var option = document.createElement("option");
                option.text = state;
                option.value = state.toLowerCase().replace(/\s+/g, '_');
                stateSelect.add(option);
              });
            }
            
            function registrarEstado() {
              var stateSelect = document.getElementById("states");
              var selectedState = stateSelect.value;
              var mensaje = "Se ha registrado su estado como " + selectedState;
              document.getElementById("mensaje").textContent = mensaje;
            }
         
