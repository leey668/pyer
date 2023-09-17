/*************************************

项目名称：经济学人·商论
脚本作者：leepyer
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/api\.hummingbird\.businessreview\.global\/api\/subscriptions\/get_active url script-response-body https://raw.githubusercontent.com/leey668/pyer/main/br.js
^http:\/\/tim\.static-economist\.com\/discover url reject
[mitm]
hostname = api.hummingbird.businessreview.global

*************************************/

let obj = JSON.parse($response.body);
obj = {"error":false,"account_member_since":"Jul 15th, 2022","subscriptions":[{"account":{"$ref":"accounts","$id":{"$oid":""}},"platform":"web","store_product_id":"GBR Yearly SO-0920","purchase_date":{"sec":"1657843200"},"expiration_date":{"sec":"4070880000"},"active":true,"subscription_data":"{&#34;stripe_event_id&#34;:&#34;&#34;,&#34;charge_id&#34;:&#34;&#34;}","payment_type":"alipay","stripe_event_id":"","charge_id":"","amount":29900,"source":"web-alipay","renewal_flag":true,"created_date":{"$date":{"$numberLong":"1657889224714"}},"id":"","state":"paid","payment_frequency":"GBR Yearly SO-0920"}],"subscription_type":"Paid"};
$done({ body: JSON.stringify(obj) });