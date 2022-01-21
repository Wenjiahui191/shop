window.addEventListener('load', function() {
    // 预览小图轮播
    var bigimg = document.querySelector('.bigimg');
    var mask = document.querySelector('.mask');
    var detail = document.querySelector('.detail');
    bigimg.addEventListener('mouseover', function() {
        mask.style.display = 'block';
        detail.style.display = 'block';
    })
    bigimg.addEventListener('mouseout', function() {
        mask.style.display = 'none';
        detail.style.display = 'none';
    })
    bigimg.addEventListener('mousemove', function(e) {
        // 鼠标到图片预览框的坐标赋值给遮罩
        var x = e.pageX - bigimg.offsetLeft;
        var y = e.pageY - bigimg.offsetTop;
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;

        console.log(maskX, maskY);
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= 100) {
            maskX = 100;
        }
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= 100) {
            maskY = 100;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        maxX = bigimg.offsetWidth - mask.offsetWidth;
        maxY = bigimg.offsetHeight - mask.offsetWidth;
        //大图片和小图有比例对应 hugeX=maskX*hugemaxX/maxX
        var huge = document.querySelector('.huge');
        huge.style.left = maskX * (detail.offsetWidth - huge.offsetWidth) / maxX + 'px';
        huge.style.top = maskY * (detail.offsetHeight - huge.offsetHeight) / maxY + 'px';
    })

    // 参数选择框功能
    // 1. 边框变色
    var choose = document.querySelectorAll('#choosebox');
    var color = choose[0].querySelectorAll('li');
    var banben = choose[1].querySelectorAll('li');
    var ram = choose[2].querySelectorAll('li');
    var buyway = choose[3].querySelectorAll('li');
    var type = choose[4].querySelectorAll('li');

    function checkboxcg(a) {
        for (i = 0; i < a.length; i++) {
            a[i].addEventListener('click', function() {
                for (i = 0; i < a.length; i++) {
                    a[i].style.borderColor = '#ededed';
                }
                this.style.borderColor = 'red';
            })
        }
    }

    checkboxcg(color);
    checkboxcg(banben);
    checkboxcg(ram);
    checkboxcg(buyway);
    checkboxcg(type);
})