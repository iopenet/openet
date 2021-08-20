//Highlight code
    hljs.highlightAll();

// Clipboard
    var clipboard = new ClipboardJS('.btn');

    clipboard.on('success', function (e) {
        // console.log(e);
        console.info('Action:', e.action);
        console.info('Text:', e.text);
        console.info('Trigger:', e.trigger);
// Toastr function
$(".code").click(function() {
    toastr.options.positionClass = "toast-top-center";
    toastr.success('&nbsp; &nbsp; — &nbsp; Copied to the clipboard &nbsp; —');
});
        e.clearSelection();
    });

    clipboard.on('error', function (e) {
        console.log(e);
    });



