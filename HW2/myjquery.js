"use strict";

$(document).ready(function() {
	$('button').click(function(){  
		$("#main h1").animate( { fontSize: "250%"}, 900, "easeInSine" );  
		$("#main h1").css("color", "orange");
		$("#main h1").css("text-shadow", "0 0 3px #5e5e5e, 2px 0 5px #5e5e5e");
		$("#me").css("border", "3px solid orange"); 

		 // referenced https://www.w3schools.com/jquery/exercise_jq.asp?filename=exercise_jq_css2
	});
	
}); 