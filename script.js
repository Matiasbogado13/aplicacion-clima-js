let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = '8daced3652e50b9efad1d616e1bb90e8'
let   difKelvin = '273.15'



 
 document.getElementById('botonBusqueda').addEventListener('click', () => {
  const ciudad = document.getElementById('ciudadEntrada').value
  if(ciudad){
    fetchDatosClima(ciudad)
  }
})

  function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(data  => data.json())
    .then(data => mostrarDatosClima(data))
 }
function mostrarDatosClima(data){
    
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML=''

    const ciudadNombre = data.name
    const paisNombre = data.sys.country
    const temperatura = data.main.temp
    const humedad = data.main.humidity
    const descripcion = data.weather[0].description 
    const icono = data.weather[0].icon


    const ciudaditulo = document.createElement('h2')
    ciudaditulo.textContent = `${ciudadNombre}, ${paisNombre}`

    const temperaturaInfo = document.createElement ('p')
    temperaturaInfo.textContent = `la temperatura es: ${Math.floor(temperatura-difKelvin)}°C`
    
    const humedadInfo = document.createElement ('p')
    humedadInfo.textContent = `la humedad  es: ${humedad}%`

    const iconoInfo = document.createElement('img')
    iconoInfo.src= `https://openweathermap.org/img/wn/${icono}@2x.png`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent =`la descripcion meteorologica es ${descripcion}`  

    divDatosClima.appendChild(ciudaditulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(descripcionInfo)

  
  }
       
 