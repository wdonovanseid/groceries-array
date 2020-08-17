$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    $("#formOne").hide();

    const inputArray = [$("input#item1").val(),$("input#item2").val(),$("input#item3").val(),$("input#item4").val(),$("input#item5").val()]
    let sortedArray = inputArray.sort();

    sortedArray.forEach(function(element) {
      let plz = element.toUpperCase();
      $("#putHere").append("<li>"+plz+"</li>")
    });

    $("#result").show();

  });
})