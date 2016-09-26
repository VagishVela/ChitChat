var emojis = [
	{ code: [":)",":-)"], alt: "😊", cName: "emojiordered1466"},
	{ code: [":D",":-D"], alt: "😀", cName: "emojiordered1456"},
	{ code: ["8)","8-)"], alt: "😎", cName: "emojiordered1470"},
	{ code: [":p",":P",":-p",":-P"], alt: "😛", cName: "emojiordered1483"},
	{ code: [";)",";-)"], alt: "😉", cName: "emojiordered1465"},
	{ code: ["%)","%-)"], alt: "😂", cName: "emojiordered1458"},
    { code: [":/",":-/"], alt: "😕", cName: "emojiordered1477"},
    { code: [":*",":-*"], alt: "😘", cName: "emojiordered1480"},
    { code: ["<3"], alt: "❤️", cName: "emojiordered0192"}
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