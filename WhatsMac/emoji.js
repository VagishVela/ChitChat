var emojis = [
    { code: [":)",":-)"], alt: "😊", cName: "emojiordered1466" },
    { code: [";)",";-)"], alt: "😉", cName: "emojiordered1465" },
    { code: [":(",":-("], alt: "😟", cName: "emojiordered1487" },
    { code: ["B)", "B-)"], alt: "😎", cName: "emojiordered1470" },
    { code: [":D",":-D"], alt: "😃", cName: "emojiordered1459" },
    { code: ["D:","D-:"], alt: "😩", cName: "emojiordered1497" },
    { code: [":d",":-d"], alt: "😋", cName: "emojiordered1467" },
    { code: [";p", ";-p"], alt: "😜", cName: "emojiordered1484" },
    { code: [":p",":-p"], alt: "😛", cName: "emojiordered1483" },
    { code: [":o",":-o"], alt: "😮", cName: "emojiordered1502" },
    { code: [":s",":-s"], alt: "😖", cName: "emojiordered1478" },
    { code: [":x",":-x"], alt: "😶", cName: "emojiordered1510" },
    { code: [":|",":-|"], alt: "😐", cName: "emojiordered1472" },
    { code: [":/",":-/"], alt: "😕", cName: "emojiordered1477" },
    { code: [":[",":-["], alt: "😳", cName: "emojiordered1507" },
    { code: [":>",":->"], alt: "😏", cName: "emojiordered1471" },
    { code: [":@",":-@"], alt: "😷", cName: "emojiordered1511" },
    { code: [":*",":-*"], alt: "😘", cName: "emojiordered1480" },
    { code: [":!",":-!"], alt: "😬", cName: "emojiordered1500" },
    { code: ["o:)","o:-)"], alt: "😇", cName: "emojiordered1463" },
    { code: [">:-o"], alt: "😠", cName: "emojiordered1488" },
    { code: [">:-)"], alt: "😈", cName: "emojiordered1464" },
    { code: [":3",":-3"], alt: "😺", cName: "emojiordered1514" },
    { code: ["(y)", "(Y)"], alt: "👍", cName: "emojiordered0911" },
    { code: ["(n)", "(N)"], alt: "👎", cName: "emojiordered0917" },
    { code: ["<3"], alt: "️❤️", cName: "emojiordered0192" }
];

function emoji(element) {
    for(var i=0; i < emojis.length; i++) {
		for(var u=0; u < emojis[i].code.length; u++) {
            replaceSmiley(emojis[i].code[u],emojis[i].alt, emojis[i].cName);
		}
	}
}

function replaceSmiley(emoji, alt, className) {
    var sel = window.getSelection();
    var range = sel.getRangeAt(0);
    
    if(range.startOffset - emoji.length >= 0) {
        var clone = range.cloneRange();
        clone.setStart(range.startContainer, range.startOffset - emoji.length);
        clone.setEnd(range.startContainer, range.startOffset);

        var contents = clone.toString();
        
        if(contents == emoji) {
            clone.deleteContents();
            var img = document.createElement("img");
            img.alt = alt;
            img.draggable = false;
            img.className = "emoji " + className;
            img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
            range.insertNode(img);
            range.setStartAfter(img);
            document.execCommand("insertHTML", false, '<span></span>');
            range.collapse(false);
            sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);

        }
    }
}