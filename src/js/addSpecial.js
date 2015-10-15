$(function(){
  //输入框获取焦点和失去焦点
  $('input, textarea').on('focus',function(){
    $(this).css('border-color','#FB4B5F');
  });
  $('input, textarea').on('blur',function(){
    $(this).css('border-color','#ccc');
  });

  $('.vee-filter-nav a').on('click', function(){
    $(this).addClass('vee-active').siblings().removeClass('vee-active');
  });

  var $number = $('.vee-number'),
      number = parseInt($number.html());  //已选中品牌运营商的数量
  //多选框选中
  $(document).on('click','.vee-checkbox input',function(){
    var $span = $(this).prev(),
        text = $(this).parent().next().html(),
        $li = $('<li>'+
                   '<a href="javascript:;" class="vee-delete">&times;</a>'+
                   '<p class="ellipsis" title="'+text+'">'+text+'</p>'+
                '</li>');   //将要添加到已选品牌的列表项
    if($span.hasClass('checked')){  //如果已经选中该品牌，
      $span.removeClass('checked');
      $('.vee-filter-choosed li').each(function(){
        if($(this).html() == $li.html()){   //从已选中品牌中删除
          $(this).remove();   
          return false;
        }
      });
      number--;
      $number.html(number);
    }else{
      $span.addClass('checked');
      $('.vee-filter-choosed').prepend($li);  //还未选择，则插入到已选中品牌之前
      number++;
      $number.html(number);
    }
  });

  //删除已选择的品牌运营商，同时将对应项的单选框设置为未选中状态
  $('.vee-filter-choosed .vee-delete').live('click', function(){
    var text = $(this).next().html(),
        $labels = $('.vee-filter-result li label');
    $(this).parent().remove();      //从已选中品牌中删除
    $labels.each(function(){
      if($(this).text() == text){   //通过品牌运营商的名称去查找
        var $prev = $(this).prev();
        $prev.find('input').attr('checked',false);  //将单选框设置为未选中状态
        $prev.find('span').removeClass('checked');
        return false;
      }
    });
    number--;
    $number.html(number);
  });

  //单选框选中
  $(document).on('click','.vee-radio input',function(){
    var $span = $(this).prev(),
        name = $(this).attr('name'),
        $radio_groups = $('.vee-radio input[name='+name+']');  //通过name属性找到属于同一组的单选框
    $radio_groups.each(function(){
      var $span = $(this).prev();
      $span.removeClass('checked');   //同一组全部设为未选中状态
    });
    $span.addClass('checked');  //将当前点击项设为选中状态
  });

  //初始化日历控件
  for(var i=0; i<6; i++){
    $('#vee-date'+i).calendar();
  }
  
});