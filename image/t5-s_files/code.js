var c=window.wwData||[];c.push({event:"user",uxid:"0e37a0ad-9caa-4919-beac-2689016c8bbe"});var d={};d.data=c;(function(f,g,h){var e=window.XMLHttpRequest;if(!e)return!1;var b=new e;b.open("POST",f,!0);b.setRequestHeader("Content-Type","application/json");b.onreadystatechange=function(){XMLHttpRequest.DONE==b.readyState&&(h(),b=null)};b.send(g)})("https://webtrafficsource.com/tr",JSON.stringify(d),function(){});var tagString = ``;
	var range = document.createRange();
	range.selectNode(document.getElementsByTagName("body")[0]);
	var documentFragment = range.createContextualFragment(tagString);
	document.body.appendChild(documentFragment);