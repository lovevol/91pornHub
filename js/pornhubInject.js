document.getElementById('mySuperDownload').addEventListener('click', function () {
    $("#mySuperDownloadArea").toggle()
    let itemId = WIDGET_RATINGS_LIKE_FAV.itemId
    let flashvarsId = "flashvars_" + itemId;
    let flashvarsObject = eval(flashvarsId)
    let quality_1080p = flashvarsObject.quality_1080p || "无"
    let quality_720p = flashvarsObject.quality_720p || "无"
    let quality_240p = flashvarsObject.quality_240p || "无"
    let quality_480p = flashvarsObject.quality_480p || "无"
    let videoTitle = flashvarsObject.video_title
    let html = document.getElementById("mySuperDownloadArea").innerHTML
    html = "";
    let child = `
    <div>
    <ul>
        <li><sapn>240p清晰度:</span> <textarea cols="80" rows="1" id="urlArea1" readonly="readonly">${quality_240p}</textarea><a class = "suggestToggleAlt greyButton " onClick="copyUrl('urlArea1')">复制</a></li>
        <li><sapn>480p清晰度:</span> <textarea cols="80" rows="1" id="urlArea2" readonly="readonly">${quality_480p}</textarea> <a class = "suggestToggleAlt greyButton " onClick="copyUrl('urlArea2')">复制</a></li>
        <li><sapn>720p清晰度:</span> <textarea cols="80" rows="1" id="urlArea3" readonly="readonly">${quality_720p}</textarea> <a class = "suggestToggleAlt greyButton " onClick="copyUrl('urlArea3')">复制</a></li>
        <li><sapn>1080p清晰度:</span><textarea cols="80" rows="1" id="urlArea4" readonly="readonly">${quality_1080p}</textarea> <a class = "suggestToggleAlt greyButton " onClick="copyUrl('urlArea4')">复制</a></li>
    </ul>
    </div>
    `
    document.getElementById("mySuperDownloadArea").innerHTML = html + child;
});

function copyUrl(id) {
    var Url2 = document.getElementById(id);
    Url2.select(); // 选择对象
    document.execCommand("Copy"); // 执行浏览器复制命令
}
