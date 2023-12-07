/*************************************

项目名称：The Guardian
脚本作者：leepyer
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/members-data-api\.theguardian\.com\/user-attributes\/me url script-response-body https://raw.githubusercontent.com/leey668/pyer/main/theguardian.js
[mitm]
hostname = members-data-api.theguardian.com

*************************************/

var obj = JSON.parse($response.body);
obj.showSupportMessaging = false;
var accessLevels = ['member', 'paidMember', 'guardianPatron', 'paperSubscriber', 'recurringContributor', 'supporterPlus', 'digitalPack', 'guardianWeeklySubscriber'];
accessLevels.forEach(level => obj.contentAccess[level] = true);
$done({ body: JSON.stringify(obj) });
