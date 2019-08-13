$(function() {
  $(".devour-btn").on("click", function(event) {
    var id = $(this).data("id");
    var devoured = {
      devoured: "TRUE"
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devoured
    }).then(function() {
      location.reload();
    });
  });

  $(".burgerForm").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#newBurgerInput")
        .val()
        .trim()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      location.reload();
    });
  });
});
