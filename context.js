/*************************************

项目名称：context 0元购
脚本作者：leepyer
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/api\.revenuecat\.com\/v1\/subscribers\/(.+)\/offerings url script-response-body https://raw.githubusercontent.com/leey668/pyer/main/context.js
[mitm]
hostname = api.revenuecat.com

*************************************/

var obj = JSON.parse($response.body);
obj.current_offering_id = "review";
$done({body: JSON.stringify(obj)});

