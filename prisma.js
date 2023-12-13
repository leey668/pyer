/*************************************

项目名称：Prisma
脚本作者：leepyer
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
https:\/\/api\.neuralprisma\.com\/receipt\/ios\/(upload|status\/prisma\/) url script-response-body https://raw.githubusercontent.com/leey668/pyer/main/prisma.js
[mitm]
hostname = api.neuralprisma.com

*************************************/

var obj = JSON.parse($response.body);
obj = {
  "is_grace_period": false,
  "is_valid": true,
  "promotional_offer_id": "premium.promo_cancel_survey_discount",
  "is_in_billing_retry_period": true,
  "is_introductory_used": true,
  "device_user_info": {
    "subscription_valid": true,
    "auth_type": "cancel_survey_free_discount"
  },
  "subscription_type": "cancel_survey_free_discount",
  "platform": "ios",
  "product_id": "premium.annual2",
  "auto_renew_enabled": true,
  "expiration_date_unix": 9999,
  "expiration_date": "2099-01-01T00:00:00Z",
  "processing_count": 0,
  "status": "ok",
  "is_trial": false
};
$done({body: JSON.stringify(obj)});