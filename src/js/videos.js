
const videos = [
  {
    id: "PyMlV5_HRWk"
  },
  {
    id: "XCbMVbeKlCg"
  },
  {
    id: "Fmdb-KmlzD8"
  },
  {
    id: "lOthvD1rMbQ"
  },
  {
    id: "nXDk86lQhto"
  },
  { 
    id: "32ISq47zUB0"
  },
  {
    id: "GhTMIyhxJJc"
  },
  {
    id: "Rh_NXwqFvHc"
  },
  {
    id: "Fmdb-KmlzD8"
  }
]

const sliderContainer = document.querySelector("#slider");
const currentContainer = document.querySelector("#current");
const videosContainer = document.querySelector("#videos-container");
const bNext = document.querySelector("#next");
const bPrev = document.querySelector("#prev");
let current = 0;

bNext.addEventListener("click", (e) => {
  current  == videos.length - 1 ? current = 0 : current += 1;
  console.log(current)
  renderCurrentVideo(videos[current].id)
})

bPrev.addEventListener("click", (e) => {
  current == 0 ? current = videos.length -1 : current -= 1;
  console.log(current)
  renderCurrentVideo(videos[current].id)
});



renderCurrentVideo(videos[current].id)
renderVideos();

function renderCurrentVideo(id) {
  currentContainer.innerHTML = `<iframe width="100%" height="50%" src="https://www.youtube.com/embed/${id}" title="Halo Trailers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
}

function renderVideos() {
  //map crea una copia de array y no altera el original
  const html = videos.map((video,index) => {

    return `
    <div class="item">
      <a href="#" data-id="${index}">
        <img src="https://i3.ytimg.com/vi/${video.id}/mqdefault.jpg"/>
      </a>
    </div>

    `;

  })

  //En el código proporcionado, html es un array que contiene cadenas de texto correspondientes a las representaciones HTML de los videos. El método join("") se aplica a ese array para concatenar todas esas cadenas en una única cadena de texto.
  videosContainer.innerHTML = html.join("")


  document.querySelectorAll(".item a").forEach(item => {
    item.addEventListener("click",(e) => {
      e.preventDefault();
      //La razón de usar el operador + antes del atributo data-id es convertir su valor de tipo cadena (string) a tipo número (number). En JavaScript, el operador + aplicado a una cadena intenta convertirla a un número.
      const id = +item.getAttribute('data-id');
      current = id;
      renderCurrentVideo(videos[current].id)
    })
  })
}