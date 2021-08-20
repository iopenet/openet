//Highlight code
    hljs.initHighlightingOnLoad();

// Clipboard
    var clipboard = new ClipboardJS('.btn');

    clipboard.on('success', function (e) {
        // console.log(e);
        console.info('Action:', e.action);
        console.info('Text:', e.text);
        console.info('Trigger:', e.trigger);

        e.clearSelection();
    });

    clipboard.on('error', function (e) {
        console.log(e);
    });


// Toastr function
$(".code").click(function() {
    toastr.options.positionClass = "toast-top-center";
    toastr.success('&nbsp; &nbsp; — &nbsp; Copied to the clipboard &nbsp; —');
});
