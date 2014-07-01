function jsonFlickrApi(data) {
    var photo_objects = [];
    for (var i = 0; i < data.photos.photo.length; i++) {
        var photo = data.photos.photo[i];

        photo_objects.push({
            image : "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_b.jpg",
            title : photo.title,
            thumb : "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_t.jpg",
            url : "http://www.flickr.com/photos/" + photo.owner + "/" + photo.id
        });
    }

    startShow(photo_objects);
}

function startShow(photos) {
    $.supersized({
        // Functionality
        slideshow               :   1,          // Slideshow on/off
        autoplay                :   1,          // Slideshow starts playing automatically
        start_slide             :   1,          // Start slide (0 is random)
        stop_loop               :   0,          // Pauses slideshow on last slide
        random                  :   1,          // Randomize slide order (Ignores start slide)
        slide_interval          :   10000,       // Length between transitions
        transition              :   1,          // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
        transition_speed        :   1000,       // Speed of transition
        new_window              :   1,          // Image links open in new window/tab
        pause_hover             :   0,          // Pause slideshow on hover
        keyboard_nav            :   1,          // Keyboard navigation on/off
        performance             :   1,          // 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
        image_protect           :   1,          // Disables image dragging and right click with Javascript
                                                   
        // Size & Position                         
        min_width               :   0,          // Min width allowed (in pixels)
        min_height              :   0,          // Min height allowed (in pixels)
        vertical_center         :   1,          // Vertically center background
        horizontal_center       :   1,          // Horizontally center background
        fit_always              :   0,          // Image will never exceed browser width or height (Ignores min. dimensions)
        fit_portrait            :   0,          // Portrait images will not exceed browser height
        fit_landscape           :   0,          // Landscape images will not exceed browser width
                                                   
        // Components                           
        slide_links             :   false,    // Individual links for each slide (Options: false, 'num', 'name', 'blank')
        thumb_links             :   1,          // Individual thumb links for each slide
        thumbnail_navigation    :   0,          // Thumbnail navigation
        slides                  :   photos,
                                    
        // Theme Options               
        progress_bar            :   1,          // Timer for each slide                         
        mouse_scrub             :   0
        
    });
}

$(document).ready(function() {
    $.getScript("https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=a26f5c4f6af0b638313633142821e3eb&format=json&per_page=100");
}); 