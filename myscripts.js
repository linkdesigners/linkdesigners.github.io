function copyURL(){
        const dummy = document.createElement('p');
        dummy.textContent = "https://linkdesigners.github.io/";
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