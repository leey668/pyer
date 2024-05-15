var responseBody = $response.body;
var requestUrl = $request.url;

if (!responseBody) $done({});

if (requestUrl.includes('/api/v2/member/subscription')) {
    var obj = {
        expiredAt: 4070880000,
        remainDays: 9999,
        active: true,
        startedAt: 1715749975
    };
    $done({body: JSON.stringify(obj)});
} else if (requestUrl.includes('/api/v2/user_goods_subscriptions/overall')) {
    var obj = {
		items: [{
			startedAt: 1715749975,
			category: 4,
			status: 2,
			expiredAt: 4070880000,
			goodsTitle: 'member',
			remainDays: 9999,
			goodsUid: 'XnV1EW',
			firstStartedAt: 1715749975
		}]
	};
	$done({body: JSON.stringify(obj)});
}