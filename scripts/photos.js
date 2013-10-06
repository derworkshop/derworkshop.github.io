$(document).ready(function () {
              _500px.init({
                sdk_key: window.derworkshop.config.photoService.sdkKey
              });

               _500px.api('/photos', 'get', { feature: 'user', username : 'poupik'}, function (response) {
                    console.log(response);
                    var photos = response.data.photos;
                    for (var i = 0; i < photos.length; i++){
                    	var photo = photos[i].image_url;
                    	var match = photo.match(/(\S*)\/\d*.(\w*)$/);
                    	var suffix = match[2];
                    	var strippedUrl = match[1];
	                    $("#photos").append('<div class="photo"><img src="' + photo + '"></div>');
	                 	 // $("#photos").append('<img src="' + strippedUrl + '/5.' + suffix + '">');
                    };
   				 });
           });
