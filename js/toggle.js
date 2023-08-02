// HIDE AND SHOW ABOUT PAGE //

$(document).ready(function () {
  $("#hide").click(function () {
    $("#about-page").hide();
  });
  $("#show").click(function () {
    $("#about-page").show();
  });
});

// HOVER SHOW WOMB TITLES //
$(document).ready(function () {
  $("#home-thumb-1").hover(
    function () {
      $("#home-thumb-hide-1").show();
      console.log("hover");
    },
    function () {
      $("#home-thumb-hide-1").hide();
    }
  );
});

$(document).ready(function () {
  $("#home-thumb-2").hover(
    function () {
      $("#home-thumb-hide-2").show();
      console.log("hover");
    },
    function () {
      $("#home-thumb-hide-2").hide();
    }
  );
});

$(document).ready(function () {
  $("#home-thumb-3").hover(
    function () {
      $("#home-thumb-hide-3").show();
      console.log("hover");
    },
    function () {
      $("#home-thumb-hide-3").hide();
    }
  );
});

$(document).ready(function () {
  $("#home-thumb-4").hover(
    function () {
      $("#home-thumb-hide-4").show();
      console.log("hover");
    },
    function () {
      $("#home-thumb-hide-4").hide();
    }
  );
});
