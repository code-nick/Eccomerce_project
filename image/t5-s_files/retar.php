if (document.createElement) {
	var shopf = "false";try {if(Shopify){shopf = "true";}} catch (e) {if (e instanceof ReferenceError) {}}
	var refer = (window != window.top) ? document.referrer : document.location.href;
	var refer2 = (window != window.top) ? document.location.href : '';
	var re = document.referrer;
	var veoxa_if = document.createElement('script');
	if (veoxa_if) {
		veoxa_if.setAttribute("src", ('https:' == document.location.protocol ? 'https://' : 'http://') + "vu.adschoom.com/trafic/retar_js.php?type=PRODUIT&boutique=newchic&categorie_id=&produit_id={PRODUCT_ID}&data=&transaction_id=0&transaction_amount=0&valid=1&rid_tt=" + '&refer=' + escape(refer) + "&refer2=" + escape(refer2) + "&shopf="+shopf+"&random=" + Math.round(Math.random() * 1000000000));
		veoxa_if.type = 'text/javascript';
		veoxa_if.async = "async";
		veoxa_if.defer = "defer";
		document.getElementsByTagName("head")[0].appendChild(veoxa_if);
	}
}





   
   
    