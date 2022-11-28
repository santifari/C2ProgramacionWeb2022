// let access_token = "EAAJSi5yztHwBALxyITKdIlVmQPhjKlojA1FOIZBH1OJAKendA25Dv5Us8JAFqK2ltyZAVPn1dg53kYQW7cxyyjp1uUgIVFYCPfafe6icLSYZBOxbp5WekYNQtwjygjrFFnmHg09TjDfwExBDwJDeeQcS6f2719xEMWqPYapaJKzOtZADePp8569QzEqgD7dnQOFg7II0HAZDZD"
// window.addEventListener('load', () => {
// FB.api(
//     '/17841402192796718/media',
//     'GET',
//     {
//       "fields":"like_count,caption,media_url,thumbnail_url,media_type,permalink", 
//       "access_token": access_token,
//       "limit":"8"
//     },
//       function(response) {
//         console.log(response)
//         loadImagesFromIg(response.data)
//     }
//   )});



// IMPORTANTE
///// ACLARACION LA API FUNCIONA PERFECTO PERO TENGO UN PROBLEMA EL CUAL EL TOKEN DE ACCESO SE VENCE A LOS 30
///// 30 MINUTOS POR LO TANTO CREER UN OBJETO PARA QUE SE PUEDA VER
///// PARA TENER UN TOKEN DE LARGA DURACION TENIA QUE PEDIRLE A META UN REVISION QUE 
///// LLEVABA COMO MINIMO 30 DIAS POR LO TANTO LO HICE DE ESTA MANERA
///// PERO CABE ACLARAR QUE TUVE INTENCION DE UTILIZARLO Y POR ESO LO REALIZE GRAN PARTE CON JS

  const data =  [
    {
      "thumbnail_url": "./imagenes/im/foto1.jpeg",
      "permalink": "https://www.instagram.com/reel/ClJsZQdAF83/",
      "caption": "OTRO LOOK Esta mesa llegó como la ves en el primer video, con lustre caramelo brillante, característico de un estilo más formal. Tenia algunas manchas y marcas. La premisa fue darle un look más actual al estilo de los muebles de #restorationhardware . Por eso pasó por varios procesos para sacarle la laca, luego arenarla, lijarla, teñirla, lijarla y protegerla. El resultado está a la vista, en el reel hay fotos del antes y el después intercaladas.Otro trabajo que tiene todo mi ❤️y compromiso.Te gusto el cambio? Gracias Adriana por confiar en mi trabajo. #recicladorademuebles #lauritaford" 
    },
    {
      "thumbnail_url": "./imagenes/im/foto2.jpeg",
      "permalink": "https://www.instagram.com/reel/ClBPC39g_np/",
      "caption": "Partes del proces Ya hice el posteo de este trabajo, pero no publiqué algunas fotos, necesito borrar fotos del teléfono, y me gusta guardar los registros, ya que ni yo recuerdo en el estado original que llegan los muebles. Esto es parte el proceso que lleva cada uno para llegar a su transformación. Mi trabajo es comprometido y dedicado.#lauritaford #recicladorademuebles",
      "id": "18326358220055807"
    },
    {
      "media_url": "./imagenes/im/foto3.jpeg",
      "permalink": "https://www.instagram.com/p/Ck3JCU1rP9N/",
      "caption": "PINTADAS Así quedaron la comoda y mesas de luz de Clara. La idea original fue lavarlas pero el enchapado es finito y estaba estropeado en algunos lugares. Por eso fuimos por la opción de pintarlas.Primero las lije bien para sacar toda la laca estropeada y cuarteada. Después le di 3 manos de pintura color tostado ( arranque con preparado, y decidimos subir un poco el tono para despegar de las paredes) .Decape apenas, para dar un poco de onda, y para marcar que son muebles que tienen su historia. Limpie bien los herrajes y volví a colocar.Nueva vida para ellos! Te gusta el resultado? Gracias @claracullen_algopersonal por confiar en mi. #segundaoportunidad #mueblesreciclados #mueblesconhistoria #lauritaford",
      "id": "18202979170200648"
    },
    {
      "thumbnail_url": "./imagenes/im/foto4.jpeg",
      "permalink": "https://www.instagram.com/reel/CkzO8lGgCBy/",
      "caption": "CUERPO DORADO Debia el posteo del chaise longue de Sofía. Creo que le quedó genial al reel  mi canción favorita interpretada por Gal Costa ❤️ que ayer se mudó a cantar arriba. ❤️En el video lo ves cómo se fue y cómo llegó.Se fue con su cuerpo dorado y lleno de gracia al tapicero.Gracias Sofía por confiar en mi.#mueblesheredados #segundaoportunidad #maderalavada #recicladorademuebles #lauritaford",
      "id": "17981545609704793"
    },
    {
      "thumbnail_url": "./imagenes/im/foto5.jpeg",
      "permalink": "https://www.instagram.com/reel/CkRduU2Auw5/",
      "caption": "NUEVA VIDAPara este súper escritorio antiguo de ROBLE.Mira el video y vas a ver cómo estaba, y cómo se fue. Quedó increíble con su madera lavada y sellada con cera incolora, que deja que la madera respire y le da perfume, suavidad y ese  brillo satinado tan lindo Como siempre tiene todo mi ❤️ y compromiso. Gracias Sofía por confiar en mi. #escritorio #escritorioantiguoderoble #maderalavada#recicladorademuebles #mueblesheredados #trabajoconamor #lauritaford",
      "id": "17943700631223293"
    },
    {
      "thumbnail_url": "./imagenes/im/foto6.jpeg",
      "permalink": "https://www.instagram.com/reel/Cj_02K0ACdS/",
      "caption": "PRIMAVERA. Te ❤️Hoy!Que maravilla la naturaleza! 🙌🏻#primavera",
      "id": "17941784264512863"
    },
    {
      "thumbnail_url": "./imagenes/im/foto7.jpeg",
      "permalink": "https://www.instagram.com/reel/Cj6mKzEArth/",
      "caption": "LAS WINDSOR QUE FALTABAN Una es compañera de las últimas 9 que hice, y la otra viene de otra familia, pero ahora forman parte de la misma. quedaron idénticas, están lavadas entintadas y protegidas.El el video las podes ver como llegaron  y sin tinte. Como la madera es muy blanca les di color ( color roble lavado) con un blend casero y personal y quedaron geniales.  Te gustan?  A su dueña le encantaron ! Gracias Silvina por confiar en mi trabajo. Como siempre tienen todo mi ❤️ y compromiso. #maderalavada #sillaswindsor #lauritaford #mueblesheredados #mueblesantiguos #mueblesconhistoria",
      "id": "17940058043278269"
    },
    {
      "thumbnail_url": "./imagenes/im/foto8.jpeg",
      "permalink": "https://www.instagram.com/reel/CjlymKeAJdU/",
      "caption": "RENOVADO Me encantan los baúles, es un mueble de caja, significa que fue diseñado para guardar objetos, generalmente ropa. Es uno de los muebles mas antiguos, los usaban en las caravanas y las cruzadas para trasladar objetos y también podían usar su tapa como mesa.En los que tengo en casa guardo, ropa fuera de temporada, y adornos navideños en otro. Me perece muy útil guardar mantas de sillón y almohadones. Este es de Carmen, y es de cedro. Así se fue, libre de tinte y barniz, con la madera al natural. No te encanta cómo quedo? #maderalavada #baúl ##baulmadera #recicladorademuebles",
      "id": "18236734297180140"
    }
  ]


function createpopup(data) {
    const container = document.createElement('div')
    const content = document.createElement('div')
    const close = document.createElement('div')

    const x = document.createTextNode('X')
    close.appendChild(x)
    close.classList.add('popup-close')
    close.addEventListener('click', () => hiddenRoot.classList.add('hidden'))



    const imgg = document.createElement('img')
    
  if( data.thumbnail_url == undefined){
      imgg.setAttribute('src',data.media_url)
  }
  else{
      imgg.setAttribute('src', data.thumbnail_url)
  }
    const p = document.createElement('p')
    const node = document.createTextNode(data.caption);
    p.appendChild(node)

    content.appendChild(imgg)
    content.appendChild(p)
    content.classList.add('popup-content')

    container.classList.add('popup-container')
    content.appendChild(close)
    container.appendChild(content)

    const abrirenig = document.createElement('a')
    abrirenig.setAttribute('class','abrir-ig')
    abrirenig.setAttribute('target','_blank')
    abrirenig.setAttribute('href',data.permalink)
    texto12 = document.createTextNode('Abrir en Instagram')
    abrirenig.appendChild(texto12)
    
    content.appendChild(abrirenig)

    const hiddenRoot = document.createElement('div')
    hiddenRoot.setAttribute('class', 'hidden')
    hiddenRoot.appendChild(container)
    document.body.appendChild(hiddenRoot)

    
    return hiddenRoot
}
function loadImagesFromIg(data) {
    const parent = document.querySelector('.galeria-port');

    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        
        const div = document.createElement('div')
        div.setAttribute('class', 'imagen-port')


        const img = document.createElement('img')
        img.setAttribute('class', 'imagen-port')
        if( element.thumbnail_url == undefined){
            img.setAttribute('src',element.media_url)
        }
        else{
            img.setAttribute('src', element.thumbnail_url)
        }
        

        div.appendChild(img)

        const div1 = document.createElement('div')
        div1.setAttribute('class', 'hover-galeria')
        
        const img1 = document.createElement('img')
        img1.setAttribute('src', './imagenes/lupa.png')
        div1.appendChild(img1)

        const para = document.createElement("p");
        const node = document.createTextNode("Nuestros Trabajos");
        para.appendChild(node);

        div1.appendChild(para)

        const popup = createpopup(element)
        div.addEventListener("click", () =>  {
          console.log({popup})
          console.log("Cliecked on element")
          console.log({element})
        popup.setAttribute('class','')

    });
        // div1.appendChild(popup)
        div.appendChild(div1)
        parent.appendChild(div)
    
       
    }
  }


loadImagesFromIg(data)

