/*************************************

项目名称：SimuFlight
脚本作者：leepyer
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/api\.hangxing123\.top\/drone\/userInfo\/v2 url script-response-body https://raw.githubusercontent.com/leey668/pyer/main/simuflight.js
[mitm]
hostname = api.hangxing123.top

*************************************/

var obj = JSON.parse($response.body);
obj.info.member = "1";
obj.info.memberExpire = "2099-09-09 09:09:09";
$done({body: JSON.stringify(obj)});