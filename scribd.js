/*************************************

项目名称：Scribd
脚本作者：leepyer
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/api\.scribd\.com\/api\/v2\/(payments\/(current_subscription|apple_receipt)|users\/account_info) url script-response-body https://raw.githubusercontent.com/leey668/pyer/main/scribd.js
[mitm]
hostname = api.scribd.com

*************************************/

if (-1 !== $request.url.indexOf("/api/v2/payments/current_subscription")) {
    var obj = JSON.parse($response.body);
    obj.result = {
        "id": 999999999,
        "state": "monthly",
        "next_payment_due": 4070880000,
        "limited_validity": null,
        "last_paid_date": null,
        "total_price": {
          "value": 999,
          "currency": "USD"
        },
        "created_at": 1696062733,
        "can_be_canceled": false,
        "description": "cracked by leepyer",
        "type": "apple",
        "title": "Month Pass",
        "purchase_valid_to": null,
        "can_be_renewed": false,
        "subscription_days": 9999,
        "subscription": true,
        "subscription_duration": "1200.month",
        "product_handle": "com.scribd.ios.premium.monthly.9.99.unlimited"
      };
    $done({body: JSON.stringify(obj)});
}else if (["/api/v2/payments/apple_receipt", "/api/v2/users/account_info"].includes($request.url)) {
    var obj = JSON.parse($response.body);
    var credit_cache_bust = obj.result.membership_info.credit_cache_bust;
    obj.result.membership_info = {
        "status": "monthly",
        "resume_date": null,
        "credit_cache_bust": "",
        "bill_date": 4070880000,
        "pays_additional_tax": false,
        "has_pmp_access": true,
        "end_date": null,
        "bill_method": "apple",
        "next_bill_price": {
          "value": 999,
          "currency": "USD"
        }
      };
    obj.result.membership_info.credit_cache_bust = credit_cache_bust;
    obj.result.credit_next_accrual_date = 4070880000;
    obj.result.eligible_plans = [];
    obj.result.subscription_promo_state = "none";
    $done({body: JSON.stringify(obj)});
}
