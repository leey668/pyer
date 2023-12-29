/*************************************

项目名称：众山小笔记 解锁本地功能
脚本作者：leepyer
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/umeecorn\.com\/notebook\/(loginedUser\/(info|tier|balance)|user\/(login|loginApple)) url script-response-body https://raw.githubusercontent.com/leey668/pyer/main/notebook.js
[mitm]
hostname = umeecorn.com

*************************************/

if ($request.url.includes("/notebook/loginedUser/tier")){
	if ($response.body) {
		try {
			var obj = JSON.parse($response.body);
			obj.data = {
				"expireTime": 4070880000000,
				"tierName": "永久尊享",
				"tier": 2,//?????
				"maxSyncCount": 99999,//数据同步额度
				"premiumDays": 10000,//永久尊享型会员获赠进度
				"permanentProTierValue": 10000,//?????
				"isPro": true,
				"permanentProTire": "none",
				"permanentProTier": "none",
				"isPermanentPro": true,//永久会员
				"isDataCountBeta": true,
				"economyDays": 10000//永久标准型会员获赠进度
			};
			$done({body: JSON.stringify(obj)});
		} catch(e) {
			console.log("解析错误或者body不是JSON格式");
			$done({});
		}
	} else {
		console.log("No response body found");
		$done({});
	}
}else if (/\/notebook\/loginedUser\/info|notebook\/user\/login|notebook\/user\/loginApple/.test($request.url)){
	if ($response.body) {
		try {
			var obj = JSON.parse($response.body);
			obj.data.featherBalance = 999999999;//羽毛余额
			obj.data.restOcrQuota = 19998;
			obj.data.ocrQuota = {
				"month": 9999,
				"total": 19998,
				"permanent": 9999
			};
			obj.data.tier = {
				"expireTime": 4070880000000,
				"tierName": "永久尊享",
				"tier": 2,//?????
				"maxSyncCount": 99999,//数据同步额度
				"premiumDays": 10000,//永久尊享型会员获赠进度
				"permanentProTierValue": 10000,//?????
				"isPro": true,
				"permanentProTire": "none",
				"permanentProTier": "none",
				"isPermanentPro": true,//永久会员
				"isDataCountBeta": true,
				"economyDays": 10000//永久标准型会员获赠进度
			};
		$done({body: JSON.stringify(obj)}); 
		} catch(e) {
			console.log("解析错误或者body不是JSON格式");
			$done({});
		}
	} else {
		console.log("No response body found");
		$done({});
	}
}else if ($request.url.includes("/notebook/loginedUser/balance")){
	if ($response.body) {
		try {
			var obj = JSON.parse($response.body);
			obj.data.featherBalance = 999999999;//羽毛余额
			obj.data.restOcrQuota = 19998;
			obj.data.ocrQuota = {
				"month": 9999,
				"total": 19998,
				"permanent": 9999
			};
		$done({body: JSON.stringify(obj)}); 
		} catch(e) {
			console.log("解析错误或者body不是JSON格式");
			$done({});
		}
	} else {
		console.log("No response body found");
		$done({});
	}
}