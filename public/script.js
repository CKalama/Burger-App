//Here is where our front end of Javascript will go. 
$(function() {
    $(".change-eat").on("click", function(event){
        var id = $(this).data("id");
        var newEat = $(this).data("newdevoured");

        var eatStatus = {
            devoured: newEat
        };

    //Setting up PUT request
    $.ajax("/api/burgers/" + id, {
        type:"PUT",
        data:eatStatus
    }).then(
        function() {
            console.log("Changed eat status: ", newEat);
            //This will reload the page to get updated list
            location.reload();
        }
    );
    });

    // $(".create-burger").on("submit", function(event){
    //     //Have to prevent default
    //     event.preventDefault();

    //     var newBurger = {
    //         name: $("#burger-text").val().trim(),
    //         devoured: 
    //     }
        
    // })

















})
