$(function() {
    $(".carousel").carousel( { interval: 2000 } ); 
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carsousel").carousel("pause"); 
            $("#carouselButton").childern("i").removeClass("fa-pause"); 
            $("#carouselButton").childern("i").addClass("fa-play"); 

        } else {
            $(".carsousel").carousel("cycle"); 
            $("#carouselButton").childern("i").removeClass("fa-play"); 
            $("#carouselButton").childern("i").addClass("fa-pause"); 
        }
    });
});

$(function () {
        
    $("#reserveButton").on("click", () => {
        $("#reserveModal").modal("show");
    });
    });


    $(function () {
            
        $("#loginButton").on("click", () => {
            $("#loginModal").modal("show");
        });
        
        });



