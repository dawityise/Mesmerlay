document.getElementById(rteName).contentWindow.document.designMode = "on";
document.getElementById(rteFormName).value = rtePreloadContent;
document.getElementById(rteName).contentWindow.document.open();
document.getElementById(rteName).contentWindow.document.write("<html><head><style type=\"text/css\">@import url(" + rteCSS + ");</style></head><body>" + rtePreloadContent + "</body></html>");
document.getElementById(rteName).contentWindow.document.close();
if (document.all && !window.opera) {
    document.getElementById(rteName).contentWindow.document.attachEvent("onkeypress", rteSelection);
    document.getElementById(rteName).contentWindow.document.attachEvent("onclick", rteSelection);
    document.getElementById(rteName).contentWindow.document.attachEvent("onmouseup", rteSelection);
}
else {
    document.getElementById(rteName).contentWindow.document.execCommand("useCSS", false, null);
    document.getElementById(rteName).contentWindow.document.addEventListener("keypress", rteSelection, true);
    document.getElementById(rteName).contentWindow.document.addEventListener("click", rteSelection, true); 
    document.getElementById(rteName).contentWindow.document.addEventListener("mouseup", rteSelection, true); }
