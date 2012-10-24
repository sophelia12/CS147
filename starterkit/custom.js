jQuery(document).ready(function() {
	$("a").click(function() {
     alert("Hello world!");
   });
   
  	$(document).ready(function() {
   		$("#orderedlist").addClass("red");
 	});
 	
 	$(document).ready(function() {
   		$("#orderedlist > li").addClass("blue");
 	});
 	
 	$(document).ready(function() {
   		$("#orderedlist li:last").hover(function() {
     		$(this).addClass("green");
   		},function(){
     		$(this).removeClass("green");
  		});
 	});
});