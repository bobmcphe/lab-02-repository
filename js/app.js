// $(document).ready(function(){
//     $.getJSON("data\page-1.json", function(result){
//       $.each(result, function(i, field){
//         $("div").append(field + " ");
//       });
//     });
//   });


// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'data/page-1.json', true);


$.ajax({
    dataType: 'json',
    url: http://github.com/bobmcphe/lab-02-repository/blob/master/data/page-1.json,
    data: data,
  });

  ajaxRequest.onreadystatechange = function(){
	console.log("Ready state changed!");
	//more on this in a second
}