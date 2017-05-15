/**
 * 创建img节点，记载图片
 * 调用方式myImage()(src)
 * @return {Function} 返回设置图片src的方法
 */
var myImage = function() {
	var imageNode = document.createElement('img');
	document.body.appendChild(imageNode);

	return function(src) {
		imageNode.src = src;		// 设置图片src
	};
};


// 代理实现图片预加载，调用方式和myImage相同
var proxyImage = function(src) {
	var setSrc = myImage();		// 设置src的函数
	var img = new Image();		// 实例化一个Image()对象实现预加载

	// img加载成功后调用
	img.onload = function() {
		setSrc(this.src);		// 这时候图片已经下载好，可以直接显示到页面上了
	}
	return function() {
		setSrc('../loading.png');		// 显示一个正在加载的图片
		img.src = src;		// 预加载图片
	};
};
