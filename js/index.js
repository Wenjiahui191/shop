window.addEventListener('load', function() {
    // 弹窗
    // var ad = document.querySelector('.ad');
    // setTimeout(function() {
    //         ad.style.display = 'none';

    //     }, 5000)
    //轮播图版块
    //缓动动画封装函数
    //自动播放
    var timer = setInterval(function() {
        rbtn.click();
    }, 2000);

    function animate(obj, target, callback) {

        //让定时器唯一
        clearInterval(obj.timer)

        obj.timer = setInterval(function() {

            var step = (target - obj.offsetLeft) / 10
                //算元运算判断,如果步长值>0 就向上取整,否则就向下取整
            step = step > 0 ? Math.ceil(step) : Math.floor(step)

            if (obj.offsetLeft == target) {
                clearInterval(obj.timer)

                //判断是否有回调函数
                // if(callback){
                //     callback()
                // }

                // 短路运算
                //如果有传入参数,就执行callback()
                //若没有,则返回
                callback && callback()
            }
            obj.style.left = obj.offsetLeft + step + 'px'
        }, 15)
    }
    var lbtn = document.querySelector('.lbtn');
    var rbtn = document.querySelector('.rbtn');
    var focus = document.querySelector('.focus');
    var ol = focus.querySelector('.circle');
    var ul = focus.querySelector('ul');
    var focusWidth = focus.offsetWidth;
    var num = 0;
    var circle = 0;
    // 鼠标经过出现左右按钮
    focus.addEventListener('mouseenter', function() {
        lbtn.style.display = 'block';
        rbtn.style.display = 'block';
        clearInterval(timer);
        timer = null;
    });
    focus.addEventListener('mouseleave', function() {
        lbtn.style.display = 'none';
        rbtn.style.display = 'none';
        timer = setInterval(function() {
            rbtn.click();
        }, 2000)
    });
    // 动态生成ol里面的li
    for (i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i);
        ol.appendChild(li);
        li.addEventListener('click', function() {
            for (i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index');
            console.log(index);
            num = index;
            circle = index;
            animate(ul, -index * focusWidth);
        })
    }
    ol.children[0].className = 'current';
    var last = ul.children[0].cloneNode(true);
    ul.appendChild(last);

    //右侧按钮点击切换轮播图
    // flag的作用在于防止快速点击轮播图切换过快
    var flag = true;
    rbtn.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function() {
                flag = true;
            });
            circle++;
            for (i = 0; i < ul.children.length - 1; i++) {
                ol.children[i].className = '';
            }
            if (circle == ul.children.length - 1) {
                circle = 0;
            }
            ol.children[circle].className = 'current';
        }
    });
    // 左侧按钮
    lbtn.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num <= 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth;
            }
            num--;
            animate(ul, -num * focusWidth, function() {
                flag = true;
            });
            circle--;
            for (i = 0; i < ul.children.length - 1; i++) {
                ol.children[i].className = '';
            }
            if (circle < 0) {
                circle = ol.children.length - 1;
            }
            console.log(circle);
            console.log(ol.children);
            ol.children[circle].className = 'current';
        }
    });



    //侧边栏 放在main的今日推荐
    var app = document.querySelector('.app');
    var side = document.querySelector('.elevator');
    var floor = document.querySelector('.like');
    var backTop = document.querySelector('.backtop');
    // side侧边栏在app大盒子内的绝对定位
    var sideoffsetTop = side.offsetTop;
    // app大盒子距离页面顶端的距离
    var appTop = app.offsetTop;
    // side距离页面顶端的距离
    var sideTop = appTop + side.offsetTop;
    // 返回框出现的最小位置
    var minTop = floor.offsetTop;
    console.log(appTop);
    document.addEventListener('scroll', function() {
            if (window.pageYOffset >= sideTop) {
                side.style.position = 'fixed';
                side.style.top = 0 + 'px';
            } else {
                side.style.position = 'absolute';
                side.style.top = sideoffsetTop + 'px';
            }
            if (window.pageYOffset >= minTop) {
                backTop.style.display = 'block';
            } else {
                backTop.style.display = 'none';
            }
        })
        //点击返回顶部
    backTop.addEventListener('click', function() {
        animation(window, 0);
    });

    function animation(obj, target, callback) {
        //让定时器唯一
        clearInterval(obj.timer)
        obj.timer = setInterval(function() {

            var step = (target - window.pageYOffset) / 10
                //算元运算判断,如果步长值>0 就向上取整,否则就向下取整
            step = step > 0 ? Math.ceil(step) : Math.floor(step)

            if (window.pageYOffset == target) {
                clearInterval(obj.timer)

                //判断是否有回调函数
                // if(callback){
                //     callback()
                // }

                // 短路运算
                //如果有传入参数,就执行callback()
                //若没有,则返回
                callback && callback()
            }
            // obj.style.left = window.pageYOffset + step + 'px'
            window.scroll(0, window.pageYOffset + step);
        }, 15)
    }

})