// 手机号验证

var lis = document.querySelector('.reg_form').querySelectorAll('li'); //选区列表
var erro = document.querySelector('.erro_icon'); //错误图标
var success = document.querySelector('.success_icon'); //正确图标
//随机数 
function suiji(min, max) {
    parseInt(Math.random() * (max - min + 1) + min, 10);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//手机号验证
var phone = lis[0].children[1]; //  手机号input
var phone_mes = lis[0].children[2]; //提示信息
var ms_btn = lis[0].children[3]; //验证码按钮
var access_num = '';
phone.addEventListener('blur', function() {
    if (this.value.length == 11) {
        phone_mes.style.display = 'inline-block';
        phone_mes.style.color = 'green'
        phone_mes.innerHTML = '<i class="success_icon"></i>手机号正确';
        //获取验证码
        var time = 5;
        ms_btn.addEventListener('click', function() {
            this.disabled = 'true';
            this.style.backgroundColor = '#ccc';
            setInterval(function() {
                if (time !== 0) {
                    ms_btn.innerHTML = time + 's后重试';
                    time--;
                } else {
                    ms_btn.disabled = false;
                    ms_btn.innerHTML = '获取验证码';
                    ms_btn.style.backgroundColor = '#1ba1e6';
                }
            }, 1000)
            access_num += suiji(1000, 9999);
            console.log(access_num);
        });
    } else if (this.value == '') {
        phone_mes.style.display = 'none';
    } else {
        phone_mes.style.display = 'inline-block';
        phone_mes.style.color = 'red'
        phone_mes.innerHTML = '<i class="erro_icon"></i>请输入11位手机号';
    }
})

//验证码验证
var rand = lis[1].children[1]; //  手机号input
var rand_mes = lis[1].children[2]; //提示信息
rand.addEventListener('blur', function() {
        if (this.value == access_num) {
            rand_mes.style.display = 'inline-block';
            rand_mes.style.color = 'green'
            rand_mes.innerHTML = '<i class="success_icon"></i>验证正确';
        } else if (this.value == '') {
            rand_mes.style.display = 'none';
        } else {
            rand_mes.style.display = 'inline-block';
            rand_mes.style.color = 'red'
            rand_mes.innerHTML = '<i class="erro_icon"></i>请输入正确的验证码';
        }
    })
    //密码验证
var pwd = lis[2].children[1]; //  密码
var pwd_mes = lis[2].children[2]; //提示信息