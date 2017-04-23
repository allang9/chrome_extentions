console.log("highlight_text called");

function onMenuCreate(n) {
    if (chrome.runtime.lastError) {
        console.log(`Error: ${chrome.runtime.lastError}`);
    } else {
        console.log("Item created successfully");
    }
}

var highlight = 'console.log("executed on page"); document.'

function highlight() {
    console.log("executed on page");
}

function highlightText(info, tab) {
    console.log(info.selectionText);
    chrome.tabs.executeScript(tab.id,{
        file: "/highlight.js"
    })

};

chrome.contextMenus.create({
    id: "high-light",
    title: "highlight text",
    contexts: ["selection"]
}, onMenuCreate);


chrome.contextMenus.onClicked.addListener(highlightText);

/*
console.log("script called");
chrome.contextMenus.create({
    title: "highlighter",
    contexts: ["all"],
    onclick: highlight,
})

function highlight() {

}


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
