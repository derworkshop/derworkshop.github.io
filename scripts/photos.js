var photos = [];

var displayPhotos = function(){
  if (photos.length == 0){
    getPhotos();
  } else {
    for (var i = 0; i < photos.length; i++){
      appendPhoto(photo);
    };
  }
}

var displayPhoto = function(url, id){
  console.log('displayPhoto(' + url +')');
  $('#photos').css('display', 'none');
  $('#photo').css('display', 'block');

  $('#big-photo').attr('src', url);
  $('#big-photo-link').attr('href', 'http://500px.com/photo/' + id);
   
}

var appendPhoto = function(photo){
      $("#photos").append('<a href="#"><div onclick=displayPhoto("' + photo.strippedUrl + '/5.' + photo.suffix + '","' + photo.id + '") class="photo"><img src="' + photo.url + '"></div></a>');
}

var getPhotos = function() {
  $(document).ready(function () {
    _500px.init({
      sdk_key: window.derworkshop.config.photoService.sdkKey
    });

    _500px.api('/photos', 'get', { feature: 'user', username : 'poupik'}, function (response) {
      var photoList = response.data.photos;
      console.log(response);
      for (var i = 0; i < photoList.length; i++){
        var url = photoList[i].image_url;
        var match = url.match(/(\S*)\/\d*.(\w*)$/);
        var suffix = match[2];
        var strippedUrl = match[1];
        var id = photoList[i].id;
        var photo = {
          id : id,
          url : url,
          strippedUrl : strippedUrl,
          suffix : suffix
        };

        appendPhoto(photo);
        photos.push(photo);
      };
    });

  });
}