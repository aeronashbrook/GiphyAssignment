$("#addGif").on("click", function(event) {
var value = $("#gifInput").val().trim();
var button = $("<button>");
button.attr("data-person", value);
button.text(value);
$("#buttonDiv").append(button);
event.preventDefault();
});


$("button").on("click", function () {
    var person = $(this).attr("data-person");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      person + "&api_key=LXO3xdjYVotJBIoI2O6h7igDkdRE0XGN&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function (response) {
        var results = response.data;
        

        for (var i = 0; i < results.length; i++) {
          var newDiv = $("<div class='item'>");

          var rating = results[i].rating;
          console.log(results[i].rating)
          var p = $("<p>").text("Rating: " + rating);

          var gif = $("<img>");
          gif.attr("src", results[i].images.fixed_height.url);
          console.log(results[i].images.fixed_height.url)
          newDiv.append(p);
          newDiv.append(gif);

          $("#gifDiv").prepend(newDiv);

        }
      });
  });