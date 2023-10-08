document.getElementById('mySuperDownload').addEventListener('click', function () {
    $("#mySuperDownloadArea").toggle()
    let title = $("h3.title")[1].innerText
    let url = player_aaaa.url
    let child = `
        <div>
        <sapn>视频地址:</span> <textarea cols="80" id="urlArea" readonly="readonly" style="margin-top: 10px; height: 22px">${url}</textarea>
        <br>
        <sapn>标题和地址:</span> <textarea cols="80" id="urlArea2" readonly="readonly" style="margin-top: 10px; height: 22px">${title}@${url}\n</textarea>
        <br>
        <div style="margin: 10px">
            <a style="z-index: 2; bottom: 5px; right: 5px; padding: 2px 5px; border-radius: 4px; font-size: 10px; overflow:hidden; text-overflow:ellipsis; -o-text-overflow:ellipsis; white-space:nowrap; background-repeat: no-repeat; background-color: rgba(0,0,0,.6); color: #fff;" onClick="copyUrl('urlArea')">复制下载链接</a>
            <a style="z-index: 2; bottom: 5px; right: 5px; padding: 2px 5px; border-radius: 4px; font-size: 10px; overflow:hidden; text-overflow:ellipsis; -o-text-overflow:ellipsis; white-space:nowrap; background-repeat: no-repeat; background-color: rgba(0,0,0,.6); color: #fff;" onClick="copyUrl('urlArea2')">复制标题和链接</a>
        </div>
    </div>
    `
    let html = "";
    document.getElementById("mySuperDownloadArea").innerHTML = html + child;
});

function copyUrl(id) {
    let Url2 = document.getElementById(id);
    Url2.select(); // 选择对象
    document.execCommand("Copy"); // 执行浏览器复制命令
}
