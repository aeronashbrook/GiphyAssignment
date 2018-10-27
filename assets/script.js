$("#addGif").on("click", function(event) {
    var value = $("#gifInput").val().trim();
    var button = $("<button>");
    button.attr("data-person", value);
    button.text(value);
    $("#buttonDiv").append(button);
    event.preventDefault();
});


$("#buttonDiv").on("click", "button", function () {
    var person = $(this).attr("data-person");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      person + "&api_key=LXO3xdjYVotJBIoI2O6h7igDkdRE0XGN&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function (response) {
        var results = response.data;
        console.log(response.data);

        for (var i = 0; i < results.length; i++) {
          var newDiv = $("<div class='item'>");

          var rating = results[i].rating;

          console.log(results[i].rating);

          var p = $("<p>").text("Rating: " + rating);

          var gif = $("<img>");
          gif.attr("class", "gif")
          gif.attr("src", results[i].images.fixed_height_still.url);
          gif.attr("data-still", results[i].images.fixed_height_still.url);
          gif.attr("data-animate", results[i].images.fixed_height.url); 
          gif.attr("data-state", "still");
          
        
          console.log(results[i].images.fixed_height_still.url);
          newDiv.append(p);
          newDiv.append(gif);
          $("#gifDiv").prepend(newDiv);
            
           
        }
      });
  });
  
$(document).on("click", ".gif", function () {
    var state = $(this).attr("data-state");
    
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } 
    else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }    

})


  
//   "https://media3.giphy.com/media/ErToLK2uuAAF2/200_s.gif"
//   "https://media3.giphy.com/media/ErToLK2uuAAF2/200.gif"

  //get gif pause to work with hide jquery or change scr
  