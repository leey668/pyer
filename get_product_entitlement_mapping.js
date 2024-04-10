const authorization = $request.headers["authorization"];
const url = "https://api.revenuecat.com/v1/product_entitlement_mapping";
const headers = {
    'content-type': 'application/json',
    'authorization': authorization
};
let params = {
    url:url,
    timeout:5000,
    headers:headers,
};
$httpClient.get(params, function(errormsg,response,data) {
    if (errormsg) {
			console.log(errormsg);
    } else {
			$notification.post('', '已获取','');
			console.log(JSON.parse(data));
    }
		$done();
});