function copyURL(){
    if (!window.getSelection) {
        alert('Please copy the URL from the location bar.');
        return;
        }
        const dummy = document.createElement('p');
        dummy.textContent = window.location.href;
        document.body.appendChild(dummy);

        const range = document.createRange();
        range.setStartBefore(dummy);
        range.setEndAfter(dummy);

        const selection = window.getSelection();
        // First clear, in case the user already selected some other text
        selection.removeAllRanges();
        selection.addRange(range);

        document.body.removeChild(dummy);

        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2600);

}