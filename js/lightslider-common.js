/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    $("#content-slider").lightSlider({
        loop: true,
        keyPress: true
    });
    $('#image-gallery').lightSlider({
        gallery: true,
        item: 1,
        thumbItem: 9,
        slideMargin: 0,
//        speed: 500,
//        auto: true,
        loop: true,
        onSliderLoad: function () {
            $('#image-gallery').removeClass('cS-hidden');
        }
    });   
});

//window.onload = function() {
//
//$("#content-slider").lightSlider({
//        loop: true,
//        keyPress: true
//    });
//    $('#image-gallery').lightSlider({
//        gallery: true,
//        item: 1,
//        thumbItem: 9,
//        slideMargin: 0,
////        speed: 500,
////        auto: true,
//        loop: true,
//        onSliderLoad: function () {
//            $('#image-gallery').removeClass('cS-hidden');
//        }
//    });   
//
//}


function getFileLists(){
    var fileExt = "jpg";
    $.get('img/', function(data){
        $(data).find("a:contains(" + fileExt + ")").each(function(){
            $('#image-gallery').after('<li data-thumb=img/thumb/' 
                + $(this).text() + '><img src=img/' + $(this).text() + ' /></li>');
        });
    });
}