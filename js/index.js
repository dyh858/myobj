$(function(){
    $('form').css('top',$(window).height()/2-$('form').height()/2)
        .css('left',$(window).width()/2-$('form').width()/2);
    //如果少于971px,lablel和按钮左内边距为0，按钮以块填充，上边距为20px 
    if($(window).width()<971){
        $('#main .btn').attr('class','btn btn-primary btn-block').css('margin-top',20);
        $('#main .col-md-2').css('padding',0);
    }else{
        //否则，lablel和按钮左内边距为20，按钮不以块填充，上边距为0px 
        $('#main .btn').attr('class','btn btn-primary').css('margin-top',0);
        $('#main .col-md-2').css('padding-left',20);
    }
    
    $(window).resize(function(){
        $('form').css('top',$(window).height()/2-$('form').height()/2)
            .css('left',$(window).width()/2-$('form').width()/2);
        //再次判断窗口的大小，按上作相同处理
        if($(window).width()<971){
            $('#main .btn').attr('class','btn btn-primary btn-block').css('margin-top',25);
            $('#main .col-md-2').css('padding',0);
        }else{
            $('#main .btn').attr('class','btn btn-primary').css('margin-top',0);
            $('#main .col-md-2').css('padding-left',20);
        }
    });
});