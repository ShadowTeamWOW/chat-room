

'use strict';

const userUL = $('.loginBox');
const loginBut = userUL.find('.inBtn');
let msg = '';
/*拼接模板字符串  ${变量名} */
loginBut.on('click', function () {

    let usreNa = userUL.find('#user_name').val();
    let emails = userUL.find('#email').val();
    let psword = userUL.find('#pass_word').val();
    let sex1 = $("input:radio[name='gender']:checked").attr('id')

    if (!usreNa) {
        msg = '用户名不可以为空';
        return false;
    }
    if (!emails) {
        msg = '邮箱不可以为空';
        return false;
    } else if (!/@{1}/i.test(emails)) {
        msg = '邮箱输入不真确';
        return false;
    }
    if (!psword) {
        msg = '密码不可以为空';
        return false;
    }
    if (!sex1) {
        msg = '性别不可以为空';
        return false;
    }
    var datas = {
        user_name: usreNa,
        user_email: emails,
        user_pword: psword,
        user_sex1: sex1
    };

    $.post('/user/reg', datas, function (data) {

        if (data.code == 200) {
            console.log(data.msg);
        } else if (data.code == 300) {
            console.log(data.msg);
        }
    });





});