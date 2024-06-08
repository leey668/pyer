/*************************************

项目名称：Limi Cam
脚本作者：leepyer
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/api\.revenuecat\.com\/v1\/subscribers\/(.+)\/offerings url script-response-body https://raw.githubusercontent.com/leey668/pyer/main/limicam.js
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
      "description": "sale active",
      "packages": [
        {
          "platform_product_identifier": "com.uzero.cn.fojicam.month1",
          "identifier": "$rc_monthly"
        },
        {
          "platform_product_identifier": "com.uzero.cn.fojicam.annual1",
          "identifier": "$rc_annual"
        },
        {
          "platform_product_identifier": "com.uzero.cn.fojicam.life2",
          "identifier": "$rc_lifetime"
        },
        {
          "platform_product_identifier": "com.uzero.cn.fojicam.life2",
          "identifier": "Lifetime2"
        }
      ]
    }
  ],
  "current_offering_id": "sale"
};
$done({body: JSON.stringify(obj)});

