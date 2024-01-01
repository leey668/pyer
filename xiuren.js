// ==UserScript==
// @name         XIUREN Enhanced Gallery Loader
// @version      0.1
// @description  www.newxiuren.com 显示全部图片，开启百度网盘下载页面，增加提取百度网盘链接按钮
// @author       leepyer
// @match        *//*.newxiuren.com.cn/piclist.aspx?id=*
// @match        *//*.newxiuren.com/piclist.aspx?id=*
// @icon         http://m.newxiuren.com.cn/images/style/favicon.ico
// ==/UserScript==

(function() {
    'use strict';
    // 通过URL正则匹配确保脚本只在指定的页面上执行
    if (!/piclist\.aspx\?id=/.test(window.location.href)) return;
    // 查找目标元素，显示隐藏的百度网盘下载区域
    var targetElement = document.getElementById('downlaod');
    if(targetElement) {
        targetElement.style.display = 'block'; // 修改元素的CSS样式使其可见
    }
    // 定位并修改页面上的下载链接和密码元素
    var downloadLinkElement = document.querySelector(".piclist_dl_l");
    var passwordElement = document.getElementById("copy-content");
    if (downloadLinkElement && passwordElement) {
        // 解析页面上的下载链接
        var downloadLink = downloadLinkElement.getAttribute('onclick');
        var urlMatch = downloadLink && downloadLink.match(/window.open\('([^']+)'\)/);
        var url = urlMatch && urlMatch[1];
        if (url) {
            // 将提取的密码拼接到下载链接上
            var password = passwordElement.value;
            var fullLink = url + "?pwd=" + password;
            // 创建下载图标并配置样式，添加到页面底部供用户点击
            var icon = document.createElement('img');
            icon.src = 'https://nd-static.bdstatic.com/m-static/wp-brand/favicon.ico';
            icon.style.cssText = 'cursor:pointer;position:fixed;right:10px;bottom:10px;zIndex:1000;width:32px;height:32px;';
            icon.onclick = function() {
                // 提示用户解压密码并在新窗口中打开下载链接
                alert('解压密码：www.newxiuren.com');
                window.open(fullLink, '_blank');
            };
            document.body.appendChild(icon); // 将图标元素添加到DOM中
        }
    }
    // 获取并操作内容容器，为加载所有图片做准备
    const contentDiv = document.getElementById('content');
    if (!contentDiv) return; // 如果内容容器不存在，则不执行后续代码
    // 提取第一张图片的信息，作为其他图片的加载模板
    const firstImageAnchor = contentDiv.querySelector('figure a');
    const firstImage = firstImageAnchor ? firstImageAnchor.querySelector('img') : null;
    if (!firstImage) return; // 如果第一张图片不存在，则不执行后续代码
    // 通过图片alt属性提取图片总数
    const match = firstImage.alt.match(/\[(\d+)P\]/);
    if (!match) return; // 如果没有匹配到图片总数，则不执行后续代码
    const totalImages = parseInt(match[1], 10);
    // 提取基本的图片URL和图片集的前缀
    let baseImageUrl = firstImage.src.substring(0, firstImage.src.lastIndexOf("/") + 1);
    let imagePrefix = firstImage.src.substring(firstImage.src.lastIndexOf("/") + 1, firstImage.src.lastIndexOf("/") + 9);
    contentDiv.innerHTML = ''; // 清空原有的图片内容，准备加载新的图片集
    // 循环创建并添加所有图片到内容容器中
    for (let i = 1; i <= totalImages; i++) {
        let numStr = i.toString().padStart(2, '0'); // 确保图片编号为两位数
        let imageUrl = `${baseImageUrl}${imagePrefix}${numStr}.jpg`; // 构造每张图片的URL
        let figure = document.createElement('figure');
        figure.style.margin = '4px auto'; // 设置图片的边距
        let anchor = document.createElement('a');
        anchor.href = imageUrl; // 设置链接为图片的URL
        anchor.dataset.size = "100x100"; // 设置数据属性
        anchor.dataset.author = "newxiuren.cc"; // 设置作者信息
        let img = document.createElement('img');
        img.src = imageUrl; // 图片源为构造的URL
        img.alt = firstImage.alt; // 使用第一张图片的alt作为其他图片的alt
        anchor.appendChild(img); // 将图片添加到链接元素中
        figure.appendChild(anchor); // 将链接元素添加到figure中
        contentDiv.appendChild(figure); // 将figure添加到内容容器中
    }
})();
