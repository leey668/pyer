/*************************************

项目名称：方弗相机
脚本作者：leepyer
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/api\.revenuecat\.com\/v1\/subscribers\/(.+)\/offerings url script-response-body https://raw.githubusercontent.com/leey668/pyer/main/ffxj.js
[mitm]
hostname = api.revenuecat.com

*************************************/

var obj = JSON.parse($response.body);
obj = {
  "placements": {
    "fallback_offering_id": "sale"
  },
  "offerings": [
    {
      "metadata": null,
      "identifier": "sale",
      "description": "pro versions",
      "packages": [
        {
          "platform_product_identifier": "com.uzero.funforcam.lifetimepurchase",
          "identifier": "$rc_lifetime"
        },
        {
          "platform_product_identifier": "com.uzero.funforcam.lifetimepurchase.upgrade",
          "identifier": "lifetime2"
        },
        {
          "platform_product_identifier": "com.uzero.funforcam.lifetimepurchase.upfrommonth",
          "identifier": "lifetimefrommonth"
        }
      ]
    }
  ],
  "current_offering_id": "sale"
};
$done({body: JSON.stringify(obj)});

