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


function addFavorite() {
        var url = window.location;
        var title = document.title;
        var ua = navigator.userAgent.toLowerCase();
        if (ua.indexOf("360se") > -1) {
            alert("尴尬，由于 360 浏览器功能限制，请按 Ctrl+D 手动收藏。");
        }
        else if (ua.indexOf("msie 8") > -1) {
            window.external.AddToFavoritesBar(url, title); //IE8
        }
        else if (document.all) {//IE类浏览器
          try{
           window.external.addFavorite(url, title);
          }catch(e){
           alert('尴尬，当前浏览器不支持一键收藏,请按 Ctrl+D 手动收藏。');
          }
        }
        else if (window.sidebar) {//firfox等浏览器；
            window.sidebar.addPanel(title, url, "");
        }
        else {
            alert('尴尬，当前浏览器不支持一键收藏,请按 Ctrl+D 手动收藏。');
        }
    }    