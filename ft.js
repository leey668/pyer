/*************************************

项目名称：FT中文网
脚本作者：leepyer
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/dqbam2jv6gg9m\.cloudfront\.net\/index\.php\/jsapi\/paywall url script-response-body https://raw.githubusercontent.com/leey668/pyer/main/ft.js
[mitm]
hostname = dqbam2jv6gg9m.cloudfront.net

*************************************/

var obj = JSON.parse($response.body);
obj = {"paywall":0,"premium":1,"expire":"4092599349","standard":1,"v":2099,"campaign_code":"","latest_duration":"yearly","addon":1};
$done({body: JSON.stringify(obj)});

