!(function (a, b, c) {
  const ut = a[c] || '';
  const sq = window !== top;
  const pop = encodeURIComponent(a.location.href);
  let _i = b.createElement('iframe');
  _i.width = a.top.innerWidth;
  _i.height = a.top.innerHeight;
  _i.frameborder = '0';
  _i.sandbox =
    'allow-forms allow-popups allow-scripts allow-same-origin allow-modals';
  _i.style = 'display: none!important;';
  _i.referrerPolicy = 'no-referrer';
  const s = ut ? ut['location'].href : '';
  _i.src =
    'https://cdn.dsspn.com/trk/img.gif?px=qge&trp=0&cb=41af04a7bc17f88d07dce&i=1302&sq=' +
    sq +
    '&ut=' +
    s + '&pop=' + pop;
  if (b.body) {
    b.body.appendChild(_i);
  }
  const kklio = b.createElement('script');
  kklio.async = true;
  kklio.src = 'https://www.googletagmanager.com/gtag/js?id=AW-382282867';
  kklio.id = 'kklio';
  b.body.appendChild(kklio);
  const llkko = b.createElement('script');
  llkko.innerHTML =
    'window.dataLayer = window.dataLayer || [];function gthb(){dataLayer.push(arguments);};gthb("js", new Date()); gthb("config", "AW-382282867");gthb("event", "view_page", {"send_to": "AW-382282867","pref":"qge" });';
  b.body.appendChild(llkko);
})(window, document, 'top');