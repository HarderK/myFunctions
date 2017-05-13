var throttle = function(fn, interval) {
	var __self = fn,
		timer,
		firstTime = true;		// 标志是否是第一次调用

	return function() {
		var args = arguments,
			that = this;		// 执行上下文十分重要，因为总是和事件处理程序相关,事件处理程序中,this指向该DOM元素
		if(firstTime) {		// 第一次调用，直接执行函数fn
			__self.apply(that, args);
			return firstTime = false;		// 不是第一次调用
		}

		if(timer) {		// 前一次执行的timer还在
			return;		// 什么都不做
		}

		// 设置timer，延迟一段时间执行
		timer = setTimeout(function() {
			clearTimeout(timer);		// 考虑到如果执行队列过长，上一次的调用还没有执行，则取消上一次的调用，直接执行本次调用
			timer = null;		// 将timer置为null，标识该次调用已经执行
			__self.apply(that, args);		// 执行回调 
		}, interval || 500);
	};
};