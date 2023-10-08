console.log("pornhub is done!!");

// 也是contentScript，只在打开https://*.pornhub.com/view_video.php?*和https://*.pornhubpremium.com/view_video.php?*的时候触发
document.addEventListener('DOMContentLoaded', function () {
    injectCustomJs();
    injectCustomJs2();
    initCustomPanel();
});


// 向页面注入自定义JS
function injectCustomJs(jsPath) {
    jsPath = jsPath || 'js/pornhubInject.js';
    var temp = document.createElement('script');
    temp.setAttribute('type', 'text/javascript');
    temp.src = chrome.runtime.getURL(jsPath);
    temp.onload = function () {
        console.log("pornhubInject.js on loaded");
    };
    document.body.appendChild(temp);
}

// 向页面注入自定义JS
function injectCustomJs2(jsPath) {
    jsPath = jsPath || 'js/jquery-3.0.0.min.js';
    var temp = document.createElement('script');
    temp.setAttribute('type', 'text/javascript');
    temp.src = chrome.runtime.getURL(jsPath);
    temp.onload = function () {
        console.log("jquery-3.0.0.min.js on loaded");
    };
    document.body.appendChild(temp);
}

// 直接覆盖本来的html，即修改了本来的html结构，改成自己想要的
function initCustomPanel() {
    if (document.getElementsByClassName("tab-menu-wrapper-row")[0]) {
        let html = document.getElementsByClassName("tab-menu-wrapper-row")[0].innerHTML;
        let child = `
        <div class="tab-menu-wrapper-cell">
            <div id="mySuperDownload" class="js-mixpanel tab-menu-item tooltipTrig"  data-title="下载这部影片">
                <i class="ph-icon-favorite"></i>
                <span>超级下载</span>
            </div>
        </div>
    `;
        document.getElementsByClassName("tab-menu-wrapper-row")[0].innerHTML = html + child
    }

    if (document.getElementsByClassName("video-actions-tabs")[0]) {
        let html = document.getElementsByClassName("video-actions-tabs")[0].innerHTML;
        let child = `
        <div id="mySuperDownloadArea" style="display:none">
        </div>
        `;
        document.getElementsByClassName("video-actions-tabs")[0].innerHTML = html + child
    }
}

