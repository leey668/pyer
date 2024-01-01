// ==UserScript==
// @name         XIUREN Enhanced Gallery Loader
// @version      0.1
// @description  m.newxiuren.com(移动版) 显示全部图片，开启百度网盘下载页面，增加提取百度网盘链接按钮
// @author       leepyer
// @match        *//m.newxiuren.com.cn/piclist.aspx?id=*
// @match        *//m.newxiuren.com/piclist.aspx?id=*
// @icon         http://m.newxiuren.com.cn/images/style/favicon.ico
// ==/UserScript==

(function() {
    'use strict';
    if (!/piclist\.aspx\?id=/.test(window.location.href)) return;

    let targetElement = document.getElementById('downlaod');
    if (targetElement) {
        targetElement.style.display = 'block';
    }

    let downloadLinkElement = document.querySelector(".piclist_dl_l");
    let passwordElement = document.getElementById("copy-content");
    if (downloadLinkElement && passwordElement) {
        const downloadLink = downloadLinkElement.getAttribute('onclick');
        const urlMatch = downloadLink && downloadLink.match(/window.open\('([^']+)'\)/);
        let url = urlMatch && urlMatch[1];
        if (url) {
            const password = passwordElement.value;
            const fullLink = url + "?pwd=" + password;
            const icon = document.createElement('img');
            icon.src = 'https://nd-static.bdstatic.com/m-static/wp-brand/favicon.ico';
            icon.style.cssText = 'cursor:pointer;position:fixed;right:10px;bottom:10px;zIndex:1000;width:32px;height:32px;';
            icon.onclick = function() {
                alert('解压密码：www.newxiuren.com');
                window.open(fullLink, '_blank');
            };
            document.body.appendChild(icon);
        }
    }

    const contentDiv = document.getElementById('content');
    if (!contentDiv) return;

    const firstImageAnchor = contentDiv.querySelector('figure a');
    const firstImage = firstImageAnchor ? firstImageAnchor.querySelector('img') : null;
    if (!firstImage) return;

    const match = firstImage.alt.match(/\[(\d+)P.*\]/);
    if (!match) return;

    const totalImages = parseInt(match[1], 10);
    let baseImageUrl = firstImage.src.substring(0, firstImage.src.lastIndexOf("/") + 1);
    let imagePrefix = firstImage.src.substring(firstImage.src.lastIndexOf("/") + 1, firstImage.src.lastIndexOf("/") + 9);
    let docFragment = document.createDocumentFragment();

    for (let i = 1; i <= totalImages; i++) {
        let numStr = i.toString().padStart(2, '0');
        let imageUrl = `${baseImageUrl}${imagePrefix}${numStr}.jpg`;
        let figure = document.createElement('figure');
        figure.style.margin = '4px auto';
        let anchor = document.createElement('a');
        anchor.href = imageUrl;
        anchor.dataset.size = "100x100";
        anchor.dataset.author = "newxiuren.cc";
        let img = document.createElement('img');
        img.src = imageUrl;
        img.alt = firstImage.alt;
        anchor.appendChild(img);
        figure.appendChild(anchor);
        docFragment.appendChild(figure);
    }
    contentDiv.innerHTML = '';
    contentDiv.appendChild(docFragment);
})();