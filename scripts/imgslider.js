/**
 * Created by huyansheng on 2016/9/19.
 */
$(function(){
    $("#brand_tab li a").click(function(){
        $(this).parent().addClass("chos").siblings().removeClass("chos");
        var idx = $("#brand_tab li a").index(this);
        showBrandList(idx);
        return false;
    }).eq(0).click();
});
//显示不同的模块
function showBrandList(index){
    var $rollobj = $("#brand_list");
    var rollWidth = $rollobj.find("li").outerWidth();
    rollWidth = rollWidth * 4; //一个版面的宽度
    $rollobj.stop(true,false).animate({ left : -rollWidth*index},1000);
}