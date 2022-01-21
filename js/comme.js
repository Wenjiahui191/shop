window.addEventListener('load', function() {
    //快捷导航栏start

    var serch_btn = document.querySelector('#serch_btn');
    // console.log(serch_btn);
    // 搜索框获得焦点
    serch_btn.addEventListener('focus', function() {
        if (this.placeholder === '办公笔记本') {
            this.placeholder = '';

        }
    })
    serch_btn.addEventListener('blur', function() {
            if (this.placeholder === '') {
                this.placeholder = '办公笔记本'
            }
            this.style.color = '#666666';
        })
        //按s键直接光标进入搜索
    document.addEventListener('keyup', function(e) {
        if (e.keyCode == 83) {
            serch_btn.focus();
        }
    });
})