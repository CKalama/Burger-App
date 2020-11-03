//Here is where our front end of Javascript will go. 
$(function() {
    $(".change-eat").on("click", function(event){
        var id = $(this).data("id");
        var newEat = $(this).data("newdevoured");

        var eatStatus = {
            devoured: newEat
        };

    //Setting up PUT request
    $.ajax()
    })















})
