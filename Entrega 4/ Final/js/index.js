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
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/316326054_1774968492873789_8753426878395367850_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=kYsABIiqXdYAX8LdKcS&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfD9xGT-FFRmg1RXtuJ2C44NMk5-jySGDfr8r8MXtWqrcw&oe=6381866C",
      "permalink": "https://www.instagram.com/reel/ClJsZQdAF83/",
      "caption": "OTRO LOOK Esta mesa llegó como la ves en el primer video, con lustre caramelo brillante, característico de un estilo más formal. Tenia algunas manchas y marcas. La premisa fue darle un look más actual al estilo de los muebles de #restorationhardware . Por eso pasó por varios procesos para sacarle la laca, luego arenarla, lijarla, teñirla, lijarla y protegerla. El resultado está a la vista, en el reel hay fotos del antes y el después intercaladas.Otro trabajo que tiene todo mi ❤️y compromiso.Te gusto el cambio? Gracias Adriana por confiar en mi trabajo. #recicladorademuebles #lauritaford" 
    },
    {
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/315562139_490098819851145_6853803790856247459_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=rPqFaYyYmokAX_htiAm&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfDM77Vsqx-6_ZrUNXgeBlNnngw5vNxolukvKgno9x6y7Q&oe=6381F98E",
      "permalink": "https://www.instagram.com/reel/ClBPC39g_np/",
      "caption": "Partes del proces Ya hice el posteo de este trabajo, pero no publiqué algunas fotos, necesito borrar fotos del teléfono, y me gusta guardar los registros, ya que ni yo recuerdo en el estado original que llegan los muebles. Esto es parte el proceso que lleva cada uno para llegar a su transformación. Mi trabajo es comprometido y dedicado.#lauritaford #recicladorademuebles",
      "id": "18326358220055807"
    },
    {
      "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/314994856_650778366519865_2229110528210991741_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=vIjDEciwfasAX_LAo06&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfD9y1y_zMaHxNuuETGZCmTrihCrO6E0s0ul07CQDKXklg&oe=6381FEBE",
      "permalink": "https://www.instagram.com/p/Ck3JCU1rP9N/",
      "caption": "PINTADAS Así quedaron la comoda y mesas de luz de Clara. La idea original fue lavarlas pero el enchapado es finito y estaba estropeado en algunos lugares. Por eso fuimos por la opción de pintarlas.Primero las lije bien para sacar toda la laca estropeada y cuarteada. Después le di 3 manos de pintura color tostado ( arranque con preparado, y decidimos subir un poco el tono para despegar de las paredes) .Decape apenas, para dar un poco de onda, y para marcar que son muebles que tienen su historia. Limpie bien los herrajes y volví a colocar.Nueva vida para ellos! Te gusta el resultado? Gracias @claracullen_algopersonal por confiar en mi. #segundaoportunidad #mueblesreciclados #mueblesconhistoria #lauritaford",
      "id": "18202979170200648"
    },
    {
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/314626519_671878844576925_4271427268582473550_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=kjYKgB-S0LMAX9e-vPM&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfBO4EHtfkwjAl_ZixSLHmWAI-rJGgO_TPij8OUJSDKvoA&oe=6381A1C4",
      "permalink": "https://www.instagram.com/reel/CkzO8lGgCBy/",
      "caption": "CUERPO DORADO Debia el posteo del chaise longue de Sofía. Creo que le quedó genial al reel  mi canción favorita interpretada por Gal Costa ❤️ que ayer se mudó a cantar arriba. ❤️En el video lo ves cómo se fue y cómo llegó.Se fue con su cuerpo dorado y lleno de gracia al tapicero.Gracias Sofía por confiar en mi.#mueblesheredados #segundaoportunidad #maderalavada #recicladorademuebles #lauritaford",
      "id": "17981545609704793"
    },
    {
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/313380722_1191329921593807_3851956128781136859_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=43khAl56xn0AX89n3zj&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfBIATtcJsPIj9I6LKuEXwmDZnaaGW2ezoHPte4y3X-oBw&oe=6381E5B9",
      "permalink": "https://www.instagram.com/reel/CkRduU2Auw5/",
      "caption": "NUEVA VIDAPara este súper escritorio antiguo de ROBLE.Mira el video y vas a ver cómo estaba, y cómo se fue. Quedó increíble con su madera lavada y sellada con cera incolora, que deja que la madera respire y le da perfume, suavidad y ese  brillo satinado tan lindo Como siempre tiene todo mi ❤️ y compromiso. Gracias Sofía por confiar en mi. #escritorio #escritorioantiguoderoble #maderalavada#recicladorademuebles #mueblesheredados #trabajoconamor #lauritaford",
      "id": "17943700631223293"
    },
    {
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/312360525_482627330591454_1054498087719249455_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=P8FKXaHgdQcAX-NotpW&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfCwf-rXCE0lhmuwLlwgWDp1EnTykDyUGFU1tNW4XqhB8w&oe=638116B4",
      "permalink": "https://www.instagram.com/reel/Cj_02K0ACdS/",
      "caption": "PRIMAVERA. Te ❤️Hoy!Que maravilla la naturaleza! 🙌🏻#primavera",
      "id": "17941784264512863"
    },
    {
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/312005449_645859827230856_3902021506787955708_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=kF2c7h9QVdcAX-_uFbP&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfBjafdywmuLzaaQBEDpo6gkv4BeKacDKgako8vbAtqLLg&oe=63826A1A",
      "permalink": "https://www.instagram.com/reel/Cj6mKzEArth/",
      "caption": "LAS WINDSOR QUE FALTABAN Una es compañera de las últimas 9 que hice, y la otra viene de otra familia, pero ahora forman parte de la misma. quedaron idénticas, están lavadas entintadas y protegidas.El el video las podes ver como llegaron  y sin tinte. Como la madera es muy blanca les di color ( color roble lavado) con un blend casero y personal y quedaron geniales.  Te gustan?  A su dueña le encantaron ! Gracias Silvina por confiar en mi trabajo. Como siempre tienen todo mi ❤️ y compromiso. #maderalavada #sillaswindsor #lauritaford #mueblesheredados #mueblesantiguos #mueblesconhistoria",
      "id": "17940058043278269"
    },
    {
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/311520938_1007246164008192_1942178637848437072_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=uzQaFtaDy60AX_hjZEZ&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfCDhEx28goDFPJg4yKvvxOZy3AppYDpVKTT0auOBStSLw&oe=6381F4AB",
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

