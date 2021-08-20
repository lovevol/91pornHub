document.getElementById('mySuperDownload').addEventListener('click', function () {
    $("#mySuperDownloadArea").toggle()
    let url = player_aaaa.url
    let html = "";
    let child = `
    <div>
        <sapn>视频地址:</span> <textarea cols="80" id="urlArea" readonly="readonly" style="margin-top: 10px; height: 22px">${url}</textarea>
        <a style="z-index: 2; bottom: 5px; right: 5px; padding: 2px 5px; border-radius: 4px; font-size: 10px; overflow:hidden; text-overflow:ellipsis; -o-text-overflow:ellipsis; white-space:nowrap; background-repeat: no-repeat; background-color: rgba(0,0,0,.6); color: #fff;" onClick="copyUrl()">复制</a>
    </div>
    `
    document.getElementById("mySuperDownloadArea").innerHTML = html + child;
});

function copyUrl() {
    let Url2 = document.getElementById("urlArea");
    Url2.select(); // 选择对象
    document.execCommand("Copy"); // 执行浏览器复制命令
}
