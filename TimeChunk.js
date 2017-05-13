/**
 * 分时函数，将一个影响页面性能的连续操作分为多个时间执行
 * @param  {Array}   data  操作函数所需要用到的数据数组， 比如创建1000个节点的数据
 * @param  {Function} fn    执行操作的函数，比如创建节点
 * @param  {Number}   count 	每一个时间间隔执行操作的次数, 默认为1
 * @return {Function}         返回函数，调用则执行连续操作
 */
var timeChunk = function(data, fn, count) {
	var t = null;		// 定时器

	// 每个时间间隔执行的操作
	var start = function () {
		for(var i = 0, len = data.length; i < Math.min(count || 1, data.length), i++) {
			var item = data.shift();		// 取出最前面的数据
			fn(item);		// 执行创建节点函数
		}
	}
	
	// interval为分批执行的时间间隔
	return function(interval) {
		if(t !== null) {
			clearInterval(t);		// 考虑闭包被重复调用，则清除上一次调用的定时器
		}

		t =setInterval(function() {
			// 如果全部执行完，则取消定时器
			if(data.length === 0) {
				return clearInterval(t);
			}
	
			// 执行分段操作
			start();
		}, interval || 200);
	}

}