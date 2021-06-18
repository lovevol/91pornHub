document.getElementById('mySuperDownload').addEventListener('click', function () {
    $("#mySuperDownloadArea").toggle()
    let url = "";
    if ($('source')) {
        if ($('source')[0]) {
            url = $('source')[0].src;
        }
    }
    let html = "";
    let child = `
    <div>
        <sapn>视频地址:</span> <textarea cols="80" id="urlArea" readonly="readonly">${url}</textarea><a class = "btn btn-primary" onClick="copyUrl()">复制</a>
    </div>
    `
    document.getElementById("mySuperDownloadArea").innerHTML = html + child;
});

function copyUrl() {
    let Url2 = document.getElementById("urlArea");
    Url2.select(); // 选择对象
    document.execCommand("Copy"); // 执行浏览器复制命令
}
