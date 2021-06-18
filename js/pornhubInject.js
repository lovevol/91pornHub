let quality_240p = "无"
let quality_480p = "无"
let quality_720p = "无"
let quality_1080p = "无"

document.getElementById('mySuperDownload').addEventListener('click', async function () {
    $("#mySuperDownloadArea").toggle()
    let itemId = WIDGET_RATINGS_LIKE_FAV.itemId
    let flashvarsId = "flashvars_" + itemId;
    let flashvarsObject = eval(flashvarsId)
    let getMediaUrl = ""
    $.each(flashvarsObject.mediaDefinitions, function (i, item) {
        if (item.format == 'mp4') {
            getMediaUrl = item.videoUrl
        }
    })
    // 异步调用
    await getVideoUrl(getMediaUrl)
    let html = "";
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

function getVideoUrl(getMediaUrl) {
    var p = new Promise(function (resolve, reject) { //做一些异步操作
        $.ajax({
            type: "GET",
            url: getMediaUrl,
            success: function (data, status) {
                if (status == "success") {
                    $.each(data, function (i, item) {
                        if (item.quality == '240') {
                            quality_240p = item.videoUrl
                        }
                        if (item.quality == '480') {
                            quality_480p = item.videoUrl
                        }
                        if (item.quality == '720') {
                            quality_720p = item.videoUrl
                        }
                        if (item.quality == '1080') {
                            quality_1080p = item.videoUrl
                        }
                    });
                    resolve("通讯结束！")
                }
            },
            error: function (xhr, errorText, errorType) {
            },
            complete: function () {
                //do something
            }
        })
    });
    return p;
}

