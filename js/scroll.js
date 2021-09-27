function loadDeviceSpecificFiles() {
    if (navigator.userAgent.toLowerCase().match(/android/)) {
        loadjscssfile("main.js", "js"); //dynamically load JS
        loadjscssfile("main.css", "css") //dynamically load css
            /*iPhone check*/
    } else if (navigator.userAgent.toLowerCase().match(/iphone/) || navigator.userAgent.toLowerCase().match(/ipad/)) {
        loadjscssfile("main.js", "js") //dynamically load JS
        loadjscssfile("main.css", "css") //dynamically load css
    }
}


function loadjscssfile(main, filetype) {
    if (filetype == "js") { //if filename is a external JavaScript file
        var fileref = document.createElement('script')
        fileref.setAttribute("type", "text/javascript")
        fileref.setAttribute("src", main)
    } else if (filetype == "css") { //if filename is an external CSS file
        var fileref = document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", main)
    }
    if (typeof fileref != "undefined") document.getElementsByTagName("head")[0].appendChild(fileref)
}