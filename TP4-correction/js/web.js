$(document).ready(function(){
//==============================================================================





/*==============================================================================
	jQuery events
==============================================================================*/

	// Set aside text
	jQuery("body").on("input", "input, textarea", function() {
		var firstname = jQuery("input[name='firstname']").val();
		var lastname = jQuery("input[name='lastname']").val();
		var cite = jQuery("textarea[name='cite']").val();
		if (cite != "") cite = "\"" + cite + "\"";
		jQuery("aside").html(cite + "<br>" + firstname + " " + lastname);
	});

//==============================================================================
});
