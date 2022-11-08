// FB.api(
//     '/17841402192796718/media',
//     'GET',
//     {"fields":"like_count,caption,media_url,thumbnail_url,media_type,permalink"},
//     function(response) {
//         console.log(response)
//     }
//   );

  const data =  [
    {
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/313380722_1191329921593807_3851956128781136859_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=g2Mng3Qnf78AX-cRez8&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfCX8sO1nTkJL4dlxC6kmYRHrgKyTyWQX1Es8bNLpfDJMg&oe=636C24F9",
      "media_type": "VIDEO",
      "permalink": "https://www.instagram.com/reel/CkRduU2Auw5/",
      "id": "17943700631223293"
    },
    {
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/312360525_482627330591454_1054498087719249455_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=fV4AOrOnZ-EAX8ia1RT&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfCKyR3F0GvKJUIN7TF3_dulBmptxcQJLBheMe_Mz4MLCg&oe=636D5034",
      "media_type": "VIDEO",
      "permalink": "https://www.instagram.com/reel/Cj_02K0ACdS/",
      "id": "17941784264512863"
    },
    {
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/312005449_645859827230856_3902021506787955708_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=PKSeWZiOCqIAX_52C4f&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfBgOE3y94Ciiw0xnxs2l4MEGsUpXCSul_rYZyOorW9IAA&oe=636CA95A",
      "media_type": "VIDEO",
      "permalink": "https://www.instagram.com/reel/Cj6mKzEArth/",
      "id": "17940058043278269"
    },
    {
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/311520938_1007246164008192_1942178637848437072_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=rROQRlCCG_0AX90PdkQ&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfCUHrxxMZf4acXgdenmBMGwteZSmqbFC-bex9NgRoluMA&oe=636C33EB",
      "media_type": "VIDEO",
      "permalink": "https://www.instagram.com/reel/CjlymKeAJdU/",
      "id": "18236734297180140"
    },
    {
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/304842920_1081220385836527_5079397348940399421_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=AnKjf5N3U_4AX-5S1nW&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfDP1M5dTI5lQ3E6JyD-7LACh5Sazrn-4CEqN68pZLY8qQ&oe=636C4059",
      "media_type": "VIDEO",
      "permalink": "https://www.instagram.com/reel/Ch67HaSgYEx/",
      "id": "17963478133894623"
    },
    {
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/299934837_715642729685432_555967997970521133_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=7LzxA8NcjQoAX-fKe7u&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfB4JUtuYEmtFS4v0Y5XgkqTw4Do3_vLpXE_QmbMu6x-Ag&oe=636D557F",
      "media_type": "VIDEO",
      "permalink": "https://www.instagram.com/reel/ChdI142gm6T/",
      "id": "18312479527014077"
    },
    {
      "media_type": "CAROUSEL_ALBUM",
      "permalink": "https://www.instagram.com/p/ChVPP1LPsm2/",
      "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/299815977_2205040472979000_3896568392374373536_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=x66IacVkXucAX-HMhpp&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfA0-EC5Gsfmib-NkBgv5hBObh_0uTCTeogOzVVxsoTKBg&oe=636CB111",
      "id": "17960670502789875"
    },
    {
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/298248582_427000646116505_1160642318917737556_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=DmeMeFc8LZgAX9BIVxW&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfDbBO375qBqjLz6c_xBcCem1XR0mRigX6ypoHG-ttpAKQ&oe=636CB01F",
      "media_type": "VIDEO",
      "permalink": "https://www.instagram.com/reel/ChDvwDcgEWY/",
      "id": "17950382366037729"
    }
  ]




function showPost(permalink) {

    const igframe = document.querySelector('.data-instgrm-permalink')
    
    igframe.setAttribute('data-instgrm-permalink', permalink)
    console.log(igframe)
    igframe.setAttribute('class', '')
    
    // cambio.setAttribute('href',permalink)
    // cambio1.setAttribute('href',permalink)
    // console.log(cambio)
    // console.log(igframe)
    
    console.log('Showpost')
    
}
function loadImagesFromIg(data) {
    const parent = document.querySelector('.galeria-port');

    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        console.log(element)
        
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

        console.log(div)
        console.log(parent)

        const div1 = document.createElement('div')
        div1.setAttribute('class', 'hover-galeria')
        
        const img1 = document.createElement('img')
        img1.setAttribute('src', './imagenes/lupa.png')
        div1.appendChild(img1)

        const para = document.createElement("p");
        const node = document.createTextNode("Nuestros Trabajos");
        para.appendChild(node);

        div1.appendChild(para)


        div.addEventListener("click", () => showPost(element.permalink));

        div.appendChild(div1)
        parent.appendChild(div)
    
       
    }
  }


loadImagesFromIg(data)