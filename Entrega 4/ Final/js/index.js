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
      "media_type": "CAROUSEL_ALBUM",
      "permalink": "https://www.instagram.com/p/Ck3JCU1rP9N/",
      "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/314994856_650778366519865_2229110528210991741_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=TSxtvdkNDzYAX9ime4F&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfAoka9HkPaWubbE2YG8IyD2T9QOJr-ZdrcXbeKDMbDfhw&oe=6376213E",
      "id": "18202979170200648"
    },
    {
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/314626519_671878844576925_4271427268582473550_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=XPbiAN5aa3kAX9gFWOf&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfBUFYA8PzjIhaIagXSYSkRgtccGbY3KAtjyfKeTahdL7g&oe=6375C444",
      "media_type": "VIDEO",
      "permalink": "https://www.instagram.com/reel/CkzO8lGgCBy/",
      "id": "17981545609704793"
    },
    {
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/313380722_1191329921593807_3851956128781136859_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=U-xIamxLIMcAX8_6OQX&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfCaivMQfd073ubxOYtGZbgsLukX21073oDrlojCqeJYsQ&oe=63760839",
      "media_type": "VIDEO",
      "permalink": "https://www.instagram.com/reel/CkRduU2Auw5/",
      "id": "17943700631223293"
    },
    {
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/312360525_482627330591454_1054498087719249455_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=JP6pJ0jpWWEAX-I9u7m&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfCjkLz9QuOq9sNlzNrjPAWChGcBTSjo5wKwmXAPfgpgEg&oe=63753934",
      "media_type": "VIDEO",
      "permalink": "https://www.instagram.com/reel/Cj_02K0ACdS/",
      "id": "17941784264512863"
    },
    {
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/312005449_645859827230856_3902021506787955708_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=swGx_Vi6CCsAX_I0DvD&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfAwl5T7-mIJtUx1uGxIUoUhI9AAGQlu14tPLS4miFtjRg&oe=63768C9A",
      "media_type": "VIDEO",
      "permalink": "https://www.instagram.com/reel/Cj6mKzEArth/",
      "id": "17940058043278269"
    },
    {
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/311520938_1007246164008192_1942178637848437072_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=dzngCaf6LJAAX8pwFCT&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfD0rpsbllQrDr5vOpd4ccjYkt3uL4UoGrnwGTXjuPkBHQ&oe=6376172B",
      "media_type": "VIDEO",
      "permalink": "https://www.instagram.com/reel/CjlymKeAJdU/",
      "id": "18236734297180140"
    },
    {
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/304842920_1081220385836527_5079397348940399421_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=vLHC23bAU3EAX_Oc-bC&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfDZIIcObreUJ0QIgnBtggBYjzu-Py7HPGnsNy7H6lfYcQ&oe=63762399",
      "media_type": "VIDEO",
      "permalink": "https://www.instagram.com/reel/Ch67HaSgYEx/",
      "id": "17963478133894623"
    },
    {
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/299934837_715642729685432_555967997970521133_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=2GvJyv41tlcAX-xXv9I&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfAomPm00AIiPtDC106jf2B97cUp092xBHuds4aFPaxASw&oe=63753E7F",
      "media_type": "VIDEO",
      "permalink": "https://www.instagram.com/reel/ChdI142gm6T/",
      "id": "18312479527014077"
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