var host = window.top.location.host,
	urls = document.links,
	total = urls.length;
	
for (var i = 0; i < total; i++) {
	var link = urls[i];
	
	if (link.href.indexOf(host) === -1)
		link.setAttribute('target', '_blank');
}