# 一些实用函数
1. [bind()](https://github.com/HarderK/myFunctions/blob/master/Bind.js)。也就是ES5中的bind()方法
2. [curry()函数柯里化](https://github.com/HarderK/myFunctions/blob/master/Curry.js)
3. [节流函数throttle](https://github.com/HarderK/myFunctions/blob/master/Throttle.js)。用于控制函数被频繁调用的场景，比如resize事件、mousemove事件、进度事件等。常用语一些被动的操作
4. [分时函数timeChunk](https://github.com/HarderK/myFunctions/blob/master/TimeChunk.js)。当用户主动调用，但会严重影响页面性能的时候采用，比如一次性向页面插入1000个节点，那么我们可以分100次插入，每次插入10个节点