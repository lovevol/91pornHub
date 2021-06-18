console.log("nineone is done!!");

// 也是contentScript，只在打开http://91porn.com/view_video.php?*或https://91porn.com/view_video.php?*的时候触发
document.addEventListener('DOMContentLoaded', function () {
    injectCustomJs();
    injectCustomJs2();
    initCustomPanel();
});

// 向页面注入自定义JS
function injectCustomJs(jsPath) {
    jsPath = jsPath || 'js/nineoneInject.js';
    var temp = document.createElement('script');
    temp.setAttribute('type', 'text/javascript');
    temp.src = chrome.extension.getURL(jsPath);
    temp.onload = function () {
        console.log("nineoneInject.js on loaded");
    };
    document.body.appendChild(temp);
}

// 向页面注入自定义JS
function injectCustomJs2(jsPath) {
    jsPath = jsPath || 'js/jquery-2.2.2.min.js';
    var temp = document.createElement('script');
    temp.setAttribute('type', 'text/javascript');
    temp.src = chrome.extension.getURL(jsPath);
    temp.onload = function () {
        console.log("jquery-2.2.2.min.js on loaded");
    };
    document.body.appendChild(temp);
}

// 直接覆盖本来的html，即修改了本来的html结构，改成自己想要的
function initCustomPanel() {
    if (document.getElementsByClassName("boxPart")[1]) {
        let html = document.getElementsByClassName("boxPart")[1].innerHTML;
        let child = `
        <div class="floatmenu">
            <div id="mySuperDownload" class="video-info-span">超级下载</div>
        </div>
        <br>
        <div id="mySuperDownloadArea" style="display:none"></div>
    `;
        document.getElementsByClassName("boxPart")[1].innerHTML = html + child
    }
}


