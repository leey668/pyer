/*************************************

项目名称：glass
脚本作者：leepyer
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/glass\.photo\/api\/(v2\/users\/[0-9a-zA-Z-]+$|v1\/account|v3\/token) url script-response-body https://raw.githubusercontent.com/leey668/pyer/main/glass.js
[mitm]
hostname = glass.photo

*************************************/

if (-1 !== $request.url.indexOf("api/v1/account")){
    var obj = JSON.parse($response.body);
    obj.needs_subscription = false;
    obj.is_patron = true;
    $done({body: JSON.stringify(obj)});
  }else if (-1 !== $request.url.indexOf("api/v2/users")){
    var obj = JSON.parse($response.body);
    obj.is_patron = true;
    $done({body: JSON.stringify(obj)});
  }else if (-1 !== $request.url.indexOf("api/v3/token")){
    var obj = JSON.parse($response.body);
    obj.user.needs_subscription = false;
    obj.user.is_patron = true;
    $done({body: JSON.stringify(obj)});
  }