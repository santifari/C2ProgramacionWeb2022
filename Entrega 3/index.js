FB.api(
    '/17841402192796718/media',
    'GET',
    {"fields":"like_count,caption,media_url,thumbnail_url,media_type,permalink"},
    function(response) {
        console.log(response)
    }
  );