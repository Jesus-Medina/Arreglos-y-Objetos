const propiedadesJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170
    },

    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130
    },

    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80
    },

    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6
    },

    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200
    },

    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 5,
      m: 500
    }
  ];

const departamentos = document.querySelector(".propiedades");
const botonFiltro = document.querySelector("#botonFiltro");
const roomsFiltro = document.querySelector("#roomsFiltro");
const metrosMinFiltro = document.querySelector("#metrosMinFiltro");
const metrosMaxFiltro = document.querySelector("#metrosMaxFiltro");
const totalDeBusqueda = document.querySelector("#totalDeBusqueda");
let contador = 0;
let html = "";

const funcionTemplate = (propiedad) => {
  html += `<div class="propiedad">
                  <div class="img" style="background-image: url(${propiedad.src})"></div>
                  <section>
                      <h5>${propiedad.name}</h5>
                      <div class="d-flex justify-content-between">
                          <p>Cuartos: ${propiedad.rooms}</p>
                          <p>Metros: ${propiedad.m}</p>
                      </div>
                      <p class="my-3">${propiedad.description}</p>
                      <button class="btn btn-info ">Ver más</button>
                  </section>
            </div>`;
};

window.onload = () => {
  for(let propiedad of propiedadesJSON){
    funcionTemplate(propiedad);
    totalDeBusqueda.innerHTML = `Total: ${propiedadesJSON.length}`;
    departamentos.innerHTML = html;
  }
};


botonFiltro.addEventListener("click", () => {
  if((roomsFiltro.value < 0 || metrosMinFiltro.value < 0 || metrosMaxFiltro.value < 0) || (roomsFiltro.value == "" || metrosMinFiltro.value == "" || metrosMaxFiltro.value == "")){
    if((roomsFiltro.value == "" || metrosMinFiltro.value == "" || metrosMaxFiltro.value == "") && (roomsFiltro.value > 0 && metrosMinFiltro.value > 0 && metrosMaxFiltro.value > 0)){
      alert("Rellenelo mijo");
    }
    else if((roomsFiltro.value < 0 || metrosMinFiltro.value < 0 || metrosMaxFiltro.value < 0) && (roomsFiltro.value == "" || metrosMinFiltro.value == "" || metrosMaxFiltro.value == "")) {
      alert("solo valores positivos y rellene todos los campos por favor");
    }
    else if((roomsFiltro.value < 0 || metrosMinFiltro.value < 0 || metrosMaxFiltro.value < 0) && (roomsFiltro.value != "" || metrosMinFiltro.value != "" || metrosMaxFiltro.value != "")) {
      alert("solo valores positivos por favor");
    }
    else {
      alert("rellene todos los campos por favor");
    }
  }
  else {
    html = "";
    contador = contador-contador;
    for(let propiedad of propiedadesJSON) {
      if(propiedad.rooms >= roomsFiltro.value && propiedad.m >= metrosMinFiltro.value && propiedad.m <= metrosMaxFiltro.value){
      contador++;
      funcionTemplate(propiedad);
      };
    };
  };
  totalDeBusqueda.innerHTML = `Total: ${contador}`;
  departamentos.innerHTML = html;
})




