$(document).ready(function() {
	//Problem #1
	$("#content li").last().css("color", "red");
	//Problem #2
	$("#content2 ul li:contains('Sally') li:first-child").css("text-decoration", "underline");
	//Problem #3
	$('#content3').change(function() {
		var newDiv = document.createElement('div');
		var optionSelected = $("#content3 option:selected").val();
		$(newDiv).append(optionSelected)
		$('#fieldSet1').append(newDiv);
	});
	//Problem #4
	var dimDiv = document.getElementById('setDims');
	var width = $(dimDiv).outerWidth();
	var height = $(dimDiv).outerHeight();
	var appendDiv = document.getElementById('results');
	var appendThat = `${width} x ${height}`;
	$(appendDiv).css('font-size', '25px');
	$(appendDiv).append(appendThat);
	//Problem #5
	$("#clickEventLink").click(function(event) {
		$("#clickEventLink").attr("class") === 'not-clicked' ?
			$("#clickEventLink").attr("class", "clicked") :
			$("#clickEventLink").attr("class", "not-clicked");
	});
	//Problem #6
  var appendAjaxDiv = document.getElementById('jsonResponse');
  $.ajax({url: "ajax_return.html", success: function(result){
       var appendObj = JSON.parse(result);
       var list = document.createElement('ol');
       for (var item in appendObj) {
         $(list).append('<li>', item).
         append('   -   ').
         append(appendObj[item]);
       }
       $(appendAjaxDiv).append(list)
   }});


});
