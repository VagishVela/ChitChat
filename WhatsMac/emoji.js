var emojis = [
	{ code: [":)",":-)"], alt: "😊", cName: "emojiordered1369"},
	{ code: [":D",":-D"], alt: "😀", cName: "emojiordered1359"},
	{ code: ["8)","8-)"], alt: "😎", cName: "emojiordered1373"},
	{ code: [":p",":-p"], alt: "😛", cName: "emojiordered1386"},
	{ code: [";)",";-)"], alt: "😉", cName: "emojiordered1368"},
	{ code: ["%)","%-)"], alt: "😂", cName: "emojiordered1361"}
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
            var img = '<img alt="'+alt+'" draggable="false" class="emoji '+className+'" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">';
            document.execCommand("insertHTML", false, img);
            range.collapse(false);
            range.select();
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }
}