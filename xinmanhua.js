/*************************************

项目名称：新漫画
脚本作者：leepyer
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/xapi\.xinmanhua\.net\/(chapters\/\d+\/isreadable|member|worksinfos\/\d+\?) url script-response-body https://raw.githubusercontent.com/leey668/pyer/main/xinmanhua.js
[mitm]
hostname = xapi.xinmanhua.net

*************************************/

if ($request.url.includes("/member")){
	if($response.body){
		var obj = JSON.parse($response.body);
		obj.data.attributes.isvip = 1;
		obj.data.attributes.ios_coins = 999999;
		obj.data.attributes.ios_coupon = 999999;
		obj.data.attributes.overduedate = 4070880000;
		$done({body: JSON.stringify(obj)});
	}else {
    $done({});
  }
}else if ($request.url.match(/\/chapters\/\d+\/isreadable/)){
	var obj = JSON.parse($response.body);
	obj.data.attributes.allowdownload = 1;
	obj.data.attributes.ischarge = 0;
	obj.data.attributes.isvipchap = 0;
	obj.data.attributes.isreadable = 1;
	$done({body: JSON.stringify(obj)});
}else if ($request.url.match(/\/worksinfos\/\d+\?/)){
	if($response.body){
		var modified = $response.body;
		modified = modified.replace(/"ischarge":1/g, '"ischarge":0')
		.replace(/"isvipchap":1/g, '"isvipchap":0')
		.replace(/"allowdownload":0/g, '"allowdownload":1');
		$done({body: modified});
	}else {
    $done({});
  }
}