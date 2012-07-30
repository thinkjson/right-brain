var delayPerPhoto = 10;

function jsonFlickrApi(data) {
    var photos = data.photos.photo;
    photos.sort(function() {return 0.5 - Math.random()});
    for (var i = 0; i < photos.length; i++) {
        var photo = photos[i];
        var url = "http://farm"+photo.farm+".staticflickr.com/"+photo.server+
            "/"+photo.id+"_"+photo.secret+"_b.jpg";
        var delay = i * delayPerPhoto;
        var $el = $("<li><span>Image 01</span><div><h3></h3></div></li>").appendTo($(".cb-slideshow"))
            .find("span").css({ "background-image": "url('"+url+"')" });
        if (i != 0) {
            $el.css({
                "-webkit-animation-delay": delay + "s",
                "-moz-animation-delay": delay + "s",
                "-o-animation-delay": delay + "s",
                "-ms-animation-delay": delay + "s",
                "animation-delay": delay + "s"
            });
        }
    }
}

$(document).ready(function() {
    $.getScript("http://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=a26f5c4f6af0b638313633142821e3eb&format=json&per_page=500");
}); 