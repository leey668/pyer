/*************************************
项目名称：NYMF下载无水印图片
**************************************
[rewrite_local]
https:\/\/nymfapp\.com\/api\/photos url script-response-body https://raw.githubusercontent.com/leey668/pyer/main/nymf.js
[mitm]
hostname = nymfapp.com
*************************************/
var obj = JSON.parse($response.body);
obj.forEach(element => {
  let url = element.main;
  Object.assign(element, {
    source: url,
    pro_main: url,
    watermark: url
  });
});
$done({ body: JSON.stringify(obj) });