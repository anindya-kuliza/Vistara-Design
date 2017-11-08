'use strict';

// Wait for the DOM to be ready
/* $(function() {

}); */
		
		
$(document).ready(function () {
	
	$('input[name="name_radio"]').on('change', function(){
    if ($(this).val()=='value_radio1') {
         
        //change to "show update"
        /*  $("#div1").text("sth. here"); */
		$("#div1").show();
		$("#div2").hide();
        
    } else  {
       
	    $("#div2").show();
		$("#div1").hide();
        /* $("#div1").text("show Overwritten"); */
    }
});

	

$('.validate').each(function () {
	
 $(this).validate({
  rules: {
    lastname: "required",
	Lastname: "required",
    mobile_phone: {
      require_from_group: [1, ".phone-group"]
	  /* minlength: 5,
	  maxlength: 6 */
    },
    home_phone: {
      require_from_group: [1, ".phone-group"],
	  number: true
	 /*  minlength: 13,
	  maxlength: 14 */
	  
    },
	PNR:{
		   required: true,
		   number: true
	  }
  },
    // Specify validation error messages
    messages: {
      lastname: "*Please enter your lastname",
	  Lastname: "*Please enter valid last name.",
	  PNR: {
        required: "*Please enter PNR number.",
         number: "*Please enter valid number" 
      },
	  mobile_phone: {
	    require_from_group: "*Please fill at least this field"
        /* minlength: "*This must be at least 5 characters long",
		maxlength: "*This can't be more than 6 characters" */
      },
	  home_phone: {
	    require_from_group: "*Please fill at least this field",
        /* minlength: "*This must be at least 13 characters long",
		maxlength: "*This can't be more than 14 characters" */
      }
    }
});

});

});
