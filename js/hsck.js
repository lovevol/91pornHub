console.log("hsck is done!!");

// 也是contentScript，只在打开http://*/vodplay/*的时候触发(http://57ck.cc/或http://hsck.net)
document.addEventListener('DOMContentLoaded', function () {
    injectCustomJs();
    initCustomPanel();
});


// 向页面注入自定义JS
function injectCustomJs(jsPath) {
    jsPath = jsPath || 'js/hsckInject.js';
    var temp = document.createElement('script');
    temp.setAttribute('type', 'text/javascript');
    temp.src = chrome.runtime.getURL(jsPath);
    temp.onload = function () {
        console.log("hsckInject.js on loaded");
    };
    document.body.appendChild(temp);
}

// 直接覆盖本来的html，即修改了本来的html结构，改成自己想要的
function initCustomPanel() {
    if (document.getElementsByClassName("stui-player__foot")) {
        let html = document.getElementsByClassName("stui-player__foot")[0].innerHTML;
        let child = `
            <span id="mySuperDownload" style="z-index: 2; bottom: 5px; right: 5px; padding: 2px 5px; border-radius: 4px; font-size: 10px; overflow:hidden; text-overflow:ellipsis; -o-text-overflow:ellipsis; white-space:nowrap; background-repeat: no-repeat; background-color: rgba(0,0,0,.6); color: #fff;">超级下载</span>
            <br>
            <div id="mySuperDownloadArea" style="display:none"></div>
    `;
        document.getElementsByClassName("stui-player__foot")[0].innerHTML = html + child
    }
}

