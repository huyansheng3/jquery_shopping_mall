/**
 * Created by huyansheng on 2016/9/18.
 */
/*首屏广告滚动效果*/

$(function (){
    var $imgRolls = $('#imageRoll div a');
    $imgRolls.css('opacity','0.7');
    var len = $imgRolls.length;
    var index = 0;
    var adTimer = null;

    $imgRolls.mouseover(function(){
        index = $imgRolls.index(this);
        showImage(index);
    });

    $('#imageRoll').hover(function(){
        if (adTimer){
            clearInterval(adTimer);
        }
    },function(){
        adTimer = setInterval(function (){
            showImage(index);
            index++;
            if (index == len){ index = 0;}

        },5000);
    }).trigger('mouseleave');
})

function showImage(index){
    var $images = $('#imageRoll image');
    var len = $images.length;
    var i;
    for (i=0;i<len;i++){
        $images[i].css('display','none');
    }
    $images[index].css('display','block');
}
