'use strict'
/**
 *
 *
 */
$(function(){

    let $container = $('.loginBox');

        $container.on('click','.inBtn a',function(){
            if($container.find('#user_name').val() == ''){
                alert('请输入用户名');

            }else if($container.find('#pass_word').val() == ''){
                alert('请输入密码');

            }else{
                let userName = $container.find('#user_name').val();
                let passWord = $container.find('#pass_word').val();

                $.post('/APIC/login',{userName,passWord},function(res){

                        console.log(res);

                    }


                )
            }
        })

});