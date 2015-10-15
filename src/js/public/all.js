$(function(){
  //获取url参数的方法
  $.getUrlParam = function (name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]); return null;
  };

  var $setting = $('.setting'),
      $popup = $('.popup'),
      $links = $('.nav a'),
      $parent = $('a.parent'),
      $i = $parent.find('i').eq(0),
      $nav_child = $('.nav-child');
  var index = $.getUrlParam('index'),
      show = (index==0) ? true : false; //点击数据统计是否显示下拉项的标识

  //点击显示、隐藏设置
  $setting.on('click', function(){
    toggleClass($popup,'hide');
  });

  //根据url参数，设置导航的当前项样式
  $links.eq(index).addClass('current').siblings().removeClass('current');

  //鼠标点击数据统计显示、隐藏下拉项
  $parent.on('click', function(){
    if(show){
      toggleClass($nav_child,'hide');
      if($i.hasClass('fa-chevron-right')){
        $i.removeClass('fa-chevron-right').addClass('fa-chevron-down');
      }else{
        $i.addClass('fa-chevron-right').removeClass('fa-chevron-down');
      }
    }
    
  });
  
  //如果点击的是当前项，不跳转
  $links.on('click', function(e){
    var data_index = $(this).attr('data-index');
    if(data_index == index){
      return false;
    }
  });

  //为元素添加和删除某个class(存在class就去掉，否则添加)
  function toggleClass($ele, className){
    if($ele.hasClass(className)){
      $ele.removeClass(className);
    }else{
      $ele.addClass(className);
    }
  };

});