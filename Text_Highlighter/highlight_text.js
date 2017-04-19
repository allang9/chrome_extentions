
//console.log("script called");
chrome.contextMenus.create({
    title: "highlighter",
    contexts: ["all"],
    onclick: highlight,
})

function highlight() {

}

/*
var hightlighter = function highlight() {
    console.log("function called. window.getSelection() = " + window.getSelection());
    var elements = document.getElementsByTagName('*');

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

            if (node.nodeType === 3) {
                var text = node.nodeValue;
                var replacedText = text.replace(info.selectionText, 
                        '<span style="background-color: #FFFF00">' + info.selectionText + '</span>');

                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
            }
        }
    }
}
*/

/*
function highlight(info) {
var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/the/gi, 'lkjsagljas;lkjgsl');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
}
*/
