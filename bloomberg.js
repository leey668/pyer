/*************************************

项目名称： Bloomberg
脚本作者：leepyer
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/mobapi\.bloomberg\.com\/wssmobile\/v1\/user\/subscription url script-response-body https://raw.githubusercontent.com/leey668/pyer/main/bloomberg.js
[mitm]
hostname = mobapi.bloomberg.com

*************************************/

if ($response.body) {
    let obj = JSON.parse($response.body);
    obj.subscriptions = [{
        "active": true,
        "product": "BBG",
        "provider": "ZUORA",
        "id": "88888888",
        "subscriptionNumber": "88888888",
        "status": "ACTIVE",
        "endDate": "2099-12-31",
        "startDate": "2024-01-01T00:00:00",
        "entitlements": [{
            "product": "BBG",
            "type": "DIGITAL"
        }],
        "type": "DIGITAL"
    }];
    $done({ body: JSON.stringify(obj) });
} else {
    $done({});
}