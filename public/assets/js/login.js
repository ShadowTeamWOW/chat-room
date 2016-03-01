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
                $.post('/APIC/login',{},function(res){

                        console.log(res);

                    }


                )
            }
        })

});