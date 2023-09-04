/*************************************

项目名称：考研数学欧几里得
脚本作者：leepyer
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/api\.tumukaoyan\.com\/api\/wx\/CheckCodeV3 url script-response-body https://raw.githubusercontent.com/leey668/pyer/main/kysx.js

[mitm]
hostname = api.tumukaoyan.com
*************************************/

// 加密函数
function encrypt(data, key, iv) {
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  let encrypted = cipher.update(data, 'utf8', 'base64');
  encrypted += cipher.final('base64');
  
  return encrypted;
}

// 解密函数
function decrypt(encrypted, key, iv) {
	const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
	let decrypted = decipher.update(encrypted, 'base64', 'utf8');
	decrypted += decipher.final('utf8');
	
	return decrypted;
}

const key = Buffer.from('59b87344b54f31977f7c3dd445ab13e1', 'utf8');
const iv = Buffer.from('59b87344b54f3197', 'utf8');

var obj = JSON.parse($response.body);
var decryptedText = JSON.parse(decrypt(obj.data, key, iv));
decryptedText.SysUserInfo.VipEndTime = "2026-09-04T23:35:17";
const plaintext = JSON.stringify(decryptedText);
const encryptedText = encrypt(plaintext, key, iv);
obj.data = encryptedText;
$done({body: JSON.stringify( obj)});
