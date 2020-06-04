$(document).ready(function(){
    $.getJSON("data\page-1.json", function(result){
      $.each(result, function(i, field){
        $("div").append(field + " ");
      });
    });
  });

$.ajax()