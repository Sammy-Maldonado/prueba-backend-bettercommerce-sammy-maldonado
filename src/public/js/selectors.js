/* Obtencion de recursos del servidor para renderizar en regions.handlebars */
function regionSelected(value) {
  const response = fetch(`/api/communes/${value}`, { //obtención de las comunas por su region_id
    method: 'GET',
    body: JSON.stringify(),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.json())
    .then(data => {
      //seleccionando el 2do selector para integrar la data
      const communeSelector = document.getElementById('communeSelector');
      communeSelector.innerHTML = '';

      //creando elementos "option" dentro del selector para integrar cada uno de los datos
      data.payload.forEach(element => {
        const option = document.createElement('option');
        option.value = element.id;
        option.textContent = element.commune;
        communeSelector.appendChild(option);
      })
    })
}