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
	                    $("#photos").append('<img src="' + photo + '">');
	                 	 // $("#photos").append('<img src="' + strippedUrl + '/5.' + suffix + '">');
                    };

                    var width = $('.content-background').css("width");
                    width = width.substring(0, width.length-2);
                    var height = $('.content-background').css("height");
                    height = height.substring(0, height.length-2); 
                    var picsInRow = width / 140;
                    var newHeight = photos.length / picsInRow * 170;
                    newHeight = newHeight < height ? height : newHeight;

                    $('.content-background').animate({ height : newHeight }, 500);
   				 });
           });
