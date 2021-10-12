// Close alert success automatic
$(".alert").hide();
$(".alert").fadeTo(2000, 500).slideUp(500, function(){
  $(".alert").slideUp(500);
});

// Add Popovers (Bootstrap)
const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
})
