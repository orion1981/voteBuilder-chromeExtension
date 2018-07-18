console.log("chrome extension go");

var my_notes = document.getElementById('ctl00_ContentPlaceHolderVANPage_VANSectionHeadingWide_ctl06_ctl00_ContentPlaceHolderVANPage_VANSectionHeadingWide_ctl06_ctl00Panel');
console.log(my_notes);
var my_address_info = document.getElementById('ctl00_ContentPlaceHolderVANPage_VANSectionHeadingWide_ctl00_ctl00_ContentPlaceHolderVANPage_VANSectionHeadingWide_ctl00_ctl00Panel');
console.log(my_address_info);
var my_additional_class = $(".panel.panel-details.panel-default")[0];
console.log(my_additional_class);

$(my_notes).insertBefore(my_additional_class);
