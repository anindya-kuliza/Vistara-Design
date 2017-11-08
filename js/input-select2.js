'use strict';		
$(document).ready(function () {
	
  $(".select-editable Select").change(function() {
    $("#someInput").val($(this).val());
}).change(); // trigger once if needed

});
