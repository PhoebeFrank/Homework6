
var topics =["Dog", "Cat", "Bird", "Horse", "Mouse", "Giraffe", "Lion", "Kangaroo", "Ferret", "Snake"];


function renderButtons(){

    $("#animals-view").empty();

    for (var i = 0; i < topics.length; i++){
        var a = $("<button>");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        a.addClass("animal");
        $("#animals-view").append(a);
    }
}
$("#add-topic").on("click", function(event) {
   
    event.preventDefault();

    
    var topic = $("#topic-input").val().trim();
  
    topics.push(topic);
    console.log(topics);  
    renderButtons();
  });
  
function searchGifs() {
    var animal = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
   animal + "&api_key=yCjst7eCBAXVcaJcHMl7sdZrFXhsx7Wc";
   $.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function(response){
        console.log(queryURL);

        console.log(response);

        var results = response.data;

        for (var i = 0; i < results.length; i++){

            var animalDiv = $("<div>");

            var p = $("<p>").text("Rating: " + results[i].rating);

            var animalImage = $("<img>");
            animalImage.attr("src", results[i].images.fixed_height.url);

            animalDiv.append(p);
            animalDiv.append(animalImage);

            $("#gifs-appear-here").prepend(animalDiv);


        }
    });
};

$(document).on("click", ".animal",searchGifs);

renderButtons();