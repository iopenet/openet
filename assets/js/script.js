
(function(){
    new Clipboard('.code');
})();


// Toastr function
$(".code").click(function() {
	toastr.options.positionClass = "toast-top-center";
	toastr.success('&nbsp; &nbsp; — &nbsp; Copied to the clipboard &nbsp; —');
});
