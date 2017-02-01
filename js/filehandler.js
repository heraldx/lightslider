/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function getFileLists(path) {
//    var routes = require(path);
    require([path], function (lists) {
        alert(lists);
    })
}

//http://localhost:8383/haFamily/img/cS-1.jpg
function getFileLists1() {
    $.ajax({
//        url: "http://localhost:8383/haFamily/img/",
        url: "img/",
        success: function (data) {
            console.log(data);
            $(data).find("td > a").each(function () {
                // will loop through 
                alert("Found a file: " + $(this).attr("href"));
            });
        },
        fail: function(){
            console.log("fail");
        }
    });
}