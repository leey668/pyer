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
        "state": "trialing",
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
}else if (-1 !== $request.url.indexOf("/api/v2/payments/apple_receipt") || -1 !== $request.url.indexOf("/api/v2/users/account_info")) {
    var obj = JSON.parse($response.body);
    obj = {
        "status": {
          "message": "OK",
          "code": 0
        },
        "result": {
          "id": 999999999,
          "crossbrand_banners": {
            "annotations": false,
            "collections": false,
            "saved_content": false
          },
          "resubscription_reason": null,
          "membership_info": {
            "status": "trial",
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
          },
          "credit_next_accrual_date": 4070880000,
          "is_referral_creditable": false,
          "eligible_plans": [],
          "is_paused": false,
          "apple_user_id": "https://t.me/chxm1023",
          "subscription_promo_state": "none",
          "referral_urls": {
            "global": "https://www.scribd.com/gi/bgn44q",
            "email": "https://www.scribd.com/gie/bgn44q",
            "twitter": "https://www.scribd.com/git/bgn44q",
            "facebook_status": "https://www.scribd.com/gifbs/bgn44q",
            "facebook_friend": "https://www.scribd.com/gifbf/bgn44q",
            "text": "https://www.scribd.com/gitx/bgn44q"
          },
          "email": "https://t.me/chxm1023",
          "convertible_plans": [],
          "reading_speed_wpm": 0
        }
      };
    $done({body: JSON.stringify(obj)});
}
