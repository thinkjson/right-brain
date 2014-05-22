var delayPerPhoto = 10;
var link = '#';
var currentPhoto = 0;
var photos;

function jsonFlickrApi(data) {
    data.photos.photo.sort(function() {return 0.5 - Math.random()});
    photos = data.photos.photo.splice(0, 40);
    for (var i = 0; i < photos.length; i++) {
        var photo = photos[i];
        var url = "https://farm"+photo.farm+".staticflickr.com/"+photo.server+
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

    // Change link as background changes
    var updateLink = function() {
        link = "http://www.flickr.com/photos/" + photos[currentPhoto].owner + "/" + photos[currentPhoto].id;
        currentPhoto++;
    };
    updateLink();
    setInterval(updateLink, delayPerPhoto * 1000);
}

$(document).ready(function() {
    $.getScript("https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=a26f5c4f6af0b638313633142821e3eb&format=json&per_page=500");

$('.fullscreen').click(function(event) {
    if (screenfull.enabled) {
        screenfull.request();
    }
    event.preventDefault();
    return false;
});

    $('body').click(function() {
        location.href = link;
    });
}); 