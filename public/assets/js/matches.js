


$(document).ready(function() {
    
    $.get("/api/veiws/layouts/matches.handlebars").then(function(data) {
      $(".matches-name").text(data);
    });
    
      
  });






























