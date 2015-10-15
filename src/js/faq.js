/*
 *faq.html js
 *2015/7/30
 */
;$(function() {
    //给表格加斑马线样式
    var addZebra = function() {
        $("tr:even").addClass("even"); //奇数行的样式
        $("tr:odd").addClass("odd"); //偶数行的样式
        $("tr").eq(0).css({
            "background": "#fff"
        });
    }
    addZebra();
    //删除操作
    $(document).on("click", ".raya-op-del", function() {
        $(this).parent().parent().remove();
        $("tr").removeClass("odd");
        $("tr").removeClass("even");
        addZebra();
    });
});
