// Fade out text when clicking over some other...
// ...and fade it back when clicking over some other.
//
jQuery(document).ready(function() {
	$("#orderedlist2").addClass("class1");

	$("#orderedlist2 li").addClass("class2");
	$("#orderedlist2 li:last").mouseenter(function(){
		$("#orderedlist2 li:last").addClass("class3");
	});
	$("#orderedlist2 li:last").mouseleave(function(){
		$("#orderedlist2 li:last").removeClass("class3");
	});

});