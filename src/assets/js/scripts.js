// Close alert success automatic
$(".alert").hide();
$(".alert").fadeTo(2000, 500).slideUp(500, function(){
  $(".alert").slideUp(500);
});

// Add Popovers (Bootstrap)
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
})
