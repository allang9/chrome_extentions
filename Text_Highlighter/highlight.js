(function () {
    console.log("function run on page");
    var DomEle = document.getSelection().anchorNode.parentNode;
    console.log(DomEle);
    var text = window.getSelection().toString();
    DomEle.innerHTML = DomEle.innerHTML.replace(text,'<span style="background-color:yellow">'+text+'</span>');
})();

