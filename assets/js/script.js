// Clipboard
var url = document.location.href;
    new ClipboardJS('.code', {
        text: function() {
    return url;
  }
});


// Toastr function
$(".code").click(function() {
	toastr.options.positionClass = "toast-top-center";
	toastr.success('&nbsp; &nbsp; — &nbsp; Copied to the clipboard &nbsp; —');
});
