/*************************************

项目名称：SCIENTIFIC AMERICAN
脚本作者：leepyer
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/main-sciam-nature\.content\.pugpig\.com\/subs\/itunes_store\/verify_subscription url script-response-body https://raw.githubusercontent.com/leey668/pyer/main/sa.js
^https:\/\/main-sciam-nature\.content\.pugpig\.com\/subs\/pianomediaoauth_subs\/verify_subscription url script-response-body https://raw.githubusercontent.com/leey668/pyer/main/sa.js
[mitm]
hostname = main-sciam-nature.content.pugpig.com

*************************************/

let modifiedXml = $response.body;
modifiedXml = modifiedXml.replace(/state="inactive"/g, 'state="active"');
modifiedXml = modifiedXml.replace(/message="[^"]*"/g, 'message="cracked by leepyer"');
modifiedXml = modifiedXml.replace(/false/g, 'true');
$done({body: modifiedXml});
