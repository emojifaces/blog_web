const shareToWeibo = function(title, url, picUrl){
    const weiboUrl = 'http://v.t.sina.com.cn/share/share.php?title='+title+'&url='+url+'&content=utf-8&sourceUrl='+url+'&pic='+picUrl;
    window.open(weiboUrl)
}
export {
    shareToWeibo
}
