# 一些实用函数
1. [bind()](https://github.com/HarderK/myFunctions/blob/master/Bind.js)。也就是ES5中的bind()方法
2. [curry()函数柯里化](https://github.com/HarderK/myFunctions/blob/master/Curry.js)
3. [节流函数throttle](https://github.com/HarderK/myFunctions/blob/master/Throttle.js)。用于控制函数被频繁调用的场景，比如resize事件、mousemove事件、进度事件等。常用语一些被动的操作
4. [分时函数timeChunk](https://github.com/HarderK/myFunctions/blob/master/TimeChunk.js)。当用户主动调用，但会严重影响页面性能的时候采用，比如一次性向页面插入1000个节点，那么我们可以分100次插入，每次插入10个节点
5. [惰性载入函数](https://github.com/HarderK/myFunctions/blob/master/addEvent.js),典型的例子就是构造一个通用的事件绑定函数，为了避免每次都进行分支的判断，就采用惰性载入函数，但是第一次调用会消耗一些性能
6. [创建单例](https://github.com/HarderK/myFunctions/blob/master/CreateSingle.js),单例模式的介绍参考我的博文，[JavaScript设计模式之单例模式](http://www.harderk.com/2017/05/13/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E4%B9%8B%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F/#more)
7. [图片预加载](https://github.com/HarderK/myFunctions/blob/master/PreloadImage.js)