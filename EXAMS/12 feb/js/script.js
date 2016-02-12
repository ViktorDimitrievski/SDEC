'use strict';



$(document).ready(function () {
    var klik = 0;
    $(".xoPa").click(function () {
        var a = $(this).data("click"); // ja zima vrednosta vo data koja treba da e s koja e pocetna vrednost 
        console.log(a);
        if (a === "s") { //proveruvame dali a e ednakva na s ako e ednakva togas dodavame vrednost 1 st e X
            $(this).attr("data-click", 1)
                .addClass("red")
                .removeClass("xoPa");
            
            console.log($(this).data("click"));

            autoClick();
        }
    });

    function autoClick() {
        console.log($(".xoPa"));
    }

});