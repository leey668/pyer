// ==UserScript==
// @name         XIUREN
// @version      0.1
// @description  www.newxiuren.com 提取百度网盘链接
// @author       leepyer
// @match        http://m.newxiuren.com.cn/piclist.aspx?id=*
// @icon         http://m.newxiuren.com.cn/images/style/favicon.ico
// ==/UserScript==

(function() {
    'use strict';
    // 确保脚本在相应的piclist页面上运行
    if (!/piclist\.aspx\?id=/.test(window.location.href)) return;

    // 尝试获取下载链接的元素
    var downloadLinkElement = document.querySelector(".piclist_dl_l");
    if (downloadLinkElement) {
        // 从onclick属性中获取下载链接
        var downloadLink = downloadLinkElement.onclick.toString();
        // 使用正则表达式提取URL
        var urlMatch = downloadLink.match(/window.open\('([^']+)'\)/);
        if (urlMatch && urlMatch[1]) {
            var url = urlMatch[1];  // 实际的下载链接

            // 尝试获取包含密码的元素
            var passwordElement = document.getElementById("copy-content");
            if (passwordElement) {
                var password = passwordElement.value;  // 密码值
                var fullLink = url + "?pwd=" + password;  // 将链接和密码拼接

                // 创建图标，并设置为下载图标
                var icon = document.createElement('img');
                icon.src = 'https://nd-static.bdstatic.com/m-static/wp-brand/favicon.ico';
                icon.style.cursor = 'pointer';
                icon.style.position = 'fixed';
                icon.style.right = '10px';
                icon.style.bottom = '10px';
                icon.style.zIndex = 1000;
                icon.style.width = '32px';
                icon.style.height = '32px';

                // 为图标添加点击事件
                icon.onclick = function() {
                    alert('解压密码：www.newxiuren.com');
                    window.open(fullLink, '_blank'); // 打开拼接好的链接
                };

                // 将图标添加到body中
                document.body.appendChild(icon);
            }
        }
    }
})();