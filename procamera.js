/*************************************

项目名称：ProCamera
脚本作者：leepyer

**************************************

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/leey668/pyer/main/procamera.js
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/leey668/pyer/main/procamera.js
[mitm]
hostname = api.revenuecat.com

*************************************/

var obj1 = {};
var obj2 = JSON.parse(
	(typeof $response != "undefined" && $response.body) || null
);

if (typeof $response == "undefined") {
	delete $request.headers["x-revenuecat-etag"];
	delete $request.headers["X-RevenueCat-ETag"];
	obj1.headers = $request.headers;
} else if (obj2 && obj2.subscriber) {
	obj2 = {
		request_date_ms: 1708878933750,
		request_date: "2024-02-25T16:35:33Z",
		subscriber: {
			non_subscriptions: {},
			first_seen: "2024-02-25T15:46:00Z",
			original_application_version: "4192",
			other_purchases: {},
			management_url: null,
			subscriptions: {
				"com.cocologics.ProCamera.Up.Purchase1": {
					store: "app_store",
					purchase_date: "2023-09-09T09:09:09Z",
					product_identifier: "com.cocologics.ProCamera.Up.Purchase1",
					original_purchase_date: "2023-09-09T09:09:09Z",
					ownership_type: "PURCHASED",
					expires_date: "2099-09-09T09:09:09Z",
				},
				"com.cocologics.ProCamera.vividHDR001": {
					store: "app_store",
					purchase_date: "2023-09-09T09:09:09Z",
					product_identifier: "com.cocologics.ProCamera.vividHDR001",
					original_purchase_date: "2023-09-09T09:09:09Z",
					ownership_type: "PURCHASED",
					expires_date: "2099-09-09T09:09:09Z",
				},
			},
			entitlements: {
				pro_camera_up_entitlement: {
					product_identifier: "com.cocologics.ProCamera.Up.Purchase1",
					expires_date: "2099-09-09T09:09:09Z",
					purchase_date: "2023-09-09T09:09:09Z",
				},
				vivid_hdr_entitlement: {
					product_identifier: "com.cocologics.ProCamera.vividHDR001",
					expires_date: "2099-09-09T09:09:09Z",
					purchase_date: "2023-09-09T09:09:09Z",
				},
			},
			original_purchase_date: "2023-11-24T04:16:06Z",
			original_app_user_id:
				"$RCAnonymousID:2abb1454cde84fca87d0465d0f3623c2",
			last_seen: "2024-02-25T16:32:02Z",
		},
	};
	obj1.body = JSON.stringify(obj2);
}

$done(obj1);
